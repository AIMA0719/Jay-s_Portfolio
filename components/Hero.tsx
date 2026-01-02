import React from 'react';
import FadeIn from './FadeIn';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="max-w-5xl w-full text-center z-10 px-6">
        <FadeIn delay={0.2}>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-8 whitespace-pre-line tracking-tight">
            {PERSONAL_INFO.heroTitle}
          </h1>
        </FadeIn>

      </div>

      <FadeIn delay={1.0} className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
          <ArrowDown size={24} />
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;