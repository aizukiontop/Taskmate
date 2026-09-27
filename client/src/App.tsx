import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import type { Task } from './types/Task';
import { fetchTasks } from './api/tasks';

import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .catch((error) => {
        console.error('Failed to load tasks:', error);
      });
  }, []);

  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route
          path="/tasks"
          element={<Tasks tasks={tasks} setTasks={setTasks} />}
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}