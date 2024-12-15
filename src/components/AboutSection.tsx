import React from 'react';
import { ProfileImage } from './ProfileImage';
import { SocialLinks } from './SocialLinks';
import { Stats } from './Stats';

export function AboutSection() {
  return (
    <section className="py-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/3">
          <ProfileImage />
        </div>
        
        <div className="lg:w-2/3 text-center lg:text-left">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm High – Owner & Founder of 5M Center
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            
            <Stats />
            
            <div className="mt-8">             
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}