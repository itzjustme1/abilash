import React from 'react';

export function ProfileImage() {
  return (
    <div className="relative">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-100">
        <img
          src="https://cdn.discordapp.com/avatars/796943270839451648/c47a2e6f39ba921ef9ca8b0a7cfaf32d.png?size=1024"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
