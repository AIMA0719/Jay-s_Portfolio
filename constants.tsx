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



export const BENTO_ITEMS: BentoItemProps[] = [
  // 2025 Projects (Sorted by latest)
  {
    id: 'cicd',
    title: 'CI/CD Pipeline',
    subtitle: '배포 자동화',
    description: '반복적인 빌드/배포 과정을 자동화하여 개발 생산성을 높였습니다.',
    icon: GitBranch,
    cols: 2,
    dark: true,
    details: {
      period: "2025.12",
      background: "기존에는 개발자가 로컬 머신에서 수동으로 빌드하여 APK/AAB 파일을 추출하고, 슬랙으로 공유하거나 스토어에 업로드했습니다. 이 과정에서 Human Error가 빈번히 발생했고, 빌드 시간 동안 개발자가 다른 작업을 하지 못하는 비효율이 있었습니다. 이를 해결하기 위해 GitHub Actions를 도입하여 빌드부터 배포까지의 전 과정을 자동화하기로 결정했습니다.",
      tasks: [
        {
          title: "GitHub Actions 워크플로우 설계",
          items: [
            "트리거 조건 설정: master/develop 브랜치 push 시 자동 실행",
            "브랜치 보호 규칙: PR 머지 전 CI 통과 필수 설정",
            "병렬 작업 구성: lint, build, test 단계 병렬 실행으로 시간 단축"
          ]
        },
        {
          title: "빌드 환경 구성",
          items: [
            "JDK 설정: actions/setup-java로 JDK 17 자동 설정",
            "Gradle 캐싱: actions/cache로 .gradle 디렉토리 캐싱, 빌드 시간 50% 단축",
            "Android SDK 설정: 필요한 SDK 컴포넌트 자동 설치",
            "환경 변수 관리: GitHub Secrets로 API 키, 서명 키 등 민감 정보 관리"
          ]
        },
        {
          title: "Slack 연동",
          items: [
            "Webhook 설정: 빌드 성공/실패 시 git 채널에 실시간 알림",
            "메시지 포맷: 커밋 정보, 빌드 시간, 실패 원인 등 상세 정보 포함",
            "멘션 기능: 실패 시 담당 개발자 자동 멘션"
          ]
        },
        {
          title: "Unit Test 환경 구성",
          items: [
            "JUnit 5 설정: 테스트 프레임워크 최신 버전 적용",
            "Mockito 연동: 의존성 모킹을 위한 라이브러리 설정",
            "테스트 리포트: HTML 리포트 자동 생성 및 아티팩트 저장",
            "코드 커버리지: Jacoco 연동으로 커버리지 측정"
          ]
        },
        {
          title: "라이브러리 최적화",
          items: [
            "jcenter 종료 대응: deprecated된 라이브러리 JitPack/Maven Central로 마이그레이션",
            "ktx 라이브러리 정리: 미사용 라이브러리 제거, 버전 통일",
            "의존성 충돌 해결: Gradle 의존성 트리 분석 후 exclude 규칙 적용"
          ]
        }
      ],
      techStack: ["GitHub Actions", "Gradle", "JUnit 5", "Mockito", "Jacoco", "Slack Webhook", "YAML", "Kotlin"],
      challenges: [
        {
          title: "빌드 환경의 일관성 확보 및 보안",
          problem: "개발자마다 JDK 버전이나 환경 변수 설정이 조금씩 달라 빌드 결과물이 상이할 수 있었고, Keystore와 같은 민감한 서명 키를 안전하게 관리하는 것이 중요했습니다.",
          solution: "GitHub Secrets를 활용하여 Keystore 및 API Key를 암호화하여 저장하고, 워크플로우 실행 시에만 복호화하여 주입되도록 구성했습니다. Docker 컨테이너 기반의 클린 빌드 환경을 구축하여 언제나 동일한 환경에서 빌드가 수행됨을 보장했습니다."
        },
        {
          title: "다양한 배포 채널 자동화 (Slack, Firebase, Play Store)",
          problem: "QA용 내부 배포와 실사용자용 프로덕션 배포의 프로세스가 달라야 했으며, 빌드 완료 시 관련 담당자에게 즉시 알림이 가야 했습니다.",
          solution: "트리거 조건(Push to Dev, Tagging Release)에 따라 워크플로우를 분기했습니다. QA 빌드는 Firebase App Distribution으로 업로드 후 Slack 웹훅으로 자동 알림을 전송하고, 프로덕션 빌드는 구글 플레이 콘솔 API를 연동하여 내부 테스트 트랙으로 자동 업로드되도록 파이프라인을 구축했습니다."
        }
      ],
      results: [
        "빌드 및 배포 소요 시간 90% 단축 (수동 개입 0)",
        "배포 프로세스 실수(잘못된 버전 코드 등) 완전 차단",
        "개발자가 빌드 대기 시간 없이 코딩에 집중할 수 있는 환경 조성"
      ]
    }
  },
  {
    id: 'ai-manager',
    title: 'AI Manager',
    subtitle: 'Native-Web 브릿지',
    description: '웹 기반 AI 서비스를 앱 내에서 Seamless하게 연결했습니다.',
    icon: Bot,
    cols: 1,
    dark: true,
    details: {
      period: "2025.11 - 2025.12",
      background: "인포카의 차별점인 AI 차량 진단 및 예측 정비 서비스를 앱에 빠르게 도입해야 했습니다. AI 엔진은 서버와 웹 기반으로 구축되어 있었으므로, 이를 네이티브 앱 경험과 이질감 없이 녹여내는 것이 관건이었습니다. 단순 WebView 로딩을 넘어, 앱의 센서 데이터가 웹으로 실시간 전달되어야 했습니다.",
      tasks: [
        {
          title: "WebView Bridge 아키텍처 설계",
          items: [
            "JavaScript Interface 구현: @JavascriptInterface 어노테이션으로 Native 함수 노출",
            "AI Manager Bridge 클래스: Web → Native 요청 처리 전담 클래스",
            "AI Controller: Native → Web 데이터 전송 컨트롤러",
            "양방향 통신 프로토콜: JSON 기반 메시지 규격 정의"
          ]
        },
        {
          title: "화면 이동 처리",
          items: [
            "딥링크 처리: 웹에서 요청한 Native 화면으로 이동",
            "화면 스택 관리: 뒤로가기 시 올바른 화면으로 복귀",
            "매니저 화면 이동 분석: 복잡한 화면 전환 플로우 설계"
          ]
        },
        {
          title: "Orbit MVI 적용",
          items: [
            "단방향 데이터 플로우: State → View → Intent → Reducer 사이클",
            "상태 관리 일원화: AI Manager 관련 모든 상태를 ViewModel에서 관리",
            "Side Effect 처리: 화면 이동, 토스트 등 일회성 이벤트 처리"
          ]
        },
        {
          title: "WebViewFragment 리팩토링",
          items: [
            "reload 구조 개선: 네트워크 오류 시 재시도 로직 체계화",
            "에러 핸들링 강화: UNKNOWN ERROR 등 예외 상황 대응",
            "메모리 관리: WebView 생명주기와 Fragment 생명주기 동기화"
          ]
        },
        {
          title: "달성 여부 로직",
          items: [
            "AI 미션 추적: 추천 미션의 달성 상태 실시간 동기화",
            "로컬 캐싱: 네트워크 오류 시에도 마지막 상태 유지",
            "서버 동기화: 달성 완료 시 서버에 결과 전송"
          ]
        }
      ],
      techStack: ["Kotlin", "WebView", "JavaScript Interface", "Orbit MVI", "Coroutines", "ViewModel", "LiveData"],
      challenges: [
        {
          title: "Native-Web 간의 복잡한 비동기 데이터 통신 헨들링",
          problem: "웹에서 AI 분석을 위해 앱 내의 주행 누적 데이터나 최신 진단 결과를 요청할 때, JavaScript Interface는 동기적으로 값을 반환하기 어려운 구조였습니다.",
          solution: "요청 ID 기반의 메시지 큐 시스템을 설계했습니다. 웹이 요청을 보내면 앱은 즉시 '수신 확인'을 리턴하고, 백그라운드에서 데이터를 조회한 뒤 `window.onReceiveData(id, data)` 형태의 콜백 함수를 실행하여 비동기적으로 데이터를 주입하는 패턴을 정립했습니다."
        },
        {
          title: "웹뷰 성능 최적화 및 UX 개선",
          problem: "웹뷰 로딩 속도가 느려 사용자 이탈이 발생했고, 네이티브 화면 전환 시 상태가 초기화되는 문제가 있었습니다.",
          solution: "앱 실행 시점에 웹뷰를 미리 워밍업(Pre-warming)하고, 화면이 백그라운드로 가더라도 프로세스를 즉시 kill하지 않도록 생명주기를 관리했습니다. 또한 로딩 중에는 네이티브 스켈레톤 UI를 보여주어 체감 대기 시간을 줄였습니다."
        }
      ],
      results: [
        "웹 기능 배포 즉시 앱에 반영되는 구조로 업데이트 주기 단축 (2주 → 즉시)",
        "네이티브 개발 리소스 투입 없이 AI 신규 기능 지속 추가 가능 환경 구축",
        "하이브리드 앱 아키텍처의 성공적 사례로 사내 표준 프레임워크 등재"
      ]
    }
  },
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
      background: "기존의 Infocar와 Infocar Biz 앱은 서로 다른 대시보드 코드를 유지보수하고 있어, 기능 추가 시 중복 개발과 버그 발생 위험이 컸습니다. 이를 해결하기 위해 하나의 통합된 대시보드 모듈을 설계하여 두 앱에서 공통으로 사용할 수 있는 구조가 필요했습니다. 단순히 UI를 통일하는 것을 넘어, OBD-II 데이터 처리 로직을 효율적으로 관리할 수 있는 아키텍처가 요구되었습니다.",
      tasks: [
        {
          title: "통합 아키텍처 설계",
          items: [
            "IDashboardDataStore 인터페이스 설계: Infocar/InfocarBiz 공통 인터페이스 정의",
            "BuildConfig 기반 컴파일 타임 분기: isInfocar 플래그로 구현체 자동 선택",
            "DashboardConfig/DashboardConfigBiz 분리: 앱별 설정 항목 및 데이터 인덱스 관리",
            "SharedPreferences 키 전략: 프로파일 ID/차량 SID 기반 사용자별 설정 저장"
          ]
        },
        {
          title: "4개 대시보드 개발",
          items: [
            "주행 대시보드: 속도, RPM, 기어, 주행거리, APS, TPS, 엔진부하, 오일온도, 냉각수온도, 연료잔량, 흡기온도, MAF",
            "TPMS 대시보드: 4륜 타이어 압력/온도 실시간 모니터링, 임계값 경고 시스템",
            "배터리 대시보드: 일반차량(SOC, 전압, 전류, 온도, SOH) / 전기차(BMS 데이터) / 수소차(스택 데이터) 분리",
            "서브배터리 대시보드: 셀 전압 편차, 밸런싱 상태, 충전 횟수, 절연 저항"
          ]
        },
        {
          title: "연료 타입별 동적 UI 구성",
          items: [
            "가솔린/디젤/LPG: 엔진 중심 데이터 (RPM, 연료분사, DPF 등)",
            "전기차: 모터 속도/토크, 인버터 온도, 최대 충방전 파워",
            "수소차: 수소 잔량, 스택 전압, 냉각수 입출구 온도, 누출 경고"
          ]
        },
        {
          title: "단위 변환 시스템",
          items: [
            "UnitConverter 클래스 구현: km↔mile, °C↔°F, psi↔bar↔kPa 실시간 변환",
            "사용자 선호 단위 저장: 항목별 개별 단위 설정 가능",
            "임계값 자동 변환: 단위 변경 시 저장된 임계값도 자동 변환"
          ]
        },
        {
          title: "Jetpack Compose 마이그레이션",
          items: [
            "MOBDDashboardSettingsScreen: XML → Compose 전환",
            "반응형 레이아웃: responsiveDp() 함수로 태블릿/폰 대응",
            "TextGauge 컴포넌트: 데이터 길이에 따른 Auto-sizing 텍스트"
          ]
        },
        {
          title: "성능 최적화",
          items: [
            "BaseDashboardFragment 추상 클래스: 공통 로직 상속 구조",
            "Observer 생명주기 관리: onPause에서 해제, onResume에서 재구독",
            "Parameter LiveData Map: 데이터 키 기반 효율적인 구독 관리"
          ]
        }
      ],
      techStack: ["Kotlin", "Java", "Jetpack Compose", "MVVM", "LiveData", "ViewModel", "SharedPreferences", "BuildConfig", "ViewBinding"],
      challenges: [
        {
          title: "이종 데이터 소스 통합 및 실시간 처리",
          problem: "속도, RPM 등 OBD-II 센서 데이터가 초당 수십 회 업데이트되며, 차종마다 지원하는 PID가 달라 데이터 정합성을 맞추기 어려웠습니다. 또한, 각기 다른 단위를 가진 데이터를 하나의 그래프 컴포넌트에서 유연하게 보여줘야 했습니다.",
          solution: "Interface 기반의 데이터 어댑터 패턴을 도입하여 표준화된 데이터 모델을 정의했습니다. 이를 통해 어떤 센서 데이터가 들어오더라도 대시보드 UI 컴포넌트는 동일한 인터페이스로 데이터를 구독(Subscribe)하여 렌더링하도록 설계하여, 데이터 소스와 UI의 의존성을 완벽히 분리했습니다."
        },
        {
          title: "다양한 UI 레이아웃의 동적 렌더링",
          problem: "사용자 커스텀이 가능한 대시보드 특성상, 그리드 시스템 안에서 다양한 크기와 형태의 위젯이 배치되어야 했고, 화면 회전이나 해상도 변경 시에도 레이아웃이 깨지지 않아야 했습니다.",
          solution: "Android ConstraintLayout과 Custom View를 활용하여 비율 기반의 반응형 그리드 시스템을 자체 구축했습니다. XML이 아닌 코드로 뷰를 동적 생성하되, 뷰 풀링(View Pooling) 기법을 적용하여 스크롤이나 화면 전환 시의 메모리 할당을 최소화하고 렌더링 성능을 최적화했습니다."
        }
      ],
      results: [
        "코드 중복 제거로 신규 위젯 개발 속도 50% 단축",
        "단일 모듈로 두 개의 메인 앱(B2C, B2B) 동시 지원 체계 구축",
        "실시간 데이터 시각화 프레임 드랍 0%에 가까운 최적화 달성"
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
    dark: true,
    details: {
      period: "2025.07 - 2025.09",
      background: "Infocar Biz(법인용) 서비스 출시 후, 관리자가 PC 웹에서뿐만 아니라 모바일 앱에서도 즉시 차량 배차 승인/반려 처리를 하고 싶다는 요구가 폭주했습니다. 기안자(운전자)와 결재자(관리자)가 실시간으로 소통할 수 있는 모바일 워크플로우 시스템이 필요했습니다.",
      tasks: [
        {
          title: "배차 등록 페이지",
          items: [
            "입력 폼 구현: 배차 일시(시작/종료), 주행 목적, 차량 선택, 비고",
            "유효성 검증: 필수 항목 체크, 날짜 범위 검증",
            "API 적용 구조: Repository 패턴으로 데이터 레이어 분리"
          ]
        },
        {
          title: "배차 이력 조회",
          items: [
            "필터링: 기간별, 상태별(전체/대기/승인/반려) 필터",
            "페이징 처리: 대량 데이터 효율적 로딩",
            "상태별 UI: 대기(노란색), 승인(초록색), 반려(빨간색) 구분"
          ]
        },
        {
          title: "차량 선택 페이지",
          items: [
            "사용 가능한 차량 목록: 배차 일시에 예약되지 않은 차량만 표시",
            "검색 기능: 차량 번호, 모델명으로 검색",
            "차량 정보 표시: 차량 이미지, 번호, 모델, 연료 타입"
          ]
        },
        {
          title: "반려 처리",
          items: [
            "반려 사유 입력: 관리자가 반려 시 사유 필수 입력",
            "반려 사유 표시: 기안자 화면에서 반려 사유 확인",
            "재기안 기능: 반려된 건 수정 후 재기안"
          ]
        },
        {
          title: "Flow 기반 비동기 처리",
          items: [
            "Repository 패턴: 데이터 소스 추상화",
            "Flow 스트림: 실시간 데이터 업데이트",
            "StateFlow: UI 상태 관리"
          ]
        },
        {
          title: "API 연동",
          items: [
            "배차 등록 API: POST /dispatch",
            "배차 목록 조회 API: GET /dispatch/list",
            "배차 상세 조회 API: GET /dispatch/{id}",
            "배차 승인/반려 API: PUT /dispatch/{id}/approve, /reject",
            "DTO 설계: Request/Response 모델 클래스"
          ]
        }
      ],
      techStack: ["Kotlin", "Flow", "StateFlow", "Repository Pattern", "Retrofit", "RecyclerView", "DatePicker", "TimePicker", "Material Design"],
      challenges: [
        {
          title: "실시간 배차 상태 동기화 및 동시성 제어",
          problem: "같은 차랑에 대해 A운전자가 사용 신청을 하는 동시에 B운전자도 신청을 할 경우, 또는 관리자가 승인하기 직전에 취소하는 경우 등 동시성 이슈가 많았습니다.",
          solution: "FCM(Push Notification)을 트리거로 활용하여 상태 변경 발생 시 앱이 데이터를 강제로 새로고침하도록 구현했습니다. 또한 신청 시점의 타임스탬프와 서버 상태 버전을 비교하는 Optimistic Locking 로직을 클라이언트 단에도 일부 적용하여 사용자에게 '이미 예약된 차량입니다'를 즉시 피드백했습니다."
        },
        {
          title: "복잡한 필터링 및 정렬 로직의 반응형 처리",
          problem: "날짜별, 차량별, 상태별, 부서별 등 다양한 필터 조건에 따라 수백 건의 배차 리스트를 끊김 없이 보여줘야 했습니다.",
          solution: "Room DB를 로컬 캐시로 활용하여 네트워크 요청 없이 즉시 리스트를 보여주고, 백그라운드에서 동기화하는 'Offline-First' 전략을 사용했습니다. 필터 로직을 QueryDSL 수준의 동적 쿼리 생성기로 캡슐화하여 유지보수성을 높였습니다."
        }
      ],
      results: [
        "법인 관리자의 모바일 업무 처리 비율 70% 달성",
        "배차 충돌 관련 고객 CS 90% 감소",
        "실시간 알림 도입으로 배차 승인 대기 시간 평균 2시간 → 10분으로 단축"
      ]
    }
  },

  // 2024 Projects (Sorted by latest)
  {
    id: 'revenue',
    title: 'Ad Monetization',
    subtitle: '미디에이션 시스템 구축',
    description: 'Fill rate와 eCPM을 최적화하며 사용자 경험을 해치지 않는 수익화 모델을 구축했습니다.',
    icon: Megaphone,
    cols: 2,
    dark: true,
    details: {
      period: "2024.05 - 2025.12",
      background: "기존의 Infocar와 Infocar Biz 앱은 서로 다른 대시보드 코드를 유지보수하고 있어, 기능 추가 시 중복 개발과 버그 발생 위험이 컸습니다. 이를 해결하기 위해 하나의 통합된 대시보드 모듈을 설계하여 두 앱에서 공통으로 사용할 수 있는 구조가 필요했습니다. 단순히 UI를 통일하는 것을 넘어, OBD-II 데이터 처리 로직을 효율적으로 관리할 수 있는 아키텍처가 요구되었습니다.",
      tasks: [
        {
          title: "미디에이션 SDK 통합",
          items: [
            "Google AdMob 미디에이션 허브 구축: 메인 광고 네트워크로 AdMob 설정",
            "ironSource Mediation 연동: 보상형 광고 및 전면 광고 최적화",
            "Yandex Ads 연동: 러시아/CIS 지역 타겟팅 강화",
            "Pangle (TikTok) 연동: 아시아 지역 Fill rate 개선",
            "AppLovin MAX 연동: 글로벌 eCPM 경쟁 입찰",
            "Mintegral 연동: 추가 광고 소스 확보",
            "Google UMP (User Messaging Platform): 사용자 동의 관리"
          ]
        },
        {
          title: "광고 유형별 최적화",
          items: [
            "배너 광고: 높이 고정으로 레이아웃 점프 방지, Adaptive Banner 적용",
            "네이티브 광고: 주행 기록 리스트에 5:1 비율로 자연스럽게 삽입",
            "전면 광고: 진단 시작/완료 시점에 노출, 사전 로드로 지연 최소화",
            "보상형 광고: 무료 진단/저장/삭제 기능 제공 시 광고 시청 유도",
            "앱 오프닝 광고: Cold/Warm 시작 시 스플래시 광고 노출"
          ]
        },
        {
          title: "GDPR/CCPA 규정 대응",
          items: [
            "사용자 동의 상태 확인: 지역별 개인정보 보호 규정 준수",
            "동의 상태에 따른 광고 초기화: 동의 전 광고 요청 차단",
            "Google UMP 다이얼로그: 유럽/캘리포니아 사용자 동의 UI"
          ]
        },
        {
          title: "안정성 확보",
          items: [
            "Timeout 처리: 저사양 기기 및 서버 장애 시 광고 로드 타임아웃 설정",
            "무한 요청 버그 수정: 광고 로드 실패 시 무한 재시도 방지",
            "Null 체크 강화: 광고 객체 해제 후 접근 시 NPE 방지",
            "Context 관리: Pangle 배너 광고 Context NPE 등 벤더사 별 특이 이슈 디버깅"
          ]
        },
        {
          title: "UI/UX 개선",
          items: [
            "RoundedCorners → ViewOutlineProvider: 렌더링 성능 최적화",
            "광고 로드 중 Placeholder: 광고 영역 예약으로 레이아웃 시프트 방지",
            "광고 닫기 버튼: 앱 종료 시 네이티브 광고 X 버튼 3초 제한 정책",
            "광고 로드 실패 시 대체 UI: 빈 공간 대신 자체 프로모션 배너"
          ]
        },
        {
          title: "정책 관리",
          items: [
            "Firebase Remote Config 연동: 광고 정책(노출 빈도, 타겟팅) 원격 제어",
            "구독자 광고 면제: 프로 구독자는 모든 광고 미노출",
            "타사 OBD 정책: 인포카 스캐너 외 연결 시 광고 노출 강화",
            "N일 보지 않기: 프로모션 다이얼로그 노출 빈도 제어"
          ]
        }
      ],
      techStack: ["Google Mobile Ads SDK 23.6.0", "ironSource Mediation", "Yandex Ads", "Pangle", "AppLovin MAX", "Mintegral", "Google UMP", "Firebase Remote Config", "Kotlin", "Coroutines"],
      challenges: [
        {
          title: "복잡한 구독 상태 관리 및 결제 검증",
          problem: "구독 갱신, 취소, 일시 정지, 유예 기간 등 다양한 결제 상태를 클라이언트에서 정확하게 반영해야 했습니다. 또한, 네트워크 불안정으로 인한 결제 누락(Pending) 처리가 중요했습니다.",
          solution: "Google Play Billing Library 5.0+ 최신 스펙을 적용하고, `purchasesUpdatedListener`를 통해 앱 실행 시점 및 실시간으로 구매 상태를 동기화했습니다. 백엔드 영수증 검증 서버와 연동하여 클라이언트 조작을 방지하고, 로컬 캐싱을 통해 오프라인 상태에서도 프리미엄 기능을 유지하도록 구현했습니다."
        },
        {
          title: "광고 로드 속도 및 사용자 경험 최적화",
          problem: "전면 광고나 네이티브 광고가 늦게 로드되어 레이아웃이 덜컥거리거나(CLS), 사용자가 실수로 클릭하게 되는(Invalid Traffic) 문제가 있었습니다.",
          solution: "Native Advanced Ads를 도입하여 광고 로드 전 미리 레이아웃 공간을 확보(Skeleton UI)하여 CLS를 방지했습니다. 또한, 광고 객체를 미리 로드(Pre-loading)하여 화면 전환 시 즉시 표시되도록 하고, Impression 이벤트를 정확히 추적하여 광고 성과 분석의 정확도를 높였습니다."
        }
      ],
      results: [
        "인앱 결제 처리 누락 0건 달성 (안정성 확보)",
        "광고 노출 로직 최적화로 eCPM 15% 상승",
        "네이티브 광고 적용으로 사용자 이탈률 감소"
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
      background: "차량 진단 기능은 인포카의 핵심 기능 중 하나로, 수천 가지의 DTC(고장 코드)를 정확하게 읽어내고 사용자에게 이해하기 쉬운 형태로 제공해야 했습니다. 특히 글로벌 사용자를 위해 다국어 번역과 AI 기반의 상세 분석 기능을 연동하여 단순한 코드 나열이 아닌 '해결책'을 제시하는 것이 목표였습니다.",
      tasks: [
        {
          title: "진단 페이지 UI/UX 전면 리뉴얼",
          items: [
            "차량 진단 메인 페이지: 최근 진단 결과, 진단/삭제 버튼, 도움말 배치",
            "진단 결과 페이지: ECU별 고장 코드 목록, 상태별 색상 구분 (현재/과거/임시)",
            "진단 내역 페이지: 날짜별 진단 기록, 필터링 및 검색 기능",
            "고장 코드 삭제 페이지: 삭제 가능한 코드 목록, 일괄/개별 삭제",
            "고장 코드 상세 페이지: 코드 설명, 원인, 해결 방법, 구글 검색 연동"
          ]
        },
        {
          title: "API 연동",
          items: [
            "Coverage API: 차량별 지원 ECU 및 진단 항목 조회",
            "DTC Info API: 고장 코드별 상세 설명 및 해결 방법",
            "진단 결과 저장 API: 클라우드 백업 및 동기화",
            "API 호출 위치 최적화: 불필요한 중복 호출 제거"
          ]
        },
        {
          title: "진단 내역 관리",
          items: [
            "Room DB 설계: 진단 결과, 고장 코드, ECU 정보 테이블 구조",
            "ViewModel 추가: 진단 결과 저장을 위한 상태 관리",
            "날짜 포맷 통일: iOS와 동일한 포맷 적용"
          ]
        },
        {
          title: "다국어 지원",
          items: [
            "12개 언어 번역: 한국어, 영어, 일본어, 중국어, 아랍어, 러시아어 등",
            "RTL 레이아웃: 아랍어 등 RTL 언어 레이아웃 미러링",
            "문자열 리소스 관리: strings.xml 체계적 관리"
          ]
        },
        {
          title: "진단 완료 알림 시스템",
          items: [
            "알림 설정 페이지: 알림 ON/OFF, 알림 조건 설정",
            "고장 코드 발견 시 푸시: 현재/임시 고장 코드 발견 시 알림",
            "알람 서비스: DrivingAlarmWorker 기반 백그라운드 알림"
          ]
        },
        {
          title: "ViewPager2 최적화",
          items: [
            "재생성 방지: offscreenPageLimit 설정으로 Fragment 캐싱",
            "회전 시 상태 보존: SavedStateHandle로 진단 상태 유지",
            "프로그레스 색상: 표준/제조사 진단별 색상 구분"
          ]
        }
      ],
      techStack: ["Kotlin", "Retrofit", "Room", "ViewPager2", "ViewModel", "LiveData", "Coroutines", "SavedStateHandle", "WorkManager"],
      challenges: [
        {
          title: "대용량 진단 데이터의 실시간 처리 및 UI 스레드 최적화",
          problem: "차량 전체 시스템 스캔 시 수백 개의 PID 요청이 발생하며, 응답 데이터가 방대하여 UI 스레드에서 처리할 경우 앱이 버벅이는 현상(ANR)이 발생할 우려가 있었습니다.",
          solution: "Kotlin Coroutines와 Flow를 활용하여 진단 통신 로직을 IO 스레드로 완전히 분리했습니다. 진단 진행률과 결과를 StateFlow로 방출하고, UI에서는 이를 구독하여 실시간으로 부드럽게 업데이트되도록 비동기 파이프라인을 구축했습니다."
        },
        {
          title: "제조사별 비표준 프로토콜 대응",
          problem: "표준 OBD-II 프로토콜 외에 제조사별(현대/기아, BMW 등) 독자적인 진단 프로토콜이 혼재되어 있어, 단일 로직으로 처리하기 불가능했습니다.",
          solution: "Strategy 패턴을 적용하여 제조사별 프로토콜 핸들러를 추상화했습니다. 앱 시작 시 선택된 차종에 따라 적절한 핸들러가 주입되도록 하여, 핵심 진단 로직은 유지하면서도 다양한 차종을 유연하게 확장할 수 있는 구조를 만들었습니다."
        }
      ],
      results: [
        "진단 속도 30% 향상 및 ANR 발생률 0% 달성",
        "글로벌 진단 데이터베이스 구축으로 해외 유저 만족도 상승",
        "비표준 프로토콜 모듈화로 신규 차종 지원 기간 단축"
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
      background: "표준 OBD-II 프로토콜은 모든 차량에서 공통적으로 사용할 수 있지만, 제공되는 데이터 항목이 제한적입니다. 사용자는 DPF 포집량, 변속기 오일 온도처럼 차량 유지보수에 필수적인 심층 데이터를 원했습니다. 이를 위해 각 제조사별(Hyundai/Kia, GM, BMW 등) 독자 규격(Proprietary Protocol)을 역공학하거나 문서화하여 앱에 통합하는 작업이 필요했습니다.",
      tasks: [
        {
          title: "MOBD 프로파일 관리",
          items: [
            "프로파일 목록 조회: 차량별 지원 가능한 프로파일 표시",
            "프로파일 구매 상태: 구매/미구매 상태 구분",
            "프로파일 정렬: 최근 사용/다운로드 순으로 동적 정렬",
            "구매한 프로파일 관리: updateTime 기반 정렬 정책"
          ]
        },
        {
          title: "제조사 DB 다운로드 시스템",
          items: [
            "암호화 DB 다운로드: SQLCipher 암호화된 DB 파일",
            "내부 저장소 저장: 보안을 위해 내부 저장소에 저장",
            "버전 관리: 서버 버전과 로컬 버전 비교 후 업데이트",
            "다운로드 프로그레스: 백그라운드 다운로드 및 진행률 표시",
            "다운로드 예외 처리: 네트워크 오류, 저장소 부족 등 대응"
          ]
        },
        {
          title: "데이터 조회 기능",
          items: [
            "조회 가능한 데이터 확인: 차량별 지원 항목 미리보기",
            "제어 유닛 검색: ECU 목록 및 지원 PID 조회",
            "데이터 표시: 실시간 제조사 데이터 모니터링",
            "데이터 인덱싱: data_index 기반 효율적 조회"
          ]
        },
        {
          title: "구매 유도 시스템",
          items: [
            "프로모션 다이얼로그: 제조사 데이터 구매 유도 팝업",
            "배너 광고 연동: 메인 페이지 배너 광고",
            "태블릿 대응: 가로 모드 시 이미지 추가",
            "N일 보지 않기: 다이얼로그 노출 빈도 제어"
          ]
        },
        {
          title: "UX 개선",
          items: [
            "랜딩 페이지: 제조사 데이터 소개 및 기능 설명",
            "도움말 페이지: FAQ 및 사용 방법 안내",
            "프로파일 리스트 레이아웃: 제조사 로고, 차량 정보 표시"
          ]
        },
        {
          title: "제조사 진단 기능",
          items: [
            "제조사 고장 코드 조회: 표준 외 제조사별 고유 DTC",
            "상세 설명 제공: 고장 코드별 원인 및 해결 방법",
            "진단 내역 저장: 제조사 진단 결과 별도 관리"
          ]
        }
      ],
      techStack: ["Kotlin", "Room", "SQLCipher", "Retrofit", "DownloadManager", "SharedPreferences", "RecyclerView"],
      challenges: [
        {
          title: "제조사별 상이한 PID(Parameter ID) 주소 체계 관리",
          problem: "같은 '엔진 오일 온도'라도 현대차와 BMW의 PID 주소와 응답 수식이 완전히 다릅니다. 이를 하드코딩하면 유지보수가 불가능해지는 문제가 있었습니다.",
          solution: "제조사, 연식, 엔진 타입에 따른 PID 매핑 테이블을 SQLite DB로 구축하고, 런타임에 차량 정보에 맞춰 동적으로 쿼리하여 프로토콜을 설정하는 데이터 주도(Data-Driven) 설계를 적용했습니다."
        },
        {
          title: "CAN 통신 속도 및 메시지 필터링",
          problem: "제조사 확장 데이터는 표준 데이터보다 훨씬 높은 빈도로 CAN 버스에 흘러다니므로, 필요한 데이터만 정확히 캐치하지 않으면 버퍼 오버플로우가 발생할 수 있습니다.",
          solution: "ELM327 칩셋의 하드웨어 필터링 기능(AT commands)을 활용하여 원하는 헤더(Header)를 가진 메시지만 수신하도록 설정, 앱 단의 데이터 처리 부하를 70% 이상 감소시켰습니다."
        }
      ],
      results: [
        "표준 OBD 데이터 대비 3배 이상의 데이터 항목(DPF, 배터리 셀 등) 제공",
        "프리미엄 구독 전환율 20% 상승의 핵심 기능으로 자리매김",
        "신규 차종 지원 요청 처리 시간 1주 → 2일로 단축"
      ]
    }
  },
  {
    id: 'auto',
    title: 'Android Auto Support',
    subtitle: '차량 인포테인먼트',
    description: '모바일을 넘어 차량 디스플레이까지, 끊김 없는 경험을 설계했습니다.',
    icon: CarFront,
    cols: 1,
    dark: true,
    details: {
      period: "2024.10 - 2024.11",
      background: "운전 중에는 내비게이션 앱(Tmap, KakaoNavi)이 화면을 점유하고 있어, 인포카 앱의 대시보드를 확인하기 위해 앱을 전환하는 것은 매우 위험합니다. 사용자가 내비게이션을 보면서 동시에 차량의 핵심 상태(속도, 연비, 방향지시등)를 안전하게 확인할 수 있도록 'Floating UI(오버레이)' 기능 개발이 시급했습니다.",
      tasks: [
        {
          title: "Android Auto 화면 구현",
          items: [
            "표준 대시보드 화면: 속도, RPM, 연비 등 기본 OBD 데이터 표시",
            "제조사 대시보드 화면: 프리미엄 사용자용 상세 데이터 표시",
            "메뉴 구조: 대시보드 → 표준/제조사 선택 화면"
          ]
        },
        {
          title: "ECU 서칭 중 접근 제한",
          items: [
            "데이터 준비 체크: ECU 서칭 완료 전 대시보드 접근 차단",
            "로딩 상태 표시: 서칭 중 프로그레스 표시",
            "토스트 메시지: 접근 제한 시 안내 메시지"
          ]
        },
        {
          title: "화면 전환 처리",
          items: [
            "대시보드 간 전환: 표준 ↔ 제조사 대시보드 전환",
            "앱 ↔ Auto 동기화: 앱에서 설정 변경 시 Auto에 반영",
            "뒤로가기 처리: 화면 스택 관리"
          ]
        },
        {
          title: "Context 관리",
          items: [
            "Android Auto 전용 Context: CarContext 사용",
            "리소스 접근: 테마, 문자열 등 리소스 적절히 로딩",
            "생명주기 관리: Session, Screen 생명주기 처리"
          ]
        },
        {
          title: "연결 상태 처리",
          items: [
            "OBD 연결 체크: 연결 안 된 상태에서 접근 시 안내",
            "연결 끊김 처리: 주행 중 연결 끊김 시 UI 업데이트",
            "자동 재연결: 연결 끊김 후 자동 재연결 시도"
          ]
        },
        {
          title: "디자인 가이드라인 준수",
          items: [
            "운전자 주의 분산 최소화: 간결한 UI, 큰 텍스트",
            "터치 영역: 최소 터치 영역 76dp 준수",
            "색상 대비: WCAG 가이드라인 준수"
          ]
        },
      ],
      techStack: ["Android Auto SDK", "CarAppService", "Session", "Screen", "Kotlin", "LiveData"],
      challenges: [
        {
          title: "제한된 UI 컴포넌트",
          problem: "Android Auto는 사용 가능한 UI 컴포넌트가 제한적",
          solution: "Pane, Row, GridItem 등 지원 컴포넌트로 UI 재구성"
        },
        {
          title: "실시간 데이터 업데이트",
          problem: "차량 디스플레이에 데이터가 지연되어 표시",
          solution: "invalidate() 호출 최적화, 데이터 변경 시에만 갱신"
        },
        {
          title: "앱-Auto 상태 동기화",
          problem: "앱에서 변경한 설정이 Auto에 반영되지 않음",
          solution: "SharedPreferences 변경 리스너로 실시간 동기화"
        },
        {
          title: "Context 타입 캐스팅",
          problem: "MainActivity로 캐스팅 시 ClassCastException",
          solution: "CarContext 여부 체크 후 분기 처리"
        },
        {
          title: "대시보드 선택 제조사 데이터 사용 시 제한",
          problem: "프로파일 미구매 사용자가 제조사 대시보드 접근 시도",
          solution: "구매 여부 체크, 미구매 시 안내 메시지 표시"
        }
      ],
      results: [
        "Android Auto 지원으로 신규 사용자 유입",
        "운전 중 안전한 데이터 확인 가능",
        "Google Play Auto 카테고리 등록",
        "앱 사용 편의성 향상 (핸드폰 조작 불필요)",
        "사용자 리뷰 평점 향상"
      ]
    }
  },
  {
    id: 'overlay',
    title: 'Overlay Service',
    subtitle: 'PIP 미니 대시보드',
    description: '내비게이션 위에서도 실시간 주행 데이터를 확인할 수 있습니다.',
    icon: Layers,
    cols: 1,
    dark: true,
    details: {
      period: "2024.02 - 2024.10",
      background: "운전 중에는 내비게이션 앱(Tmap, KakaoNavi)이 화면을 점유하고 있어, 인포카 앱의 대시보드를 확인하기 위해 앱을 전환하는 것은 매우 위험합니다. 사용자가 내비게이션을 보면서 동시에 차량의 핵심 상태(속도, 연비, 방향지시등)를 안전하게 확인할 수 있도록 'Floating UI(오버레이)' 기능 개발이 시급했습니다.",
      tasks: [
        {
          title: "WindowManager 기반 오버레이 구현",
          items: [
            "TYPE_APPLICATION_OVERLAY: Android 8.0+ 오버레이 타입 적용",
            "LayoutParams 설정: 크기, 위치, 터치 이벤트 전달 설정",
            "플로팅 뷰 디자인: 반투명 배경, 라운드 코너, 드래그 핸들"
          ]
        },
        {
          title: "실시간 데이터 표시",
          items: [
            "표시 항목: 속도, RPM, 연비, 주행 거리, 주행 시간",
            "사용자 설정: 표시할 항목 선택 가능",
            "단위 변환: 사용자 설정에 따른 단위 자동 변환",
            "데이터 캐싱: 빈번한 업데이트에 대비한 캐싱 처리"
          ]
        },
        {
          title: "드래그 이동 기능",
          items: [
            "터치 이벤트 처리: ACTION_DOWN, ACTION_MOVE, ACTION_UP",
            "화면 경계 제한: 화면 밖으로 나가지 않도록 제한",
            "위치 저장: SharedPreferences에 마지막 위치 저장"
          ]
        },
        {
          title: "크기 조절 기능",
          items: [
            "크기 고정 옵션: 사용자가 원하는 크기로 고정",
            "리사이즈 핸들: 모서리 드래그로 크기 조절",
            "최소/최대 크기 제한: UX를 위한 크기 범위 설정"
          ]
        },
        {
          title: "생명주기 관리",
          items: [
            "MainActivity LifeCycle Observer: Activity 생명주기와 동기화",
            "Service 생명주기: onStartCommand, onDestroy 적절한 처리",
            "자동 시작/종료: 주행 시작 시 자동 표시, 종료 시 자동 숨김"
          ]
        },
        {
          title: "권한 관리",
          items: [
            "SYSTEM_ALERT_WINDOW 권한: 오버레이 권한 요청 플로우",
            "권한 체크: 오버레이 시작 전 권한 확인",
            "설정 화면 이동: 권한 없을 시 시스템 설정으로 안내"
          ]
        },
        {
          title: "배터리 최적화",
          items: [
            "업데이트 주기 조절: 초당 업데이트 횟수 제한",
            "화면 꺼짐 시 중지: 화면 OFF 시 업데이트 중단",
            "Doze 모드 대응: 백그라운드 제한 우회"
          ]
        }
      ],
      techStack: ["Kotlin", "WindowManager", "Service", "Foreground Service", "LiveData", "LifecycleObserver", "SharedPreferences"],
      challenges: [
        {
          title: "안드로이드 버전별 WindowManager 권한 및 정책 대응",
          problem: "Android 10부터 '다른 앱 위에 그리기' 권한 정책이 강화되었고, 최신 버전에서는 백그라운드에서의 서비스 실행 제약이 심해져 오버레이가 강제 종료되는 이슈가 있었습니다.",
          solution: "Foreground Service를 필수로 연동하고, Notification 채널을 통해 서비스가 사용자에 의해 인지되고 있음을 시스템에 알렸습니다. 또한 `TYPE_APPLICATION_OVERLAY` 윈도우 타입을 사용하여 최신 정책을 준수하면서도 안정적으로 뷰를 유지했습니다."
        },
        {
          title: "다양한 내비게이션 앱과의 UI 간섭 최소화",
          problem: "오버레이가 내비게이션의 회전 안내나 도착 예정 시간 같은 중요 정보를 가리는 경우가 발생했습니다.",
          solution: "사용자가 자유롭게 오버레이 위치를 드래그하여 이동할 수 있게 하고, 해당 위치 좌표를 SharedPreferences에 저장하여 다음 실행 시 복원해주는 UX를 구현했습니다. 또한 '투명도 조절'과 '최소화 모드(작은 아이콘)'를 지원하여 간섭을 최소화했습니다."
        }
      ],
      results: [
        "앱 체류 시간(TSE) 감소 없이 백그라운드 실행 시간 40% 증가",
        "운전자 안전 운전 보조 기능으로 호평 (스토어 리뷰 언급 1위 기능)",
        "내비게이션 + 인포카 동시 사용 패턴 정착"
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
    dark: true,
    details: {
      period: "2024.05 - 2024.09",
      background: "단순히 주행 후 '몇 km 갔다' 정도의 정보는 사용자에게 큰 가치를 주지 못했습니다. 법인 사용자는 '국세청 양식의 운행 일지'가 필요했고, 개인 사용자는 '나의 운전 습관(급가속, 급감속)'을 데이터로 증명받고 싶어 했습니다. 이를 위해 초 단위의 고해상도 주행 데이터를 수집하고 분석하는 시스템이 필요했습니다.",
      tasks: [
        {
          title: "엑셀 내보내기 기능",
          items: [
            "Apache POI 활용: 엑셀 파일 생성 라이브러리 적용",
            "종합 데이터 시트: 주행 요약, 상세 기록, 이벤트 통계 시트 분리",
            "엑셀 포맷 통일: iOS와 동일한 포맷 적용",
            "공유 기능: 생성된 엑셀 파일 외부 앱으로 공유",
            "메모리 효율화: 스트리밍 방식으로 대용량 데이터 처리"
          ]
        },
        {
          title: "주행 목적 관리",
          items: [
            "기본 주행 목적 설정: 차량별/사용자별 기본 목적 지정",
            "커스텀 주행 목적: 사용자 정의 주행 목적 추가",
            "주행 목적 자동 적용: 주행 시작 시 기본 목적 자동 설정",
            "목적 수정: 주행 완료 후 목적 변경 가능",
            "비즈 관리자 설정: 관리자가 지정한 목적 사용 시 기능 제한"
          ]
        },
        {
          title: "이벤트 카운트 시스템",
          items: [
            "급가속 감지: 가속도 임계값 초과 시 카운트",
            "급감속 감지: 감속도 임계값 초과 시 카운트",
            "과속 감지: 설정 속도 초과 시 카운트",
            "DB 컬럼 추가: EVENT_COUNT 테이블 설계",
            "퍼포먼스 개선: DB 접근 횟수 최적화"
          ]
        },
        {
          title: "GPS 주행 거리 측정",
          items: [
            "OBD vs GPS 선택: 사용자가 측정 방식 선택 가능",
            "GPS 거리 계산: 위치 좌표 기반 거리 계산 알고리즘",
            "정확도 보정: GPS 오차 보정 로직 적용",
            "오버레이 연동: 오버레이 뷰에도 GPS 거리 표시"
          ]
        },
        {
          title: "상세 주행 기록",
          items: [
            "시간대별 데이터: 속도, RPM, 연비 시계열 데이터",
            "그래프 시각화: MPAndroidChart로 데이터 그래프 표시",
            "주소 변환: 좌표를 주소로 변환 (역지오코딩)",
            "다시보기 기능: 주행 경로 재생 (Replay)"
          ]
        },
        {
          title: "서버 동기화",
          items: [
            "주행 기록 백업 API: 클라우드 백업",
            "복구 API: 앱 재설치 시 데이터 복구",
            "DRVREC/DRVREC_CUSTOM API: 주행 기록 및 커스텀 기록 동기화"
          ]
        },
        {
          title: "주행 기록 수정",
          items: [
            "출발지/도착지 수정: 주소 직접 입력 또는 지도에서 선택",
            "주행 목적 수정: 완료된 주행의 목적 변경",
            "메모 추가: 주행에 대한 메모 기록"
          ]
        }
      ],
      techStack: ["Kotlin", "Apache POI", "Room", "MPAndroidChart", "Retrofit", "Google Maps API", "Coroutines"],
      challenges: [
        {
          title: "빌드 환경의 일관성 확보 및 보안",
          problem: "개발자마다 JDK 버전이나 환경 변수 설정이 조금씩 달라 빌드 결과물이 상이할 수 있었고, Keystore와 같은 민감한 서명 키를 안전하게 관리하는 것이 중요했습니다.",
          solution: "GitHub Secrets를 활용하여 Keystore 및 API Key를 암호화하여 저장하고, 워크플로우 실행 시에만 복호화하여 주입되도록 구성했습니다. Docker 컨테이너 기반의 클린 빌드 환경을 구축하여 언제나 동일한 환경에서 빌드가 수행됨을 보장했습니다."
        },
        {
          title: "다양한 배포 채널 자동화 (Slack, Firebase, Play Store)",
          problem: "QA용 내부 배포와 실사용자용 프로덕션 배포의 프로세스가 달라야 했으며, 빌드 완료 시 관련 담당자에게 즉시 알림이 가야 했습니다.",
          solution: "트리거 조건(Push to Dev, Tagging Release)에 따라 워크플로우를 분기했습니다. QA 빌드는 Firebase App Distribution으로 업로드 후 Slack 웹훅으로 자동 알림을 전송하고, 프로덕션 빌드는 구글 플레이 콘솔 API를 연동하여 내부 테스트 트랙으로 자동 업로드되도록 파이프라인을 구축했습니다."
        }
      ],
      results: [
        "빌드 및 배포 소요 시간 90% 단축 (수동 개입 0)",
        "배포 프로세스 실수(잘못된 버전 코드 등) 완전 차단",
        "개발자가 빌드 대기 시간 없이 코딩에 집중할 수 있는 환경 조성"
      ]
    }
  },
  {
    id: 'registration',
    title: 'Vehicle Registration',
    subtitle: '차량 등록 시스템',
    description: 'VIN(차대번호) 인식으로 복잡한 차량 정보를 한 번에 등록합니다.',
    icon: Car,
    cols: 1,
    dark: true,
    details: {
      period: "2024.07 - 2024.08",
      background: "사용자가 일일이 차량 정보를 입력하는 번거로움을 줄이기 위해, 차대번호(VIN)만으로 차량 정보를 자동 완성하는 시스템이 필요했습니다. VIN(Vehicle Identification Number)을 활용하여 차량 정보를 자동으로 입력하고, 직관적인 UI로 등록 과정을 간소화해야 했습니다.",
      tasks: [
        {
          title: "VIN 파싱 로직 구현",
          items: [
            "17자리 VIN 분석: 제조사, 차량 특성, 생산 연도, 공장, 일련번호 추출",
            "제조사 코드 매핑: WMI (World Manufacturer Identifier) 코드 → 제조사명",
            "연식 추출: 10번째 자리 코드로 생산 연도 계산",
            "모델 추론: VDS (Vehicle Descriptor Section)로 모델 정보 추출",
            "예외 처리: 잘못된 VIN 형식 검증, errorVin 처리"
          ]
        },
        {
          title: "제조사 로고 적용",
          items: [
            "23개 제조사 로고: 현대, 기아, 제네시스, BMW, 벤츠, 아우디 등",
            "고해상도 이미지: 300x300 SVG → PNG 변환",
            "국가별 정렬: 한국(현대/기아 우선), 기타 국가(알파벳 순)",
            "다크/라이트 모드: 테마별 로고 색상 대응"
          ]
        },
        {
          title: "제조사/모델/연식 선택 UI",
          items: [
            "계층형 선택: 제조사 → 모델 → 연식 순서대로 선택",
            "GridLayout 적용: 제조사 아이콘 그리드 형태 배치",
            "기선택 표시: 이미 선택된 항목 체크 표시",
            "검색 기능: 제조사/모델명 검색"
          ]
        },
        {
          title: "차량 이미지 관리",
          items: [
            "내부 저장소 저장: 차량 사진 내부 저장소에 저장",
            "이미지 압축: 업로드 전 이미지 크기 최적화",
            "삭제 시 정리: 차량 삭제 시 연관 이미지 파일 삭제"
          ]
        },
        {
          title: "서버 동기화",
          items: [
            "차량 등록 API: 새 차량 정보 서버 업로드",
            "차량 수정 API: 기존 차량 정보 수정",
            "차량 삭제 API: 서버에서 차량 정보 삭제",
            "VIN/OBD SN 저장: 스캐너 연결 시 자동 저장",
            "복구 API: 앱 재설치 시 차량 목록 복구"
          ]
        },
        {
          title: "차량 정보 페이지 레이아웃",
          items: [
            "메인 페이지: 등록된 차량 목록, 차량 추가 버튼",
            "상세 페이지: 차량 이미지, 정보, 편집/삭제 버튼",
            "가로 모드 대응: 태블릿 가로 모드 레이아웃",
            "드로어 연동: 사이드 메뉴에서 차량 목록 표시"
          ]
        }
      ],
      techStack: ["Kotlin", "Retrofit", "Glide", "Room", "GridLayout", "SharedPreferences"],
      challenges: [
        {
          title: "이종 데이터 소스 통합 및 실시간 처리",
          problem: "속도, RPM 등 OBD-II 센서 데이터가 초당 수십 회 업데이트되며, 차종마다 지원하는 PID가 달라 데이터 정합성을 맞추기 어려웠습니다. 또한, 각기 다른 단위를 가진 데이터를 하나의 그래프 컴포넌트에서 유연하게 보여줘야 했습니다.",
          solution: "Interface 기반의 데이터 어댑터 패턴을 도입하여 표준화된 데이터 모델을 정의했습니다. 이를 통해 어떤 센서 데이터가 들어오더라도 대시보드 UI 컴포넌트는 동일한 인터페이스로 데이터를 구독(Subscribe)하여 렌더링하도록 설계하여, 데이터 소스와 UI의 의존성을 완벽히 분리했습니다."
        },
        {
          title: "다양한 UI 레이아웃의 동적 렌더링",
          problem: "사용자 커스텀이 가능한 대시보드 특성상, 그리드 시스템 안에서 다양한 크기와 형태의 위젯이 배치되어야 했고, 화면 회전이나 해상도 변경 시에도 레이아웃이 깨지지 않아야 했습니다.",
          solution: "Android ConstraintLayout과 Custom View를 활용하여 비율 기반의 반응형 그리드 시스템을 자체 구축했습니다. XML이 아닌 코드로 뷰를 동적 생성하되, 뷰 풀링(View Pooling) 기법을 적용하여 스크롤이나 화면 전환 시의 메모리 할당을 최소화하고 렌더링 성능을 최적화했습니다."
        }
      ],
      results: [
        "코드 중복 제거로 신규 위젯 개발 속도 50% 단축",
        "단일 모듈로 두 개의 메인 앱(B2C, B2B) 동시 지원 체계 구축",
        "실시간 데이터 시각화 프레임 드랍 0%에 가까운 최적화 달성"
      ]
    }
  },
];

export const SKILLS: Skill[] = [
  {
    category: "언어",
    items: ["Kotlin (주력)", "Java (레거시)"]
  },
  {
    category: "아키텍처",
    items: ["MVVM", "MVI (Orbit)", "Clean Architecture", "Repository Pattern"]
  },
  {
    category: "Jetpack",
    items: ["Compose", "ViewModel", "LiveData", "Room", "WorkManager", "Navigation"]
  },
  {
    category: "비동기",
    items: ["Kotlin Coroutines", "Flow"]
  },
  {
    category: "네트워크",
    items: ["Retrofit", "OkHttp", "Gson"]
  },
  {
    category: "DI",
    items: ["Hilt (예정)", "Manual DI"]
  },
  {
    category: "테스트",
    items: ["JUnit", "Mockito"]
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions", "Slack 연동"]
  },
  {
    category: "기타",
    items: ["Bluetooth/BLE", "OBD-II Protocol", "Google Maps", "Firebase (FCM, Crashlytics)"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "infocar",
    company: "주식회사 인포카",
    role: "Android 담당자 / 전임 연구원",
    period: "2022.10 ~ 현재",
    overviewStats: [
      "총 커밋 수: 3,871회",
      "프로젝트 총 코드량: 255,014 라인 (Java 1,028개 + Kotlin 49개 파일)",
      "앱 버전: Infocar v2.28.1 (809회 릴리즈), Infocar Biz v1.1.3 (57회 릴리즈)",
      "다국어 지원: 15개 언어 (한국어, 영어, 일본어, 중국어, 아랍어, 독일어, 프랑스어, 러시아어 등)"
    ],
    projects: BENTO_ITEMS
      .filter(item => item.id !== 'dual-app')
      .map((item, index) => ({
        id: item.id,
        title: `${index + 1}. ${item.title}`,
        subtitle: item.subtitle,
        icon: item.icon,
        period: item.details.period,
        overview: item.description,
        background: item.details.background,
        quantitative: [], // We use 'results' for the key achievements now
        roles: [], // We use 'coreImplementations' for the detailed tasks now
        techStack: item.details.techStack,
        coreImplementations: item.details.tasks.map(task => ({
          title: task.title,
          items: task.items
        })),
        challenges: item.details.challenges,
        results: item.details.results
      }))
  }
];
