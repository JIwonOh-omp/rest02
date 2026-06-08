import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9l3 3-3 3M13 15h3" />
      </svg>
    ),
    title: '프로그램 개발',
    desc: '데스크톱 애플리케이션, 업무 자동화 솔루션, API 서버 등 맞춤형 소프트웨어를 개발합니다.',
    tags: ['Python', 'C#', 'Java', 'Node.js'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3M13 11h4" />
      </svg>
    ),
    title: '웹 개발',
    desc: '반응형 웹사이트, 웹 애플리케이션, 관리자 대시보드 등 모던 웹 서비스를 구축합니다.',
    tags: ['React', 'Vue', 'Next.js', 'TypeScript'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: '모바일 앱 개발',
    desc: 'iOS/Android 크로스플랫폼 앱부터 네이티브 앱까지, 사용자 친화적인 모바일 서비스를 제공합니다.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v4H4zM4 12h16v4H4zM4 20h16" />
        <path d="M8 4v4M8 12v4" />
      </svg>
    ),
    title: 'DB & 백엔드',
    desc: '안정적인 데이터베이스 설계와 확장 가능한 백엔드 아키텍처로 서비스 기반을 다집니다.',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
    title: 'UI/UX 디자인',
    desc: '사용자 경험 중심의 직관적인 인터페이스 설계로 제품의 완성도를 높입니다.',
    tags: ['Figma', 'Prototyping', 'Wireframe', 'Design System'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: '유지보수 & 컨설팅',
    desc: '기존 시스템 개선, 성능 최적화, 기술 스택 전환 등 전반적인 IT 컨설팅을 제공합니다.',
    tags: ['리팩토링', '성능 최적화', '보안', '마이그레이션'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services__header">
          <span className="services__label">SERVICES</span>
          <h2 className="section-title">
            무엇을 <span className="accent">도와드릴까요?</span>
          </h2>
          <p className="section-subtitle">
            아이디어 단계부터 런칭, 유지보수까지 전 과정을 함께합니다.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="services__card" key={i}>
              <div className="services__icon">{s.icon}</div>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__desc">{s.desc}</p>
              <div className="services__tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="services__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
