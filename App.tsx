import React from 'react';
import PhoneFrame from './components/PhoneFrame';
import PhoneScreen from './components/PhoneScreen';
import WebMode from './components/WebMode';
import { useTheme } from './contexts/ThemeContext';
import { useViewMode } from './contexts/ViewModeContext';

function App() {
  const { theme } = useTheme();
  const { viewMode } = useViewMode();
  const isDark = theme === 'dark';

  // 웹 모드일 때는 기존 웹 레이아웃 표시
  if (viewMode === 'web') {
    return <WebMode />;
  }

  // 앱 모드일 때는 폰 프레임 표시
  return (
    <div className={`font-sans selection:bg-primary-600 selection:text-white w-full h-screen overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-slate-950' : 'bg-slate-100'
    }`}>
      {/* 배경 장식 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] ${
          isDark ? 'bg-primary-600/10' : 'bg-primary-400/20'
        }`} />
        <div className={`absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] ${
          isDark ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
        }`} />
      </div>

      {/* 메인 컨테이너 */}
      <main className="relative z-10 h-full flex items-center justify-center p-0 md:p-8">
        {/* 데스크탑: 폰 프레임 표시, 모바일: 전체 화면 */}
        <div className="hidden md:block h-full">
          <PhoneFrame>
            <PhoneScreen />
          </PhoneFrame>
        </div>

        {/* 모바일: 폰 프레임 없이 전체 화면 */}
        <div className="md:hidden w-full h-full">
          <PhoneScreen />
        </div>
      </main>
    </div>
  );
}

export default App;
