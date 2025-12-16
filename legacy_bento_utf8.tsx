import React, { useState, useEffect, useRef } from 'react';
import { BENTO_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Cpu, AlertTriangle, Trophy, ArrowUpRight } from 'lucide-react';
import { BentoItemProps } from '../types';

// 諛앷퀬 ?몃젋?뷀븳 ?됱긽 ?붾젅??const BRIGHT_COLORS = [
  { bg: 'bg-rose-100', text: 'text-rose-900', border: 'border-rose-200', iconBg: 'bg-white', iconColor: 'text-rose-600' },
  { bg: 'bg-orange-100', text: 'text-orange-900', border: 'border-orange-200', iconBg: 'bg-white', iconColor: 'text-orange-600' },
  { bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-200', iconBg: 'bg-white', iconColor: 'text-amber-600' },
  { bg: 'bg-lime-100', text: 'text-lime-900', border: 'border-lime-200', iconBg: 'bg-white', iconColor: 'text-lime-600' },
  { bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-200', iconBg: 'bg-white', iconColor: 'text-emerald-600' },
  { bg: 'bg-teal-100', text: 'text-teal-900', border: 'border-teal-200', iconBg: 'bg-white', iconColor: 'text-teal-600' },
  { bg: 'bg-cyan-100', text: 'text-cyan-900', border: 'border-cyan-200', iconBg: 'bg-white', iconColor: 'text-cyan-600' },
  { bg: 'bg-sky-100', text: 'text-sky-900', border: 'border-sky-200', iconBg: 'bg-white', iconColor: 'text-sky-600' },
  { bg: 'bg-indigo-100', text: 'text-indigo-900', border: 'border-indigo-200', iconBg: 'bg-white', iconColor: 'text-indigo-600' },
  { bg: 'bg-violet-100', text: 'text-violet-900', border: 'border-violet-200', iconBg: 'bg-white', iconColor: 'text-violet-600' },
  { bg: 'bg-fuchsia-100', text: 'text-fuchsia-900', border: 'border-fuchsia-200', iconBg: 'bg-white', iconColor: 'text-fuchsia-600' },
];

// 臾쇰━ ?붿쭊?????interface BubbleBody {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
}

const PhysicsBento: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<BubbleBody[]>([]);
  const requestRef = useRef<number>();
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const selectedItem = BENTO_ITEMS.find(item => item.id === selectedId);

  // 臾쇰━ ?붿쭊 珥덇린??諛?猷⑦봽
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    // 珥덇린?? 踰꾨툝 ?앹꽦
    if (bubblesRef.current.length === 0) {
      bubblesRef.current = BENTO_ITEMS.map((item, index) => {
        // cols媛 2硫?????諛섏?由?(以묒슂???쒖떆)
        const radius = item.cols === 2 ? 140 : 100; // ?쎌? ?⑥쐞 諛섏?由?        
        return {
          id: item.id,
          // ?붾㈃ 以묒븰 遺洹쇱뿉???쒕뜡 ?쒖옉
          x: Math.random() * (width - radius * 2) + radius,
          y: Math.random() * (height - radius * 2) + radius,
          // ?쒕뜡 ?띾룄 (-1.5 ~ 1.5)
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          radius,
          mass: radius // 吏덈웾? ?ш린??鍮꾨?
        };
      });
    }

    const updatePhysics = () => {
      const bubbles = bubblesRef.current;
      const rect = container.getBoundingClientRect();
      const containerW = rect.width;
      const containerH = rect.height;

      // 1. ?꾩튂 ?낅뜲?댄듃 諛?踰?異⑸룎 泥섎━
      bubbles.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;

        // 踰?異⑸룎 (醫뚯슦)
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx *= -1;
        } else if (b.x + b.radius > containerW) {
          b.x = containerW - b.radius;
          b.vx *= -1;
        }

        // 踰?異⑸룎 (?곹븯)
        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy *= -1;
        } else if (b.y + b.radius > containerH) {
          b.y = containerH - b.radius;
          b.vy *= -1;
        }
      });

      // 2. 踰꾨툝 媛?異⑸룎 泥섎━ (Elastic Collision)
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = b1.radius + b2.radius;

          if (distance < minDistance) {
            // 異⑸룎 媛먯?!

            // 寃뱀묠 ?섏젙 (Overlap Correction) - ?쒕줈 遺숈? ?딄쾶 諛?대깂
            const overlap = minDistance - distance;
            const nx = dx / distance;
            const ny = dy / distance;
            
            // 臾닿쾶???곕씪 諛?ㅻ굹???뺣룄 議곗젙
            const totalMass = b1.mass + b2.mass;
            const m1Ratio = b2.mass / totalMass;
            const m2Ratio = b1.mass / totalMass;

            b1.x -= nx * overlap * m1Ratio;
            b1.y -= ny * overlap * m1Ratio;
            b2.x += nx * overlap * m2Ratio;
            b2.y += ny * overlap * m2Ratio;

            // ?띾룄 踰≫꽣 諛섏궗 (Elastic Collision Physics)
            // v1' = v1 - 2*m2/(m1+m2) * <v1-v2, n> * n
            const k = 2 * (b1.vx * nx + b1.vy * ny - b2.vx * nx - b2.vy * ny) / (b1.mass + b2.mass);
            
            b1.vx -= k * b2.mass * nx;
            b1.vy -= k * b2.mass * ny;
            b2.vx += k * b1.mass * nx;
            b2.vy += k * b1.mass * ny;
          }
        }
      }

      // 3. DOM ?낅뜲?댄듃 (吏곸젒 議곗옉?쇰줈 由ъ븸???뚮뜑留??ъ씠???고쉶 -> 怨좎꽦??
      bubbles.forEach((b, i) => {
        const el = elementsRef.current[i];
        if (el) {
          // 以묒븰 ?뺣젹???꾪빐 transform ?ъ슜
          el.style.transform = `translate(${b.x - b.radius}px, ${b.y - b.radius}px)`;
        }
      });

      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    requestRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // ?붾㈃ 由ъ궗?댁쫰 ???(踰꾨툝???붾㈃ 諛뽰쑝濡??섍???寃?諛⑹?)
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      bubblesRef.current.forEach(b => {
         b.x = Math.min(Math.max(b.x, b.radius), width - b.radius);
         b.y = Math.min(Math.max(b.y, b.radius), height - b.radius);
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-50 flex flex-col">
      {/* Title Area */}
      <div className="pt-24 pb-8 text-center z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Project Universe
        </h2>
        <p className="text-slate-600 text-xl max-w-2xl mx-auto">
          ?≫넚 ????꾩씠?붿뼱?ㅼ씠 紐⑥뿬 留뚮뱾?대궦 寃곌낵臾쇱엯?덈떎.<br/>
          ?먯쓣 ?대┃?섏뿬 ?곸꽭 ?댁슜???뺤씤?섏꽭??
        </p>
      </div>

      {/* Physics Container */}
      <div 
        ref={containerRef} 
        className="flex-1 w-full h-[80vh] relative overflow-hidden"
      >
        {BENTO_ITEMS.map((item, index) => {
          const colorTheme = BRIGHT_COLORS[index % BRIGHT_COLORS.length];
          const isLarge = item.cols === 2;
          // 吏由?= 諛섏?由?* 2
          const sizePx = isLarge ? 280 : 200; 

          return (
            <div
              key={item.id}
              ref={(el) => (elementsRef.current[index] = el)}
              onClick={() => setSelectedId(item.id)}
              style={{ 
                width: sizePx, 
                height: sizePx,
                position: 'absolute',
                top: 0,
                left: 0,
                willChange: 'transform' // ?깅뒫 理쒖쟻??              }}
              className={`
                rounded-full border-4 cursor-pointer shadow-lg
                flex flex-col items-center justify-center text-center p-4
                transition-shadow duration-300 hover:shadow-2xl hover:z-50
                ${colorTheme.bg} ${colorTheme.border} ${colorTheme.text}
              `}
            >
              <div className={`p-3 rounded-full mb-3 ${colorTheme.iconBg} ${colorTheme.iconColor} shadow-sm`}>
                <item.icon size={isLarge ? 32 : 24} strokeWidth={2.5} />
              </div>
              
              <h3 className={`font-bold leading-tight mb-1 px-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                {item.title}
              </h3>
              
              <p className="text-xs font-semibold opacity-70 mb-3 px-2 line-clamp-1">
                {item.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-1">
                {item.details.techStack.slice(0, 2).map((tech, i) => (
                   <span key={i} className="text-[10px] bg-white/60 px-2 py-0.5 rounded-full font-bold uppercase">
                     {tech}
                   </span>
                ))}
              </div>

              {/* Hover Hint */}
              <div className="absolute bottom-6 opacity-0 hover:opacity-100 transition-opacity">
                 <ArrowUpRight className={colorTheme.iconColor} />
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/40"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl h-[90vh] md:h-[85vh] rounded-[2rem] shadow-2xl z-10 relative flex flex-col md:flex-row overflow-hidden border border-white/20"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-sm"
              >
                <X size={24} />
              </button>

              {/* Sidebar */}
              <div className="bg-slate-50 p-8 md:p-10 md:w-[35%] border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto">
                <div className="mb-8">
                    <div className="w-16 h-16 bg-white border border-slate-200 text-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <selectedItem.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 leading-tight mb-2">{selectedItem.title}</h3>
                    <p className="text-lg text-primary-600 font-semibold">{selectedItem.subtitle}</p>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-10 bg-white px-4 py-2 rounded-lg border border-slate-200 self-start shadow-sm">
                    <Calendar size={16} />
                    <span>{selectedItem.details.period}</span>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Cpu size={14} /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedItem.details.techStack.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm hover:border-primary-300 hover:text-primary-700 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 md:w-[65%] bg-white overflow-y-auto custom-scrollbar">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <h4 className="text-xl font-bold text-slate-900 mb-4">?꾨줈?앺듃 諛곌꼍</h4>
                        <p className="text-slate-600 leading-8 text-lg">
                            {selectedItem.details.background}
                        </p>
                    </div>

                    <div className="mb-12">
                        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <span className="p-1.5 bg-blue-100 text-blue-600 rounded-lg"><CheckCircle2 size={20} /></span>
                            二쇱슂 ?대떦 ?낅Т
                        </h4>
                        <div className="grid gap-8">
                            {selectedItem.details.tasks.map((taskGroup, idx) => (
                                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h5 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-200 pb-2">{taskGroup.title}</h5>
                                    <ul className="space-y-3">
                                        {taskGroup.items.map((task, taskIdx) => (
                                            <li key={taskIdx} className="flex items-start gap-3 text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                                <span className="leading-relaxed">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {selectedItem.details.challenges && selectedItem.details.challenges.length > 0 && (
                        <div className="mb-12">
                            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="p-1.5 bg-amber-100 text-amber-600 rounded-lg"><AlertTriangle size={20} /></span>
                                湲곗닠???꾩쟾 (Challenge & Solution)
                            </h4>
                            <div className="space-y-4">
                                {selectedItem.details.challenges.map((challenge, idx) => (
                                    <div key={idx} className="bg-white rounded-xl border border-amber-100 shadow-sm overflow-hidden">
                                        <div className="bg-amber-50/50 px-6 py-3 border-b border-amber-100">
                                            <h5 className="font-bold text-slate-900">{challenge.title}</h5>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="flex gap-4">
                                                <span className="font-bold text-xs text-amber-600 uppercase tracking-wide shrink-0 mt-1 w-16">Problem</span>
                                                <span className="text-slate-700 leading-relaxed">{challenge.problem}</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-bold text-xs text-blue-600 uppercase tracking-wide shrink-0 mt-1 w-16">Solution</span>
                                                <span className="text-slate-700 leading-relaxed">{challenge.solution}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedItem.details.results && selectedItem.details.results.length > 0 && (
                        <div className="mb-8">
                            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg"><Trophy size={20} /></span>
                                ?깃낵 諛?寃곌낵
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedItem.details.results.map((result, idx) => (
                                    <li key={idx} className="flex items-center gap-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="font-semibold text-slate-800 text-sm leading-relaxed">{result}</span>
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

export default PhysicsBento;
