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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-white w-full max-w-6xl h-[90vh] md:h-[85vh] rounded-[2rem] shadow-2xl z-10 relative flex flex-col md:flex-row overflow-hidden border border-white/20"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); onClose(); }}
                            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-sm"
                        >
                            <X size={24} />
                        </button>

                        {/* Sidebar - RESTORED LEGACY LAYOUT */}
                        <div className="bg-slate-50 p-8 md:p-10 md:w-[35%] border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto">
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-white border border-slate-200 text-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    {project.icon ? <project.icon size={32} strokeWidth={1.5} /> : <Code2 size={32} />}
                                </div>
                                <h3 className="text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                                    {project.title.replace(/^\d+\.\s/, '')}
                                </h3>
                                {/* SUBTITLE RESTORED */}
                                {project.subtitle && (
                                    <p className="text-lg text-primary-600 font-semibold">{project.subtitle}</p>
                                )}
                            </div>

                            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-10 bg-white px-4 py-2 rounded-lg border border-slate-200 self-start shadow-sm">
                                <Calendar size={16} />
                                <span>2025.12</span> {/* Or period if available in project */}
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Cpu size={14} /> Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, idx) => (
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

                        {/* Content - RESTORED LEGACY LAYOUT & TEXT */}
                        <div className="p-8 md:p-12 md:w-[65%] bg-white overflow-y-auto custom-scrollbar">
                            <div className="max-w-3xl mx-auto">
                                <div className="mb-12">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">프로젝트 배경</h4>
                                    <p className="text-slate-600 leading-8 text-lg">
                                        {project.background}
                                    </p>
                                </div>

                                <div className="mb-12">
                                    <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <span className="p-1.5 bg-blue-100 text-blue-600 rounded-lg"><CheckCircle2 size={20} /></span>
                                        주요 담당 업무
                                    </h4>
                                    <div className="grid gap-8">
                                        {project.coreImplementations && project.coreImplementations.map((taskGroup, idx) => (
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

                                {project.challenges && project.challenges.length > 0 && (
                                    <div className="mb-12">
                                        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                            <span className="p-1.5 bg-amber-100 text-amber-600 rounded-lg"><AlertTriangle size={20} /></span>
                                            기술적 도전 (Challenge & Solution)
                                        </h4>
                                        <div className="space-y-4">
                                            {project.challenges.map((challenge, idx) => (
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

                                {project.results && project.results.length > 0 && (
                                    <div className="mb-8">
                                        <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                            <span className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg"><Trophy size={20} /></span>
                                            성과 및 결과
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.results.map((result, idx) => (
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
    );
};

export default ProjectDetailModal;
