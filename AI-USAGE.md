# AI Usage

![Built with AI assistance](https://img.shields.io/badge/built%20with-AI%20assistance-0b5fff)

This file is the honest record of how AI was used in this project.

---

## 1. How I used AI

**Generated initial React frontend**

- Tool: Claude (Anthropic)
- What I asked for: A complete React + TypeScript + Vite TaskMate app with Home, Tasks, and About pages, localStorage persistence, add/edit/complete/delete/filter features, and a CSS design using provided color tokens.
- What it gave back: Full component tree (atoms, molecules, organisms), all pages, all CSS, App.tsx with state management.
- What I kept, what I changed, and why: Kept the full frontend. Added my own logo and placed it in the navbar myself.
- Commit: https://github.com/aizukiontop/Taskmate/commit/3c82be9

**Fixed TypeScript build errors**

- Tool: Self (me)
- What I asked for: —
- What it gave back: —
- What I did: Fixed `import { Task }` → `import type { Task }` errors and resolved unused variable warnings. I ran the build, read the errors, and fixed them myself.
- Commit: https://github.com/aizukiontop/Taskmate/commit/7156a03

**Added logo**

- Tool: Self (me)
- What I did: Designed the TaskMate logo myself and added it to the navbar component.
- Commit: https://github.com/aizukiontop/Taskmate/commit/c1b6717

**Added Express backend**

- Tool: Claude (Anthropic) assisted, I configured and deployed
- What I asked for: Help writing an Express + PostgreSQL backend with GET/POST/PUT/DELETE /api/tasks routes, health check endpoints, and parameterized queries.
- What it gave back: server/index.js, server/db/pool.js, schema.sql, seed.sql, and db:reset script.
- What I kept, what I changed, and why: The AI helped write the server code. I personally set up the Neon database, ran the schema, configured the environment variables, deployed the server to Railway, debugged all deployment errors including the Dockerfile issue and Railway root directory, and got the full stack running.
- Commit: https://github.com/aizukiontop/Taskmate/commit/e5bbc1e

**Wrote and edited README**

- Tool: Self (me) with Claude (Anthropic) as a starting point
- What I asked for: I provided all the specific details — my username, repo name, project description, tech stack, future plans, and exactly what I did vs what the AI did. The AI generated a draft based on my input.
- What it gave back: A draft README with my information filled in.
- What I kept, what I changed, and why: I edited it multiple times. I removed sections that did not apply to my project, fixed broken characters that appeared as garbled symbols, corrected the folder structure, rewrote the AI use section multiple times to accurately reflect my actual contributions, and fixed layout issues where formatting was broken.
- Commit: https://github.com/aizukiontop/Taskmate/commit/37a200c

**Added username login and sign out feature**

- Tool: Claude (Anthropic) assisted, I debugged and fixed
- What I asked for: A simple username-only login screen so each user gets their own tasks stored in the database.
- What it gave back: Login.tsx, Login.css, updated api/tasks.ts, App.tsx, Navbar.tsx, and Tasks.tsx.
- What I kept, what I changed, and why: The AI provided the initial code but it had multiple errors — broken TypeScript types, a missing export, and a CSS bug where the logo rendered at full size. I debugged all of these myself, wrote the fixes, and got the feature working on the live site.
- Commit: https://github.com/aizukiontop/Taskmate/commit/4f21fe1

---

## 2. Where the AI got it wrong

**Case 1 — Wrong TypeScript import syntax**

- What it gave me: `import { Task } from '../types/Task'`
- What was wrong: The TypeScript config (`verbatimModuleSyntax`) requires type-only imports to use `import type`.
- What I did instead: Changed all Task imports to `import type { Task }` myself and rebuilt.
- Commit: https://github.com/aizukiontop/Taskmate/commit/7156a03

**Case 2 — Dockerfile pointed to wrong file**

- What it gave me: `CMD ["node", "server.js"]` in the Dockerfile.
- What was wrong: The actual server entry point is `index.js`, not `server.js`. This caused Railway to crash on every deploy with a SyntaxError.
- What I did instead: Identified the problem myself by reading the Railway logs, changed the Dockerfile CMD to `node index.js`, and pushed the fix.
- Commit: https://github.com/aizukiontop/Taskmate/commit/63b4abe

**Case 3 — Login feature had missing exports and broken CSS**

- What it gave me: Login and sign out code with a missing `getSavedUsername` export in `api/tasks.ts` and no size limit on the navbar logo, causing it to render at full screen size.
- What was wrong: The app crashed on load due to the missing export, and the logo broke the entire layout.
- What I did instead: Debugged the TypeScript errors myself, identified the missing export, rewrote parts of `api/tasks.ts` to add it, and fixed the navbar CSS by adding `width: 32px` and `height: 32px` to the logo style myself.
- Commit: https://github.com/aizukiontop/Taskmate/commit/d97e5e9

---

## 3. Who wrote what

### Written by me

- **Logo** — Designed and created the TaskMate logo myself. Added it to `Navbar.tsx`.
- **TypeScript fixes** — Fixed all `import type` errors and removed unused variables in `Tasks.tsx` myself after reading the build output.
- **CSS fixes** — Wrote parts of the CSS styling myself. Fixed the navbar logo size bug independently after the AI's login feature broke the layout.
- **Project specification** — Wrote the full requirements document that the AI used to generate the code.
- **UI sketch** — Drew the hand-drawn sketch used as the visual reference.
- **README** — Provided all the details and content for the README myself. Edited the AI draft multiple times to fix broken characters, remove irrelevant sections, correct the folder structure, and rewrite the AI use section accurately.
- **Full deployment** — Set up and deployed the entire stack myself: created the Neon database, ran the SQL schema, configured Railway environment variables, debugged all deployment errors, enabled GitHub Pages, and fixed all routing issues on the live site.
- **Login debugging** — Debugged and fixed the login/sign out feature after the AI's generated code had missing exports and layout bugs.

### The AI-written part I understand best

- **File:** `client/src/pages/Tasks.tsx`
- **What it does:** Holds the filter state and four handler functions (add, toggle, edit, delete). Each handler calls the API layer and then updates the React state with `setTasks`. I understand this because it follows the same pattern the AI explained to me: call the API, then use `map()` or `filter()` to update the array in state.
