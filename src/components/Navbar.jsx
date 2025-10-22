import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">React + Tailwind Assignment</h1>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 bg-white text-blue-600 px-2 py-1 rounded">
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
