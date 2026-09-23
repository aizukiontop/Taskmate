import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './TaskForm.css';

type TaskFormProps = {
  onAdd: (title: string) => void;
};

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [newTask, setNewTask] = useState('');

  function handleAdd() {
    const trimmed = newTask.trim();
    if (trimmed === '') return; // don't add empty tasks
    onAdd(trimmed);
    setNewTask(''); // clear input after adding
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  return (
    <section className="task-form" aria-labelledby="add-task-heading">
      <h2 id="add-task-heading" className="task-form__heading">Add Task</h2>
      <div className="task-form__row">
        <label htmlFor="new-task-input" className="sr-only">New task title</label>
        <Input
          id="new-task-input"
          placeholder="What do you need to do?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button text="Add" onClick={handleAdd} variant="primary" />
      </div>
    </section>
  );
}
