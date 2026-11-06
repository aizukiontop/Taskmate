import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { Task } from './types/Task';
import { fetchTasks, getSavedUsername, login, logout } from './api/tasks';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import Login from './pages/Login';
import './layout.css';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [username, setUsername] = useState<string | null>(getSavedUsername());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }
    fetchTasks(username)
      .then(setTasks)
      .finally(() => setLoading(false));
  }, [username]);

  async function handleLogin(name: string) {
    const loggedIn = await login(name);
    setUsername(loggedIn);
  }

  function handleLogout() {
    logout();
    setUsername(null);
    setTasks([]);
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'var(--clr-text-muted)',
        fontSize: '15px',
        background: 'var(--clr-bg)',
      }}>
        Loading…
      </div>
    );
  }

  if (!username) {
    return <Login onLogin={handleLogin} />;
  }

  const activeTasks = tasks.filter(t => !t.completed).length;

  return (
    <BrowserRouter basename="/Taskmate">
      <div className="app-layout">
        <Navbar username={username} taskCount={activeTasks} onLogout={handleLogout} />
        <div className="app-main">
          <div className="app-content">
            <Routes>
              <Route index element={<Home tasks={tasks} username={username} />} />
              <Route path="tasks" element={<Tasks tasks={tasks} setTasks={setTasks} username={username} />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
