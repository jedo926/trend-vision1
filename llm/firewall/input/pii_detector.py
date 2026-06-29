from __future__ import annotations
from dataclasses import dataclass


@dataclass
class PIIResult:
    detected: bool
    entity_types: list[str]
    risk_score: float


class PIIDetector:
    def __init__(self) -> None:
        self._analyzer = None
        self._anonymizer = None
        self._loaded = False

    def _load(self) -> None:
        if self._loaded:
            return
        self._loaded = True
        try:
            from presidio_analyzer import AnalyzerEngine
            from presidio_anonymizer import AnonymizerEngine
            self._analyzer = AnalyzerEngine()
            self._anonymizer = AnonymizerEngine()
        except Exception:
            # presidio or spaCy model not available — degrade gracefully
            pass

    def detect(self, text: str) -> PIIResult:
        self._load()
        if self._analyzer is None:
            return PIIResult(detected=False, entity_types=[], risk_score=0.0)
        try:
            results = self._analyzer.analyze(text=text, language="en")
            entity_types = list({r.entity_type for r in results})
            risk = min(1.0, len(results) * 0.2) if results else 0.0
            return PIIResult(detected=bool(results), entity_types=entity_types, risk_score=risk)
        except Exception:
            return PIIResult(detected=False, entity_types=[], risk_score=0.0)

    def redact(self, text: str) -> str:
        self._load()
        if self._analyzer is None or self._anonymizer is None:
            return text
        try:
            results = self._analyzer.analyze(text=text, language="en")
            if not results:
                return text
            return self._anonymizer.anonymize(text=text, analyzer_results=results).text
        except Exception:
            return text


_detector: PIIDetector | None = None


def get_pii_detector() -> PIIDetector:
    global _detector
    if _detector is None:
        _detector = PIIDetector()
    return _detector
