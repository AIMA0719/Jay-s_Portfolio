import React, { useEffect, useRef } from 'react';
import { BENTO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { BentoItemProps } from '../types';

// 다크모드용 색상 팔레트
const DARK_COLORS = [
  { bg: 'bg-rose-900/80', text: 'text-rose-100', border: 'border-rose-700', iconBg: 'bg-rose-800', iconColor: 'text-rose-300' },
  { bg: 'bg-orange-900/80', text: 'text-orange-100', border: 'border-orange-700', iconBg: 'bg-orange-800', iconColor: 'text-orange-300' },
  { bg: 'bg-amber-900/80', text: 'text-amber-100', border: 'border-amber-700', iconBg: 'bg-amber-800', iconColor: 'text-amber-300' },
  { bg: 'bg-lime-900/80', text: 'text-lime-100', border: 'border-lime-700', iconBg: 'bg-lime-800', iconColor: 'text-lime-300' },
  { bg: 'bg-emerald-900/80', text: 'text-emerald-100', border: 'border-emerald-700', iconBg: 'bg-emerald-800', iconColor: 'text-emerald-300' },
  { bg: 'bg-teal-900/80', text: 'text-teal-100', border: 'border-teal-700', iconBg: 'bg-teal-800', iconColor: 'text-teal-300' },
  { bg: 'bg-cyan-900/80', text: 'text-cyan-100', border: 'border-cyan-700', iconBg: 'bg-cyan-800', iconColor: 'text-cyan-300' },
  { bg: 'bg-sky-900/80', text: 'text-sky-100', border: 'border-sky-700', iconBg: 'bg-sky-800', iconColor: 'text-sky-300' },
  { bg: 'bg-indigo-900/80', text: 'text-indigo-100', border: 'border-indigo-700', iconBg: 'bg-indigo-800', iconColor: 'text-indigo-300' },
  { bg: 'bg-violet-900/80', text: 'text-violet-100', border: 'border-violet-700', iconBg: 'bg-violet-800', iconColor: 'text-violet-300' },
  { bg: 'bg-fuchsia-900/80', text: 'text-fuchsia-100', border: 'border-fuchsia-700', iconBg: 'bg-fuchsia-800', iconColor: 'text-fuchsia-300' },
];

// 물리 엔진용 타입
interface BubbleBody {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass: number;
}

const PhysicsBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<BubbleBody[]>([]);
  const requestRef = useRef<number>();
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 화면 너비를 State로 관리하여 렌더링에 직접 반영
  const [currentScale, setCurrentScale] = React.useState<number>(1);

  const handleProjectClick = (id: string) => {
    // 1. 해당 ID를 가진 요소 찾기
    const element = document.getElementById(id);
    if (!element) return;

    // 2. 스티키 헤더 등 상단 여백 보정 (예: 100px)
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    // 3. 부드러운 스크롤 이동
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // 물리 엔진 및 리사이즈 처리
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // 초기화: 버블 생성
    if (bubblesRef.current.length === 0) {
      const { width, height } = container.getBoundingClientRect();
      bubblesRef.current = BENTO_ITEMS.map((item, index) => {
        // 기본 Radius (PC 기준)
        const baseRadius = item.cols === 2 ? 140 : 100;

        return {
          id: item.id,
          x: Math.random() * (width - baseRadius * 2) + baseRadius,
          y: Math.random() * (height - baseRadius * 2) + baseRadius,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          radius: baseRadius, // 초기값
          mass: baseRadius
        };
      });
    }

    // 리사이즈 핸들러
    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();

      // 스케일 계산 로직 (화면 너비 비례)
      // 기준 너비: 1600px (이때 scale = 1.0)
      const baseWidth = 1600;
      let ratio = width / baseWidth;

      // 모바일 등에서 좀 더 여유있게 보이도록 비율 조정
      // ratio가 작을수록 더 작게 보이게 하여 꽉 차지 않게 함
      if (width < 768) {
        ratio = ratio * 0.8; // 모바일에서는 추가 축소
      }

      // 최소 0.4, 최대 1.0 제한
      const newScale = Math.min(Math.max(ratio, 0.4), 1.0);

      setCurrentScale(newScale);

      // 물리 엔진 body 업데이트
      bubblesRef.current.forEach(b => {
        b.radius = b.mass * newScale; // mass는 초기 radius와 동일
        b.x = Math.min(Math.max(b.x, b.radius), width - b.radius);
        b.y = Math.min(Math.max(b.y, b.radius), height - b.radius);
      });
    };

    // 초기 실행 및 리스너 등록
    handleResize();
    window.addEventListener('resize', handleResize);

    // 물리 엔진 루프
    const updatePhysics = () => {
      const bubbles = bubblesRef.current;
      const rect = container.getBoundingClientRect();
      const containerW = rect.width;
      const containerH = rect.height;

      // 1. 위치 업데이트 및 벽 충돌
      bubbles.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.radius < 0) { b.x = b.radius; b.vx *= -1; }
        else if (b.x + b.radius > containerW) { b.x = containerW - b.radius; b.vx *= -1; }

        if (b.y - b.radius < 0) { b.y = b.radius; b.vy *= -1; }
        else if (b.y + b.radius > containerH) { b.y = containerH - b.radius; b.vy *= -1; }
      });

      // 2. 버블 간 충돌
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];
          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = b1.radius + b2.radius;

          if (distance < minDistance) {
            const overlap = minDistance - distance;
            const nx = dx / distance;
            const ny = dy / distance;
            const totalMass = b1.mass + b2.mass;

            const m1Ratio = b2.mass / totalMass;
            const m2Ratio = b1.mass / totalMass;

            b1.x -= nx * overlap * m1Ratio;
            b1.y -= ny * overlap * m1Ratio;
            b2.x += nx * overlap * m2Ratio;
            b2.y += ny * overlap * m2Ratio;

            const k = 2 * (b1.vx * nx + b1.vy * ny - b2.vx * nx - b2.vy * ny) / (b1.mass + b2.mass);
            b1.vx -= k * b2.mass * nx;
            b1.vy -= k * b2.mass * ny;
            b2.vx += k * b1.mass * nx;
            b2.vy += k * b1.mass * ny;
          }
        }
      }

      // 3. DOM 업데이트
      bubbles.forEach((b, i) => {
        const el = elementsRef.current[i];
        if (el) {
          el.style.transform = `translate(${b.x - b.radius}px, ${b.y - b.radius}px)`;
        }
      });

      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    requestRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-900 flex flex-col">
      {/* Title Area */}
      <div className="pt-24 pb-8 text-center z-10 pointer-events-none px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Project Universe
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto break-keep">
          톡톡 튀는 아이디어들이 모여 만들어낸 결과물입니다.<br className="hidden md:block" />
          원을 클릭하여 상세 내용을 확인하세요.
        </p>
      </div>

      {/* Physics Container */}
      <div
        ref={containerRef}
        className="flex-1 w-full h-[60vh] md:h-[80vh] relative overflow-hidden touch-none"
      >
        {BENTO_ITEMS.map((item, index) => {
          const colorTheme = DARK_COLORS[index % DARK_COLORS.length];
          const isLarge = item.cols === 2;

          // 동적 크기 계산 (Physics와 동기화)
          const baseRadius = isLarge ? 140 : 100;
          const radius = baseRadius * currentScale;
          const sizePx = radius * 2;

          return (
            <div
              key={item.id}
              ref={(el) => (elementsRef.current[index] = el)}
              onClick={() => handleProjectClick(item.id)}
              style={{
                width: `${sizePx}px`,
                height: `${sizePx}px`,
                position: 'absolute',
                top: 0,
                left: 0,
                willChange: 'transform, width, height', // 사이즈 변경 최적화
              }}
              className={`
                rounded-full border-4 cursor-pointer shadow-lg
                flex flex-col items-center justify-center text-center p-2 
                transition-shadow duration-300 hover:shadow-2xl hover:z-50
                ${colorTheme.bg} ${colorTheme.border} ${colorTheme.text}
              `}
            >
              <div
                className={`rounded-full mb-1 shadow-sm flex items-center justify-center ${colorTheme.iconBg} ${colorTheme.iconColor}`}
                style={{
                  padding: `${12 * currentScale}px`,
                  marginBottom: `${12 * currentScale}px`
                }}
              >
                <item.icon size={isLarge ? 32 * currentScale : 24 * currentScale} strokeWidth={2.5} />
              </div>

              <h3
                className={`font-bold leading-tight px-1`}
                style={{
                  fontSize: isLarge ? `${24 * currentScale}px` : `${18 * currentScale}px`,
                  marginBottom: `${4 * currentScale}px`
                }}
              >
                {item.title}
              </h3>

              <p
                className="font-semibold opacity-70 px-1 line-clamp-1 hidden sm:block"
                style={{
                  fontSize: `${12 * currentScale}px`,
                  marginBottom: `${12 * currentScale}px`
                }}
              >
                {item.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-1 opacity-80">
                {item.details.techStack.slice(0, 2).map((tech, i) => (
                  <span
                    key={i}
                    className="bg-black/30 rounded-full font-bold uppercase"
                    style={{
                      fontSize: `${10 * currentScale}px`,
                      padding: `${2 * currentScale}px ${6 * currentScale}px`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Hint */}
              <div className="absolute bottom-6 opacity-0 hover:opacity-100 transition-opacity hidden md:block">
                <ArrowUpRight className={colorTheme.iconColor} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PhysicsBento;