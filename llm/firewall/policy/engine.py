from __future__ import annotations
from dataclasses import dataclass

from llm.firewall.config import get_config


@dataclass
class PolicyDecision:
    allowed: bool
    reason: str


def evaluate(user_id: str, user_email: str, endpoint: str) -> PolicyDecision:
    cfg = get_config()
    policy = cfg.policy

    blocked_emails = [e.lower() for e in policy.get("blocked_emails", [])]
    if user_email.lower() in blocked_emails:
        return PolicyDecision(allowed=False, reason="user_blocked")

    restricted = policy.get("restricted_endpoints", {})
    if endpoint in restricted:
        required_role = restricted[endpoint].get("require_role")
        if required_role == "admin":
            admin_emails = {e.lower() for e in policy.get("admin_emails", [])}
            if user_email.lower() not in admin_emails:
                return PolicyDecision(allowed=False, reason="insufficient_role")

    return PolicyDecision(allowed=True, reason="allowed")
