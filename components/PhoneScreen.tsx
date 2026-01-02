import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, BENTO_ITEMS } from '../constants';
import ProjectCarousel from './ProjectCarousel';
import ProjectDetailModal from './ProjectDetailModal';
import { CareerProject } from '../types';

const PhoneScreen: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CareerProject | null>(null);

  // BENTO_ITEMS를 CareerProject 형태로 변환
  const projects: CareerProject[] = BENTO_ITEMS.map((item, index) => ({
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    period: item.details.period,
    overview: item.description,
    techStack: item.details.techStack,
    background: item.details.background,
    icon: item.icon,
    coreImplementations: item.details.tasks.map(task => ({
      title: task.title,
      items: task.items
    })),
    challenges: item.details.challenges,
    results: item.details.results
  }));

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Identity Section - 상단 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 pt-6 pb-4 flex-shrink-0"
      >
        {/* 앱 이름 */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">최</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">최정원</h1>
            <p className="text-slate-400 text-xs">Android Developer</p>
          </div>
        </div>

        {/* 아이덴티티 문구 */}
        <div className="mb-6">
          <p className="text-white text-xl font-bold leading-relaxed mb-2">
            안드로이드의 구석구석을
          </p>
          <p className="text-white text-xl font-bold leading-relaxed mb-2">
            파헤치는 개발자,
          </p>
          <p className="text-primary-400 text-xl font-bold leading-relaxed">
            최정원입니다.
          </p>
        </div>

        {/* 소셜 링크 */}
        <div className="flex gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 text-sm font-medium transition-colors border border-slate-700"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-full text-white text-sm font-medium transition-colors shadow-md"
          >
            <Mail size={16} />
            <span>Contact</span>
          </a>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="px-6">
        <div className="h-px bg-slate-800" />
      </div>

      {/* Projects Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="px-6 pt-4 pb-2 flex items-center justify-between"
      >
        <h2 className="text-white font-bold text-base">프로젝트</h2>
        <div className="flex items-center text-slate-500 text-xs">
          <span>스와이프하여 탐색</span>
          <ChevronRight size={14} />
        </div>
      </motion.div>

      {/* Project Carousel - 하단 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex-1 min-h-0 px-2"
      >
        <ProjectCarousel
          projects={projects}
          onProjectClick={setSelectedProject}
        />
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
};

export default PhoneScreen;
