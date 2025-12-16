import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import FadeIn from './FadeIn';
import { CheckCircle2, Trophy, Code2, ArrowUpRight, Maximize2 } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';
import { CareerProject } from '../types';

const ExperienceSection: React.FC = () => {
  const exp = EXPERIENCES[0]; // Infocar
  const [selectedProject, setSelectedProject] = useState<CareerProject | null>(null);

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
        <div className="space-y-12">
          {exp.projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div
                id={project.id} // ID for scrolling
                className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:border-primary-200 transition-all scroll-mt-24 group relative"
              >

                {/* View Details Button (Top Right) */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 hover:scale-105 transition-all hidden md:flex items-center gap-2 group-hover:opacity-100"
                >
                  <span className="text-sm font-bold">자세히 보기</span>
                  <Maximize2 size={20} />
                </button>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="md:hidden absolute top-6 right-6 p-2 text-primary-600"
                >
                  <Maximize2 size={24} />
                </div>

                {/* Project Header */}
                <div className="mb-6 border-b border-slate-100 pb-6 pr-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-md">
                      {idx + 1}
                    </span>
                    {project.title.replace(/^\d+\.\s/, '')}
                  </h3>

                  <div className="pl-[3.25rem]">
                    <p className="text-slate-600 text-lg leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>
                </div>

                <div className="pl-[3.25rem]">
                  {/* Tech Stack Chips (Simple) */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold border border-slate-200">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-3 py-1.5 bg-slate-50 text-slate-400 rounded-lg text-sm font-medium border border-slate-200">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Key Achievements (Preview) */}
                  {project.results && project.results.length > 0 && (
                    <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100 mb-6">
                      <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                        <Trophy size={16} className="text-amber-500" /> 핵심 성과
                      </h4>
                      <ul className="space-y-2">
                        {project.results.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-slate-700 flex items-start gap-2 text-sm leading-snug">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Call to Action */}

                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

    </section>
  );
};

export default ExperienceSection;