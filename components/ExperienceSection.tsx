import React from 'react';
import { EXPERIENCES } from '../constants';
import FadeIn from './FadeIn';
import { CheckCircle2, Trophy, Code2, Wrench, AlertTriangle, Layers, Laptop } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCES[0]; // Infocar

  return (
    <section className="min-h-screen py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <FadeIn className="mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 border-l-8 border-primary-600 pl-6 py-1">
            안드로이드 개발자 포트폴리오 - 경력 상세
          </h2>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{exp.company}</h3>
                <p className="text-2xl text-primary-600 font-bold">{exp.role}</p>
              </div>
              <div className="text-slate-500 font-medium text-lg bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                {exp.period}
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.overviewStats.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Projects List */}
        <div className="space-y-16">
          {exp.projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div
                id={project.id} // Added ID for navigation
                className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:border-primary-200 transition-colors scroll-mt-24" // scroll-margin-top for sticky header
              >

                {/* Project Header */}
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-md">
                      {idx + 1}
                    </span>
                    {project.title.replace(/^\d+\.\s/, '')}
                  </h3>

                  <div className="space-y-6">
                    {project.background && (
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide opacity-70">Background</h4>
                        <p className="text-slate-700 text-lg leading-relaxed">{project.background}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide opacity-70">Project Overview</h4>
                      <p className="text-slate-700 text-lg leading-relaxed">
                        {project.overview}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Quantitative Stats */}
                    {project.quantitative && project.quantitative.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          <Trophy size={18} className="text-amber-500" /> 정량적 성과
                        </h4>
                        <ul className="space-y-3">
                          {project.quantitative.map((item, i) => (
                            <li key={i} className="text-slate-700 flex items-start gap-2.5 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Qualitative Results (Added) */}
                    {project.results && project.results.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          <Laptop size={18} className="text-indigo-500" /> 주요 성과
                        </h4>
                        <ul className="space-y-3">
                          {project.results.map((item, i) => (
                            <li key={i} className="text-slate-700 flex items-start gap-2.5 p-2">
                              <CheckCircle2 size={16} className="text-indigo-500 mt-1 shrink-0" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Roles */}
                    {project.roles && project.roles.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          <CheckCircle2 size={18} className="text-blue-500" /> 담당 역할
                        </h4>
                        <ul className="space-y-2">
                          {project.roles.map((item, i) => (
                            <li key={i} className="text-slate-600 flex items-start gap-2.5">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Core Implementation */}
                    {project.coreImplementations && project.coreImplementations.length > 0 && (
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          <Code2 size={18} className="text-emerald-500" /> 핵심 구현
                        </h4>
                        <div className="space-y-4">
                          {project.coreImplementations.map((impl, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                              <div className="font-bold text-slate-800 text-sm mb-2">{impl.title}</div>
                              <ul className="pl-4 list-disc list-outside text-sm text-slate-600 space-y-1.5 marker:text-slate-400">
                                {impl.items.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technical Challenges (Preferred over Problem Solving) */}
                    {project.challenges && project.challenges.length > 0 ? (
                      <div>
                        <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          <Wrench size={18} className="text-purple-500" /> 기술적 도전 & 해결
                        </h4>
                        <div className="space-y-4">
                          {project.challenges.map((challenge, i) => (
                            <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                              <div className="font-bold text-slate-800 mb-3 text-base flex items-center gap-2">
                                <AlertTriangle size={16} className="text-amber-500" />
                                {challenge.title}
                              </div>
                              <div className="space-y-3 text-sm">
                                <div className="flex gap-3">
                                  <span className="font-bold text-slate-500 w-12 shrink-0 text-right">문제</span>
                                  <span className="text-slate-700 leading-relaxed border-l-2 border-slate-200 pl-3">{challenge.problem}</span>
                                </div>
                                <div className="flex gap-3">
                                  <span className="font-bold text-blue-600 w-12 shrink-0 text-right">해결</span>
                                  <span className="text-slate-800 leading-relaxed border-l-2 border-blue-200 pl-3">{challenge.solution}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Fallback to legacy Problem Solving
                      project.problemSolving && (
                        <div>
                          <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                            <Wrench size={18} className="text-purple-500" /> 문제 해결 사례
                          </h4>
                          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 text-sm">
                            <div className="flex gap-3">
                              <span className="font-bold text-slate-500 w-12 shrink-0 text-right">문제</span>
                              <span className="text-slate-700 leading-relaxed border-l-2 border-slate-200 pl-3">{project.problemSolving.problem}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-bold text-blue-600 w-12 shrink-0 text-right">해결</span>
                              <span className="text-slate-800 leading-relaxed border-l-2 border-blue-200 pl-3">{project.problemSolving.solution}</span>
                            </div>
                            <div className="flex gap-3 pt-2 mt-1 border-t border-slate-100">
                              <span className="font-bold text-emerald-600 w-12 shrink-0 text-right">결과</span>
                              <span className="text-slate-800 font-medium leading-relaxed border-l-2 border-emerald-200 pl-3">{project.problemSolving.result}</span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;