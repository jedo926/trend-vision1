from __future__ import annotations
import yaml
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

_CONFIG_PATH = Path(__file__).parent.parent.parent / "firewall.yml"


@dataclass
class FirewallConfig:
    input: dict[str, Any] = field(default_factory=dict)
    output: dict[str, Any] = field(default_factory=dict)
    models: dict[str, Any] = field(default_factory=dict)
    policy: dict[str, Any] = field(default_factory=dict)
    logging: dict[str, Any] = field(default_factory=dict)
    metrics: dict[str, Any] = field(default_factory=dict)


def load_config(path: Path = _CONFIG_PATH) -> FirewallConfig:
    if path.exists():
        with open(path) as f:
            data = yaml.safe_load(f) or {}
    else:
        data = {}
    return FirewallConfig(**{k: data.get(k, {}) for k in FirewallConfig.__dataclass_fields__})


_config: FirewallConfig | None = None


def get_config() -> FirewallConfig:
    global _config
    if _config is None:
        _config = load_config()
    return _config
