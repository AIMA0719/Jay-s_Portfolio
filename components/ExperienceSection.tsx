import React from 'react';
import { EXPERIENCES } from '../constants';
import FadeIn from './FadeIn';

const ExperienceSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-6 bg-slate-50 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-center">
        <FadeIn className="mb-8 md:mb-12 shrink-0">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">경력 상세</h2>
          <p className="text-slate-500 text-lg">성장의 기록들</p>
        </FadeIn>

        <div className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 h-auto">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 border-b border-slate-100 pb-4 shrink-0">
                <div>
                    <h3 className="text-2xl font-bold text-primary-700 mb-1">
                    {EXPERIENCES[0].company}
                    </h3>
                    <span className="font-medium text-slate-900 text-lg">{EXPERIENCES[0].role}</span>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1.5 bg-slate-100 rounded-full text-slate-600 font-semibold text-sm">
                    {EXPERIENCES[0].period}
                </span>
            </div>
            
            {EXPERIENCES[0].description && (
                <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-100 shrink-0">
                {EXPERIENCES[0].description}
                </p>
            )}

            <div className="space-y-8">
              {EXPERIENCES[0].highlights.map((highlight, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-slate-200 hover:border-primary-400 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                      {highlight.title}
                    </h4>
                    <span className="text-sm font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded border border-primary-100 self-start shrink-0">
                        {highlight.impact}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default ExperienceSection;