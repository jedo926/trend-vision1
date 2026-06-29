from __future__ import annotations

try:
    from prometheus_client import (
        CONTENT_TYPE_LATEST,
        Counter,
        Histogram,
        generate_latest,
    )

    REQUEST_TOTAL = Counter(
        "llm_requests_total", "Total LLM requests", ["endpoint", "blocked"]
    )
    BLOCKED_TOTAL = Counter("llm_blocked_total", "Blocked requests by reason", ["reason"])
    PII_DETECTED = Counter("llm_pii_detected_total", "PII detections", ["location"])
    SECRETS_DETECTED = Counter("llm_secrets_detected_total", "Secret detections in input")
    LATENCY = Histogram(
        "llm_request_duration_seconds", "LLM request duration", ["endpoint"]
    )
    TOKEN_USAGE = Counter("llm_token_usage_total", "Token usage", ["type"])
    PROMPT_LEAK = Counter("llm_prompt_leak_total", "Prompt leakage detections in output")

    _PROMETHEUS = True
except ImportError:
    _PROMETHEUS = False


def record_request(
    endpoint: str,
    blocked: bool,
    block_reason: str | None,
    latency_s: float,
    prompt_tokens: int,
    completion_tokens: int,
    pii_input: bool,
    pii_output: bool,
    secrets: bool,
    prompt_leak: bool = False,
) -> None:
    if not _PROMETHEUS:
        return
    REQUEST_TOTAL.labels(endpoint=endpoint, blocked=str(blocked)).inc()
    if blocked and block_reason:
        BLOCKED_TOTAL.labels(reason=block_reason.split(":")[0]).inc()
    LATENCY.labels(endpoint=endpoint).observe(latency_s)
    if prompt_tokens:
        TOKEN_USAGE.labels(type="prompt").inc(prompt_tokens)
    if completion_tokens:
        TOKEN_USAGE.labels(type="completion").inc(completion_tokens)
    if pii_input:
        PII_DETECTED.labels(location="input").inc()
    if pii_output:
        PII_DETECTED.labels(location="output").inc()
    if secrets:
        SECRETS_DETECTED.inc()
    if prompt_leak:
        PROMPT_LEAK.inc()


def get_metrics() -> tuple[bytes | None, str | None]:
    if not _PROMETHEUS:
        return None, None
    return generate_latest(), CONTENT_TYPE_LATEST
