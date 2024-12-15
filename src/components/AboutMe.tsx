import React from 'react';
import { ProfileImage } from './ProfileImage';
import { SocialLinks } from './SocialLinks';
import { Stats } from './Stats';

export function AboutMe() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <ProfileImage />
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Sarah Parker – Transforming Ideas into Reality
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              As a passionate tech entrepreneur and SaaS developer, 
              I'm dedicated to helping businesses unlock their full potential through innovative solutions. 
              My mission is to make enterprise-grade tools accessible to companies of all sizes, 
              empowering them to achieve more with less.
            </p>
            
            <div className="mb-8">
              <p className="text-xl font-medium text-gray-900 mb-6">
                Let's connect and build something amazing together!
              </p>
              
              <SocialLinks />
            </div>
            
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
}