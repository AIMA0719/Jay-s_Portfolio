import React from 'react';
import { Signal, Wifi, Battery } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
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
    <div className="relative w-full max-w-[430px] mx-auto">
      {/* Phone Frame - 베젤 */}
      <div className="relative bg-slate-950 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">

        {/* 내부 스크린 영역 */}
        <div className="relative bg-slate-900 rounded-[2.25rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>

          {/* Status Bar - 상태바 */}
          <div className="absolute top-0 left-0 right-0 z-50 px-6 pt-3 pb-2 flex justify-between items-center bg-gradient-to-b from-black/30 to-transparent">
            {/* 시간 */}
            <span className="text-white text-sm font-semibold">
              {formatTime(time)}
            </span>

            {/* Dynamic Island / 노치 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2">
              <div className="w-28 h-7 bg-black rounded-full flex items-center justify-center">
                {/* 카메라 홀 */}
                <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
              </div>
            </div>

            {/* 아이콘들 */}
            <div className="flex items-center gap-1.5">
              <Signal size={14} className="text-white" />
              <Wifi size={14} className="text-white" />
              <Battery size={14} className="text-white fill-white" />
            </div>
          </div>

          {/* Main Content Area - 메인 콘텐츠 */}
          <div className="h-full pt-12 pb-8 overflow-hidden">
            {children}
          </div>

          {/* Gesture Bar - 제스처 바 */}
          <div className="absolute bottom-0 left-0 right-0 pb-2 pt-4 flex justify-center bg-gradient-to-t from-black/30 to-transparent">
            <div className="w-32 h-1 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* 외부 그림자/광택 효과 */}
      <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent" />
      </div>
    </div>
  );
};

export default PhoneFrame;
