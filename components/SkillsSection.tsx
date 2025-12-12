import React from 'react';
import { SKILLS } from '../constants';
import FadeIn from './FadeIn';

const SkillsSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">기술 스택</h2>
          <p className="text-slate-500 text-lg">다양한 도구로 최적의 해결책을 찾습니다.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 h-full hover:border-primary-200 hover:shadow-lg transition-all duration-300 flex flex-col">
                    <h3 className="text-lg font-bold text-primary-700 mb-4 pb-3 border-b border-slate-200 text-center">
                        {skillGroup.category}
                    </h3>
                    <ul className="space-y-3 flex-1">
                        {skillGroup.items.map((item, i) => (
                        <li key={i} className="text-slate-700 font-medium flex items-center justify-center text-center gap-2 text-base">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full shrink-0" />
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;