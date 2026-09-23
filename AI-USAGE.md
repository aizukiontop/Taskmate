# AI Usage

![Built with AI assistance](https://img.shields.io/badge/built%20with-AI%20assistance-0b5fff)

This file is the honest record of how AI was used in this project.

---

## 1. How I used AI

**2026-01-01 — Generated initial React frontend**

- Tool: Claude (Anthropic)
- What I asked for: A complete React + TypeScript + Vite TaskMate app with Home, Tasks, and About pages, localStorage persistence, add/edit/complete/delete/filter features, and a CSS design using provided color tokens.
- What it gave back: Full component tree (atoms, molecules, organisms), all pages, all CSS, App.tsx with state management.
- What I kept, what I changed, and why: Kept the full frontend. Added my own logo and placed it in the navbar myself.
- Commit: (add your commit link here)

**2026-01-02 — Fixed TypeScript build errors**

- Tool: Self (me)
- What I asked for: —
- What it gave back: —
- What I did: Fixed `import { Task }` → `import type { Task }` errors and resolved unused variable warnings. I ran the build, read the errors, and fixed them myself.
- Commit: (add your commit link here)

**2026-01-03 — Added logo**

- Tool: Self (me)
- What I did: Designed the TaskMate logo myself and added it to the navbar component.
- Commit: (add your commit link here)

**2026-01-04 — Added Express backend and restructured project**

- Tool: Claude (Anthropic)
- What I asked for: Add an Express + PostgreSQL backend with GET/POST/PUT/DELETE /api/tasks routes, health check endpoints, parameterized queries, environment variables, and restructure the project into client/ and server/ folders.
- What it gave back: server/index.js, server/db/pool.js, schema.sql, seed.sql, db:reset script, updated App.tsx and Tasks.tsx to use the API, .env.example files, .gitignore, compose.yml, README.md, START-HERE.md.
- What I kept, what I changed, and why: Kept all generated backend code. The frontend UI was not changed.
- Commit: (add your commit link here)

**2026-01-05 — Wrote README**

- Tool: Claude (Anthropic) with my input
- What I asked for: A README filled in for my specific project (username aizukiontop, repo taskmate).
- What it gave back: A draft README with my information.
- What I kept, what I changed, and why: Edited sections that did not apply to my project (removed backend-only deployment instructions that referred to a different template).
- Commit: (add your commit link here)

**2026-01-06 — Wrote CSS styling**

- Tool: Self (me) + Claude (Anthropic)
- What I did: Wrote some of the CSS myself. The AI generated the majority of the CSS based on the design specification I provided.
- Commit: (add your commit link here)

---

## 2. Where the AI got it wrong

**Case 1 — Wrong TypeScript import syntax**

- What it gave me: `import { Task } from '../types/Task'`
- What was wrong: The TypeScript config (`verbatimModuleSyntax`) requires type-only imports to use `import type`.
- What I did instead: Changed all Task imports to `import type { Task }` myself and rebuilt.
- Commit: (add your commit link here)

**Case 2 — Unused variables left in Tasks.tsx**

- What it gave me: `SAMPLE_TASKS` and `useEffect` were imported/declared in Tasks.tsx but never used after moving state to App.tsx.
- What was wrong: TypeScript flagged them as errors during build.
- What I did instead: Removed the unused declarations myself.
- Commit: (add your commit link here)

**Case 3 — localStorage and API not properly separated**

- What it gave me initially: localStorage logic mixed into App.tsx with no clean separation from the API.
- What was wrong: Adding a real backend required rewriting App.tsx anyway; the original structure made it harder to swap in the API layer.
- What I did instead: The AI restructured this into a dedicated `src/api/tasks.ts` module with a clear localStorage fallback, which is cleaner and easier to explain.
- Commit: (add your commit link here)

---

## 3. Who wrote what

### Written by me

- **Logo** — Designed and created the TaskMate logo myself. Added it to `Navbar.tsx`.
- **TypeScript fixes** — Fixed all `import type` errors and removed unused variables in `Tasks.tsx` myself after reading the build output.
- **CSS portions** — Wrote parts of the CSS styling myself, particularly spacing and layout adjustments.
- **Project specification** — Wrote the full requirements document that the AI used to generate the code.
- **UI sketch** — Drew the hand-drawn sketch used as the visual reference.

### The AI-written part I understand best

- **File:** `client/src/pages/Tasks.tsx`
- **What it does:** Holds the filter state and four handler functions (add, toggle, edit, delete). Each handler calls the API layer and then updates the React state with `setTasks`. I understand this because it follows the same pattern the AI explained to me: call the API, then use `map()` or `filter()` to update the array in state.
