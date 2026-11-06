import { useNavigate } from 'react-router-dom';
import type { Task } from '../types/Task';
import './Home.css';

type HomeProps = {
  tasks: Task[];
  username: string;
};

function Ring({ percent, variant, label }: { percent: number; variant: 'completed' | 'active'; label: string }) {
  const r = 34;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="ring">
      <div className="ring__wrap">
        <svg className="ring__svg" width="84" height="84" viewBox="0 0 84 84">
          <circle className="ring__track" cx="42" cy="42" r={r} />
          <circle
            className={`ring__progress ring__progress--${variant}`}
            cx="42"
            cy="42"
            r={r}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="ring__label-num">{percent}%</span>
      </div>
      <span className="ring__caption">
        <span className={`ring__caption-dot ring__caption-dot--${variant}`} />
        {label}
      </span>
    </div>
  );
}

export default function Home({ tasks, username }: HomeProps) {
  const navigate = useNavigate();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const activeTasks = totalTasks - completedTasks;

  const completedPct = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  const activePct = totalTasks === 0 ? 0 : Math.round((activeTasks / totalTasks) * 100);

  const upNext = tasks.filter((t) => !t.completed).slice(0, 5);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const firstName = username.split(' ')[0];

  return (
    <main className="home">
      <div className="home__header">
        <div>
          <p className="home__date">{today}</p>
          <h1 className="home__title">Welcome back, {username}</h1>
          <p className="home__subtitle">
            Organize your tasks. Stay on track. Here is a snapshot of where things stand today.
          </p>
        </div>
        <button className="home__cta" onClick={() => navigate('/tasks')}>
          Go to Tasks
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>

      <section className="home__stats-grid" aria-label="Task statistics">
        <div className="stat-card">
          <span className="stat-card__label">Total tasks</span>
          <span className="stat-card__number">{totalTasks}</span>
        </div>
        <div className="stat-card stat-card--active">
          <span className="stat-card__label">Active</span>
          <span className="stat-card__number">{activeTasks}</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Completed</span>
          <span className="stat-card__number">{completedTasks}</span>
        </div>
      </section>

      <section className="home__panels">
        <div className="panel">
          <h2 className="panel__heading">Up next</h2>
          {upNext.length === 0 ? (
            <p className="upnext__empty">Nothing pending — add a task to get started.</p>
          ) : (
            <ul className="upnext__list">
              {upNext.map((task) => (
                <li key={task.id} className="upnext__item">
                  <span className="upnext__dot" aria-hidden="true" />
                  {task.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="panel">
          <h2 className="panel__heading">Task status</h2>
          <div className="status__rings">
            <Ring percent={completedPct} variant="completed" label="Completed" />
            <Ring percent={activePct} variant="active" label="Active" />
          </div>
        </div>
      </section>
    </main>
  );
}
