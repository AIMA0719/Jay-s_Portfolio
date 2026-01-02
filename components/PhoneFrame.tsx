import React, { useState } from 'react';
import { Signal, Wifi, Battery, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import HomeScreen from './HomeScreen';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isAppOpen, setIsAppOpen] = useState(false);

  // 현재 시간 표시
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="relative w-[440px] h-[calc(100vh-4rem)] max-h-[800px] mx-auto">
      {/* Tablet Frame - 베젤 */}
      <div className={`relative rounded-[2.5rem] p-4 shadow-2xl border-4 h-full ${
        isDark
          ? 'bg-slate-950 border-slate-800'
          : 'bg-slate-200 border-slate-300'
      }`}>

        {/* 내부 스크린 영역 - 뷰포트 높이에 맞춤 */}
        <div className={`relative rounded-[2rem] overflow-hidden h-full ${isDark ? 'bg-slate-900' : 'bg-white'}`}>

          {/* Status Bar - 상태바 */}
          <div className={`absolute top-0 left-0 right-0 z-50 px-8 pt-4 pb-2 flex justify-between items-center ${
            isDark ? 'bg-gradient-to-b from-black/30 to-transparent' : 'bg-gradient-to-b from-white/50 to-transparent'
          }`}>
            {/* 시간 */}
            <span className={`text-base font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>
              {formatTime(time)}
            </span>

            {/* 카메라 (태블릿 스타일) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-3">
              <div className={`w-3 h-3 rounded-full border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-300 border-slate-400'}`} />
            </div>

            {/* 아이콘들 */}
            <div className="flex items-center gap-2">
              <Signal size={16} className={isDark ? 'text-white' : 'text-slate-700'} />
              <Wifi size={16} className={isDark ? 'text-white' : 'text-slate-700'} />
              <Battery size={16} className={isDark ? 'text-white fill-white' : 'text-slate-700 fill-slate-700'} />
            </div>
          </div>

          {/* Main Content Area - 메인 콘텐츠 */}
          <div className="h-full pt-10 pb-12 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {!isAppOpen ? (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <HomeScreen onAppClick={() => setIsAppOpen(true)} />
                </motion.div>
              ) : (
                <motion.div
                  key="app"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full"
                >
                  {children}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Home Button Only */}
          <div className={`absolute bottom-0 left-0 right-0 pb-2 pt-2 flex justify-center items-center ${
            isDark ? 'bg-gradient-to-t from-black/40 to-transparent' : 'bg-gradient-to-t from-white/60 to-transparent'
          }`}>
            <button
              onClick={() => isAppOpen && setIsAppOpen(false)}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'text-white/60 hover:text-white/90 hover:bg-white/10' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
              } ${isAppOpen ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <Circle size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* 외부 그림자/광택 효과 */}
      <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none">
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent" />
      </div>
    </div>
  );
};

export default PhoneFrame;
