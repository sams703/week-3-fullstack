import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-4">
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
