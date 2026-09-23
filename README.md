# TaskMate

A simple task management app that helps students and busy individuals organize their daily tasks.

**Live site:** https://aizukiontop.github.io/taskmate/
**Demo video:** (link coming soon)

![A screenshot of the main screen](docs/assets/screenshot.png)

## What it does

- Add a task with a title
- Mark tasks as complete or incomplete
- Edit a task title inline
- Delete a task
- Filter tasks by All, Active, or Completed
- Tasks are saved to a PostgreSQL database (or localStorage in demo mode)

## Built with

React, TypeScript, and Vite on the front end. Express and PostgreSQL on the back end. The client can also run in demo mode using localStorage with no server required.

## Running it yourself

See [START-HERE.md](START-HERE.md) for full setup instructions.

**Quick start (demo mode, no database):**

```bash
cd client
npm install
npm run dev       # http://localhost:5173
```

**Full stack:**

```bash
# Terminal 1 — server
cd server && npm install && cp .env.example .env
# Edit .env with your DATABASE_URL
npm run db:reset && npm run dev

# Terminal 2 — client
cd client && npm install && cp .env.example .env
# Set VITE_API_BASE_URL=http://localhost:3000
npm run dev
```

## Project structure

```
Taskmate/
├── client/          React + TypeScript + Vite frontend
│   └── src/
│       ├── api/     API layer (calls backend or falls back to localStorage)
│       ├── components/
│       └── pages/   Home, Tasks, About
├── server/          Express API
│   └── db/          pool, schema.sql, seed.sql, reset script
├── docs/            Planning documents
└── compose.yml      Docker Compose for local development
```

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/tasks | List all tasks |
| POST | /api/tasks | Create a task |
| PUT | /api/tasks/:id | Update title or completed |
| DELETE | /api/tasks/:id | Delete a task |
| GET | /healthz | Process health check |
| GET | /readyz | Database health check |

## Environment variables

| Name | Where | What it is |
|------|-------|------------|
| `DATABASE_URL` | server | PostgreSQL connection string |
| `CORS_ORIGINS` | server | Comma-separated allowed origins |
| `NODE_ENV` | server | `production` on your host |
| `VITE_API_BASE_URL` | client (build time) | API public URL. Leave empty for demo mode |

Never commit `.env` files. See `.env.example` for placeholders.

## Deploying

**Client — GitHub Pages:** Enable GitHub Actions under Settings > Pages. Push to main. When your API is live, set `VITE_API_BASE_URL` under Settings > Variables and re-run the workflow.

**Server — Render / Railway / Fly.io:** Point your host at the `server/` folder, set environment variables in the dashboard, and run `server/db/schema.sql` once against your database.

## Future plans

- Add due dates so users can see what is urgent
- Add drag-and-drop task reordering
- Add user accounts so tasks sync across devices

## Architecture

The client is a React single-page application served as static files from GitHub Pages. It calls the Express API over HTTPS. The API reads and writes to a PostgreSQL database. In demo mode, the client answers its own requests from localStorage with no server involved.

## What I would do next

- Add due dates to tasks so users can see what is urgent
- Add the ability to reorder tasks by dragging
- Add user accounts so tasks sync across devices

## Author

Dingal, Marion Anthony S. — CS-404, Section 6APSI

## AI use

![Built with AI assistance](https://img.shields.io/badge/built%20with-AI%20assistance-0b5fff)

This project was built with significant AI assistance from Claude (Anthropic). Roughly 75% of the work was done by the AI. See [AI-USAGE.md](AI-USAGE.md) for the full account.

**What I did:** Wrote the project specification, drew the UI sketch, designed and added the logo, fixed TypeScript build errors, wrote parts of the CSS, and reviewed and tested every feature.

**What the AI did:** Generated the React/TypeScript frontend, the Express backend, the database schema, and the project configuration files.

## Licence

MIT — see [LICENSE](LICENSE).
