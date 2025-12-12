import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900 w-full min-h-screen">
      <Header />
      
      <main>
        <div>
            <Hero />
        </div>
        <div>
            <BentoGrid />
        </div>
        <div>
            <ExperienceSection />
        </div>
        <div>
            <SkillsSection />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;