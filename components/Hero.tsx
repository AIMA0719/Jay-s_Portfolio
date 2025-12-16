import React from 'react';
import FadeIn from './FadeIn';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="max-w-5xl w-full text-center z-10 px-6">
        <FadeIn delay={0.2}>
          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-tight mb-8 whitespace-pre-line tracking-tight">
            {PERSONAL_INFO.heroTitle}
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              앱 개발자로서의 <span className="text-primary-600 font-bold">워크 로드</span>를 소개합니다.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={1.0} className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
          <ArrowDown size={24} />
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;