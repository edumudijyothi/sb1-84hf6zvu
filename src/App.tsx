import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DiseaseDetection from './components/DiseaseDetection';
import Features from './components/Features';
import DiseaseGuide from './components/DiseaseGuide';
import ConsultExpert from './components/ConsultExpert';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <DiseaseDetection />
        <DiseaseGuide />
        <ConsultExpert />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 AquaHealth AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}