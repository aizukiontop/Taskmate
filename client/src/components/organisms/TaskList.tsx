import { useState } from 'react';
import type { Task } from '../../types/Task';
import TaskCard from '../molecules/TaskCard';
import './TaskList.css';

type FilterType = 'all' | 'active' | 'completed';

type TaskListProps = {
  tasks: Task[];
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
};

export default function TaskList({
  tasks,
  filter,
  onFilterChange,
  onToggle,
  onEdit,
  onDelete,
}: TaskListProps) {
  const [search, setSearch] = useState('');

  // Apply the filter to get only the tasks we want to show
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true; // 'all' shows everything
    })
    .filter((task) => task.title.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <section className="task-list" aria-label="Task list">
      <div className="task-list__header">
        <label htmlFor="task-search" className="sr-only">Search tasks</label>
        <input
          id="task-search"
          className="task-list__search"
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="task-list__filters" role="group" aria-label="Filter tasks">
          <button
            className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
            onClick={() => onFilterChange('all')}
            aria-pressed={filter === 'all'}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'filter-btn--active' : ''}`}
            onClick={() => onFilterChange('active')}
            aria-pressed={filter === 'active'}
          >
            Active
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'filter-btn--active' : ''}`}
            onClick={() => onFilterChange('completed')}
            aria-pressed={filter === 'completed'}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="task-list__container">
        {filteredTasks.length === 0 ? (
          <p className="task-list__empty">
            {filter === 'completed'
              ? 'No completed tasks yet.'
              : filter === 'active'
              ? 'No active tasks. Add one above!'
              : 'No tasks yet. Add one above!'}
          </p>
        ) : (
          <ul className="task-list__items" aria-label="Tasks">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
