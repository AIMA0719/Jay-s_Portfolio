import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Code2 } from 'lucide-react';
import { CareerProject } from '../types';

interface ProjectCarouselProps {
  projects: CareerProject[];
  onProjectClick: (project: CareerProject) => void;
  isDark?: boolean;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onProjectClick, isDark = true }) => {
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
            className="absolute inset-0 px-4 flex items-center justify-center"
            style={{
              x: isDragging ? dragOffset : 0
            }}
          >
            {/* 프로젝트 카드 - 제목만 표시 */}
            <div
              onClick={() => onProjectClick(currentProject)}
              className={`w-[85%] h-[75%] rounded-3xl border overflow-hidden flex flex-col justify-center items-center shadow-xl hover:border-primary-500/50 transition-colors cursor-pointer p-8 ${
                isDark
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* 제목 */}
              <h3 className={`font-bold text-2xl leading-tight mb-3 text-center ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {currentProject.title}
              </h3>

              {/* 부제목 */}
              {currentProject.subtitle && (
                <p className="text-primary-500 text-lg font-medium text-center mb-6">
                  {currentProject.subtitle}
                </p>
              )}

              {/* 자세히 보기 버튼 */}
              <div className="flex items-center gap-1 text-primary-500 text-base font-semibold">
                <span>자세히 보기</span>
                <ChevronRight size={18} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 좌우 네비게이션 버튼 - 카드 끝에 화살표 중앙 위치 */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className={`absolute left-[3%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              isDark
                ? 'bg-slate-800/90 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
                : 'bg-white/90 border-slate-300 text-slate-500 hover:text-slate-800 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {currentIndex < projects.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className={`absolute right-[3%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              isDark
                ? 'bg-slate-800/90 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
                : 'bg-white/90 border-slate-300 text-slate-500 hover:text-slate-800 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <ChevronRight size={24} />
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
                : isDark
                  ? 'bg-slate-600 hover:bg-slate-500'
                  : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
