import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 dark:bg-gray-900 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} React Tailwind Assignment. All rights reserved.</p>
    </footer>
  );
}
