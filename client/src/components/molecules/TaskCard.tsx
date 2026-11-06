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
              iconOnly
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              }
            />
            <Button
              text="Delete"
              onClick={() => onDelete(id)}
              variant="danger"
              ariaLabel={`Delete task: ${title}`}
              iconOnly
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6" /><path d="M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
              }
            />
          </>
        )}
      </div>
    </li>
  );
}
