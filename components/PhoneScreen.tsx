import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO, BENTO_ITEMS } from '../constants';
import ProjectCarousel from './ProjectCarousel';
import ProjectDetailModal from './ProjectDetailModal';
import { CareerProject } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const PhoneScreen: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CareerProject | null>(null);
  const { theme, toggleTheme } = useTheme();

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

  const isDark = theme === 'dark';

  return (
    <div className={`h-full flex flex-col ${isDark ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-slate-50 via-white to-slate-100'}`}>
      {/* Identity Section - 상단 (컴팩트하게) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 pt-6 pb-3 flex-shrink-0"
      >
        {/* 앱 헤더 + 아이덴티티 문구 */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className={`font-bold text-xl leading-tight mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>최정원</h1>
            <p className={`text-xs mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Android Developer</p>
            <p className={`text-lg font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-800'}`}>
              끊임없이 배우고 도전하는
              <br />
              개발자, <span className="text-primary-500">최정원</span>입니다.
            </p>
          </div>

          {/* 소셜 링크 + 테마 토글 - 세로 배치 */}
          <div className="flex flex-col gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors border ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-300 shadow-sm'
              }`}
              title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors border ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-300 shadow-sm'
              }`}
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center justify-center w-9 h-9 bg-primary-600 hover:bg-primary-500 rounded-full text-white transition-colors shadow-md"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="px-6 py-3">
        <div className={`h-px ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />
      </div>

      {/* Projects Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="px-6 pt-2 pb-4 flex-shrink-0"
      >
        <h2 className={`font-bold text-2xl ${isDark ? 'text-white' : 'text-slate-800'}`}>프로젝트</h2>
      </motion.div>

      {/* Project Carousel - 하단 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex-1 min-h-0 px-4 pb-2"
      >
        <ProjectCarousel
          projects={projects}
          onProjectClick={setSelectedProject}
          isDark={isDark}
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
