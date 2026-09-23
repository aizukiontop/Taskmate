import { useNavigate } from 'react-router-dom';
import type { Task } from '../types/Task';
import Button from '../components/atoms/Button';
import './Home.css';

type HomeProps = {
  tasks: Task[];
};

export default function Home({ tasks }: HomeProps) {
  const navigate = useNavigate();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <main className="home">
      <section className="home__hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="home__title">Hello, TaskMate!</h1>
        <p className="home__tagline">Organize your tasks. Stay on track.</p>
        <p className="home__description">
          TaskMate helps students and busy individuals organize their daily tasks
          and keep track of what they need to accomplish.
        </p>
        <Button text="Go to Tasks" onClick={() => navigate('/tasks')} variant="primary" />
      </section>

      <section className="home__stats" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Task Statistics</h2>
        <div className="home__stats-grid">
          <div className="stat-card">
            <span className="stat-card__number">{totalTasks}</span>
            <span className="stat-card__label">Total Tasks</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__number">{activeTasks}</span>
            <span className="stat-card__label">Active Tasks</span>
          </div>
          <div className="stat-card stat-card--accent">
            <span className="stat-card__number">{completedTasks}</span>
            <span className="stat-card__label">Completed Tasks</span>
          </div>
        </div>
      </section>
    </main>
  );
}
