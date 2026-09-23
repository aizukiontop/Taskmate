import { useState } from 'react';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import './TaskCard.css';

type TaskCardProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
};

export default function TaskCard({ id, title, completed, onToggle, onEdit, onDelete }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title);

  function handleEditClick() {
    setEditValue(title); // start with the current title
    setIsEditing(true);
  }

  function handleSave() {
    const trimmed = editValue.trim();
    if (trimmed === '') return; // don't save empty title
    onEdit(id, trimmed);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditValue(title); // restore original
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  }

  return (
    <li className={`task-card ${completed ? 'task-card--completed' : ''}`}>
      <div className="task-card__left">
        <Checkbox
          checked={completed}
          onChange={() => onToggle(id)}
          ariaLabel={`Mark "${title}" as ${completed ? 'incomplete' : 'complete'}`}
        />

        {isEditing ? (
          <label htmlFor={`edit-input-${id}`} className="sr-only">Edit task</label>
        ) : null}

        {isEditing ? (
          <Input
            id={`edit-input-${id}`}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Task title"
          />
        ) : (
          <span className="task-card__title">
            {completed && <span className="sr-only">(Completed) </span>}
            {title}
          </span>
        )}
      </div>

      <div className="task-card__actions">
        {isEditing ? (
          <>
            <Button text="Save" onClick={handleSave} variant="primary" ariaLabel="Save task" />
            <Button text="Cancel" onClick={handleCancel} variant="ghost" ariaLabel="Cancel editing" />
          </>
        ) : (
          <>
            <Button
              text="Edit"
              onClick={handleEditClick}
              variant="secondary"
              ariaLabel={`Edit task: ${title}`}
            />
            <Button
              text="Delete"
              onClick={() => onDelete(id)}
              variant="danger"
              ariaLabel={`Delete task: ${title}`}
            />
          </>
        )}
      </div>
    </li>
  );
}
