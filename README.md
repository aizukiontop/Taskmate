# Taskmate

> **Replace this whole file.** It is a worked example of the README your project
> will be graded from, not a file to leave as it is. Start with
> [START-HERE.md](START-HERE.md).

One sentence saying what this does and who it is for.

**Live site:** [https://yourusername.github.io/your-repo-name/](https://aizukiontop.github.io/taskmate/)
**API:** https://your-api.onrender.com/healthz
**Demo video:** (link)

> **This deployment is running in demo mode.** The interface is real; the backend
> is simulated in your browser so the site works without a server. See
> [Demo mode](#demo-mode) below. Delete this quote once your API is live.

![A screenshot of the main screen](docs/assets/screenshot.png)

## What it does

- Add a task with a title
- Mark tasks as complete or incomplete
- Edit a task title inline
- Delete a task
- Filter tasks by All, Active, or Completed
- Tasks are saved in your browser and persist after refresh

## Built with

React, TypeScript, and Vite. No backend or database — tasks are stored in localStorage.

## Running it yourself

**The client only, in demo mode.** No database needed.

    cd taskmate
    npm install
    npm run dev                 # http://localhost:5173

## Deploying

The site is a static front end and can be hosted on GitHub Pages.

1. Go to **Settings > Pages > Build and deployment > Source: GitHub Actions**
2. Push to main — the site will build and deploy automatically

The repository must be **public** for Pages to work on a free account.

## Future plans

TaskMate currently runs entirely in the browser using localStorage.
In a future version I plan to add a backend with a real database so that:

- Tasks sync across devices
- Multiple users can have their own accounts
- Data is not lost if the browser storage is cleared

## Project structure

    src/         
      components/    
          atoms/         Button, Input, Checkbox
        molecules/       TaskCard, TaskForm
        organisms/       Navbar, TaskList, Footer
          pages/          Home, Tasks, About
          types/          Task.ts
          App.tsx         Main app, holds task state and localStorage logic
          main.tsx

## Architecture

TaskMate is a single-page React application with no server or database.
All data is stored in the browser's localStorage and never leaves the user's device.
The app is built with Vite and hosted as a static site on GitHub Pages.

## What I would do next

Three honest bullets. This paragraph is worth more than it looks.

## Author

Dingal, Marion Anthony S. CS-404

## AI use

This project was built with significant AI assistance from Claude (Anthropic).
Roughly 75% of the work was done by the AI. See [AI-USAGE.md](AI-USAGE.md) for the full account.

**What I did:**
- Wrote the full project specification and requirements document
- Drew the hand-drawn UI sketch used as the visual reference
- Defined the app name, target users, and feature list
- Made design decisions including layout, routes, and component structure
- Designed and created the TaskMate logo from scratch
- Added the logo to the navbar myself
- Fixed TypeScript errors and build issues
- Wrote some of the CSS styling
- Reviewed the code and tested every feature
- Wrote and edited the README

**What the AI did:**
- Generated the majority of the React and TypeScript code
- Built the full component structure (atoms, molecules, organisms)
- Implemented all task state management (add, edit, complete, delete, filter)
- Set up React Router and page navigation
- Wrote the majority of the CSS styling
- Implemented localStorage persistence

This section is the last 10 points of the finals badge, and it wants three
things:

![Built with AI assistance](https://img.shields.io/badge/built%20with-AI%20assistance-0b5fff)

- the badge above, or one you like better
- a line naming which assistant you used and how much of the work it touched
- a link to [AI-USAGE.md](AI-USAGE.md), where the full account lives

Keep the detail in `AI-USAGE.md` rather than here. This section is the summary a
visitor reads; that file is the record the badge is graded from.

## Licence

MIT, see [LICENSE](LICENSE). Put your own name in it.
