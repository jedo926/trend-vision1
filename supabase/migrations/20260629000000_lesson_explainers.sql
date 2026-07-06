CREATE TABLE IF NOT EXISTS lesson_explainers (
  lesson_id TEXT PRIMARY KEY,
  audio_url TEXT NOT NULL,
  duration_seconds FLOAT,
  step_timestamps JSONB,
  script TEXT,
  generated_at TIMESTAMPTZ DEFAULT NOW()
);
