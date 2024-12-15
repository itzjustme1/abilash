import React from 'react';
import { Rocket } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Rocket className="w-8 h-8 text-blue-400" />
      <span className="text-xl font-bold text-gray-100">! high</span>
    </div>
  );
}