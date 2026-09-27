import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { Task } from './types/Task';
import { fetchTasks } from './api/tasks';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '64px', color: 'var(--color-text-muted)' }}>
        Loading…
      </div>
    );
  }

  return (
    <BrowserRouter basename="/Taskmate">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}