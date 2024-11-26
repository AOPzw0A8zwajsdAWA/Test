import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Swish. Made with ❤️</p>
    </footer>
  );
};