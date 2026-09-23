-- TaskMate database schema
-- Run this once against your PostgreSQL database to create the tables.

CREATE TABLE IF NOT EXISTS tasks (
  id        SERIAL PRIMARY KEY,
  title     TEXT    NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);
