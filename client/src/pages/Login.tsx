import { useState } from 'react';
import './Login.css';

type LoginProps = {
  onLogin: (username: string) => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  function handleSubmit() {
    const trimmed = username.trim();
    if (trimmed === '') {
      setError('Please enter your name.');
      return;
    }
    onLogin(trimmed);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit();
  }

  return (
    <main className="login">
      <div className="login__card">
        <div className="login__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="login__title">TaskMate</h1>
        <p className="login__subtitle">Organize your tasks. Stay on track.</p>

        <div className="login__form">
          <label htmlFor="username-input" className="login__label">
            Enter your name to get started
          </label>
          <input
            id="username-input"
            className="login__input"
            type="text"
            placeholder="e.g. Marion"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          {error && <p className="login__error">{error}</p>}
          <button className="login__btn" onClick={handleSubmit}>
            Start
          </button>
        </div>
      </div>
    </main>
  );
}
