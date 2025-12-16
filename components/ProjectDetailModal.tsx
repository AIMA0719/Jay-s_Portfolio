import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Trophy, Code2, Wrench, AlertTriangle, Monitor, Layers, Lightbulb, Target } from 'lucide-react';
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

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl z-10 relative flex flex-col overflow-hidden border border-white/20"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between p-6 md:p-8 border-b border-slate-100 bg-white sticky top-0 z-20">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                                    {project.title.replace(/^\d+\.\s/, '')}
                                </h2>
                                <div className="mt-2 flex items-center gap-2 text-slate-500 font-medium text-sm">
                                    {project.techStack.slice(0, 3).join(' · ')}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto custom-scrollbar p-6 md:p-10 space-y-10 bg-slate-50/50">

                            {/* 1. Background / Context */}
                            {project.background && (
                                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-lg">
                                        <Lightbulb size={20} className="text-amber-500" />
                                        프로젝트 배경
                                    </h3>
                                    <p className="text-slate-700 leading-8 text-lg">
                                        {project.background}
                                    </p>
                                </section>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* 2. Key Stats / Tasks */}
                                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-lg">
                                        <Target size={20} className="text-blue-500" />
                                        주요 과제 및 역할
                                    </h3>
                                    {project.roles && (
                                        <ul className="space-y-3">
                                            {project.roles.map((role, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                                    <span className="leading-relaxed font-medium">{role}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </section>

                                {/* 3. Tech Stack */}
                                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-lg">
                                        <Code2 size={20} className="text-indigo-500" />
                                        사용 기술
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 font-semibold text-sm rounded-lg border border-indigo-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* 4. Technical Challenges */}
                            {project.challenges && project.challenges.length > 0 && (
                                <section>
                                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6 text-xl">
                                        <AlertTriangle size={24} className="text-rose-500" />
                                        기술적 도전과 해결 과정
                                    </h3>
                                    <div className="grid gap-6">
                                        {project.challenges.map((challenge, idx) => (
                                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                                <div className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                                                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs shrink-0">{idx + 1}</span>
                                                    {challenge.title}
                                                </div>
                                                <div className="space-y-4 pl-8 border-l-2 border-slate-100 ml-3">
                                                    <div>
                                                        <h5 className="text-xs font-bold text-rose-500 uppercase tracking-wide mb-1">Problem</h5>
                                                        <p className="text-slate-700 leading-relaxed font-medium">{challenge.problem}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">Solution</h5>
                                                        <p className="text-slate-700 leading-relaxed">{challenge.solution}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* 5. Results / Outcomes */}
                            {(project.results || project.quantitative) && (
                                <section className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl">
                                    <h3 className="flex items-center gap-2 font-bold text-white mb-6 text-xl">
                                        <Trophy size={24} className="text-amber-400" />
                                        최종 성과
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {project.results && (
                                            <ul className="space-y-4">
                                                {project.results.map((result, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-amber-300 mt-0.5">
                                                            <Trophy size={14} />
                                                        </div>
                                                        <span className="leading-relaxed font-medium text-slate-100">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {project.quantitative && (
                                            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                                                <h4 className="font-bold text-slate-200 mb-4 text-sm uppercase tracking-wide opacity-80">Quantitative Stats</h4>
                                                <ul className="space-y-3">
                                                    {project.quantitative.map((stat, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-white font-bold text-lg">
                                                            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                                            {stat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
