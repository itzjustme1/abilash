import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <div className="relative flex flex-col min-h-screen">
        <div className="h-8" /> {/* Spacer for navbar positioning */}
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;