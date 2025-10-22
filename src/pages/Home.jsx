import React from 'react';
import Card from '../components/Card.jsx';

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Welcome to the Assignment">
        <p>This project demonstrates React components, hooks, and Tailwind styling.</p>
      </Card>
      <Card title="Features">
        <ul className="list-disc pl-5 space-y-1">
          <li>Reusable UI Components</li>
          <li>Task Management with Hooks</li>
          <li>API Integration</li>
          <li>Dark/Light Theme</li>
        </ul>
      </Card>
    </div>
  );
}
