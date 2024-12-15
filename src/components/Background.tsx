import React from 'react';

export function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated stars/dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute top-[60%] -right-[20%] w-[60%] h-[60%] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-pink-500/5 blur-3xl" />
      </div>
    </div>
  );
}