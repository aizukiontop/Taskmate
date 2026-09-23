// API layer — talks to the Express backend.
// Falls back to localStorage if VITE_API_BASE_URL is not set (demo mode).

import type { Task } from '../types/Task';

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
const STORAGE_KEY = 'taskmate-tasks';

const SAMPLE_TASKS: Task[] = [
  { id: 1, title: 'Workout', completed: false },
  { id: 2, title: 'Study', completed: false },
  { id: 3, title: 'Sleep', completed: false },
];

// ── localStorage helpers (demo / offline fallback) ──────────────────────────

function localLoad(): Task[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved) as Task[];
  } catch { /* ignore */ }
  return SAMPLE_TASKS;
}

function localSave(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// ── API helpers ──────────────────────────────────────────────────────────────

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}

// ── Public API ───────────────────────────────────────────────────────────────

export async function fetchTasks(): Promise<Task[]> {
  if (!BASE_URL) return localLoad();
  return apiFetch<Task[]>('/api/tasks');
}

export async function createTask(title: string): Promise<Task> {
  if (!BASE_URL) {
    const tasks = localLoad();
    const newTask: Task = { id: Date.now(), title, completed: false };
    localSave([...tasks, newTask]);
    return newTask;
  }
  return apiFetch<Task>('/api/tasks', {
    method: 'POST',
    body: JSON.stringify({ title }),
  });
}

export async function updateTask(id: number, changes: Partial<Omit<Task, 'id'>>): Promise<Task> {
  if (!BASE_URL) {
    const tasks = localLoad();
    const updated = tasks.map(t => t.id === id ? { ...t, ...changes } : t);
    localSave(updated);
    return updated.find(t => t.id === id)!;
  }
  return apiFetch<Task>(`/api/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(changes),
  });
}

export async function deleteTask(id: number): Promise<void> {
  if (!BASE_URL) {
    const tasks = localLoad();
    localSave(tasks.filter(t => t.id !== id));
    return;
  }
  await apiFetch<void>(`/api/tasks/${id}`, { method: 'DELETE' });
}
