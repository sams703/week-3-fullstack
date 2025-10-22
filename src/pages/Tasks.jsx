import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 flex-grow rounded"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border rounded">
            <span className={task.done ? 'line-through' : ''}>{task.text}</span>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => toggleTask(task.id)}>
                {task.done ? 'Undo' : 'Done'}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
