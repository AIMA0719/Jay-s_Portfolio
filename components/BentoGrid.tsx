import React, { useState } from 'react';
import { BENTO_ITEMS } from '../constants';
import FadeIn from './FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Cpu, AlertTriangle, Trophy } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = BENTO_ITEMS.find(item => item.id === selectedId);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-white relative">
      <div className="max-w-6xl w-full mx-auto">
        <FadeIn className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">주요 프로젝트</h2>
          <p className="text-slate-600 text-xl max-w-2xl">
            단순히 기능을 구현하는 것을 넘어,<br />
            비즈니스 임팩트와 사용자 경험을 동시에 고려합니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[340px]">
          {BENTO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`
                group relative p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden cursor-pointer
                transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-transparent hover:border-primary-200/50
                ${item.cols === 2 ? 'md:col-span-2' : 'md:col-span-1'}
                ${item.dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900 border-slate-100'}
              `}
            >
              <div className="z-10 relative">
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm
                  ${item.dark ? 'bg-white/10 text-white' : 'bg-white text-primary-600'}
                `}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-4xl font-extrabold mb-3 tracking-tight">{item.title}</h3>
                <p className={`text-xl font-medium mb-4 ${item.dark ? 'text-slate-400' : 'text-primary-600'}`}>
                  {item.subtitle}
                </p>
              </div>
              
              <div className="z-10 relative">
                <p className={`text-lg leading-relaxed ${item.dark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>
                <div className={`mt-6 text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ${item.dark ? 'text-primary-300' : 'text-primary-600'}`}>
                  자세히 보기 &rarr;
                </div>
              </div>

              {/* Decorative background element - Now enabled for ALL cards on hover */}
              <div className={`
                absolute -right-20 -bottom-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl
                ${item.dark ? 'bg-primary-500' : 'bg-primary-300'}
              `} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              layoutId={selectedId}
              className="bg-white w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl z-10 relative flex flex-col md:flex-row overflow-hidden"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              >
                <X size={24} className="text-slate-700" />
              </button>

              {/* Sidebar / Header Section */}
              <div className="bg-slate-50 p-8 md:w-1/3 border-r border-slate-100 flex flex-col">
                <div className="mb-6">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                        <selectedItem.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-2">{selectedItem.title}</h3>
                    <p className="text-xl text-primary-600 font-medium">{selectedItem.subtitle}</p>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-6">
                    <Calendar size={16} />
                    <span>{selectedItem.details.period}</span>
                </div>

                <div className="mt-auto">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Cpu size={16} /> 사용 기술
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedItem.details.techStack.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:w-2/3 bg-white overflow-y-auto">
                <div className="prose prose-slate max-w-none">
                    
                    <div className="mb-8">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">배경</h4>
                        <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                            {selectedItem.details.background}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="text-primary-500" size={20} />
                            담당 업무
                        </h4>
                        <ul className="space-y-3 list-none pl-0">
                            {selectedItem.details.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0" />
                                    <span className="leading-relaxed">{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {selectedItem.details.challenges && (
                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <AlertTriangle className="text-amber-500" size={20} />
                                기술적 도전
                            </h4>
                            <ul className="space-y-3 list-none pl-0">
                                {selectedItem.details.challenges.map((challenge, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                                        <span className="leading-relaxed">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedItem.details.results && (
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Trophy className="text-primary-600" size={20} />
                                성과 및 결과
                            </h4>
                            <ul className="space-y-3 list-none pl-0">
                                {selectedItem.details.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0" />
                                        <span className="leading-relaxed">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BentoGrid;