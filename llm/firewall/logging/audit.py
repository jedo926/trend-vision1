from __future__ import annotations
import json
import logging
import time
import uuid
from dataclasses import asdict, dataclass, field

logger = logging.getLogger("firewall.audit")


@dataclass
class AuditEvent:
    event_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    timestamp: float = field(default_factory=time.time)
    request_id: str = ""
    user_id: str = ""
    endpoint: str = ""
    model: str = ""
    latency_ms: float = 0.0
    prompt_tokens: int = 0
    completion_tokens: int = 0
    blocked: bool = False
    block_reason: str | None = None
    guardrails_triggered: list[str] = field(default_factory=list)
    pii_detected: bool = False
    secrets_detected: bool = False
    pii_redacted_output: bool = False
    prompt_leak_detected: bool = False
    risk_score: float = 0.0
    tool_calls: int = 0
    error: str | None = None


def log_event(event: AuditEvent) -> None:
    logger.info(json.dumps(asdict(event)))
