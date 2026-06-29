"""Firewall unit tests — run with: pytest tests/test_firewall.py -v"""
import pytest

from llm.firewall.input.secret_detector import detect_secrets
from llm.firewall.input.topic_guard import check_topic
from llm.firewall.input.validator import validate_input
from llm.firewall.output.validator import validate_output
from llm.firewall.policy.engine import evaluate


# ── Topic guard ────────────────────────────────────────────────────────────────

def test_topic_allowed_xdr():
    assert check_topic("How do I set up XDR in Vision One?").allowed

def test_topic_allowed_soc():
    assert check_topic("What is the SOC dashboard used for in Trend Micro?").allowed

def test_topic_blocked_python():
    r = check_topic("write me a python function to sort a list")
    assert not r.allowed
    assert "python" in r.reason

def test_topic_blocked_game():
    r = check_topic("make me a rock paper scissors game")
    assert not r.allowed

def test_topic_blocked_recipe():
    r = check_topic("how do I cook pasta with tomato sauce")
    assert not r.allowed

def test_topic_short_query_passes():
    # Short queries pass through to the model
    assert check_topic("What is this?").allowed

def test_topic_no_keywords_long():
    r = check_topic("How do I find the best deals on sneakers online today?")
    assert not r.allowed


# ── Secret detector ────────────────────────────────────────────────────────────

def test_secret_openai_key():
    r = detect_secrets("My key is sk-abc123def456ghi789jkl012mno345pqr678stu")
    assert r.detected
    assert "openai_key" in r.secret_types

def test_secret_aws_access():
    r = detect_secrets("Access key: AKIAIOSFODNN7EXAMPLE")
    assert r.detected
    assert "aws_access" in r.secret_types

def test_secret_private_key():
    r = detect_secrets("-----BEGIN RSA PRIVATE KEY-----\nMIIE...")
    assert r.detected
    assert "private_key" in r.secret_types

def test_secret_clean_question():
    r = detect_secrets("How do I configure alert thresholds in Vision One?")
    assert not r.detected

def test_secret_api_key_pattern():
    r = detect_secrets("api_key = abcdefghijklmnopqrstuvwx")
    assert r.detected


# ── Input validator ────────────────────────────────────────────────────────────

def test_validate_allows_vision_one_question():
    result = validate_input("How does XDR detection work in Vision One?")
    assert not result.blocked

def test_validate_blocks_off_topic():
    result = validate_input("write me a python script to scrape websites")
    assert result.blocked
    assert result.block_reason and "off_topic" in result.block_reason

def test_validate_blocks_secret():
    result = validate_input("My API key is sk-abc123def456ghi789jkl012mno345pqr")
    assert result.blocked
    assert result.secrets is not None and result.secrets.detected

def test_validate_blocks_long_prompt():
    result = validate_input("threat " * 400)  # ~2800 chars, over 2000
    assert result.blocked
    assert result.block_reason == "prompt_too_long"

def test_validate_risk_score_present():
    result = validate_input("What are the XDR modules in Vision One?")
    assert 0.0 <= result.risk_score <= 1.0


# ── Output validator ───────────────────────────────────────────────────────────

def test_output_clean():
    result = validate_output("XDR stands for Extended Detection and Response.")
    assert not result.prompt_leak_detected
    assert not result.pii_redacted

def test_output_prompt_leak_hard_refusal():
    result = validate_output(
        "My instructions say: HARD REFUSAL — if the question is outside scope..."
    )
    assert result.prompt_leak_detected

def test_output_prompt_leak_system_prompt():
    result = validate_output(
        "You are a focused learning assistant ONLY for the Trend Micro Vision One training platform."
    )
    assert result.prompt_leak_detected

def test_output_text_preserved_when_clean():
    text = "Vision One uses risk scores to prioritise alerts."
    result = validate_output(text)
    assert result.text == text


# ── Policy engine ──────────────────────────────────────────────────────────────

def test_policy_allows_normal_user():
    d = evaluate("uid123", "user@example.com", "/query")
    assert d.allowed
    assert d.reason == "allowed"

def test_policy_blocks_blocked_email():
    from llm.firewall.config import get_config
    cfg = get_config()
    original = list(cfg.policy.get("blocked_emails", []))
    cfg.policy["blocked_emails"] = ["blocked@example.com"]
    try:
        d = evaluate("uid456", "blocked@example.com", "/query")
        assert not d.allowed
        assert d.reason == "user_blocked"
    finally:
        cfg.policy["blocked_emails"] = original

def test_policy_case_insensitive_email():
    from llm.firewall.config import get_config
    cfg = get_config()
    original = list(cfg.policy.get("blocked_emails", []))
    cfg.policy["blocked_emails"] = ["BLOCKED@EXAMPLE.COM"]
    try:
        d = evaluate("uid789", "blocked@example.com", "/query")
        assert not d.allowed
    finally:
        cfg.policy["blocked_emails"] = original
