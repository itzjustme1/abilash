import React from 'react';

const stats = [
  { value: '50+', label: 'Happy Clients' },
  { value: '100+', label: 'Vouches' },
  { value: '24/7', label: 'Support' },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ value, label }) => (
        <div 
          key={label} 
          className="bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/10 transform hover:scale-105 transition-transform duration-200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {value}
            </div>
            <div className="text-gray-400 font-medium">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}