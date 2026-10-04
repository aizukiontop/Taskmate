import { useState } from 'react';
import type { Task } from '../types/Task';
import { createTask, updateTask, deleteTask } from '../api/tasks';
import TaskForm from '../components/molecules/TaskForm';
import TaskList from '../components/organisms/TaskList';
import './Tasks.css';

type FilterType = 'all' | 'active' | 'completed';

type TasksProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  username: string;
};

export default function Tasks({ tasks, setTasks, username }: TasksProps) {
  const [filter, setFilter] = useState<FilterType>('all');

  async function handleAdd(title: string) {
    const newTask = await createTask(title, username);
    setTasks(prev => [...prev, newTask]);
  }

  async function handleToggle(id: number) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    const updated = await updateTask(id, { completed: !task.completed });
    setTasks(prev => prev.map(t => t.id === id ? updated : t));
  }

  async function handleEdit(id: number, newTitle: string) {
    const updated = await updateTask(id, { title: newTitle });
    setTasks(prev => prev.map(t => t.id === id ? updated : t));
  }

  async function handleDelete(id: number) {
    await deleteTask(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <main className="tasks-page">
      <div className="tasks-page__inner">
        <TaskForm onAdd={handleAdd} />
        <TaskList
          tasks={tasks}
          filter={filter}
          onFilterChange={setFilter}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}