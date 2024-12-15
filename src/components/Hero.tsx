import React from 'react';
import { Stats } from './Stats';
import { AboutSection } from './AboutSection';

export function Hero() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <AboutSection />
      </div>
    </main>
  );
}