from __future__ import annotations
from dataclasses import dataclass

from llm.firewall.config import get_config
from llm.firewall.input.pii_detector import get_pii_detector

_LEAK_MARKERS = [
    "system prompt",
    "you are a focused learning assistant",
    "hard refusal",
    "scope —",
    "response rules",
    "_allowed_keywords",
    "do not answer. do not make exceptions",
]


@dataclass
class OutputAssessment:
    text: str
    pii_redacted: bool
    prompt_leak_detected: bool


def validate_output(text: str) -> OutputAssessment:
    cfg = get_config()
    pii_redacted = False
    prompt_leak = False

    if cfg.output.get("detect_prompt_leak", True):
        tl = text.lower()
        prompt_leak = any(m in tl for m in _LEAK_MARKERS)

    if cfg.output.get("redact_pii", True):
        redacted = get_pii_detector().redact(text)
        if redacted != text:
            pii_redacted = True
            text = redacted

    return OutputAssessment(text=text, pii_redacted=pii_redacted, prompt_leak_detected=prompt_leak)
