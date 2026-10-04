export interface InfoDataItem {
  title: string;
  periodOrInfo: string;
  subInfo: string;
  confirmDate: string;
  images?: string[];
  details?: string[];
  isDetails?: boolean;
  link?: string[]; // HTML 대신 문자열 배열이나 설명 텍스트로 관리
}

export interface InfoData {
  workCareer: InfoDataItem[];
  skillCareer: InfoDataItem[];
  skillCareer2: InfoDataItem[];
}

export const InfoData: InfoData = {
  workCareer: [
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2024.01.01 ~ 2025.01.02", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2025.02.13" },
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2022.06.16 ~ 2023.12.14", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2023.12.18" },
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2022.01.04 ~ 2022.06.15", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22" },
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2019.01.25 ~ 2022.01.03", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22" },
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2018.03.29 ~ 2019.01.24", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2019.02.28" },
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2018.01.01 ~ 2018.03.28", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2018.04.11" },
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2017.04.14 ~ 2017.12.31", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2018.04.11" },
    { title: "(주)제이앤에프커뮤니케이션", periodOrInfo: "2017.04.13 ~ 2017.04.13", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2019.02.28" }
  ],
  skillCareer: [
    { title: "기록관리시스템 통합 관리 환경 구축", periodOrInfo: "2024.10.02 ~ 2024.12.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2025.02.13", isDetails: false },
    {
      title: "등록저작물 관리 강화 및 저작권 등록시스템 기능 개선",
      periodOrInfo: "2024.05.10 ~ 2024.10.01",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "2025.02.13",
      isDetails: true,
      images: [
        "/assets/images/projects/저작권등록시스템/pc.png",
        "/assets/images/projects/저작권등록시스템/mobile.png"
      ],
      details: [
        "저작권 등록 및 심사 프로세스 UI 개선",
        "전자정부 표준프레임워크 공통 컴포넌트 기반 UI 개발",
        "사용자 편의성을 고려한 입력 폼(Form) 및 그리드 컴포넌트 최적화"
      ]
    },
    { title: "클라우드 기반 그룹웨어 및 기록물 관리 시스템 구축 사업", periodOrInfo: "2023.03.13 ~ 2023.12.13", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2023.12.18", isDetails: false },
    {
      title: "비전자문서관리시스템 고도화",
      periodOrInfo: "2022.12.01 ~ 2023.06.30",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "2023.12.18",
      isDetails: false,
     
    },
    { title: "에임메드 토닥씨 관리웹 소프트웨어 개발 및 공급 사업", periodOrInfo: "2022.11.01 ~ 2023.04.30", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2023.12.18", isDetails: false },
    { title: "국방기술품질원 전자도서관 및 기록물관리시스템 교체·개편 사업", periodOrInfo: "2022.05.01 ~ 2022.05.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "국방과학연구소 종결사업 기록관리시스템 기능 고도화 시스템 구축", periodOrInfo: "2021.11.01 ~ 2022.03.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "(주)우림FMG MIS시스템 고도화 구축 사업", periodOrInfo: "2021.06.01 ~ 2021.07.09", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "디지털플랫폼 개편 사업", periodOrInfo: "2020.12.20 ~ 2021.09.27", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "저작권 관리자 페이지 구축 사업", periodOrInfo: "2020.06.01 ~ 2020.09.30", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "개인 평점 시스템 페이지 구축사업", periodOrInfo: "2020.06.01 ~ 2020.07.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    {
      title: "공동체 회복프로그램 홈페이지 구축 사업",
      periodOrInfo: "2020.05.01 ~ 2020.08.31",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "2022.06.22",
      link: ['https://ansan.go.kr/hope/'],
      isDetails: true,
      images: [
        "/assets/images/projects/공동체회복프로그램/pc.png",
        "/assets/images/projects/공동체회복프로그램/mobile.png"
      ],
      details: [
        "공동체 회복프로그램 홈페이지 UI/UX 개편 및 마크업 구현",
        "반응형 웹 및 크로스 브라우징 구현",
        "웹 표준 및 웹 접근성 지침 준수"
      ]
    },
    { title: "전자기록물 관리시스템 표준전자정부프레임워크 적용 사업", periodOrInfo: "2020.02.01 ~ 2020.05.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "상암 매체제작시스템 구축", periodOrInfo: "2020.01.01 ~ 2020.02.29", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "카이스트 관리자 홈페이지 개선사업", periodOrInfo: "2020.01.01 ~ 2020.03.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "소속국악원 홈페이지 개선사업", periodOrInfo: "2019.10.01 ~ 2019.12.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "자금관리시스템 구축 사업", periodOrInfo: "2019.09.01 ~ 2019.10.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    { title: "계약관리 시스템 개선 사업", periodOrInfo: "2019.06.01 ~ 2019.08.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2022.06.22", isDetails: false },
    {
      title: "국립국악원 홈페이지 개선 사업",
      periodOrInfo: "2019.05.01 ~ 2019.05.31",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "2022.06.22",
      isDetails: true,
      images: [
        "/assets/images/projects/국악원/pc.png",
        "/assets/images/projects/국악원/mobile.png"
      ],
      details: [
        "국립국악원 홈페이지 메인 및 서브 페이지 UI/UX 개선",
        "시맨틱 마크업 설계 및 웹 접근성(WA) 품질 인증 획득",
        "다양한 기기 및 브라우저 환경에 최적화된 반응형 레이아웃 구축"
      ]
    },
    { title: "국립국악원 홈페이지 개선 사업", periodOrInfo: "2018.11.19 ~ 2018.12.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2019.02.28", isDetails: false },
    { title: "ICT 역량지수 통합관리시스템 개선 사업", periodOrInfo: "2018.04.02 ~ 2018.10.14", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2019.02.28", isDetails: false },
    { title: "5⦁18기념재단내부이용시스템 고도화 사업", periodOrInfo: "2017.11.01 ~ 2018.01.31", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2018.04.11", isDetails: false },
    { title: "재단법인 한국사회과학자료원 사이트 개편", periodOrInfo: "2017.11.01 ~ 2018.03.28", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2018.04.11", isDetails: false },
    { title: "종료사업 기록관리시스템 구축(2차)/영상기록시스템 기능개선", periodOrInfo: "2017.09.01 ~ 2017.11.30", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2018.04.11", isDetails: false },
    { title: "전자도서관/기록관리시스템 성능개선", periodOrInfo: "2017.08.01 ~ 2017.10.31", subInfo: "SW개발 > UI/UX 개발", confirmDate: "2018.04.11", isDetails: false },
    { title: "공연예술박물관 자료관리시스템 고도화2차", periodOrInfo: "2017.04.17 ~ 2017.11.30", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2018.04.11", isDetails: false },
    { title: "ICT역량지수 통합관리시스템 개선 사업", periodOrInfo: "2017.04.14 ~ 2017.11.30", subInfo: "SW개발 > UI/UX디자인", confirmDate: "2018.04.11", isDetails: false }
  ],
  skillCareer2: [
    {
      title: "E-법원역사관 사용자/관리자 홈페이지 구축 ",
      periodOrInfo: "2024.10.02 ~ 2024.12.31",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "KOSA 미인증",
      isDetails: true,
      images: [
        "/assets/images/projects/E-법원역사관/pc.png",
        "/assets/images/projects/E-법원역사관/mobile.png"
      ],
      details: [
        "E-법원역사관 사용자 프론트 및 관리자 백오피스 UI/UX 개발",
        "역사 자료 및 아카이브 전시용 반응형 갤러리/뷰어 컴포넌트 구현",
        "웹 접근성 준수를 위한 시맨틱 태그 설계 및 키보드 네비게이션 최적화"
      ]
    },
    {
      title: "국인연금 사용자 홈페이지 구축 ",
      periodOrInfo: "2024.10.02 ~ 2024.12.31",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "KOSA 미인증",
      isDetails: true,
      images: [
        "/assets/images/projects/국인연금/pc.png",
        "/assets/images/projects/국인연금/mobile.png"
      ],
      details: [
        "국인연금 조회 및 신청 서비스 사용자 홈페이지 UI 개발",
        "복잡한 데이터 입력 폼 및 신청 단계 UI 최적화",
        "웹 표준 마크업 설계 및 스크린 리더 지원(웹 접근성 준수)"
      ]
    },
    {
      title: "카이스트 기록포탈 구축",
      periodOrInfo: "2024.10.02 ~ 2024.12.31",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "KOSA 미인증",
      isDetails: true,
      images: [
        "/assets/images/projects/카이스트기록포탈/pc.png",
        "/assets/images/projects/카이스트기록포탈/mobile.png"
      ],
      details: [
        "카이스트 아카이브 기록 검색 및 전시 포탈 UI/UX 구축",
        "방대한 학술 자료 검색 결과 및 아카이브 트랙 뷰어 화면 최적화",
        "웹 표준 마크업 준수 및 시각 장애인을 위한 대체 텍스트 지원"
      ]
    },
    {
      title: "한국전력 사용자/관리자 기록물 홈페이지 구축 (내부망) ",
      periodOrInfo: "2024.10.02 ~ 2024.12.31",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "KOSA 미인증",
      isDetails: true,
      images: [
        "/assets/images/projects/한국전력/pc.png",
        //"/assets/images/projects/한국전력/mobile.png",
        //"/assets/images/projects/한국전력/한국전력_3.png"
      ],
      details: [
        "한국전력 내부망 기록 관리 및 검색 포탈 UI/UX 개발",
        "대용량 문서 기록 분류 체계 및 관리 백오피스 인터페이스 최적화",
        "안정적인 데이터 로딩 처리를 위한 비동기 컴포넌트 설계"
      ]
    },
    {
      title: "통합GIS 시스템 ",
      periodOrInfo: "0000",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "외주작업",
      isDetails: true,
      images: [
        "/assets/images/projects/통합GIS 시스템/pc.png"
      ],
      details: [
        "지리정보시스템(GIS) 통합 관제 및 조회 시스템 UI/UX 개발",
        "공간 데이터 및 레이어 선택 제어 컴포넌트 인터페이스 구현",
        "화면 분할 레이아웃 및 다각도 반응형 대시보드 구현"
      ]
    },
    {
      title: "해양수산빅데이터플랫폼 이용자 ",
      periodOrInfo: "0000",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "외주작업",
      isDetails: true,
      images: [
        "/assets/images/projects/해양수산빅데이터/pc.png",
        "/assets/images/projects/해양수산빅데이터/mobile.png"
      ],
      details: [
        "해양수산 빅데이터 거래 및 활용 플랫폼 이용자 화면 UI/UX 개발",
        "데이터 통계 차트 및 대시보드 UI 연동 개발",
        "사용성 편의를 개선한 반응형 레이아웃 구축"
      ]
    },
    {
      title: "실내공기 사용자/관리자 유해인자관리 ",
      periodOrInfo: "0000",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "외주작업",
      isDetails: true,
      images: [
        "/assets/images/projects/실내공기/pc.png",
        //"/assets/images/projects/실내공기/mobile.png",
        //"/assets/images/projects/실내공기/실내공기_3.png"
      ],
      details: [
        "실내 공기질 모니터링 및 유해인자 관리 시스템 UI 개발",
        "공기질 상태 수치 실시간 시각화 컴포넌트 구현",
        "사용자 맞춤형 통계 대시보드 화면 설계 및 개발"
      ]
    },
    {
      title: "새빛하우스 사용자/관리자 홈페이지 구축 ",
      periodOrInfo: "0000",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "외주작업",
      isDetails: true,
      images: [
        "/assets/images/projects/집수리/pc.png",
        "/assets/images/projects/집수리/mobile.png",
        //"/assets/images/projects/집수리/집수리_3.png"
      ],
      details: [
        "집수리 지원 사업(새빛하우스) 신청 및 접수 관리 홈페이지 구축",
        "사용자 신청 프로세스 UI 및 관리자 모니터링 화면 개발",
        "반응형 레이아웃 및 모바일 웹 접근성 구현"
      ]
    },
    {
      title: "XRPLUS 사용자 홈페이지 구축 ",
      periodOrInfo: "0000",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "외주작업",
      isDetails: true,
      images: [
        "/assets/images/projects/XRPLUS/pc.png",
        "/assets/images/projects/XRPLUS/mobile.png"
      ],
      details: [
        "XR 콘텐츠 유통 및 소개 플랫폼 사용자 홈페이지 개발",
        "비주얼 요소를 강조한 동적 애니메이션 및 인터랙션 구현",
        "컴포넌트 단위 스타일 재사용성을 극대화한 SCSS 아키텍처 설계"
      ]
    },
    {
      title: "K-STEAM-Tms 사용자 홈페이지 구축 ",
      periodOrInfo: "0000",
      subInfo: "SW개발 > UI/UX 개발",
      confirmDate: "외주작업",
      isDetails: true,
      images: [
        "/assets/images/projects/K-STEAM-Tms/pc.png",
        "/assets/images/projects/K-STEAM-Tms/mobile.png"
      ],
      details: [
        "K-STEAM 교육 관리 및 분석 플랫폼(TMS) 사용자 화면 UI/UX 개발",
        "학습 통계 시각화 및 대시보드 인터페이스 구현",
        "모바일 및 태블릿 대응 반응형 그리드 시스템 구축"
      ]
    }
  ]
};