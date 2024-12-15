import React from 'react';

export function Footer() {
  return (
    <footer className="mt-auto py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center text-gray-400">
          <p>
            Made with ❤️ by{' '}
            <a 
              href="https://itzjust.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              itzjust.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}