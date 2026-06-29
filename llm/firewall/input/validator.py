from __future__ import annotations
from dataclasses import dataclass

from llm.firewall.config import get_config
from llm.firewall.input.pii_detector import get_pii_detector, PIIResult
from llm.firewall.input.secret_detector import detect_secrets, SecretResult
from llm.firewall.input.topic_guard import check_topic, TopicResult


@dataclass
class InputAssessment:
    blocked: bool
    block_reason: str | None
    risk_score: float
    pii: PIIResult | None = None
    secrets: SecretResult | None = None
    topic: TopicResult | None = None


def validate_input(text: str) -> InputAssessment:
    cfg = get_config()

    max_len = cfg.input.get("max_prompt_length", 2000)
    if len(text) > max_len:
        return InputAssessment(blocked=True, block_reason="prompt_too_long", risk_score=1.0)

    topic_result: TopicResult | None = None
    if cfg.input.get("topic_guard", True):
        topic_result = check_topic(text)
        if not topic_result.allowed:
            return InputAssessment(
                blocked=True,
                block_reason=f"off_topic:{topic_result.reason}",
                risk_score=topic_result.confidence,
                topic=topic_result,
            )

    secret_result: SecretResult | None = None
    if cfg.input.get("detect_secrets", True):
        secret_result = detect_secrets(text)
        if secret_result.detected:
            return InputAssessment(
                blocked=True,
                block_reason=f"secrets_detected:{','.join(secret_result.secret_types)}",
                risk_score=0.99,
                secrets=secret_result,
                topic=topic_result,
            )

    pii_result: PIIResult | None = None
    if cfg.input.get("detect_pii", True):
        pii_result = get_pii_detector().detect(text)

    risk = pii_result.risk_score if pii_result else 0.0

    return InputAssessment(
        blocked=False,
        block_reason=None,
        risk_score=risk,
        pii=pii_result,
        secrets=secret_result,
        topic=topic_result,
    )
