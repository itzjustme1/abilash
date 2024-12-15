import React from 'react';

export function ProfileImage() {
  return (
    <div className="relative">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-100">
        <img
          src="https://images-ext-1.discordapp.net/external/sQG27DntXDgCG9r-cTC--tjKx-Nl23mSfH8l2nms28E/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1199224091727626283/5295162a44afb0a65da57ec6c9dfaecd.png?format=webp&quality=lossless"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}