import { Car, Wrench, Layers, LayoutDashboard, Truck, Megaphone, FileText, CarFront, Receipt } from 'lucide-react';
import { Experience, Skill, BentoItemProps } from './types';

export const PERSONAL_INFO = {
  name: "최정원",
  role: "Android Developer",
  email: "jayChoi57@gmail.com",
  github: "https://github.com/AIMA0719",
  shortIntro: "사용자의 경험을 중요시하는 개발자",
  heroTitle: "사용자의 경험을\n코드로 번역하는 개발자",
  about: "코드는 논리적이어야 하지만, 경험은 감성적이어야 한다고 믿습니다. 3.5년간 인포카에서 20개국 사용자의 피드백을 먹고 자랐습니다. 버그 잡는 것보다 사용자의 '아, 편하다'라는 한마디를 듣는 것을 더 좋아합니다.",
};



export const BENTO_ITEMS: BentoItemProps[] = [
  // 2025 Projects (Sorted by latest)
  {
    id: 'dashboard',
    title: 'Preset Dashboard',
    subtitle: '실시간 데이터 시각화',
    description: '수십 가지 차량 데이터를 사용자가 원하는 대로 커스터마이징하여 모니터링합니다.',
    icon: LayoutDashboard,
    cols: 2,
    dark: true,
    details: {
      period: "2025.09 ~ 현재",
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
        "Infocar/Infocar Biz 두 앱에서 단일 대시보드 모듈 공유",
        "연료 타입(가솔린/디젤/전기/수소)별 동적 UI 구성",
        "Jetpack Compose 마이그레이션으로 개발 생산성 향상"
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
      period: "2025.07 ~ 2025.09",
      background: "Infocar Biz(법인용) 서비스 출시 후, 관리자가 PC 웹에서뿐만 아니라 모바일 앱에서도 즉시 차량 배차 승인/반려 처리를 하고 싶다는 요구가 폭주했습니다. 기안자(운전자)와 결재자(관리자)가 실시간으로 소통할 수 있는 모바일 워크플로우 시스템이 필요했습니다.",
      tasks: [
        {
          title: "배차 신청/승인 워크플로우",
          items: [
            "배차 등록: 배차 일시, 주행 목적, 차량 선택 입력 폼",
            "승인/반려 처리: 관리자 권한 분기, 반려 사유 필수 입력",
            "실시간 상태 업데이트: FCM 푸시 연동으로 즉시 반영"
          ]
        },
        {
          title: "배차 이력 및 필터링",
          items: [
            "기간별/상태별 필터: 전체/대기/승인/반려 구분",
            "페이징 처리: RecyclerView + Paging 3로 대량 데이터 효율적 로딩",
            "상태별 UI: 대기(노란색), 승인(초록색), 반려(빨간색) 색상 구분"
          ]
        },
        {
          title: "Flow 기반 비동기 처리",
          items: [
            "Repository 패턴: 데이터 소스 추상화",
            "StateFlow: UI 상태 관리 및 실시간 업데이트"
          ]
        }
      ],
      techStack: ["Kotlin", "Flow", "StateFlow", "Repository Pattern", "Retrofit", "FCM", "Material Design"],
      challenges: [
        {
          title: "배차 동시성 충돌",
          problem: "같은 차량에 대해 여러 운전자가 동시에 신청하거나, 관리자 승인 직전 취소되는 경우 등 동시성 이슈가 많았습니다.",
          solution: "FCM 푸시로 상태 변경 시 즉시 새로고침하고, 타임스탬프 기반 Optimistic Locking으로 충돌 시 즉시 피드백했습니다."
        },
        {
          title: "복잡한 필터링 로직",
          problem: "날짜별, 차량별, 상태별 등 다양한 필터 조건에 따라 수백 건의 리스트를 끊김 없이 보여줘야 했습니다.",
          solution: "Room DB 로컬 캐시와 백그라운드 동기화로 Offline-First 전략을 구현했습니다."
        }
      ],
      results: [
        "법인 관리자 모바일 업무 처리 비율 70% 달성",
        "배차 충돌 관련 CS 90% 감소",
        "FCM 알림으로 승인 대기 시간 2시간 → 10분 단축"
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
      period: "2024.05 ~ 2025.05",
      background: "인포카 앱은 글로벌 서비스로 20개국 이상에 출시되어 있어, 국가별로 광고 Fill rate와 eCPM이 천차만별이었습니다. 또한 인포카 스캐너 없이 앱만 설치한 '무료 사용자'의 수익화 전략이 필요했고, 동시에 유료 구독자에게는 광고 없는 깔끔한 경험을 제공해야 했습니다.",
      tasks: [
        {
          title: "미디에이션 SDK 통합",
          items: [
            "Google AdMob 미디에이션 허브 구축",
            "ironSource, Yandex, Pangle, AppLovin MAX, Mintegral 등 6개 네트워크 연동",
            "Google UMP (User Messaging Platform)로 GDPR/CCPA 동의 관리"
          ]
        },
        {
          title: "광고 유형별 최적화",
          items: [
            "배너 광고: Adaptive Banner로 레이아웃 시프트 방지",
            "네이티브 광고: 주행 기록 리스트에 5:1 비율로 자연스럽게 삽입",
            "전면/보상형 광고: Pre-loading으로 지연 최소화",
            "앱 오프닝 광고: Cold/Warm 시작 시 스플래시 광고"
          ]
        },
        {
          title: "정책 및 안정성 관리",
          items: [
            "Firebase Remote Config로 광고 정책 원격 제어",
            "구독자 광고 면제 로직 구현",
            "광고 로드 실패 시 무한 재시도 방지 및 NPE 방어"
          ]
        }
      ],
      techStack: ["Google Mobile Ads SDK", "ironSource", "Yandex Ads", "Pangle", "AppLovin MAX", "Google UMP", "Firebase Remote Config", "Kotlin"],
      challenges: [
        {
          title: "글로벌 Fill rate 최적화",
          problem: "국가별로 광고 네트워크의 Fill rate가 달라 빈 광고 영역이 자주 발생했습니다.",
          solution: "미디에이션 워터폴을 국가별로 다르게 설정하고, Fill rate가 낮은 지역은 자체 프로모션 배너로 대체했습니다."
        },
        {
          title: "레이아웃 시프트(CLS) 방지",
          problem: "광고가 늦게 로드되어 화면이 덜컥거리는 UX 문제가 있었습니다.",
          solution: "Skeleton UI로 광고 영역을 미리 확보하고, Pre-loading으로 즉시 표시되도록 개선했습니다."
        }
      ],
      results: [
        "6개 광고 네트워크 미디에이션으로 글로벌 Fill rate 95% 달성",
        "eCPM 15% 상승으로 광고 수익 증대",
        "구독자 광고 면제로 프리미엄 UX 제공"
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
      period: "2023.09 ~ 2024.12",
      background: "차량 고장코드(DTC)를 단순히 읽어주는 것만으로는 사용자에게 충분한 가치를 제공하지 못했습니다. 사용자는 '이게 무슨 뜻이고, 어떻게 해야 하는가'를 알고 싶어했습니다. 또한 인포카 스캐너만의 차별점으로 표준(OBD-II) 외에 제조사별 확장 프로토콜도 지원해야 했고, 진단 결과를 서버에 동기화하여 이력 관리 및 고객 지원 시 활용할 수 있어야 했습니다.",
      tasks: [
        {
          title: "DTC 코드 진단 시스템",
          items: [
            "표준 OBD-II 프로토콜 기반 DTC 조회 및 삭제",
            "DTC 상세 정보 API 연동: 코드별 설명, 원인, 해결 방법 제공",
            "진단 결과 UI: ECU별 고장 코드 목록, 상태별 색상 구분 (현재/과거/임시)",
            "고장 코드 상세 페이지: 코드 설명, 원인, 해결 방법, 구글 검색 연동"
          ]
        },
        {
          title: "확장 진단 프로토콜 지원",
          items: [
            "제조사별 독자 프로토콜(현대/기아 UDS, BMW ISTA 등) 분기 처리",
            "Coverage API 연동: 차량별 지원 ECU 및 진단 항목 동적 로딩",
            "프로파일 기반 진단: 사용자가 구매한 프로파일에 따라 진단 범위 설정"
          ]
        },
        {
          title: "진단 이력 관리",
          items: [
            "Room DB 설계: 진단 결과, 고장 코드, ECU 정보 테이블 구조",
            "서버 동기화: 진단 결과를 클라우드에 백업하여 앱 재설치 시 복구",
            "날짜별 진단 기록: 필터링 및 검색 기능 제공"
          ]
        }
      ],
      techStack: ["Kotlin", "Retrofit", "Room", "ViewModel", "LiveData", "Handler"],
      challenges: [
        {
          title: "제조사별 프로토콜 차이",
          problem: "OBD-II 표준과 제조사 확장 프로토콜이 혼재하여 단일 로직으로 처리 불가능했습니다.",
          solution: "Strategy 패턴으로 프로토콜 핸들러를 추상화하고, 차종 선택 시 적절한 핸들러가 주입되도록 설계했습니다."
        },
        {
          title: "블루투스 연결 불안정",
          problem: "진단 중 BLE 연결이 끊기면 진단 상태가 꼬이는 문제가 발생했습니다.",
          solution: "연결 상태 모니터링 로직을 추가하고, 타임아웃 및 재시도 메커니즘을 구현하여 안정성을 확보했습니다."
        }
      ],
      results: [
        "OBD-II 표준 + 제조사 확장 프로토콜 통합 진단 시스템 구축",
        "진단 이력 서버 동기화로 고객 지원 효율화",
        "프로파일 기반 맞춤 진단으로 프리미엄 구독 전환율 기여"
      ]
    }
  },
  {
    id: 'etc-works',
    title: '기타 작업들',
    subtitle: 'CI/CD, 게이미피케이션, 제조사 데이터',
    description: '배포 자동화, 앱 내 게이미피케이션, 제조사 전용 데이터 등 다양한 기능을 개발했습니다.',
    icon: Wrench,
    cols: 2,
    dark: true,
    details: {
      period: "2023.03 ~ 2025.12",
      background: "핵심 기능 외에도 개발 생산성 향상을 위한 CI/CD 파이프라인 구축, 사용자 참여도를 높이기 위한 게이미피케이션 시스템, 프리미엄 기능인 제조사 전용 데이터 제공 등 다양한 작업을 수행했습니다.",
      tasks: [
        {
          title: "CI/CD Pipeline (GitHub Actions)",
          items: [
            "워크플로우 설계: master/develop 브랜치 push 시 자동 빌드/배포",
            "Gradle 캐싱으로 빌드 시간 50% 단축",
            "Slack 연동: 빌드 성공/실패 시 실시간 알림",
            "Firebase App Distribution / Play Store 자동 배포"
          ]
        },
        {
          title: "Infocar Manager (게이미피케이션)",
          items: [
            "WebView Bridge: JavaScript Interface로 Native-Web 양방향 통신",
            "미션 시스템: 진단, 주행 등 앱 기능과 연동된 미션 달성 추적",
            "Orbit MVI 적용: 단방향 데이터 플로우로 상태 관리"
          ]
        },
        {
          title: "Manufacturer Data (제조사 전용 데이터)",
          items: [
            "MOBD 프로파일 관리: 차량별 지원 프로파일 표시 및 구매 상태 관리",
            "암호화 DB 다운로드: SQLCipher로 보안 강화",
            "데이터 주도 설계: PID 매핑 테이블로 다양한 차종 지원"
          ]
        }
      ],
      techStack: ["GitHub Actions", "Kotlin", "WebView", "JavaScript Interface", "Orbit MVI", "Room", "SQLCipher", "Slack Webhook"],
      challenges: [
        {
          title: "CI/CD 빌드 환경 일관성 및 보안",
          problem: "개발자마다 환경이 달라 빌드 결과물이 상이하고, Keystore 등 민감 정보 관리가 필요했습니다.",
          solution: "GitHub Secrets로 민감 정보 암호화 저장, Gradle 캐싱으로 빌드 시간 단축"
        },
        {
          title: "Native-Web 간 비동기 통신",
          problem: "JavaScript Interface는 동기적으로 값 반환이 어려운 구조였습니다.",
          solution: "요청 ID 기반 메시지 큐 시스템으로 비동기 데이터 주입 패턴 정립"
        }
      ],
      results: [
        "빌드 및 배포 소요 시간 90% 단축",
        "게이미피케이션으로 앱 체류 시간 증가",
        "프리미엄 구독 전환율 20% 상승"
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
      period: "2024.02 ~ 2025.01",
      background: "인포카 스캐너를 연결해 데이터를 보려면 폰을 거치대에 꽂고 인포카 앱을 켜야 했습니다. 하지만 대부분의 사용자는 이미 Tmap, 카카오내비 등을 사용하고 있어 '내비게이션을 포기하고 인포카를 볼 것인가'의 양자택일을 강요받았습니다. Android Auto를 지원하면 차량 디스플레이에서 인포카를 보고, 폰에서는 내비게이션을 유지할 수 있어 이 문제를 해결할 수 있었습니다.",
      tasks: [
        {
          title: "Android Auto 앱 구조 설계",
          items: [
            "CarAppService 상속 및 Session 관리",
            "Screen 기반 화면 스택 관리",
            "CarContext를 통한 리소스 및 시스템 서비스 접근"
          ]
        },
        {
          title: "대시보드 화면 개발",
          items: [
            "표준 대시보드: 속도, RPM, 연비 등 기본 OBD 데이터 표시",
            "제조사 대시보드: 프리미엄 사용자용 확장 데이터 표시",
            "Pane, Row, GridItem 템플릿 활용 UI 구성"
          ]
        },
        {
          title: "실시간 데이터 동기화",
          items: [
            "LiveData 구독으로 OBD 데이터 실시간 반영",
            "invalidate() 호출 최적화로 불필요한 리렌더링 방지",
            "앱 ↔ Auto 설정 동기화 (SharedPreferences 리스너)"
          ]
        }
      ],
      techStack: ["Android Auto SDK", "CarAppService", "Session", "Screen", "Kotlin", "LiveData"],
      challenges: [
        {
          title: "제한된 UI 컴포넌트",
          problem: "Android Auto는 Custom View를 허용하지 않고 템플릿 기반 UI만 지원합니다.",
          solution: "Pane, Row, GridItem 등 지원 컴포넌트를 조합하여 대시보드 UI를 재구성하고, 텍스트 기반 데이터 표시로 전환했습니다."
        },
        {
          title: "앱-Auto 간 상태 동기화",
          problem: "폰 앱에서 설정을 변경해도 Auto 화면에 즉시 반영되지 않았습니다.",
          solution: "SharedPreferences.OnSharedPreferenceChangeListener를 등록하여 설정 변경 시 Auto 화면을 즉시 갱신하도록 구현했습니다."
        }
      ],
      results: [
        "Google Play Auto 카테고리 등록으로 신규 유입 채널 확보",
        "운전 중 핸드폰 조작 없이 차량 디스플레이에서 데이터 확인",
        "내비게이션과 인포카 동시 사용 가능한 UX 제공"
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
      period: "2024.01 ~ 2024.10",
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
          title: "드래그 이동 및 위치 저장",
          items: [
            "터치 이벤트 처리: ACTION_DOWN, ACTION_MOVE, ACTION_UP",
            "화면 경계 제한: 화면 밖으로 나가지 않도록 제한",
            "위치 저장: SharedPreferences에 마지막 위치 저장 및 복원"
          ]
        },
        {
          title: "생명주기 및 권한 관리",
          items: [
            "Foreground Service 연동으로 백그라운드 안정성 확보",
            "SYSTEM_ALERT_WINDOW 권한 요청 플로우 구현",
            "주행 시작/종료 시 자동 표시/숨김"
          ]
        }
      ],
      techStack: ["Kotlin", "WindowManager", "Foreground Service", "LiveData", "SharedPreferences"],
      challenges: [
        {
          title: "안드로이드 버전별 권한 정책 대응",
          problem: "Android 10부터 '다른 앱 위에 그리기' 권한 정책이 강화되어 오버레이가 강제 종료되는 이슈가 있었습니다.",
          solution: "Foreground Service를 필수로 연동하고, TYPE_APPLICATION_OVERLAY 윈도우 타입을 사용하여 최신 정책을 준수했습니다."
        },
        {
          title: "내비게이션 앱과의 UI 간섭",
          problem: "오버레이가 내비게이션의 중요 정보(회전 안내, 도착 예정 시간)를 가리는 문제가 발생했습니다.",
          solution: "드래그 이동 및 위치 저장 기능을 구현하고, 투명도 조절과 최소화 모드를 지원하여 간섭을 최소화했습니다."
        }
      ],
      results: [
        "운전자 안전 보조 기능으로 스토어 리뷰 언급 1위",
        "내비게이션 + 인포카 동시 사용 패턴 정착",
        "백그라운드 실행 시간 40% 증가"
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
      period: "2024.08 ~ 2025.04",
      background: "단순히 주행 후 '몇 km 갔다' 정도의 정보는 사용자에게 큰 가치를 주지 못했습니다. 법인 사용자는 '국세청 양식의 운행 일지'가 필요했고, 개인 사용자는 '나의 운전 습관(급가속, 급감속)'을 데이터로 증명받고 싶어 했습니다. 이를 위해 초 단위의 고해상도 주행 데이터를 수집하고 분석하는 시스템이 필요했습니다.",
      tasks: [
        {
          title: "엑셀 내보내기 기능",
          items: [
            "Apache POI 활용: 주행 요약, 상세 기록, 이벤트 통계 시트 분리",
            "스트리밍 방식 처리: 대용량 데이터 메모리 효율화",
            "iOS와 동일한 포맷: 크로스 플랫폼 일관성 확보"
          ]
        },
        {
          title: "이벤트 카운트 시스템",
          items: [
            "급가속/급감속/과속 감지: 가속도 임계값 기반 실시간 카운트",
            "EVENT_COUNT 테이블 설계: 이벤트 유형별 통계 저장",
            "DB 접근 횟수 최적화: 배치 처리로 퍼포먼스 개선"
          ]
        },
        {
          title: "주행 목적 관리",
          items: [
            "기본 주행 목적 설정: 차량별/사용자별 기본 목적 지정",
            "법인 관리자 설정: 관리자가 지정한 목적 사용 시 기능 제한",
            "주행 완료 후 수정: 출발지/도착지, 목적, 메모 편집"
          ]
        }
      ],
      techStack: ["Kotlin", "Apache POI", "Room", "MPAndroidChart", "Retrofit", "Google Maps API"],
      challenges: [
        {
          title: "대용량 주행 데이터 처리",
          problem: "장거리 주행 시 초 단위 데이터가 수만 건에 달해 엑셀 생성 시 OOM이 발생했습니다.",
          solution: "Apache POI의 SXSSF(Streaming Usermodel)를 적용하여 메모리 사용량을 제한하고, 백그라운드 스레드에서 처리했습니다."
        },
        {
          title: "주행 목적 데이터 정합성",
          problem: "법인 사용자가 주행 목적을 임의로 수정하면 운행 일지의 신뢰성이 떨어지는 문제가 있었습니다.",
          solution: "관리자 설정 목적은 수정 불가로 처리하고, 수정 이력을 서버에 기록하여 감사 추적이 가능하도록 구현했습니다."
        }
      ],
      results: [
        "국세청 양식 운행 일지 엑셀 내보내기 기능 구현",
        "급가속/급감속 이벤트 통계로 운전 습관 분석 제공",
        "법인 관리자 권한 분리로 데이터 신뢰성 확보"
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
      period: "2024.05 ~ 2024.08",
      background: "기존에는 사용자가 제조사, 모델, 연식을 직접 입력해야 했고, 입력 오류가 잦아 '진단이 안 된다'는 CS가 많았습니다. 차대번호(VIN) 17자리에는 제조사, 모델, 연식 정보가 인코딩되어 있으므로, 이를 파싱하여 차량 정보를 자동 완성하면 사용자 경험과 데이터 정확도를 동시에 개선할 수 있었습니다.",
      tasks: [
        {
          title: "VIN 파싱 로직 구현",
          items: [
            "17자리 VIN 분석: WMI(제조사), VDS(차량 특성), VIS(생산 연도/공장/일련번호) 추출",
            "제조사 코드 매핑: WMI 코드 → 제조사명 변환 테이블",
            "연식 추출: 10번째 자리 코드로 생산 연도 계산 (1980~2030 대응)"
          ]
        },
        {
          title: "제조사/모델/연식 선택 UI",
          items: [
            "계층형 선택: 제조사 → 모델 → 연식 순서대로 선택",
            "GridLayout 적용: 제조사 로고 그리드 형태 배치 (23개 제조사)",
            "검색 기능: 제조사/모델명 검색 지원"
          ]
        },
        {
          title: "서버 동기화",
          items: [
            "차량 CRUD API: 등록/수정/삭제/복구 API 연동",
            "VIN 자동 저장: OBD 스캐너 연결 시 VIN 자동 추출 및 저장",
            "앱 재설치 시 차량 목록 복구"
          ]
        }
      ],
      techStack: ["Kotlin", "Retrofit", "Glide", "Room", "GridLayout"],
      challenges: [
        {
          title: "VIN 파싱 정확도",
          problem: "제조사별로 VIN 인코딩 규칙이 조금씩 달라 일부 차종에서 파싱 오류가 발생했습니다.",
          solution: "제조사별 예외 케이스를 데이터베이스화하고, 파싱 실패 시 수동 입력 폴백을 제공했습니다."
        },
        {
          title: "차량 이미지 용량 관리",
          problem: "고화질 차량 사진 업로드 시 서버 부하와 네트워크 지연이 발생했습니다.",
          solution: "업로드 전 이미지 압축(Bitmap.compress)을 적용하고, 내부 저장소 캐싱으로 재업로드를 방지했습니다."
        }
      ],
      results: [
        "VIN 기반 자동 완성으로 차량 등록 시간 70% 단축",
        "입력 오류로 인한 진단 실패 CS 80% 감소",
        "23개 제조사 지원으로 국내외 대부분 차종 커버"
      ]
    }
  },
  {
    id: 'car-ledger',
    title: '차계부 및 정비 관리',
    subtitle: '차량 유지비 통합 관리',
    description: '차량 유지비(주유/정비/세차)를 기록하고 분석하는 통합 관리 시스템입니다.',
    icon: Receipt,
    cols: 2,
    dark: true,
    details: {
      period: "2022.07 ~ 2025.02",
      background: "차량 유지비를 단순히 '얼마 썼다' 수준으로 기록하는 것은 사용자에게 실질적인 가치를 주지 못했습니다. 사용자는 주유 시 가장 가까운 주유소를 찾고, 정비 이력을 한눈에 보고, 영수증을 사진으로 보관하고 싶어했습니다. 이를 위해 위치 기반 검색, 영수증 서버 동기화, 소모품 주기 관리 등 실용적인 기능이 필요했습니다.",
      tasks: [
        {
          title: "주유/정비/세차 기록 시스템",
          items: [
            "카테고리별 입력 UI: 주유량, 단가, 총액, 주행거리 등 항목별 커스텀 키패드 구현",
            "연비 자동 계산: 주유량과 주행거리 기반 실연비 계산 로직",
            "기간별 필터링: 월별/연도별 기록 조회 및 통계 제공",
            "하이브리드/전기차 지원: 연료 타입별 단위(L, kWh) 자동 전환"
          ]
        },
        {
          title: "영수증 사진 관리",
          items: [
            "카메라/갤러리 연동: ActivityResultLauncher 기반 사진 촬영 및 선택",
            "서버 동기화: Retrofit + MultipartBody로 영수증 이미지 업로드",
            "로컬 캐싱: FileProvider 활용 내부 저장소 관리",
            "복구 기능: 앱 재설치 시 서버에서 영수증 다운로드"
          ]
        },
        {
          title: "위치 기반 주유소/정비소 검색",
          items: [
            "Google Maps API: 현재 위치 기반 가까운 주유소 마커 표시",
            "실시간 유가 정보: 주유소별 가격 정보 API 연동",
            "검색 히스토리: 최근 검색한 장소 저장 및 빠른 선택",
            "직접 입력: 지도에 없는 장소 수동 등록 지원"
          ]
        },
        {
          title: "소모품 관리",
          items: [
            "소모품 주기 관리: 엔진오일, 타이어, 브레이크 패드 등 교체 주기 알림",
            "커스텀 항목: 사용자 정의 소모품 추가 기능",
            "정비 항목 연동: 정비 기록 시 소모품 자동 업데이트"
          ]
        }
      ],
      techStack: ["Java", "SQLite", "Retrofit", "Google Maps API", "ViewBinding", "RxJava", "FileProvider", "OkHttp"],
      challenges: [
        {
          title: "레거시 DB 마이그레이션",
          problem: "기존 버전의 DB 스키마가 새로운 기능을 지원하지 않았고, 기존 사용자 데이터를 잃지 않으면서 새 스키마로 전환해야 했습니다.",
          solution: "SQLite 마이그레이션 로직을 단계별로 설계하여 버전별 스키마 변경을 자동 처리했습니다. 기존 REPAIR 테이블을 REPAIR + REPAIR_ITEM으로 정규화하고, CONSUMABLE 테이블을 추가하여 소모품 관리 기능을 확장했습니다."
        },
        {
          title: "영수증 사진 서버 동기화",
          problem: "사용자가 앱을 삭제하거나 기기를 변경하면 로컬에 저장된 영수증 사진이 모두 사라지는 문제가 있었습니다.",
          solution: "Retrofit MultipartBody를 활용하여 영수증 이미지를 서버에 업로드하고, 복구 API를 통해 재설치 시 자동으로 다운로드되도록 구현했습니다. iOS와 API 스펙을 통일하여 크로스 플랫폼 데이터 호환성을 확보했습니다."
        },
        {
          title: "주유소 검색 최적화",
          problem: "현재 위치 기반 주유소 검색 시 API 응답 지연으로 인해 사용자가 빈 화면을 오래 보는 UX 문제가 있었습니다.",
          solution: "로딩 상태 표시와 함께 비동기 로딩을 적용하고, 검색 결과를 캐싱하여 동일 위치에서 재검색 시 즉시 표시되도록 개선했습니다. 중복 API 호출 방지 로직도 추가하여 서버 부하를 줄였습니다."
        }
      ],
      results: [
        "영수증 서버 동기화로 데이터 복구 체계 구축",
        "레거시 DB 마이그레이션으로 기존 사용자 데이터 100% 보존",
        "위치 기반 주유소/주차장/세차장 통합 검색 기능 구현",
        "384회 커밋을 통한 3년간 지속적 기능 개선 및 유지보수"
      ]
    }
  },
];

export const SKILLS: Skill[] = [
  {
    category: "언어",
    items: ["Kotlin (주력)", "Java"]
  },
  {
    category: "아키텍처",
    items: ["MVVM (ViewModel + LiveData)", "Repository Pattern"]
  },
  {
    category: "비동기 처리",
    items: ["Kotlin Coroutines", "RxJava3 (BLE 통신)"]
  },
  {
    category: "네트워크",
    items: ["Retrofit2 + OkHttp"]
  },
  {
    category: "데이터베이스",
    items: ["SQLite", "Room", "DataStore (SharedPreferences 대체)"]
  },
  {
    category: "UI",
    items: ["Jetpack Compose (XML → Compose 마이그레이션 경험)", "ViewBinding / DataBinding"]
  },
  {
    category: "Firebase",
    items: ["Crashlytics", "Analytics", "Remote Config"]
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions (Android CI 구축, Slack 연동)"]
  },
  {
    category: "기타",
    items: ["BLE 통신 (RxAndroidBLE)", "다국어 지원"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "infocar",
    company: "주식회사 인포카",
    role: "Android 담당자 / 전임 연구원",
    period: "2022.10 ~ 현재",
    overviewStats: [
      "사용자 경험 중심의 앱 아키텍처 설계와 끊임없는 성능 개선을 통해,",
      "안정적이고 지속 가능한 글로벌 모바일 서비스를 만들어갑니다."
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
