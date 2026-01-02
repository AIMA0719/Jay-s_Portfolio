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
    <section className="min-h-screen py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <FadeIn className="mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-8 border-l-8 border-primary-500 pl-6 py-1">
            경력 상세
          </h2>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-lg">
            {/* Company Info Header (Single Line) */}
            <div className="flex flex-col sm:flex-row items-baseline gap-3 border-b border-slate-700 pb-6 mb-6">
              <h3 className="text-2xl font-extrabold text-white">{exp.company}</h3>
              <span className="hidden sm:inline text-slate-600">|</span>
              <p className="text-xl text-slate-300 font-medium">{exp.role}</p>
              <span className="hidden sm:inline text-slate-600">|</span>
              <div className="text-primary-400 font-bold text-lg">
                {exp.period}
              </div>
            </div>

            {/* Overview Stats (List Style) */}
            <div className="space-y-3">
              {exp.overviewStats.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-300 font-medium text-lg">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
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
                className="bg-slate-800 rounded-[2rem] p-8 md:p-10 border border-slate-700 shadow-lg hover:border-primary-500/50 transition-all scroll-mt-24 group relative"
              >

                {/* View Details Button (Top Right) */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-500 hover:scale-105 transition-all hidden md:flex items-center gap-2 group-hover:opacity-100"
                >
                  <span className="text-sm font-bold">자세히 보기</span>
                  <Maximize2 size={20} />
                </button>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="md:hidden absolute top-6 right-6 p-2 text-primary-400"
                >
                  <Maximize2 size={24} />
                </div>

                {/* Project Header */}
                <div className="mb-6 border-b border-slate-700 pb-6 pr-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-md">
                      {idx + 1}
                    </span>
                    {project.title.replace(/^\d+\.\s/, '')}
                  </h3>

                  <div className="pl-[3.25rem]">
                    <p className="text-slate-400 text-lg leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>
                </div>

                <div className="pl-[3.25rem]">
                  {/* Tech Stack Chips (Simple) */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-sm font-semibold border border-slate-600">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-3 py-1.5 bg-slate-700/50 text-slate-500 rounded-lg text-sm font-medium border border-slate-600">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Key Achievements (Preview) */}
                  {project.results && project.results.length > 0 && (
                    <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-700/50 mb-6">
                      <h4 className="flex items-center gap-2 font-bold text-amber-300 mb-3 text-sm uppercase tracking-wide">
                        <Trophy size={16} className="text-amber-400" /> 핵심 성과
                      </h4>
                      <ul className="space-y-2">
                        {project.results.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-2 text-sm leading-snug">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-400 shrink-0" />
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