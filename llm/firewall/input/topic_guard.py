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
    "firewall", "proxy", "sandbox", "deception", "vulnerability", "compliance", "patch",
    "inventory", "isolation", "quarantine", "hash", "ip address", "domain", "url",
    "oat", "exception", "observed attack", "threat intelligence", "report", "ingest",
    "connector", "gateway", "ztsa", "saas", "container", "kubernetes", "aws", "azure", "gcp",
    "ransomware", "apt", "lateral movement", "privilege escalation", "data exfiltration",
    "kill chain", "ttps", "cve", "cvss", "exploit", "payload", "c2", "c&c",
    "how", "what", "where", "when", "why", "explain", "show", "help",
}

# Only block things that are unambiguously off-topic with no overlap with security/IT vocabulary.
_BLOCKED_PATTERNS = [
    "rock paper scissors", "tic tac toe", "chess", "sudoku",
    "recipe", "how to cook", "cooking", "bake a", "baking",
    "movie review", "song lyrics", "write a poem", "tell me a joke",
    "my homework", "calculus problem", "algebra problem",
    "horoscope", "lottery numbers",
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

    # Pass short queries and everything else through to the LLM — the system
    # prompt handles off-topic refusals more accurately than keyword matching.
    return TopicResult(allowed=True, reason="passthrough", confidence=0.5)
