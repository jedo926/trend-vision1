from __future__ import annotations
import re
from dataclasses import dataclass

_PATTERNS: dict[str, re.Pattern] = {
    "openai_key":    re.compile(r'sk-[A-Za-z0-9]{32,}'),
    "anthropic_key": re.compile(r'sk-ant-[A-Za-z0-9\-]{20,}'),
    "aws_access":    re.compile(r'AKIA[0-9A-Z]{16}'),
    "aws_secret":    re.compile(r'(?i)aws.{0,20}secret.{0,20}[A-Za-z0-9/+=]{40}'),
    "github_token":  re.compile(r'gh[pousr]_[A-Za-z0-9]{36,}'),
    "private_key":   re.compile(r'-----BEGIN (RSA |EC )?PRIVATE KEY-----'),
    "api_key":       re.compile(r'(?i)(api[_-]?key|apikey)\s*[=:]\s*["\']?[\w\-]{16,}'),
    "bearer_token":  re.compile(r'(?i)bearer\s+[A-Za-z0-9\-._~+/]{20,}={0,2}'),
    "password":      re.compile(r'(?i)password\s*[=:]\s*["\']?\S{8,}'),
}


@dataclass
class SecretResult:
    detected: bool
    secret_types: list[str]
    count: int


def detect_secrets(text: str) -> SecretResult:
    found = [name for name, pat in _PATTERNS.items() if pat.search(text)]
    return SecretResult(detected=bool(found), secret_types=found, count=len(found))
