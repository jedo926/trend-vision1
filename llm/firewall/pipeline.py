from __future__ import annotations
import time
import uuid
from dataclasses import dataclass
from typing import Callable

from llm.firewall.config import get_config
from llm.firewall.input.validator import InputAssessment, validate_input
from llm.firewall.logging.audit import AuditEvent, log_event
from llm.firewall.logging.metrics import record_request
from llm.firewall.output.validator import OutputAssessment, validate_output
from llm.firewall.policy.engine import PolicyDecision, evaluate

_OFF_TOPIC_REPLY = (
    "I'm only able to help with Trend Micro Vision One training topics. "
    "Try asking about a lesson, a platform feature, or a security concept covered in the course."
)
_SECRET_REPLY = (
    "Your message appears to contain sensitive credentials or API keys. "
    "Please remove them and rephrase your question."
)
_POLICY_REPLY = (
    "You are not authorised to use this feature."
)


@dataclass
class FirewallResult:
    blocked: bool
    block_reason: str | None
    answer: str | None
    sources: list
    audit: AuditEvent


# LLMCallable: (question) -> (answer, sources, prompt_tokens, completion_tokens)
LLMCallable = Callable[[str], tuple[str, list, int, int]]


class FirewallPipeline:
    def __init__(self) -> None:
        self._cfg = get_config()

    def process(
        self,
        question: str,
        user_id: str,
        user_email: str,
        llm_callable: LLMCallable,
        request_id: str | None = None,
    ) -> FirewallResult:
        request_id = request_id or str(uuid.uuid4())
        t0 = time.time()

        audit = AuditEvent(
            request_id=request_id,
            user_id=user_id,
            endpoint="/query",
            model=self._cfg.models.get("default", "openai/gpt-4o-mini"),
        )

        def _finish_blocked(reason: str, reply: str) -> FirewallResult:
            latency = (time.time() - t0) * 1000
            audit.blocked = True
            audit.block_reason = reason
            audit.latency_ms = latency
            log_event(audit)
            record_request(
                "/query", True, reason,
                latency / 1000, 0, 0,
                audit.pii_detected, False, audit.secrets_detected,
            )
            return FirewallResult(True, reason, reply, [], audit)

        # ── 1. Policy ──────────────────────────────────────────────────────────
        policy: PolicyDecision = evaluate(user_id, user_email, "/query")
        if not policy.allowed:
            audit.guardrails_triggered.append("policy_engine")
            return _finish_blocked(policy.reason, _POLICY_REPLY)

        # ── 2. Input guardrails ────────────────────────────────────────────────
        assessment: InputAssessment = validate_input(question)
        audit.risk_score = assessment.risk_score

        if assessment.pii and assessment.pii.detected:
            audit.pii_detected = True
            audit.guardrails_triggered.append("pii_input")

        if assessment.secrets and assessment.secrets.detected:
            audit.secrets_detected = True
            audit.guardrails_triggered.append("secrets_input")

        if assessment.blocked:
            reply = _SECRET_REPLY if audit.secrets_detected else _OFF_TOPIC_REPLY
            return _finish_blocked(assessment.block_reason or "blocked", reply)

        # ── 3. LLM call ────────────────────────────────────────────────────────
        try:
            answer, sources, prompt_tokens, completion_tokens = llm_callable(question)
        except Exception as e:
            audit.error = str(e)
            audit.latency_ms = (time.time() - t0) * 1000
            log_event(audit)
            raise

        audit.prompt_tokens = prompt_tokens
        audit.completion_tokens = completion_tokens
        audit.tool_calls = 1  # search_vision_one_docs

        # ── 4. Output guardrails ───────────────────────────────────────────────
        out: OutputAssessment = validate_output(answer)

        if out.pii_redacted:
            audit.pii_redacted_output = True
            audit.guardrails_triggered.append("pii_output_redacted")

        if out.prompt_leak_detected:
            audit.prompt_leak_detected = True
            audit.guardrails_triggered.append("prompt_leak_detected")

        audit.latency_ms = (time.time() - t0) * 1000
        log_event(audit)
        record_request(
            "/query", False, None,
            audit.latency_ms / 1000,
            prompt_tokens, completion_tokens,
            audit.pii_detected, audit.pii_redacted_output, audit.secrets_detected,
            out.prompt_leak_detected,
        )

        return FirewallResult(False, None, out.text, sources, audit)


_pipeline: FirewallPipeline | None = None


def get_pipeline() -> FirewallPipeline:
    global _pipeline
    if _pipeline is None:
        _pipeline = FirewallPipeline()
    return _pipeline
