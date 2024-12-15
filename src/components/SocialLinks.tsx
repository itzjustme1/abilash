import React from 'react';
import { Send } from 'lucide-react';
import { DiscordIcon } from './icons/DiscordIcon';

const socialLinks = [
  {
    name: 'Discord',
    icon: DiscordIcon,
    href: 'discord.gg/5mcenter',
    color: 'hover:text-indigo-600',
  },
  {
    name: 'Telegram',
    icon: Send,
    href: 'https://5mcenter.sellauth.com/',
    color: 'hover:text-blue-500',
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center lg:justify-start space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform transition-all duration-200 hover:scale-110 ${link.color}`}
          aria-label={link.name}
        >
          <link.icon className="w-8 h-8" />
        </a>
      ))}
    </div>
  );
}