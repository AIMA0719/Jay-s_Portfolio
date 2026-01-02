import React from 'react';
import PhoneFrame from './components/PhoneFrame';
import PhoneScreen from './components/PhoneScreen';

function App() {
  return (
    <div className="bg-slate-950 font-sans selection:bg-primary-600 selection:text-white w-full min-h-screen">
      {/* 배경 장식 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      {/* 메인 컨테이너 */}
      <main className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        {/* 데스크탑: 폰 프레임 표시, 모바일: 전체 화면 */}
        <div className="hidden md:block">
          <PhoneFrame>
            <PhoneScreen />
          </PhoneFrame>
        </div>

        {/* 모바일: 폰 프레임 없이 전체 화면 */}
        <div className="md:hidden w-full h-screen">
          <PhoneScreen />
        </div>
      </main>
    </div>
  );
}

export default App;
