import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Trophy, Code2, AlertTriangle, Cpu } from 'lucide-react';
import { CareerProject } from '../types';

interface ProjectDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: CareerProject | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, project }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        // Changed: max-h-[90vh] with overflow-hidden -> max-h-[90vh] with flex col
                        // On mobile, we want the whole card to scroll if needed, but usually we want inner scroll.
                        // However, user requested "entire modal scroll range". This usually means the overlay itself should scroll.
                        // But standard modal UX is fixed overlay + scrollable content.
                        // "아래쪽만 스크롤 되니까" -> User complains that only the right side scrolls or the scroll area is too small.
                        // Let's make the container responsive: 
                        // Mobile: Single column, whole card scrolls if content is long? Or sticky header?
                        // Let's try: Mobile uses window scroll (fixed overlay with scroll auto), Desktop uses inner scroll.
                        className="bg-slate-900 w-full max-w-6xl h-[85vh] md:h-[85vh] rounded-[2rem] shadow-2xl z-10 relative flex flex-col md:flex-row overflow-hidden border border-slate-700"
                    >
                        {/* 
                           User Request: "모달 내 스크롤 범위를 전체로 바꿔줘" (Make the scroll range the entire modal)
                           "아래쪽만 스크롤 되니까" (Because only the bottom part scrolls)
                           
                           Current Layout: 
                           Desktop: Sidebar(Left, scroll) + Content(Right, scroll)
                           Mobile: Everything stacked. If we use flex-col and overflow-hidden on parent, 
                           Sidebar is top, Content is bottom. If Content has overflow-y-auto, only Content scrolls. 
                           Sidebar stays stuck at top. This takes up screen space on mobile.
                           
                           Fix:
                           On Mobile: Remove overflow-hidden from parent, allow parent to scroll? 
                           Actually, better to wrap children in a single scrollable container on mobile.
                        */}

                        <button
                            onClick={(e) => { e.stopPropagation(); onClose(); }}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors shadow-sm backdrop-blur-md"
                        >
                            <X size={24} />
                        </button>

                        {/* Mobile Wrapper: On mobile, this div scrolls. On Desktop, it's just a flex wrapper */}
                        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto md:overflow-hidden">

                            {/* Sidebar */}
                            <div className="bg-slate-800 p-8 md:p-10 w-full md:w-[35%] border-r border-slate-700 flex flex-col shrink-0 md:overflow-y-auto">
                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-slate-900 border border-slate-700 text-primary-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                        {project.icon ? <project.icon size={32} strokeWidth={1.5} /> : <Code2 size={32} />}
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-white leading-tight mb-2">
                                        {project.title.replace(/^\d+\.\s/, '')}
                                    </h3>
                                    {project.subtitle && (
                                        <p className="text-lg text-primary-400 font-semibold">{project.subtitle}</p>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-10 bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 self-start shadow-sm">
                                    <Calendar size={16} />
                                    <span>{project.period}</span>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Cpu size={14} /> Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-sm font-medium text-slate-300 shadow-sm hover:border-primary-500/50 hover:text-primary-400 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 w-full md:w-[65%] bg-slate-900 md:overflow-y-auto custom-scrollbar">
                                <div className="max-w-3xl mx-auto">
                                    <div className="mb-12">
                                        <h4 className="text-xl font-bold text-white mb-4">프로젝트 배경</h4>
                                        <p className="text-slate-400 leading-8 text-lg whitespace-pre-line">
                                            {project.background}
                                        </p>
                                    </div>

                                    <div className="mb-12">
                                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            <span className="p-1.5 bg-blue-900/50 text-blue-400 rounded-lg"><CheckCircle2 size={20} /></span>
                                            주요 담당 업무
                                        </h4>
                                        <div className="grid gap-8">
                                            {project.coreImplementations && project.coreImplementations.map((taskGroup, idx) => (
                                                <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                                                    <h5 className="font-bold text-white mb-4 text-lg border-b border-slate-700 pb-2">{taskGroup.title}</h5>
                                                    <ul className="space-y-3">
                                                        {taskGroup.items.map((task, taskIdx) => (
                                                            <li key={taskIdx} className="flex items-start gap-3 text-slate-300">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                                                                <span className="leading-relaxed">{task}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {project.challenges && project.challenges.length > 0 && (
                                        <div className="mb-12">
                                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                                <span className="p-1.5 bg-amber-900/50 text-amber-400 rounded-lg"><AlertTriangle size={20} /></span>
                                                기술적 도전 (Challenge & Solution)
                                            </h4>
                                            <div className="space-y-4">
                                                {project.challenges.map((challenge, idx) => (
                                                    <div key={idx} className="bg-slate-800 rounded-xl border border-amber-700/30 shadow-sm overflow-hidden">
                                                        <div className="bg-amber-900/30 px-6 py-3 border-b border-amber-700/30">
                                                            <h5 className="font-bold text-amber-300">{challenge.title}</h5>
                                                        </div>
                                                        <div className="p-6 space-y-4">
                                                            <div className="flex gap-4">
                                                                <span className="font-bold text-xs text-amber-400 uppercase tracking-wide shrink-0 mt-1 w-16">Problem</span>
                                                                <span className="text-slate-300 leading-relaxed">{challenge.problem}</span>
                                                            </div>
                                                            <div className="flex gap-4">
                                                                <span className="font-bold text-xs text-blue-400 uppercase tracking-wide shrink-0 mt-1 w-16">Solution</span>
                                                                <span className="text-slate-300 leading-relaxed">{challenge.solution}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {project.results && project.results.length > 0 && (
                                        <div className="mb-8">
                                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                                <span className="p-1.5 bg-emerald-900/50 text-emerald-400 rounded-lg"><Trophy size={20} /></span>
                                                성과 및 결과
                                            </h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.results.map((result, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 bg-emerald-900/30 p-4 rounded-xl border border-emerald-700/30">
                                                        <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 text-emerald-400">
                                                            <CheckCircle2 size={14} />
                                                        </div>
                                                        <span className="font-semibold text-slate-200 text-sm leading-relaxed">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
