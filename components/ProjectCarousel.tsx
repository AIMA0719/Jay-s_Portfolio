import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Code2 } from 'lucide-react';
import { CareerProject } from '../types';

interface ProjectCarouselProps {
  projects: CareerProject[];
  onProjectClick: (project: CareerProject) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 터치/드래그 상태
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const goToNext = () => {
    if (currentIndex < projects.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (dragOffset > threshold) {
      goToPrev();
    } else if (dragOffset < -threshold) {
      goToNext();
    }
    setDragOffset(0);
  };

  // 마우스 이벤트 핸들러 (데스크탑 지원)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    setDragOffset(currentX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (dragOffset > threshold) {
      goToPrev();
    } else if (dragOffset < -threshold) {
      goToNext();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const currentProject = projects[currentIndex];

  // 슬라이드 애니메이션 variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="h-full flex flex-col">
      {/* 캐러셀 영역 */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 px-4 py-2"
            style={{
              x: isDragging ? dragOffset : 0
            }}
          >
            {/* 프로젝트 카드 */}
            <div
              onClick={() => onProjectClick(currentProject)}
              className="h-full bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden flex flex-col shadow-xl hover:border-primary-500/50 transition-colors cursor-pointer"
            >
              {/* 카드 헤더 */}
              <div className="p-5 pb-4 border-b border-slate-700 flex-shrink-0">
                <div className="flex items-start gap-4">
                  {/* 아이콘 */}
                  <div className="w-14 h-14 rounded-2xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    {currentProject.icon ? (
                      <currentProject.icon size={28} className="text-primary-400" strokeWidth={1.5} />
                    ) : (
                      <Code2 size={28} className="text-primary-400" />
                    )}
                  </div>

                  {/* 제목/부제목 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg leading-tight mb-1 truncate">
                      {currentProject.title}
                    </h3>
                    {currentProject.subtitle && (
                      <p className="text-primary-400 text-sm font-medium truncate">
                        {currentProject.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* 기간 */}
                <div className="mt-3 flex items-center gap-2 text-slate-400 text-xs">
                  <Calendar size={12} />
                  <span>{currentProject.period}</span>
                </div>
              </div>

              {/* 카드 바디 - 스크롤 가능 */}
              <div className="flex-1 overflow-y-auto p-5 pt-4">
                {/* 설명 */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {currentProject.overview}
                </p>

                {/* 기술 스택 */}
                <div className="mb-4">
                  <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.techStack.slice(0, 6).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600 rounded-lg text-xs text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {currentProject.techStack.length > 6 && (
                      <span className="px-2.5 py-1 bg-slate-700/30 rounded-lg text-xs text-slate-500">
                        +{currentProject.techStack.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                {/* 성과 미리보기 */}
                {currentProject.results && currentProject.results.length > 0 && (
                  <div>
                    <h4 className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-2">Key Results</h4>
                    <ul className="space-y-1.5">
                      {currentProject.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-2">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 카드 푸터 */}
              <div className="p-4 pt-3 border-t border-slate-700 flex-shrink-0">
                <div className="flex items-center justify-center text-primary-400 text-sm font-semibold">
                  <span>자세히 보기</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 좌우 네비게이션 버튼 */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {currentIndex < projects.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      {/* 인디케이터 */}
      <div className="flex justify-center gap-1.5 py-3 flex-shrink-0">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-primary-500 w-6'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
