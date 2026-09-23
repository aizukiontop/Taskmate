TaskMate

A simple task management app that helps students and busy individuals organize their daily tasks.

Live site: https://aizukiontop.github.io/taskmate/ API: https://your-api.onrender.com/healthz Demo video: (link coming soon)

This deployment is running in demo mode. The interface is real; the backend is simulated in your browser so the site works without a server. Delete this notice once your API is live.

What it does
Add a task with a title
Mark tasks as complete or incomplete
Edit a task title inline
Delete a task
Filter tasks by All, Active, or Completed
Tasks are saved to a PostgreSQL database (or localStorage in demo mode)
Built with

React, TypeScript, and Vite on the front end. Express and PostgreSQL on the back end.

Running it yourself

Demo mode — no database needed:

cd client
npm install
npm run dev        # http://localhost:5173

Full stack:

# Terminal 1 — server
cd server
npm install
cp .env.example .env        # fill in DATABASE_URL
npm run db:reset            # creates the table and adds sample tasks
npm run dev                 # http://localhost:3000

# Terminal 2 — client
cd client
npm install
cp .env.example .env        # set VITE_API_BASE_URL=http://localhost:3000
npm run dev                 # http://localhost:5173
Deploying

Client — GitHub Pages:

Go to Settings > Pages > Build and deployment > Source: GitHub Actions
Push to main — the site will build and deploy automatically

The repository must be public for Pages to work on a free account.

Server — Render / Railway / Fly.io:

Point your host at the server/ folder, set the environment variables in its dashboard, and run server/db/schema.sql once against your hosted database.

Future plans
Add due dates so users can see what is most urgent
Add drag-and-drop task reordering
Add user accounts so tasks sync across devices
Project structure
Taskmate/
├── client/                React + TypeScript + Vite frontend
│   └── src/
│       ├── api/           API layer (calls backend or falls back to localStorage)
│       ├── components/
│       │   ├── atoms/     Button, Input, Checkbox
│       │   ├── molecules/ TaskCard, TaskForm
│       │   └── organisms/ Navbar, TaskList, Footer
│       └── pages/         Home, Tasks, About
├── server/                Express + PostgreSQL backend
│   └── db/                schema.sql, seed.sql, reset script
└── docs/                  Planning documents
Architecture

The client is a React single-page application served as static files from GitHub Pages. It calls the Express API over HTTPS. The API reads and writes to a PostgreSQL database. In demo mode, the client answers its own requests from localStorage with no server involved.

What I would do next
Add due dates to tasks so users can see what is most urgent
Add drag-and-drop reordering so tasks can be prioritized easily
Add user accounts so tasks sync across devices instead of staying in one browser
Author

Dingal, Marion Anthony S. — CS-404, Section 6APSI

This project was built with AI assistance from Claude (Anthropic). Roughly 75% of the work was done by the AI. See AI-USAGE.md for the full account.

What I did: Wrote the full project specification and requirements, drew the hand-drawn UI sketch as the visual reference, built and edited parts of the React and TypeScript frontend, designed and added the logo, fixed TypeScript build errors, wrote parts of the CSS styling, and reviewed and tested every feature.

What the AI did: Generated the initial frontend scaffolding based on my specification and sketch, and built the entire Express backend, PostgreSQL schema, and project configuration files.

Licence

MIT — see LICENSE.
