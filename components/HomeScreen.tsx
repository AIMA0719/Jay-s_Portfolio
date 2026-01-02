import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useViewMode } from '../contexts/ViewModeContext';

interface HomeScreenProps {
  onAppClick: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onAppClick }) => {
  const { theme } = useTheme();
  const { setViewMode } = useViewMode();
  const isDark = theme === 'dark';

  return (
    <div className={`h-full flex flex-col ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100'}`}>
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[20%] left-[10%] w-32 h-32 rounded-full blur-3xl ${isDark ? 'bg-primary-600/20' : 'bg-primary-400/30'}`} />
        <div className={`absolute bottom-[30%] right-[15%] w-40 h-40 rounded-full blur-3xl ${isDark ? 'bg-indigo-600/20' : 'bg-indigo-400/30'}`} />
      </div>

      {/* 앱 아이콘들 - 가운데 배치 */}
      <div className="flex-1 flex items-center justify-center gap-8">
        {/* 포트폴리오 앱 */}
        <motion.button
          onClick={onAppClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-3"
        >
          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg ${
            isDark
              ? 'bg-gradient-to-br from-primary-500 to-primary-700'
              : 'bg-gradient-to-br from-primary-400 to-primary-600'
          }`}>
            <Code2 size={40} className="text-white" strokeWidth={1.5} />
          </div>
          <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-700'}`}>
            Jay's 포트폴리오
          </span>
        </motion.button>

        {/* 웹으로 보기 앱 */}
        <motion.button
          onClick={() => setViewMode('web')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-3"
        >
          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg ${
            isDark
              ? 'bg-gradient-to-br from-indigo-500 to-indigo-700'
              : 'bg-gradient-to-br from-indigo-400 to-indigo-600'
          }`}>
            <Globe size={40} className="text-white" strokeWidth={1.5} />
          </div>
          <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-700'}`}>
            웹으로 보기
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default HomeScreen;
