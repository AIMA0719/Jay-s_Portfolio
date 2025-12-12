import { Smartphone, Zap, Globe, TrendingUp, Car, Code, Database, LayoutTemplate, ShieldCheck, Wrench, BarChart3, Layers } from 'lucide-react';
import { Experience, Skill, BentoItemProps } from './types';

export const PERSONAL_INFO = {
  name: "최정원",
  role: "Android Developer",
  email: "jayChoi57@gmail.com",
  github: "https://github.com/AIMA0719",
  shortIntro: "사용자의 경험을 코드로 번역하는 개발자",
  heroTitle: "논리는 치열하게,\n경험은 다정하게.",
  about: "코드는 논리적이어야 하지만, 경험은 감성적이어야 한다고 믿습니다. 3.5년간 인포카에서 20개국 사용자의 피드백을 먹고 자랐습니다. 버그 잡는 것보다 사용자의 '아, 편하다'라는 한마디를 듣는 것을 더 좋아합니다.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "infocar",
    company: "주식회사 인포카",
    role: "Android 담당자 / 전임 연구원",
    period: "2022.08 - 현재 (3년 5개월)",
    description: "", // Requested to remove the text
    highlights: [
      {
        title: "📈 광고 수익 모델 고도화 (Revenue)",
        detail: "단일 광고 네트워크의 한계를 극복하기 위해 Google Admob Mediation을 도입하여 6개 광고 네트워크(Pangle, Yandex 등)를 연동했습니다. GDPR 대응 및 광고 서빙 인프라를 구축했습니다.",
        impact: "도입 전 대비 광고 수익률 120% 상승"
      },
      {
        title: "⚡️ 레거시 청산 및 아키텍처 전환 (Refactoring)",
        detail: "노후화된 Java/MVP 코드를 100% Kotlin/MVVM으로 전환했습니다. Boilerplate 코드를 제거하고 View와 비즈니스 로직을 분리하여 유지보수성을 극대화했습니다.",
        impact: "Null Safety 확보 및 테스트 용이성 개선"
      },
      {
        title: "🚘 Android Auto 신규 개발 (Platform Expansion)",
        detail: "모바일 앱의 핵심 기능을 차량용 디스플레이(Android Auto)에 맞춰 포팅하고, Driving Task 가이드라인을 준수한 UI/UX를 설계 및 구현했습니다.",
        impact: "사용자 접점 확장 및 운전 중 사용성 확보"
      },
      {
        title: "🏢 B2B '인포카 비즈' 구축 (New Service)",
        detail: "기업 고객을 위한 차량 관제 및 관리 기능을 담은 B2B 전용 앱을 신규 구축했습니다. Client DB 구조 설계부터 Screen Flow까지 개발을 주도했습니다.",
        impact: "B2B 시장 진출을 위한 기술적 기반 마련"
      },
      {
        title: "🌍 글로벌 20개국 UI/UX 최적화 (Globalization)",
        detail: "20개 언어를 지원하며 국가별 텍스트 길이와 UX 차이를 고려한 가변 UI를 구현했습니다. 정보 구조를 개선해 접근성을 높였습니다.",
        impact: "글로벌 사용자 UX 편차 해소 및 만족도 증가"
      },
      {
        title: "📊 데이터 처리 및 안정성 개선 (Data Engineering)",
        detail: "주행/고장 데이터의 가독성을 높이고, 엑셀 다운로드 및 DB 정규화를 진행했습니다. Firebase Remote Config/FCM을 활용해 배포 없이 긴급 이슈를 대응하는 프로세스를 구축했습니다.",
        impact: "앱 안정성 향상 및 데이터 활용 편의성 증대"
      }
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["Kotlin (Native)", "Java"]
  },
  {
    category: "Android Core",
    items: ["Jetpack Compose", "MVVM / Clean Arch", "Coroutines & Flow", "Room / SQLCipher"]
  },
  {
    category: "Specialized",
    items: ["Android Auto", "BLE (RxAndroidBLE)", "Google Maps SDK", "AdMob Mediation"]
  },
  {
    category: "DevOps & Tools",
    items: ["GitHub Actions", "Firebase Suite", "Jira / Slack", "Figma"]
  }
];

export const BENTO_ITEMS: BentoItemProps[] = [
  {
    id: 'revenue',
    title: 'Ad Monetization',
    subtitle: '수익화 시스템 구축',
    description: '6개 광고 네트워크 미디에이션 통합으로 트래픽을 매출로 전환했습니다.',
    icon: TrendingUp,
    cols: 2,
    dark: true,
    details: {
      period: "2025.03 - 2025.12",
      background: "광고 수익 극대화를 위해 단일 네트워크 의존도를 낮추고, 다중 광고 네트워크 미디에이션 시스템 도입이 필요했습니다.",
      tasks: [
        "미디에이션 SDK 통합: Google AdMob, Yandex, AppLovin, ironSource, Pangle, Mintegral",
        "광고 유형별 최적화: 배너(높이 고정으로 레이아웃 점프 방지), 네이티브, 보상형 광고 구현",
        "GDPR/CCPA 규정 대응: 사용자 동의 상태에 따른 광고 초기화 로직 구현",
        "안정성 확보: 저사양 기기 및 서버 장애 시 Timeout 처리, 무한 요청 버그 수정",
        "UI 개선: RoundedCorners → ViewOutlineProvider 전환으로 렌더링 성능 최적화"
      ],
      techStack: ["Google Mobile Ads SDK 23.6.0", "IronSource Mediation", "Yandex Ads", "Google UMP"],
      challenges: [
        "여러 광고 SDK 간 버전 충돌 및 의존성 문제 해결",
        "Pangle 배너 광고 Context NPE 등 벤더사 별 특이 이슈 디버깅",
        "광고 정책 변경에 따른 긴급 대응 (네이티브 → 배너 전환) 및 배포"
      ],
      results: [
        "Fill rate 및 eCPM 대폭 개선",
        "Crashlytics 광고 관련 크래시 감소로 앱 안정성 향상"
      ]
    }
  },
  {
    id: 'global',
    title: 'Global Scale',
    subtitle: '20개국어 지원',
    description: '전 세계 1000만 사용자를 위해 20개 언어와 다양한 UI 환경을 지원합니다.',
    icon: Globe,
    cols: 1,
    dark: false,
    details: {
      period: "2022.02 - 상시",
      background: "글로벌 사용자 비중이 높은 서비스 특성상, 다양한 언어와 기기 환경에 대한 완벽한 대응이 필요했습니다.",
      tasks: [
        "다국어 확장: 태국어, 베트남어, 터키어 등 20개 언어 리소스 관리 및 적용",
        "특수문자(프랑스어/이탈리아어 등) 표시 오류 수정 및 폰트 대응",
        "UI 대응: 언어별 텍스트 길이에 따른 UI 자동 조절(Auto-sizing) 로직 개선",
        "주차 알림 UX 개선: 주차 시간 → 출차 시간 알림으로 UX 변경 및 Fallback 로직 추가"
      ],
      techStack: ["Android Resource System", "LocationManager", "Custom Views"],
      results: [
        "국가별 UX 편차 해소 및 글로벌 리뷰 평점 상승",
        "위치 기반 기능(주차 확인) 안정성 확보"
      ]
    }
  },
  {
    id: 'architecture',
    title: 'Modern Arch',
    subtitle: '리팩토링 & CI/CD',
    description: 'Legacy 청산, CI/CD 구축. 개발자 경험(DX)도 중요하니까요.',
    icon: Code,
    cols: 1,
    dark: false,
    details: {
      period: "2022 - 2024",
      background: "지속 가능한 서비스를 위해 레거시 코드를 개선하고, 배포 프로세스를 자동화해야 했습니다.",
      tasks: [
        "차계부 리뉴얼: Clean Architecture & MVVM 도입, Room DB 설계, 커스텀 키보드 구현",
        "CI/CD 구축: GitHub Actions 기반 자동 빌드, 테스트, Slack 알림 연동",
        "Android 12 대응: Exact Alarm 권한 플로우 및 PendingIntent Flag 수정",
        "메모리 누수 해결: LocationManager 및 Context 참조 문제 해결"
      ],
      techStack: ["Kotlin", "MVVM", "GitHub Actions", "Room DB", "Coroutines Test"],
      challenges: [
        "JCenter 종료에 따른 JitPack 마이그레이션",
        "복잡한 화면 간 데이터 전달 로직을 ViewModel 공유로 단순화"
      ],
      results: [
        "빌드 및 배포 자동화로 개발 생산성 증대",
        "앱 크래시율 감소 및 코드 유지보수성 향상"
      ]
    }
  },
  {
    id: 'auto',
    title: 'Android Auto',
    subtitle: 'In-Car Experience',
    description: '모바일을 넘어 자동차 디스플레이까지. 끊김 없는 운전 경험을 설계했습니다.',
    icon: Car,
    cols: 2,
    dark: true,
    details: {
      period: "2025.01 - 2025.02",
      background: "운전 중 스마트폰 조작 없이 안전하게 차량 정보를 확인할 수 있도록 Android Auto 플랫폼 지원이 필수적이었습니다.",
      tasks: [
        "CarAppService 기반 앱 구조 설계 및 CarContext 캡슐화",
        "대시보드 구현: 실시간 RPM, 속도, 연비 데이터 시각화",
        "백그라운드 BLE 연결 연동 및 권한 처리 로직 구현",
        "운전자 안전 로직: 주행 중 조작 제한 및 토스트 안내 처리",
        "다국어 번역 적용 및 인포카 비즈 앱 분기 처리"
      ],
      techStack: ["Android Car App Library 1.7.0", "Foreground Service", "BLE Communication"],
      challenges: [
        "제한된 Car App Library 템플릿 내에서 복잡한 차량 데이터 시각화 구현",
        "메인 앱과 Auto 앱 간의 데이터 동기화 및 상태 공유 아키텍처 설계",
        "화면 갱신(invalidate) 최적화를 통한 배터리 및 성능 이슈 해결"
      ],
      results: [
        "Google Play Store 심사 통과 및 정식 서비스 런칭",
        "모바일 앱과의 유기적인 연결 경험 제공"
      ]
    }
  },
];