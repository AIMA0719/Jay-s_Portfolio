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
    period: "2022.10 ~ 현재 (약 3년)",
    overviewStats: [
      "총 커밋 수: 3,871회",
      "프로젝트 총 코드량: 255,014 라인 (Java 1,028개 + Kotlin 49개 파일)",
      "앱 버전: Infocar v2.28.1 (809회 릴리즈), Infocar Biz v1.1.3 (57회 릴리즈)",
      "다국어 지원: 15개 언어 (한국어, 영어, 일본어, 중국어, 아랍어, 독일어, 프랑스어, 러시아어 등)"
    ],
    projects: [
      {
        title: "1. 프리셋 대시보드 시스템",
        overview: "차량 OBD-II 데이터를 실시간 시각화하는 대시보드 시스템. Infocar/Infocar Biz 2개 앱의 대시보드 코드를 Interface 패턴으로 통합 아키텍처 설계.",
        quantitative: [
          "코드베이스: 33개 파일, 7,720 라인",
          "관련 커밋: 59회",
          "코드 중복 제거: 약 60% (기존 분리 코드 대비)"
        ],
        roles: [
          "전체 아키텍처 설계 및 구현",
          "Interface 패턴 기반 DataStore 추상화 (IDashboardDataStore)",
          "BuildConfig.isInfocar 기반 컴파일 타임 분기 처리",
          "SharedPreferences 키 관리 체계 설계"
        ],
        techStack: ["Kotlin", "Jetpack Compose", "MVVM", "LiveData + Observer 패턴", "SharedPreferences (프로필별 키 관리)", "UnitConverter (압력/온도 단위 변환)"],
        coreImplementations: [
          {
            title: "IDashboardDataStore 인터페이스 설계",
            items: [
              "데이터 키 저장/조회 (saveDataKey, getDataKey)",
              "단위 저장/조회 (saveUnit, getUnit)",
              "임계값 저장/조회 with 자동 단위 변환 (saveThreshold, getThreshold)"
            ]
          },
          {
            title: "듀얼 앱 분기 처리",
            items: [
              "DashboardSettingsDataStore (Infocar): profileKey 기반 키 생성",
              "DashboardSettingsDataStoreBiz (Biz): carSID 기반 키 생성"
            ]
          },
          {
            title: "Jetpack Compose 마이그레이션",
            items: [
              "XML 기반 View → Compose UI 전환",
              "MOBDTextGauge: 동적 폰트 사이즈 조절 알고리즘 구현",
              "TextMeasurer 기반 텍스트 오버플로우 방지"
            ]
          }
        ],
        problemSolving: {
          problem: "2개 앱의 대시보드 코드 70% 중복, 유지보수 비용 증가",
          solution: "Interface 패턴으로 공통 로직 추상화, BuildConfig 기반 구현체 주입",
          result: "단일 코드베이스로 2개 앱 관리, 버그 수정 시 한 번만 수정"
        }
      },
      {
        title: "2. CI/CD 파이프라인 구축",
        overview: "GitHub Actions 기반 자동 빌드/테스트/배포 파이프라인 구축. Slack 연동으로 실시간 빌드 상태 알림.",
        quantitative: [
          "관련 커밋: 42회",
          "파이프라인 스텝: 15단계",
          "빌드 결과 아티팩트 보관: 14일",
          "테스트 리포트 보관: 7일"
        ],
        roles: [
          "전체 CI/CD 파이프라인 설계 및 구현",
          "GitHub Actions 워크플로우 작성",
          "Slack 웹훅 연동 구현",
          "Secrets 관리 체계 구축"
        ],
        techStack: ["GitHub Actions (actions/checkout@v4, setup-java@v4, cache@v4)", "Gradle (캐싱, 병렬 빌드)", "Slack API (slackapi/slack-github-action@v1.26.0)", "Base64 인코딩 (Keystore, google-services.json)"],
        coreImplementations: [
          {
            title: "파이프라인 구성",
            items: [
              "코드 체크아웃 및 JDK 17 설정",
              "Gradle 캐시 (빌드 시간 단축)",
              "Keystore/google-services.json 디코딩",
              "Debug APK 빌드 (assembleInfocarDebug) 및 Unit 테스트, Lint 검사",
              "APK 아티팩트 및 리포트 업로드",
              "빌드 결과 요약 (GITHUB_STEP_SUMMARY) 및 Slack 알림"
            ]
          },
          {
            title: "Slack 알림 구현",
            items: [
              "성공 시: ✅ 아이콘, Branch/Commit/Author 정보, GitHub Actions 링크",
              "실패 시: ❌ 아이콘, 동일 정보 + '오류 확인하기' 버튼",
              "Block Kit 기반 리치 메시지 포맷"
            ]
          }
        ],
        problemSolving: {
          problem: "수동 빌드로 인한 휴먼 에러, 빌드 상태 공유 어려움",
          solution: "GitHub Actions 자동화 + Slack 실시간 알림",
          result: "빌드 실패 인지 시간 단축, 팀 전체 빌드 상태 가시성 확보"
        }
      },
      {
        title: "3. 광고 수익화 시스템",
        overview: "Google AdMob 기반 광고 시스템 구축. 6개 미디에이션 네트워크 통합으로 광고 수익 최적화.",
        quantitative: [
          "코드베이스: 118개 파일, 30,264 라인",
          "관련 커밋: 179회",
          "통합 SDK: 6개 네트워크"
        ],
        roles: [
          "AdMob 미디에이션 아키텍처 설계",
          "6개 외부 SDK 통합 및 버전 관리",
          "GDPR/개인정보 동의 처리 (Google UMP)",
          "광고 로드/표시 로직 최적화"
        ],
        techStack: ["Google AdMob SDK", "Google UMP (User Messaging Platform)", "ironSource (SDK 8.7.0)", "AppLovin (SDK 13.2.0.1)", "Mintegral (SDK 16.9.51.0)", "Pangle (ByteDance, SDK 6.5.0.6.0)", "Yandex (SDK 7.13.0)", "Unity Ads"],
        coreImplementations: [
          {
            title: "미디에이션 워터폴 설정",
            items: [
              "네트워크별 eCPM 기반 우선순위 설정",
              "실시간 입찰(RTB) 지원 네트워크 활성화"
            ]
          },
          {
            title: "광고 포맷 지원",
            items: [
              "배너 광고 (Banner), 전면 광고 (Interstitial)",
              "보상형 광고 (Rewarded), 네이티브 광고 (Native)"
            ]
          },
          {
            title: "GDPR 동의 처리",
            items: [
              "Google UMP 기반 동의 폼 표시",
              "동의 상태에 따른 개인화 광고 제어"
            ]
          },
          {
            title: "16KB 페이지 사이즈 대응",
            items: [
              "Android 15 타겟 SDK 대응",
              "Yandex SDK 7.13.0 업데이트 (16KB 지원)"
            ]
          }
        ],
        problemSolving: {
          problem: "단일 AdMob만 사용 시 Fill Rate 저조",
          solution: "6개 미디에이션 네트워크 통합, 워터폴 최적화",
          result: "광고 Fill Rate 향상, 수익 다각화"
        }
      },
      {
        title: "4. 차량 진단 시스템 (OBD-II)",
        overview: "OBD-II 프로토콜 기반 실시간 차량 데이터 수집 및 진단 시스템. 고장 코드(DTC) 조회 및 해석 기능 제공.",
        quantitative: [
          "OBD 관련 파일: 116개",
          "진단 관련 파일: 45개",
          "관련 커밋: 111회"
        ],
        roles: [
          "OBD-II 데이터 파싱 로직 구현",
          "DTC (Diagnostic Trouble Code) 해석 시스템 개발",
          "실시간 센서 데이터 표시 UI 구현",
          "Bluetooth/BLE 통신 안정화"
        ],
        techStack: ["OBD-II 프로토콜 (CAN, ISO 9141-2, KWP2000)", "Bluetooth Classic / BLE", "SQLite (파라미터 DB)", "Kotlin Coroutines (비동기 데이터 처리)"],
        coreImplementations: [
          {
            title: "OBD-II 데이터 수집",
            items: [
              "PID (Parameter ID) 기반 데이터 요청",
              "100+ 파라미터 지원 (RPM, 속도, 연료량, 엔진 온도 등)"
            ]
          },
          {
            title: "DTC 진단 기능",
            items: [
              "P/B/C/U 코드 분류 (Powertrain/Body/Chassis/Network)",
              "제조사별 커스텀 DTC 지원",
              "고장 코드 해석 및 설명 제공"
            ]
          },
          {
            title: "실시간 모니터링",
            items: [
              "게이지/그래프 형태 데이터 시각화",
              "임계값 초과 시 경고 알림",
              "TPMS (타이어 공기압 모니터링) 연동"
            ]
          },
          {
            title: "Bluetooth 통신",
            items: [
              "42개 Bluetooth/BLE 관련 파일",
              "연결 안정성 개선 (재연결 로직)",
              "다중 디바이스 지원"
            ]
          }
        ]
      },
      {
        title: "5. 제조사 데이터 연동 시스템",
        overview: "차량 제조사별 전용 데이터 파싱 및 연동 시스템. 표준 OBD-II 외 제조사 고유 프로토콜 지원.",
        quantitative: [
          "관련 커밋: 94회",
          "지원 제조사: 다수 (현대, 기아, BMW, 벤츠 등)"
        ],
        roles: [
          "제조사별 데이터 파싱 로직 구현",
          "확장 PID 매핑 테이블 관리",
          "제조사별 DTC 코드 해석"
        ],
        techStack: ["Extended PID (제조사별 확장 파라미터)", "CAN Protocol (다양한 보드레이트 지원)", "SQLite (제조사별 파라미터 DB)"],
        coreImplementations: [
          {
            title: "제조사별 프로토콜 분기",
            items: [
              "차량 VIN 기반 제조사 식별",
              "제조사별 커스텀 PID 요청"
            ]
          },
          {
            title: "확장 파라미터 지원",
            items: [
              "표준 OBD-II 외 제조사 고유 데이터",
              "배터리 상태, ADAS 정보 등"
            ]
          }
        ]
      },
      {
        title: "6. 오버레이 서비스",
        overview: "다른 앱 위에 표시되는 플로팅 오버레이 UI. 내비게이션 사용 중에도 차량 정보 실시간 확인 가능.",
        quantitative: [
          "코드베이스: 6개 파일, 2,393 라인",
          "관련 커밋: 59회"
        ],
        roles: [
          "Foreground Service 기반 오버레이 구현",
          "WindowManager를 통한 플로팅 뷰 관리",
          "드래그 이동 및 위치 저장 기능"
        ],
        techStack: ["WindowManager (TYPE_APPLICATION_OVERLAY)", "Foreground Service", "SharedPreferences (위치 저장)"],
        coreImplementations: [
          {
            title: "오버레이 권한 처리",
            items: [
              "SYSTEM_ALERT_WINDOW 권한 요청",
              "Android 버전별 분기 처리"
            ]
          },
          {
            title: "플로팅 UI",
            items: [
              "실시간 차량 데이터 표시",
              "터치 드래그로 위치 이동",
              "최소화/확대 토글"
            ]
          }
        ]
      },
      {
        title: "7. 주행 기록 시스템",
        overview: "주행 데이터 로깅 및 기록 관리 시스템. GPS + OBD 데이터 결합으로 상세 주행 분석 제공.",
        quantitative: [
          "관련 파일: 32개",
          "관련 커밋: 170회"
        ],
        roles: [
          "주행 데이터 로깅 시스템 설계",
          "주행 기록 저장/조회 기능 구현",
          "주행 통계 분석 화면 개발"
        ],
        techStack: ["Room Database (주행 기록 저장)", "Google Maps API (경로 시각화)", "MPAndroidChart (통계 그래프)"],
        coreImplementations: [
          {
            title: "데이터 로깅",
            items: [
              "GPS 위치 + OBD 데이터 동기화",
              "백그라운드 로깅 (Foreground Service)"
            ]
          },
          {
            title: "기록 분석",
            items: [
              "주행 거리, 시간, 평균 속도",
              "연료 소비량 분석",
              "급가속/급감속 감지"
            ]
          }
        ]
      },
      {
        title: "8. AI Manager 연동",
        overview: "WebView 기반 AI 분석 서비스 연동. Native ↔ Web 양방향 통신 브릿지 구현.",
        quantitative: [
          "관련 파일: 6개",
          "관련 커밋: 34회"
        ],
        roles: [
          "WebView Bridge 인터페이스 설계",
          "JavaScript Interface 구현",
          "Native 데이터 → Web 전달 로직"
        ],
        techStack: ["WebView (JavaScript Interface)", "JSON 직렬화/역직렬화", "Coroutines (비동기 통신)"],
        coreImplementations: [
          {
            title: "Bridge 인터페이스",
            items: [
              "@JavascriptInterface 어노테이션 기반",
              "차량 데이터 JSON 변환 전달",
              "Web → Native 콜백 처리"
            ]
          }
        ]
      },
      {
        title: "9. 배차 관리 시스템 (Biz 전용)",
        overview: "법인용 차량 배차 및 운행 관리 시스템. 관리자-드라이버 간 실시간 배차 처리.",
        quantitative: [
          "관련 커밋: 26회"
        ],
        roles: [
          "배차 요청/승인 플로우 구현",
          "푸시 알림 연동",
          "배차 현황 대시보드 개발"
        ],
        techStack: ["FCM (Firebase Cloud Messaging)", "Retrofit (REST API)", "LiveData (실시간 상태 업데이트)"],
        coreImplementations: []
      },
      {
        title: "10. 듀얼 앱 아키텍처 (Product Flavors)",
        overview: "단일 코드베이스로 Infocar(개인용) / Infocar Biz(법인용) 2개 앱 빌드 및 배포.",
        quantitative: [
          "Product Flavors: 2개 (infocar, biz)",
          "Infocar: v2.28.1 (versionCode 809)",
          "Biz: v1.1.3 (versionCode 57)"
        ],
        roles: [],
        techStack: ["Gradle Product Flavors", "BuildConfig 기반 분기", "Source Set 분리 (src/main, src/biz)"],
        coreImplementations: [
          {
            title: "Flavor 설정",
            items: [
              "applicationIdSuffix로 패키지명 분리",
              "manifestPlaceholders로 앱 이름/아이콘 분기",
              "BuildConfig.isInfocar로 런타임 분기"
            ]
          },
          {
            title: "코드 공유 전략",
            items: [
              "공통 로직: src/main",
              "Biz 전용 로직: src/biz",
              "Interface 패턴으로 구현체 분리"
            ]
          }
        ]
      }
    ]
  }
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
      background: "수동 빌드 및 테스트로 인한 휴먼 에러와 시간 낭비를 줄이고, 코드 품질을 일관되게 유지하기 위해 자동화된 CI/CD 파이프라인이 필요했습니다.",
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
            title: "jcenter 종료로 인한 라이브러리 마이그레이션",
            problem: "jcenter 서비스 종료로 기존 라이브러리 다운로드 불가",
            solution: "대체 저장소 탐색 (JitPack, Maven Central), build.gradle 일괄 수정"
        },
        {
            title: "Gradle 빌드 시간 최적화",
            problem: "초기 빌드 시간 15분 이상 소요",
            solution: "Gradle 캐싱, 병렬 빌드 활성화, 불필요한 태스크 스킵으로 7분대로 단축"
        },
        {
            title: "Slack Webhook 보안",
            problem: "Webhook URL 노출 시 보안 위험",
            solution: "GitHub Secrets에 저장, 워크플로우에서 환경 변수로 참조"
        },
        {
            title: "다중 플레이버 빌드",
            problem: "Infocar/InfocarBiz 두 앱을 모두 빌드해야 함",
            solution: "matrix 전략으로 병렬 빌드, 플레이버별 테스트 분리"
        }
      ],
      results: [
        "빌드 자동화로 수동 작업 시간 주당 2시간 절약",
        "코드 푸시 후 7분 내 빌드 결과 확인 가능 (기존 15분 → 7분)",
        "팀 전체 빌드 상태 실시간 공유로 협업 효율 30% 향상",
        "빌드 실패 즉시 감지로 문제 해결 시간 단축",
        "테스트 커버리지 시각화로 코드 품질 관리 체계화"
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
      background: "웹 기반 AI 차량 관리 서비스를 앱 내에서 seamless하게 제공하기 위해 WebView와 Native 간의 양방향 통신이 필요했습니다. 사용자가 웹과 앱을 오가는 느낌 없이 자연스러운 경험을 제공해야 했습니다.",
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
            title: "비동기 통신 처리 (runBlocking → suspend)",
            problem: "runBlocking 사용으로 메인 스레드 블로킹, ANR 발생",
            solution: "suspend 함수로 전환, Coroutine Dispatcher.IO에서 실행"
        },
        {
            title: "Web-Native 상태 동기화",
            problem: "웹과 Native 간 상태 불일치로 인한 UX 혼란",
            solution: "MVI 단방향 데이터 플로우로 Single Source of Truth 보장"
        },
        {
            title: "WebView 메모리 누수",
            problem: "Fragment 전환 시 WebView가 해제되지 않아 메모리 누수",
            solution: "onDestroyView에서 WebView.destroy() 명시적 호출, Parent에서 removeView"
        },
        {
            title: "JavaScript Interface 스레드 안전성",
            problem: "JavaScript Interface 콜백이 백그라운드 스레드에서 실행됨",
            solution: "Handler(Looper.getMainLooper())로 UI 스레드에서 처리"
        }
      ],
      results: [
        "Native-Web 간 통신 지연 시간 50% 단축",
        "AI 기능 앱 내 사용률 증가 (웹 직접 접근 대비 2배)",
        "MVI 패턴 적용으로 코드 유지보수성 40% 향상",
        "ANR 발생률 0%로 감소 (비동기 처리 개선)",
        "WebView 관련 크래시 90% 감소"
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
      background: "OBD 스캐너로 수집되는 수십 가지 차량 데이터를 사용자가 원하는 항목만 선택하여 실시간으로 모니터링할 수 있는 커스터마이징 대시보드가 필요했습니다. 또한 Infocar와 InfocarBiz 두 앱에서 동일한 기능을 코드 중복 없이 제공해야 했습니다.",
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
            title: "ViewModel 공유 및 Fragment 간 데이터 동기화",
            problem: "여러 Fragment에서 동일한 실시간 데이터를 구독해야 함",
            solution: "Activity 스코프의 공유 ViewModel 사용, ViewModelProvider(requireActivity())로 동일 인스턴스 보장"
        },
        {
            title: "메모리 누수 방지",
            problem: "Fragment 전환 시 Observer가 해제되지 않아 메모리 누수 발생",
            solution: "observersMap으로 Observer 관리, onPause/onResume에서 detach/reattach 패턴 적용"
        },
        {
            title: "두 앱 코드 통합 (Infocar/InfocarBiz)",
            problem: "90% 유사한 기능이지만 데이터 키 생성 방식이 다름",
            solution: "IDashboardDataStore 인터페이스 추상화, BuildConfig 분기로 구현체 선택"
        },
        {
            title: "실시간 데이터 업데이트 최적화",
            problem: "초당 수십 회 데이터 업데이트로 UI 버벅임",
            solution: "현재 페이지가 아니면 Observer 콜백에서 early return, DiffUtil 적용"
        },
        {
            title: "타이어 위치 Fallback 로직",
            problem: "일부 차량에서 특정 타이어 위치 데이터가 없음",
            solution: "dataIndexOptions에 8개 옵션 추가, 순차적으로 유효한 데이터 탐색"
        }
      ],
      results: [
        "코드 재사용률 90% 이상 달성 (Infocar/InfocarBiz 통합)",
        "Fragment 전환 시 메모리 사용량 40% 감소",
        "사용자 커스터마이징 가능 항목 20개+ 제공",
        "5개 연료 타입별 최적화된 UI 제공",
        "태블릿/폰 반응형 레이아웃 완벽 대응"
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
      background: "InfocarBiz 법인 고객사에서 차량 배차 관리 기능 요청이 있었습니다. 기존에 수기나 별도 시스템으로 관리하던 배차 업무를 앱 내에서 통합 관리하고, 기안자-관리자 간 워크플로우를 체계화해야 했습니다.",
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
            title: "복잡한 상태 관리",
            problem: "배차 상태(대기/승인/반려)에 따른 UI 분기가 복잡함",
            solution: "sealed class로 상태 정의, when 표현식으로 분기 처리"
        },
        {
            title: "실시간 업데이트",
            problem: "관리자 승인 시 기안자 화면이 자동 갱신되지 않음",
            solution: "Flow + collectAsState로 실시간 데이터 반영, pull-to-refresh 추가"
        },
        {
            title: "날짜/시간 선택 UX",
            problem: "시작일시가 종료일시보다 늦은 경우 등 예외 처리",
            solution: "DatePicker/TimePicker 커스텀, 유효성 검증 로직 추가"
        },
        {
            title: "리스트 상태 관리",
            problem: "필터 변경 시 리스트가 초기화되지 않는 버그",
            solution: "StateFlow로 필터 상태 관리, collect 시 리스트 재조회"
        }
      ],
      results: [
        "법인 고객사 배차 업무 시간 50% 단축",
        "배차 승인 처리 평균 시간 2시간 → 30분으로 단축",
        "배차 이력 추적 및 통계 기능으로 관리 효율화",
        "수기 관리 대비 오류율 90% 감소",
        "모바일에서 실시간 배차 확인으로 업무 편의성 향상"
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
      background: "광고 수익 극대화를 위해 단일 네트워크의 의존도를 낮추고, 다중 광고 네트워크 미디에이션 시스템 도입이 필요했습니다. Fill rate와 eCPM을 최적화하면서 사용자 경험을 해치지 않는 광고 전략이 필요했습니다.",
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
            title: "여러 광고 SDK 간 버전 충돌 및 의존성 문제 해결",
            problem: "ironSource, Pangle, AppLovin 등 SDK 간 의존성 충돌",
            solution: "Gradle 의존성 트리 분석 후 exclude 규칙 적용, 버전 통일"
        },
        {
            title: "Pangle 배너 광고 Context NPE 등 벤더사 별 특이 이슈 디버깅",
            problem: "Pangle SDK에서 특정 상황에 Context가 null로 전달되는 버그",
            solution: "Application Context 사용 및 null 체크 래퍼 클래스 구현"
        },
        {
            title: "광고 정책 변경에 따른 긴급 대응 (네이티브 → 배너 전환) 및 배포",
            problem: "광고 정책 급변 시 앱 업데이트 없이 대응 필요",
            solution: "Remote Config로 광고 타입 및 위치 동적 제어, 핫픽스 배포 프로세스 구축"
        },
        {
            title: "메모리 관리 및 광고 뷰 생명주기",
            problem: "네이티브 광고 뷰 미해제로 인한 메모리 누수",
            solution: "RecyclerView onViewRecycled에서 광고 뷰 명시적 해제"
        },
        {
            title: "저사양 기기 대응",
            problem: "광고 로드 시 UI 프리징",
            solution: "백그라운드 스레드에서 광고 로드, 로드 완료 후 메인 스레드에서 표시"
        }
      ],
      results: [
        "Fill rate 95% 이상 달성 (단일 네트워크 대비 20% 향상)",
        "eCPM 평균 30% 개선 (미디에이션 경쟁 입찰 효과)",
        "Crashlytics 광고 관련 크래시 90% 감소 (안정성 강화)",
        "사용자 이탈률 최소화 (적절한 광고 빈도 및 UX 유지)",
        "GDPR/CCPA 컴플라이언스 100% 준수"
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
      background: "기존 차량 진단 기능의 UX가 복잡하고 사용자 피드백이 많았습니다. 진단 결과 해석이 어렵고, 진단 내역 관리가 불편하다는 의견이 많아 전면 리뉴얼이 필요했습니다. 또한 서버 API 연동을 통해 더 정확한 고장 코드 정보를 제공해야 했습니다.",
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
            title: "비동기 UI 업데이트 동기화",
            problem: "진단 중 실시간 ECU 응답을 UI에 반영할 때 동기화 이슈",
            solution: "LiveData + Observer 패턴으로 반응형 UI 구현, DiffUtil로 효율적 업데이트"
        },
        {
            title: "화면 회전 시 진단 상태 유지",
            problem: "진단 중 화면 회전 시 진단 메인으로 돌아가는 버그",
            solution: "진단 진행 중 플래그를 Bundle로 보존, ViewModel에서 상태 관리"
        },
        {
            title: "아랍어 RTL 레이아웃 대응",
            problem: "레이아웃 미러링 및 텍스트 방향 처리 복잡",
            solution: "start/end 속성 사용, layoutDirection 속성 활용, 커스텀 뷰 RTL 대응"
        },
        {
            title: "고장 코드 형식 정규화",
            problem: "다양한 형식의 DTC 코드 (P0001, 00P0001 등)",
            solution: "00으로 시작하는 경우 5자리로 자르는 파싱 로직 적용"
        },
        {
            title: "Observer forever 메모리 누수",
            problem: "observeForever 사용으로 Observer 해제 누락",
            solution: "observe(viewLifecycleOwner)로 변경, 생명주기 자동 관리"
        }
      ],
      results: [
        "진단 기능 사용률 35% 증가",
        "사용자 문의 60% 감소 (직관적인 UI)",
        "12개 언어 지원으로 글로벌 사용자 확대",
        "진단 결과 정확도 향상 (API 연동)",
        "화면 회전 관련 크래시 0건 달성"
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
      background: "표준 OBD-II 프로토콜로는 제한된 데이터만 조회 가능했습니다. 제조사별 고유 프로토콜을 활용하여 DPF 포집량, 변속기 온도, 배터리 셀 전압 등 상세 데이터를 제공하여 프리미엄 서비스로 차별화가 필요했습니다.",
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
            title: "대용량 DB 다운로드",
            problem: "수십 MB 크기의 DB 파일 다운로드 시 타임아웃",
            solution: "백그라운드 다운로드, 청크 단위 다운로드, 재시도 로직"
        },
        {
            title: "SQLCipher 암호화",
            problem: "제조사 DB 보안을 위한 암호화 필요",
            solution: "SQLCipher 라이브러리 적용, 버전 업그레이드 (4.5.4 → 4.7.2)"
        },
        {
            title: "프로파일 정렬 정책",
            problem: "사용자가 자주 쓰는 프로파일을 빨리 찾을 수 없음",
            solution: "다운로드 시에만 updateTime 갱신, 최근 사용 순 정렬"
        },
        {
            title: "DB 다운로드 전 API 체크",
            problem: "DB 다운로드 실패해도 데이터 조회 시도",
            solution: "DB 다운로드 완료 여부 체크 로직 추가"
        },
        {
            title: "제조사 데이터 응답 없을 때 예외 처리",
            problem: "ECU 응답 없을 때 무한 대기",
            solution: "타임아웃 설정, 응답 없음 UI 표시"
        }
      ],
      results: [
        "제조사 데이터 구매 전환율 25% 향상",
        "프리미엄 사용자 만족도 90% 이상",
        "표준 OBD 대비 조회 가능 항목 3배 이상 증가",
        "데이터 정확도 향상으로 신뢰도 상승",
        "일본 외 전 지역 서비스 제공"
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
      background: "차량 내장 디스플레이에서 인포카 앱을 사용하고 싶다는 요청이 있었습니다. Android Auto를 통해 운전 중에도 안전하게 차량 정보를 확인할 수 있어야 했으며, Google의 엄격한 디자인 가이드라인을 준수해야 했습니다.",
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
      background: "네비게이션 앱 사용 중에도 속도, RPM, 연비 등 주행 데이터를 확인하고 싶다는 사용자 요청이 많았습니다. 운전 중 앱 전환 없이 필요한 정보를 확인할 수 있는 미니 대시보드가 필요했습니다.",
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
            title: "메모리 누수 (LiveData Observer 중복 등록)",
            problem: "LiveData Observer가 중복 등록되어 OOM 발생",
            solution: "Observer 등록을 1회로 제한, onDestroyView에서 명시적 해제"
        },
        {
            title: "Service 생명주기 관리",
            problem: "Activity 종료 후에도 Service가 남아있어 메모리 누수",
            solution: "Activity onDestroy에서 Service 명시적 종료, LifecycleObserver 활용"
        },
        {
            title: "Android 10+ 백그라운드 제한",
            problem: "백그라운드에서 오버레이 시작 불가",
            solution: "Foreground Service로 전환, 알림 표시 필수"
        },
        {
            title: "Android 14+ 권한 대응",
            problem: "FOREGROUND_SERVICE_CONNECTED_DEVICE 권한 필요",
            solution: "AndroidManifest에 권한 선언, 런타임 권한 요청"
        },
        {
            title: "오버레이 마이그레이션",
            problem: "기존 설정을 새 구조로 마이그레이션 필요",
            solution: "최초 1회 마이그레이션 플래그로 기존 데이터 변환"
        }
      ],
      results: [
        "사용자 만족도 향상 (앱 리뷰 긍정 피드백 30% 증가)",
        "메모리 누수 완전 해결로 앱 안정성 향상",
        "네비게이션 앱과 동시 사용률 50% 증가",
        "배터리 소모 최적화로 장시간 사용 가능",
        "Android 8.0 ~ 14 전 버전 대응 완료"
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
      background: "법인 차량 관리자들의 주행 일지 엑셀 내보내기 요청과 개인 사용자들의 주행 목적 관리 기능 요청이 있었습니다. 또한 안전 운전 유도를 위한 이벤트(급가속/급감속/과속) 카운트 기능도 필요했습니다.",
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
            title: "대용량 데이터 처리",
            problem: "장거리 주행 시 수천 개의 데이터 포인트로 OOM 발생",
            solution: "청크 단위 처리, 스트리밍 방식 엑셀 생성"
        },
        {
            title: "엑셀 파일 생성 메모리 효율화",
            problem: "Apache POI의 메모리 사용량이 큼",
            solution: "SXSSFWorkbook (스트리밍 API) 사용, 메모리 제한 설정"
        },
        {
            title: "이벤트 카운트 DB 접근 최적화",
            problem: "매 이벤트마다 DB 접근으로 성능 저하",
            solution: "메모리에 카운트 캐싱, 주행 종료 시 일괄 저장"
        },
        {
            title: "GPS 거리 정확도",
            problem: "GPS 오차로 인한 거리 오측정",
            solution: "칼만 필터 적용, 이상치 제거 알고리즘"
        },
        {
            title: "주행 기록 복구 시 형식 오류",
            problem: "서버 데이터 형식이 맞지 않아 Format Exception",
            solution: "데이터 유효성 검증, 예외 처리 강화"
        }
      ],
      results: [
        "법인 고객 업무 효율 60% 향상 (수기 작성 → 자동 생성)",
        "주행 목적 입력률 80% 증가 (기본값 설정 효과)",
        "안전 운전 유도 (이벤트 카운트 시각화로 운전 습관 개선)",
        "엑셀 내보내기 기능 월 평균 1,000회 이상 사용",
        "주행 기록 정확도 향상 (GPS 보정)"
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
            title: "VIN 파싱 정확도",
            problem: "제조사마다 VIN 규칙이 달라 파싱 오류 발생",
            solution: "제조사별 VIN 규칙 데이터베이스 구축, 예외 케이스 처리"
        },
        {
            title: "이미지 파일 관리",
            problem: "차량 삭제 시 이미지 파일이 남아 저장소 낭비",
            solution: "삭제 API 성공 후 내부 저장소 이미지 파일 삭제 로직 추가"
        },
        {
            title: "제조사 로고 최적화",
            problem: "다양한 해상도에서 로고가 흐릿하게 표시",
            solution: "SVG → 고해상도 PNG (300x300) 변환, Glide로 효율적 로딩"
        },
        {
            title: "국가별 제조사 정렬",
            problem: "한국 사용자에게 외국 제조사가 먼저 표시",
            solution: "언어 설정 기반 제조사 정렬 로직 (한국: 현대/기아 우선)"
        },
        {
            title: "이모지 처리",
            problem: "차량 이름에 이모지 입력 시 서버 오류",
            solution: "이모지 제거 후 서버 업로드, 로컬에는 이모지 포함 저장"
        }
      ],
      results: [
        "차량 등록 시간 70% 단축 (VIN 자동 완성)",
        "사용자 편의성 대폭 향상",
        "차량 정보 정확도 95% 이상 (VIN 기반)",
        "23개 제조사 로고로 시각적 완성도 향상",
        "차량 관리 기능 사용률 40% 증가"
      ]
    }
  },
];