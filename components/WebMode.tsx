import React from 'react';
import { Smartphone } from 'lucide-react';
import { useViewMode } from '../contexts/ViewModeContext';
import Header from './Header';
import Hero from './Hero';
import PhysicsBento from './BentoGrid';
import ExperienceSection from './ExperienceSection';
import Footer from './Footer';

const WebMode: React.FC = () => {
  const { setViewMode } = useViewMode();

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <PhysicsBento />
      <ExperienceSection />
      <Footer />

      {/* 앱으로 보기 플로팅 버튼 */}
      <button
        onClick={() => setViewMode('app')}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
      >
        <Smartphone size={20} />
        <span>앱으로 보기</span>
      </button>
    </div>
  );
};

export default WebMode;
