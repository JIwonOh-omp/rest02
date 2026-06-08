# 개발일지 — Piece of Cake Studio 공식 웹사이트

> 리포지토리: https://github.com/JIwonOh-omp/rest02  
> 배포 URL: https://jiwonoh-omp.github.io/rest02/

---

## 2026-06-08 (Day 1) — 프로젝트 초기 설정 및 전체 페이지 개발 완료

### 프로젝트 개요
- **목적** : IT 개발 회사(Piece of Cake Studio)의 공식 홈페이지 제작
- **업종** : 프로그램 개발 / 웹 개발
- **설립일** : 2026년 6월 8일

---

### 기술 스택

| 항목 | 선택 |
|------|------|
| 프레임워크 | React 18 |
| 빌드 도구 | Vite 5 |
| 스타일링 | CSS Modules (컴포넌트별 분리) |
| 라우팅 | 단일 페이지 (섹션 스크롤) |
| 배포 | GitHub Pages + GitHub Actions |

---

### 디자인 시스템

| 항목 | 값 |
|------|----|
| 주색 (배경) | 다크그레이 `#111111`, `#1a1a1a` |
| 보조색 | 연그레이 `#e8e8e8`, `#c8c8c8` |
| 포인트 컬러 | 옐로우 `#f5c518` |
| 폰트 | Noto Sans KR + Inter |
| 기준 해상도 | 1200px (컨테이너 최대) |

CSS 커스텀 프로퍼티(변수)로 디자인 토큰을 `src/styles/variables.css`에 일괄 관리.

---

### 페이지 구성 (Single Page Application)

#### 1. Hero 섹션
- 그리드 배경 패턴 + 옐로우 방사형 글로우 효과
- 애니메이션 뱃지 ("2026년 6월 개업 · IT 개발 전문 기업")
- 메인 카피: "아이디어를 현실로 만드는 개발 파트너"
- CTA 버튼 2개 (프로젝트 문의 / 포트폴리오 보기)
- 하단 통계 3개 (설립 연도 / 고객 만족 / 납기 준수)
- 스크롤 힌트 애니메이션

#### 2. Services 섹션
6개 서비스 카드 (호버 시 옐로우 테두리 + 아이콘 색상 전환)
- 프로그램 개발 (Python, C#, Java, Node.js)
- 웹 개발 (React, Vue, Next.js, TypeScript)
- 모바일 앱 개발 (React Native, Flutter)
- DB & 백엔드 (MySQL, PostgreSQL, MongoDB, AWS)
- UI/UX 디자인 (Figma, Prototyping)
- 유지보수 & 컨설팅

#### 3. Portfolio 섹션
- 카테고리 필터 (전체 / 웹 개발 / 프로그램 / 모바일)
- 6개 프로젝트 카드 (썸네일 + 카테고리 뱃지 + 기술 스택 태그)
- 호버 시 float 애니메이션

#### 4. About 섹션
- 회사 소개 텍스트
- 설립일 / 소재지 / 기술스택 통계
- 핵심 가치 4개 카드 (기술 혁신 / 고객 중심 / 책임과 신뢰 / 소통과 투명성)

#### 5. Contact 섹션
- 연락처 정보 카드 (이메일 / 전화 / 위치)
- 진행 프로세스 4단계 안내
- 문의 폼 (성함 / 이메일 / 문의 유형 / 내용)
- 제출 완료 시 성공 화면 전환

#### 6. Navbar / Footer
- 스크롤 감지 → 배경 블러 처리
- 모바일 햄버거 메뉴 (슬라이드 인)
- 각 섹션 스무스 스크롤 이동

---

### 주요 커밋 이력

| 커밋 해시 | 내용 |
|-----------|------|
| `cb8393e` | Initial commit (빈 리포지토리) |
| `603b3ea` | feat: React 프로젝트 초기화 및 전체 페이지 구현 |
| `575be6d` | ci: GitHub Pages 배포 워크플로우 추가 + base 경로 설정 |
| `69861f2` | feat: OG 이미지 생성 및 Open Graph / Twitter Card 메타태그 추가 |

---

### 배포 설정

- **방식** : GitHub Actions → `actions/deploy-pages`
- **트리거** : `main` 브랜치 push 시 자동 빌드·배포
- **빌드 명령** : `npm ci && npm run build`
- **Vite base** : `/rest02/` (GitHub Pages 서브경로 대응)
- **워크플로우 파일** : `.github/workflows/deploy.yml`

---

### OG 이미지 (소셜 미디어 썸네일)

- **파일** : `public/og-image.png` (1200 × 630px)
- **포함 정보** : 회사명, 태그라인, 서비스 목록 6개, 통계, 배포 URL
- **적용 태그** : Open Graph + Twitter Card

---

### 향후 작업 예정

- [ ] 실제 연락처 정보 입력 (전화, 이메일)
- [ ] 포트폴리오 실제 이미지/데이터 교체
- [ ] 스크롤 진입 시 섹션 애니메이션 (Intersection Observer)
- [ ] 도메인 연결 (커스텀 도메인)
- [ ] 문의 폼 백엔드 연동 (이메일 발송)
