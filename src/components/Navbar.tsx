import React from 'react';
import { Send } from 'lucide-react';
import { Logo } from './Logo';
import { DiscordIcon } from './icons/DiscordIcon';

export function Navbar() {
  return (
    <div className="px-4 py-2">
      <nav className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            <div className="flex items-center space-x-6">
              <a
                href="https://discord.gg/your-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transform transition-all duration-200 hover:scale-110 hover:text-indigo-400"
                aria-label="Join our Discord"
              >
                <DiscordIcon />
              </a>
              <a
                href="https://t.me/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transform transition-all duration-200 hover:scale-110 hover:text-blue-400"
                aria-label="Join our Telegram"
              >
                <Send className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}