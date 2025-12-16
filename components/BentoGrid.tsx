import React, { useEffect, useRef } from 'react';
import { BENTO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { BentoItemProps } from '../types';

// 밝고 트렌디한 색상 팔레트
const BRIGHT_COLORS = [
  { bg: 'bg-rose-100', text: 'text-rose-900', border: 'border-rose-200', iconBg: 'bg-white', iconColor: 'text-rose-600' },
  { bg: 'bg-orange-100', text: 'text-orange-900', border: 'border-orange-200', iconBg: 'bg-white', iconColor: 'text-orange-600' },
  { bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-200', iconBg: 'bg-white', iconColor: 'text-amber-600' },
  { bg: 'bg-lime-100', text: 'text-lime-900', border: 'border-lime-200', iconBg: 'bg-white', iconColor: 'text-lime-600' },
  { bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-200', iconBg: 'bg-white', iconColor: 'text-emerald-600' },
  { bg: 'bg-teal-100', text: 'text-teal-900', border: 'border-teal-200', iconBg: 'bg-white', iconColor: 'text-teal-600' },
  { bg: 'bg-cyan-100', text: 'text-cyan-900', border: 'border-cyan-200', iconBg: 'bg-white', iconColor: 'text-cyan-600' },
  { bg: 'bg-sky-100', text: 'text-sky-900', border: 'border-sky-200', iconBg: 'bg-white', iconColor: 'text-sky-600' },
  { bg: 'bg-indigo-100', text: 'text-indigo-900', border: 'border-indigo-200', iconBg: 'bg-white', iconColor: 'text-indigo-600' },
  { bg: 'bg-violet-100', text: 'text-violet-900', border: 'border-violet-200', iconBg: 'bg-white', iconColor: 'text-violet-600' },
  { bg: 'bg-fuchsia-100', text: 'text-fuchsia-900', border: 'border-fuchsia-200', iconBg: 'bg-white', iconColor: 'text-fuchsia-600' },
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

  // 물리 엔진 초기화 및 루프
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    // 초기화: 버블 생성
    if (bubblesRef.current.length === 0) {
      bubblesRef.current = BENTO_ITEMS.map((item, index) => {
        // cols가 2면 더 큰 반지름 (중요도 표시)
        const radius = item.cols === 2 ? 140 : 100; // 픽셀 단위 반지름

        return {
          id: item.id,
          // 화면 중앙 부근에서 랜덤 시작
          x: Math.random() * (width - radius * 2) + radius,
          y: Math.random() * (height - radius * 2) + radius,
          // 랜덤 속도 (-1.5 ~ 1.5)
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          radius,
          mass: radius // 질량은 크기에 비례
        };
      });
    }

    const updatePhysics = () => {
      const bubbles = bubblesRef.current;
      const rect = container.getBoundingClientRect();
      const containerW = rect.width;
      const containerH = rect.height;

      // 1. 위치 업데이트 및 벽 충돌 처리
      bubbles.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;

        // 벽 충돌 (좌우)
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx *= -1;
        } else if (b.x + b.radius > containerW) {
          b.x = containerW - b.radius;
          b.vx *= -1;
        }

        // 벽 충돌 (상하)
        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy *= -1;
        } else if (b.y + b.radius > containerH) {
          b.y = containerH - b.radius;
          b.vy *= -1;
        }
      });

      // 2. 버블 간 충돌 처리 (Elastic Collision)
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = b1.radius + b2.radius;

          if (distance < minDistance) {
            // 충돌 감지!

            // 겹침 수정 (Overlap Correction) - 서로 붙지 않게 밀어냄
            const overlap = minDistance - distance;
            const nx = dx / distance;
            const ny = dy / distance;

            // 무게에 따라 밀려나는 정도 조정
            const totalMass = b1.mass + b2.mass;
            const m1Ratio = b2.mass / totalMass;
            const m2Ratio = b1.mass / totalMass;

            b1.x -= nx * overlap * m1Ratio;
            b1.y -= ny * overlap * m1Ratio;
            b2.x += nx * overlap * m2Ratio;
            b2.y += ny * overlap * m2Ratio;

            // 속도 벡터 반사 (Elastic Collision Physics)
            // v1' = v1 - 2*m2/(m1+m2) * <v1-v2, n> * n
            const k = 2 * (b1.vx * nx + b1.vy * ny - b2.vx * nx - b2.vy * ny) / (b1.mass + b2.mass);

            b1.vx -= k * b2.mass * nx;
            b1.vy -= k * b2.mass * ny;
            b2.vx += k * b1.mass * nx;
            b2.vy += k * b1.mass * ny;
          }
        }
      }

      // 3. DOM 업데이트 (직접 조작으로 리액트 렌더링 사이클 우회 -> 고성능)
      bubbles.forEach((b, i) => {
        const el = elementsRef.current[i];
        if (el) {
          // 중앙 정렬을 위해 transform 사용
          el.style.transform = `translate(${b.x - b.radius}px, ${b.y - b.radius}px)`;
        }
      });

      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    requestRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 화면 리사이즈 대응 (버블이 화면 밖으로 나가는 것 방지)
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();

      bubblesRef.current.forEach(b => {
        b.x = Math.min(Math.max(b.x, b.radius), width - b.radius);
        b.y = Math.min(Math.max(b.y, b.radius), height - b.radius);
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-slate-50 flex flex-col">
      {/* Title Area */}
      <div className="pt-24 pb-8 text-center z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Project Universe
        </h2>
        <p className="text-slate-600 text-xl max-w-2xl mx-auto">
          톡톡 튀는 아이디어들이 모여 만들어낸 결과물입니다.<br />
          원을 클릭하여 상세 내용을 확인하세요.
        </p>
      </div>

      {/* Physics Container */}
      <div
        ref={containerRef}
        className="flex-1 w-full h-[80vh] relative overflow-hidden"
      >
        {BENTO_ITEMS.map((item, index) => {
          const colorTheme = BRIGHT_COLORS[index % BRIGHT_COLORS.length];
          const isLarge = item.cols === 2;
          // 지름 = 반지름 * 2
          const sizePx = isLarge ? 280 : 200;

          return (
            <div
              key={item.id}
              ref={(el) => (elementsRef.current[index] = el)}
              onClick={() => handleProjectClick(item.id)}
              style={{
                width: sizePx,
                height: sizePx,
                position: 'absolute',
                top: 0,
                left: 0,
                willChange: 'transform' // 성능 최적화
              }}
              className={`
                rounded-full border-4 cursor-pointer shadow-lg
                flex flex-col items-center justify-center text-center p-4
                transition-shadow duration-300 hover:shadow-2xl hover:z-50
                ${colorTheme.bg} ${colorTheme.border} ${colorTheme.text}
              `}
            >
              <div className={`p-3 rounded-full mb-3 ${colorTheme.iconBg} ${colorTheme.iconColor} shadow-sm`}>
                <item.icon size={isLarge ? 32 : 24} strokeWidth={2.5} />
              </div>

              <h3 className={`font-bold leading-tight mb-1 px-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                {item.title}
              </h3>

              <p className="text-xs font-semibold opacity-70 mb-3 px-2 line-clamp-1">
                {item.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-1">
                {item.details.techStack.slice(0, 2).map((tech, i) => (
                  <span key={i} className="text-[10px] bg-white/60 px-2 py-0.5 rounded-full font-bold uppercase">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Hint */}
              <div className="absolute bottom-6 opacity-0 hover:opacity-100 transition-opacity">
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