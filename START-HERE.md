# Start Here

## Option A — Demo mode (no database needed)

Run the frontend only. Tasks are saved in your browser's localStorage.

```bash
cd client
npm install
npm run dev        # http://localhost:5173
```

## Option B — Full stack (React + Express + PostgreSQL)

### 1. Start PostgreSQL

Use Docker:

```bash
docker run --name taskmate-pg \
  -e POSTGRES_PASSWORD=devpassword \
  -e POSTGRES_DB=taskmate \
  -p 5432:5432 -d postgres:17
```

Or use a hosted database (Neon, Supabase, Railway).

### 2. Set up the server

```bash
cd server
npm install
cp .env.example .env
# Edit .env and set DATABASE_URL to your PostgreSQL connection string
npm run db:reset   # creates the table and adds sample tasks
npm run dev        # http://localhost:3000
```

Check it works:

```bash
curl http://localhost:3000/healthz
curl http://localhost:3000/api/tasks
```

### 3. Set up the client

In a new terminal:

```bash
cd client
npm install
cp .env.example .env
# Set VITE_API_BASE_URL=http://localhost:3000
npm run dev        # http://localhost:5173
```

## Folder structure

```
Taskmate/
├── client/     React + TypeScript + Vite frontend
├── server/     Express + PostgreSQL backend
├── docs/       Planning documents
└── compose.yml Docker Compose for local development
```
