from __future__ import annotations
from dataclasses import dataclass

_ALLOWED_KEYWORDS = {
    "vision one", "trend micro", "xdr", "edr", "siem", "soar", "endpoint", "alert",
    "workbench", "playbook", "policy", "risk", "score", "telemetry", "threat", "malware",
    "ransomware", "phishing", "email", "cloud", "network", "identity", "soc", "incident",
    "response", "detection", "investigation", "remediation", "sensor", "agent", "connector",
    "integration", "dashboard", "module", "lesson", "course", "training", "platform",
    "security", "cyber", "attack", "log", "event", "rule", "filter", "search", "query",
    "ticket", "case", "forensic", "behaviour", "behavior", "artifact", "indicator", "ioc",
    "mitre", "att&ck", "zero trust", "privilege", "access", "authentication", "mfa",
    "firewall", "proxy", "sandbox", "deception",
}

_BLOCKED_PATTERNS = [
    "python", "javascript", "java", "c++", "c#", "golang", "rust", "ruby", "php",
    "program", "game", "chess", "sudoku", "rock paper", "tic tac",
    "script", "function", "class", "def ", "import ",
    "recipe", "cook", "movie", "song", "joke", "poem", "story", "essay",
    "math", "calculus", "algebra", "homework",
    "write me", "build me", "create me", "make me", "generate me",
]


@dataclass
class TopicResult:
    allowed: bool
    reason: str
    confidence: float


def check_topic(text: str) -> TopicResult:
    q = text.lower()

    for p in _BLOCKED_PATTERNS:
        if p in q:
            return TopicResult(allowed=False, reason=f"blocked_pattern:{p.strip()}", confidence=0.95)

    if any(k in q for k in _ALLOWED_KEYWORDS):
        return TopicResult(allowed=True, reason="allowed_keyword", confidence=0.9)

    if len(q.split()) < 6:
        return TopicResult(allowed=True, reason="short_query", confidence=0.6)

    return TopicResult(allowed=False, reason="no_allowed_keywords", confidence=0.7)
