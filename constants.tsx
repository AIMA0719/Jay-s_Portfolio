import { Smartphone, Zap, Globe, TrendingUp, Car, Code, Database, LayoutTemplate, ShieldCheck, Wrench, BarChart3, Layers, LayoutDashboard, GitBranch, Bot, Truck, Megaphone, FileText, CarFront } from 'lucide-react';
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
    description: "",
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
  // Row 1
  {
    id: 'dashboard',
    title: 'Preset Dashboard',
    subtitle: '실시간 데이터 시각화',
    description: '수십 가지 차량 데이터를 사용자가 원하는 대로 커스터마이징하여 모니터링합니다.',
    icon: LayoutDashboard,
    cols: 2,
    dark: true,
    details: {
      period: "2025.09 - 현재",
      background: "OBD 스캐너로 수집되는 수십 가지 차량 데이터를 사용자가 원하는 항목만 선택하여 실시간으로 모니터링할 수 있는 커스터마이징 대시보드가 필요했습니다. 또한 Infocar와 InfocarBiz 두 앱에서 동일한 기능을 코드 중복 없이 제공해야 했습니다.",
      tasks: [
        "통합 아키텍처 설계: IDashboardDataStore 인터페이스 기반으로 Infocar/InfocarBiz 분기 처리, BuildConfig를 활용한 컴파일 타임 분기",
        "4개 대시보드 개발: 주행(속도, RPM 등), TPMS, 배터리, 서브배터리",
        "연료 타입별 동적 UI: 가솔린, 디젤, LPG, 전기차, 수소차별로 표시 항목 자동 구성",
        "단위 변환 시스템: UnitConverter 클래스로 km↔mile, °C↔°F, psi↔bar↔kPa 실시간 변환",
        "임계값 경고 시스템: 타이어 압력/온도 임계값 설정 및 초과 시 색상 경고",
        "Jetpack Compose 마이그레이션: 설정 화면을 XML에서 Compose로 전환",
        "데이터 키 관리: SharedPreferences 기반 사용자별/차량별 설정 저장"
      ],
      techStack: ["Kotlin", "Jetpack Compose", "MVVM", "LiveData", "ViewModel", "SharedPreferences", "BuildConfig"],
      challenges: [
        "ViewModel 공유 문제: Activity 스코프의 공유 ViewModel로 Fragment 간 데이터 동기화 해결",
        "메모리 누수: Observer를 onPause에서 해제하고 onResume에서 재구독하는 패턴으로 최적화",
        "두 앱 코드 통합: 인터페이스 추상화로 DataStore 구현체만 분리, 90% 이상 코드 재사용",
        "실시간 데이터 업데이트: LiveData + DiffUtil로 불필요한 UI 갱신 최소화"
      ],
      results: [
        "코드 재사용률 90% 이상 달성 (Infocar/InfocarBiz 통합)",
        "Fragment 전환 시 메모리 사용량 40% 감소",
        "사용자 커스터마이징 만족도 향상 (설정 가능 항목 20개+)"
      ]
    }
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipeline',
    subtitle: '배포 자동화',
    description: '반복적인 빌드/배포 과정을 자동화하여 개발 생산성을 높였습니다.',
    icon: GitBranch,
    cols: 1,
    dark: false,
    details: {
      period: "2025.12",
      background: "수동 빌드 및 테스트로 인한 휴먼 에러와 시간 낭비를 줄이고, 코드 품질을 일관되게 유지하기 위해 자동화된 CI/CD 파이프라인이 필요했습니다.",
      tasks: [
        "GitHub Actions 워크플로우 설계: master/develop 브랜치 push 시 자동 트리거",
        "빌드 환경 구성: JDK 설정, Gradle 캐싱, Android SDK 설정 자동화",
        "Slack 연동: 빌드 성공/실패 시 git 채널에 실시간 알림 전송",
        "Unit Test 환경 구성: JUnit, Mockito 기반 테스트 자동 실행",
        "라이브러리 최적화: jcenter 종료 대응으로 JitPack 마이그레이션, ktx 라이브러리 정리"
      ],
      techStack: ["GitHub Actions", "Gradle", "JUnit", "Slack Webhook", "YAML"],
      challenges: [
        "jcenter 종료 대응: deprecated된 라이브러리들을 JitPack 또는 Maven Central로 마이그레이션",
        "Gradle 빌드 시간 단축: 캐싱 전략 적용으로 빌드 시간 최적화",
        "Slack Webhook 보안: GitHub Secrets를 활용한 토큰 관리"
      ],
      results: [
        "빌드 자동화로 수동 작업 시간 주당 2시간 절약",
        "코드 푸시 후 10분 내 빌드 결과 확인 가능",
        "팀 전체 빌드 상태 실시간 공유로 협업 효율 향상"
      ]
    }
  },

  // Row 2
  {
    id: 'ai-manager',
    title: 'AI Manager',
    subtitle: 'Native-Web 브릿지',
    description: '웹 기반 AI 서비스를 앱 내에서 Seamless하게 연결했습니다.',
    icon: Bot,
    cols: 1,
    dark: false,
    details: {
      period: "2025.11 - 2025.12",
      background: "웹 기반 AI 차량 관리 서비스를 앱 내에서 seamless하게 제공하기 위해 WebView와 Native 간의 양방향 통신이 필요했습니다.",
      tasks: [
        "WebView Bridge 클래스 설계: JavaScript Interface를 통한 Native ↔ Web 양방향 통신",
        "AI Controller 구현: AI 서비스 요청/응답 처리 컨트롤러",
        "화면 이동 처리: 웹에서 요청한 Native 화면으로의 딥링크 처리",
        "Orbit MVI 적용: 상태 관리를 위한 MVI 아키텍처 도입",
        "달성 여부 로직: AI 추천 미션의 달성 상태 추적 및 동기화",
        "WebViewFragment 리팩토링: reload 구조 개선 및 에러 핸들링 강화"
      ],
      techStack: ["Kotlin", "WebView", "JavaScript Interface", "Orbit MVI", "Coroutines"],
      challenges: [
        "비동기 통신 처리: runBlocking에서 suspend 함수로 전환하여 메인 스레드 블로킹 방지",
        "상태 동기화: Web과 Native 간 상태 불일치 문제를 MVI 단방향 데이터 플로우로 해결",
        "메모리 관리: WebView 생명주기와 Fragment 생명주기 동기화"
      ],
      results: [
        "Native-Web 간 통신 지연 시간 50% 단축",
        "AI 기능 사용률 증가 (웹 직접 접근 대비 앱 내 사용 선호)",
        "코드 유지보수성 향상 (MVI 패턴 적용)"
      ]
    }
  },
  {
    id: 'diagnosis',
    title: 'Vehicle Diagnosis',
    subtitle: '차량 진단 시스템',
    description: '복잡한 고장 코드를 분석하고 사용자 친화적인 UI로 제공합니다.',
    icon: Wrench,
    cols: 1,
    dark: true,
    details: {
      period: "2024.10 - 2024.12",
      background: "기존 차량 진단 기능의 UX가 복잡하고 사용자 피드백이 많아 전면 리뉴얼이 필요했습니다. 또한 서버 API 연동을 통해 더 정확한 고장 코드 정보를 제공해야 했습니다.",
      tasks: [
        "진단 페이지 UI/UX 전면 리뉴얼: 진단 메인, 진단 결과, 진단 내역, 고장 코드 삭제 페이지 재설계",
        "Coverage API 연동: 차량별 지원 가능한 ECU 및 진단 항목 조회",
        "DTC Info API 연동: 고장 코드별 상세 설명 및 해결 방법 제공",
        "진단 내역 관리: Room DB 기반 진단 결과 저장 및 조회",
        "다국어 지원: 12개 언어 번역 적용 (한국어, 영어, 일본어, 아랍어 등)",
        "진단 완료 알림: 현재/임시 고장 코드 발견 시 푸시 알림",
        "ViewPager2 최적화: 진단 결과 탭 전환 시 재생성 방지"
      ],
      techStack: ["Kotlin", "Retrofit", "Room", "ViewPager2", "ViewModel", "LiveData", "Coroutines"],
      challenges: [
        "비동기 UI 업데이트: 진단 중 실시간 ECU 응답을 UI에 반영할 때 발생하는 동기화 이슈 해결",
        "회전 시 상태 보존: ViewModel + SavedStateHandle로 화면 회전 시 진단 상태 유지",
        "아랍어 RTL 대응: 레이아웃 미러링 및 텍스트 방향 처리",
        "고장 코드 파싱: 다양한 형식의 DTC 코드 정규화 (00으로 시작하는 5자리 코드 처리)"
      ],
      results: [
        "진단 기능 사용률 30% 증가",
        "사용자 문의 50% 감소 (직관적인 UI로 개선)",
        "12개 언어 지원으로 글로벌 사용자 확대"
      ]
    }
  },
  {
    id: 'dispatch',
    title: 'Dispatch System',
    subtitle: '법인 차량 배차 관리',
    description: '기안부터 승인까지, 복잡한 배차 프로세스를 앱 하나로 해결했습니다.',
    icon: Truck,
    cols: 1,
    dark: false,
    details: {
      period: "2025.07 - 2025.09",
      background: "InfocarBiz 법인 고객사에서 차량 배차 관리 기능 요청이 있었습니다. 기안자가 배차를 신청하고 관리자가 승인/반려하는 워크플로우 시스템이 필요했습니다.",
      tasks: [
        "배차 등록 페이지: 배차 일시, 목적, 차량 선택 등 입력 폼 구현",
        "배차 이력 조회: 필터링(기간, 상태) 및 페이징 처리",
        "차량 선택 페이지: 사용 가능한 차량 목록 조회 및 선택 UI",
        "반려 사유 입력: 관리자 반려 시 사유 입력 및 표시",
        "Flow 기반 비동기 처리: Repository 패턴과 Flow를 활용한 데이터 스트림",
        "API 연동: 배차 등록/조회/승인/반려 REST API 연동",
        "필터 탭 UI: 전체/대기/승인/반려 상태별 필터링"
      ],
      techStack: ["Kotlin", "Flow", "Repository Pattern", "Retrofit", "RecyclerView", "DatePicker"],
      challenges: [
        "복잡한 상태 관리: 배차 상태(대기/승인/반려)에 따른 UI 분기 처리",
        "실시간 업데이트: 관리자 승인 시 기안자 화면 자동 갱신",
        "날짜/시간 선택: 배차 시작/종료 일시 선택 UX 최적화"
      ],
      results: [
        "법인 고객사 업무 효율 향상 (수기 관리 → 앱 관리)",
        "배차 승인 처리 시간 단축",
        "배차 이력 추적 및 통계 기능 제공"
      ]
    }
  },

  // Row 3
  {
    id: 'overlay',
    title: 'Overlay Service',
    subtitle: 'PIP 미니 대시보드',
    description: '내비게이션 위에서도 실시간 주행 데이터를 확인할 수 있습니다.',
    icon: Layers,
    cols: 1,
    dark: false,
    details: {
      period: "2024.02 - 2024.10",
      background: "네비게이션 앱 사용 중에도 속도, RPM, 연비 등 주행 데이터를 확인하고 싶다는 사용자 요청이 많았습니다. 다른 앱 위에 떠 있는 미니 대시보드가 필요했습니다.",
      tasks: [
        "WindowManager 기반 오버레이: TYPE_APPLICATION_OVERLAY를 활용한 플로팅 뷰",
        "실시간 데이터 표시: 속도, RPM, 연비, 주행 거리 등 선택 항목 표시",
        "드래그 이동: 터치 이벤트 처리로 오버레이 위치 자유롭게 이동",
        "크기 고정 기능: 사용자가 원하는 크기로 고정",
        "LifeCycle Observer 연동: MainActivity 생명주기와 Service 동기화",
        "자동 시작/종료: 주행 시작 시 자동 표시, 주행 종료 시 자동 숨김",
        "권한 관리: SYSTEM_ALERT_WINDOW 권한 요청 및 처리"
      ],
      techStack: ["Kotlin", "WindowManager", "Service", "LiveData", "LifeCycle Observer"],
      challenges: [
        "메모리 누수: LiveData Observer 중복 등록으로 인한 OOM 해결 (Observer 등록을 1회로 제한)",
        "Service 생명주기: Activity 종료 시에도 Service가 남아있는 문제 해결",
        "Android 버전 대응: Android 10+ 백그라운드 제한 대응",
        "배터리 최적화: 데이터 업데이트 주기 최적화로 배터리 소모 최소화"
      ],
      results: [
        "사용자 만족도 향상 (앱 리뷰 긍정 피드백 증가)",
        "메모리 누수 완전 해결로 앱 안정성 향상",
        "네비게이션 앱과 동시 사용 가능"
      ]
    }
  },
  {
    id: 'manufacturer-data',
    title: 'Manufacturer Data',
    subtitle: '제조사 전용 데이터',
    description: '표준 OBD 데이터를 넘어 제조사 특화 데이터까지 제공합니다.',
    icon: Database,
    cols: 2,
    dark: true,
    details: {
      period: "2024.05 - 2024.12",
      background: "표준 OBD 데이터 외에 제조사별 고유 데이터(DPF 포집량, 변속기 온도 등)를 제공하여 프리미엄 서비스로 차별화가 필요했습니다.",
      tasks: [
        "MOBD 프로파일 관리: 차량별 지원 프로파일 목록 관리",
        "제조사 DB 다운로드: 암호화된 DB 파일 다운로드 및 내부 저장소 저장",
        "DB 버전 관리: 서버와 로컬 버전 비교 후 업데이트",
        "구매 유도 UI: 프로모션 다이얼로그, 배너 광고 연동",
        "조회 가능 데이터 확인: 차량별 지원 항목 미리보기",
        "랜딩 페이지: 제조사 데이터 소개 및 구매 유도 페이지",
        "도움말 페이지: 기능 설명 및 FAQ"
      ],
      techStack: ["Kotlin", "Room", "SQLCipher", "Retrofit", "DownloadManager"],
      challenges: [
        "대용량 DB 다운로드: 백그라운드 다운로드 및 프로그레스 표시",
        "SQLCipher 암호화: 제조사 DB 보안을 위한 암호화 적용",
        "프로파일 정렬: 최근 사용/다운로드 순으로 동적 정렬"
      ],
      results: [
        "제조사 데이터 구매 전환율 향상",
        "프리미엄 사용자 만족도 증가",
        "데이터 정확도 향상으로 신뢰도 상승"
      ]
    }
  },

  // Row 4
  {
    id: 'revenue',
    title: 'Ad Monetization',
    subtitle: '다중 광고 네트워크 미디에이션 시스템 구축',
    description: 'Fill rate와 eCPM을 최적화하며 사용자 경험을 해치지 않는 수익화 모델을 구축했습니다.',
    icon: Megaphone,
    cols: 2,
    dark: true,
    details: {
      period: "2024.05 - 2025.12",
      background: "광고 수익 극대화를 위해 단일 네트워크의 의존도를 낮추고, 다중 광고 네트워크 미디에이션 시스템 도입이 필요했습니다. Fill rate와 eCPM을 최적화하면서 사용자 경험을 해치지 않는 광고 전략이 필요했습니다.",
      tasks: [
        "미디에이션 SDK 통합: AdMob을 허브로 ironSource, Yandex, Pangle, AppLovin MAX, Mintegral 등 6개 네트워크 연동",
        "광고 유형별 최적화: 배너(Adaptive), 네이티브(5:1 비율), 전면(진단 시점), 보상형, 오프닝 광고 구현",
        "GDPR/CCPA 대응: Google UMP를 활용한 지역별 사용자 동의 관리 및 초기화 로직 구현",
        "안정성 확보: 저사양 기기 Timeout 처리, 무한 요청 방지, Null 체크 강화",
        "UI/UX 개선: ViewOutlineProvider로 렌더링 최적화, 로드 중 Placeholder, 자체 프로모션 Fallback",
        "정책 관리: Firebase Remote Config로 노출 빈도 제어, 구독자 면제 로직, 타사 OBD 차별화 정책 적용"
      ],
      techStack: ["Google Mobile Ads SDK", "ironSource", "Yandex", "Pangle", "AppLovin MAX", "Mintegral", "Google UMP", "Firebase Remote Config", "Kotlin"],
      challenges: [
        "의존성 충돌 해결: Gradle 의존성 트리 분석을 통해 SDK 간 버전 충돌 및 중복 클래스 문제 해결",
        "벤더사 이슈 디버깅: Pangle SDK의 Context NPE 등 특정 벤더사 버그를 Wrapper 클래스로 방어",
        "정책 변경 대응: Remote Config를 통해 앱 업데이트 없이 광고 타입/위치를 실시간으로 제어하는 구조 구축",
        "메모리 최적화: RecyclerView에서 네이티브 광고 뷰의 명시적 해제 로직으로 메모리 누수 방지",
        "저사양 기기 대응: 광고 로드 로직을 백그라운드 스레드로 분리하여 UI 프리징 현상 해결"
      ],
      results: [
        "Fill rate 95% 이상 달성 (단일 네트워크 대비 20% 향상)",
        "eCPM 평균 30% 개선 (미디에이션 경쟁 입찰 효과)",
        "Crashlytics 광고 관련 크래시 90% 감소",
        "사용자 이탈률 최소화 및 GDPR 컴플라이언스 100% 준수"
      ]
    }
  },
  {
    id: 'records',
    title: 'Driving Record',
    subtitle: '주행 기록 시스템',
    description: '대용량 주행 데이터를 분석하고 엑셀 리포트를 제공합니다.',
    icon: FileText,
    cols: 1,
    dark: false,
    details: {
      period: "2024.05 - 2024.09",
      background: "법인 차량 관리자들의 주행 일지 엑셀 내보내기 요청과 개인 사용자들의 주행 목적 관리 기능 요청이 있었습니다.",
      tasks: [
        "엑셀 내보내기: Apache POI 활용, 종합 데이터 시트 포함",
        "주행 목적 기본값: 차량별/사용자별 기본 주행 목적 설정",
        "이벤트 카운트: 급가속, 급감속, 과속 횟수 집계",
        "GPS 주행 거리: OBD 거리 외 GPS 기반 거리 측정 옵션",
        "상세 주행 기록: 시간대별 속도, RPM, 연비 그래프",
        "주행 기록 수정: 출발지/도착지, 주행 목적 수정 기능",
        "서버 동기화: 주행 기록 백업 및 복구 API 연동"
      ],
      techStack: ["Kotlin", "Apache POI", "Room", "MPAndroidChart", "Retrofit"],
      challenges: [
        "대용량 데이터 처리: 장거리 주행 시 수천 개의 데이터 포인트 처리",
        "엑셀 파일 생성: 메모리 효율적인 스트리밍 방식 적용",
        "이벤트 카운트 최적화: DB 접근 횟수 최소화로 성능 개선"
      ],
      results: [
        "법인 고객 업무 효율 향상 (수기 작성 → 자동 생성)",
        "주행 목적 입력률 증가 (기본값 설정으로)",
        "안전 운전 유도 (이벤트 카운트 시각화)"
      ]
    }
  },

  // Row 5
  {
    id: 'registration',
    title: 'Vehicle Registration',
    subtitle: '차량 등록 시스템',
    description: 'VIN(차대번호) 인식으로 복잡한 차량 정보를 한 번에 등록합니다.',
    icon: Car,
    cols: 1,
    dark: false,
    details: {
      period: "2024.07 - 2024.08",
      background: "사용자가 일일이 차량 정보를 입력하는 번거로움을 줄이기 위해, 차대번호(VIN)만으로 차량 정보를 자동 완성하는 시스템이 필요했습니다.",
      tasks: [
        "VIN 파싱 로직: 17자리 VIN에서 제조사, 모델, 연식 추출",
        "제조사 로고 적용: 23개 제조사 고해상도(300x300) 로고 적용",
        "제조사/모델/연식 선택 UI: 계층형 선택 인터페이스",
        "차량 이미지 관리: 내부 저장소 이미지 저장 및 관리",
        "서버 동기화: 차량 정보 백업/복구/삭제 API 연동",
        "차량 목록 정렬: 국가별 제조사 정렬 (한국: 현대/기아 우선)"
      ],
      techStack: ["Kotlin", "Retrofit", "Glide", "Room"],
      challenges: [
        "VIN 파싱 정확도: 다양한 제조사별 VIN 규칙 대응",
        "이미지 파일 관리: 차량 삭제 시 연관 이미지 파일 정리",
        "제조사 로고 최적화: 다양한 해상도에서 선명하게 표시"
      ],
      results: [
        "차량 등록 시간 단축 (VIN 입력만으로 자동 완성)",
        "사용자 편의성 향상",
        "차량 정보 정확도 향상"
      ]
    }
  },
  {
    id: 'auto',
    title: 'Android Auto Support',
    subtitle: '차량 인포테인먼트',
    description: '모바일을 넘어 차량 디스플레이까지, 끊김 없는 경험을 설계했습니다.',
    icon: CarFront,
    cols: 2,
    dark: true,
    details: {
      period: "2024.10 - 2024.11",
      background: "차량 내장 디스플레이에서 인포카 앱을 사용하고 싶다는 요청이 있었습니다. Android Auto를 통해 안전하게 차량 정보를 확인할 수 있어야 했습니다.",
      tasks: [
        "표준 대시보드 화면: 속도, RPM, 연비 등 기본 정보 표시",
        "제조사 대시보드 화면: 프리미엄 사용자용 상세 데이터 표시",
        "ECU 서칭 중 접근 제한: 데이터 준비 전 화면 접근 차단",
        "화면 전환: 대시보드 간 전환 및 설정 화면 이동",
        "Context 관리: Android Auto 전용 Context 처리"
      ],
      techStack: ["Android Auto SDK", "Kotlin"],
      challenges: [
        "제한된 UI: Android Auto 디자인 가이드라인 준수",
        "실시간 데이터: 차량 디스플레이에 지연 없이 데이터 표시",
        "생명주기 관리: Android Auto 연결/해제 시 상태 관리"
      ],
      results: [
        "Android Auto 사용자 확보",
        "운전 중 안전한 데이터 확인 가능",
        "앱 사용 편의성 향상"
      ]
    }
  },
];