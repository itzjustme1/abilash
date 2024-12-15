import React from 'react';

export function TextBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-200 rounded-full" />
        <div className="absolute top-20 right-20 w-10 h-10 border border-purple-200 rounded-full" />
        <div className="absolute bottom-10 left-1/2 w-15 h-15 border border-pink-200 rounded-full" />
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(#4444 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
}