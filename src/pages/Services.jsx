import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode, faGlobe, faMobileScreen, faDatabase,
  faPenRuler, faWrench
} from '@fortawesome/free-solid-svg-icons'
import './Services.css'

const services = [
  {
    icon: faCode,
    title: '프로그램 개발',
    desc: '데스크톱 애플리케이션, 업무 자동화 솔루션, API 서버 등 맞춤형 소프트웨어를 개발합니다.',
    tags: ['Python', 'C#', 'Java', 'Node.js'],
  },
  {
    icon: faGlobe,
    title: '웹 개발',
    desc: '반응형 웹사이트, 웹 애플리케이션, 관리자 대시보드 등 모던 웹 서비스를 구축합니다.',
    tags: ['React', 'Vue', 'Next.js', 'TypeScript'],
  },
  {
    icon: faMobileScreen,
    title: '모바일 앱 개발',
    desc: 'iOS/Android 크로스플랫폼 앱부터 네이티브 앱까지, 사용자 친화적인 모바일 서비스를 제공합니다.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: faDatabase,
    title: 'DB & 백엔드',
    desc: '안정적인 데이터베이스 설계와 확장 가능한 백엔드 아키텍처로 서비스 기반을 다집니다.',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS'],
  },
  {
    icon: faPenRuler,
    title: 'UI/UX 디자인',
    desc: '사용자 경험 중심의 직관적인 인터페이스 설계로 제품의 완성도를 높입니다.',
    tags: ['Figma', 'Prototyping', 'Wireframe', 'Design System'],
  },
  {
    icon: faWrench,
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
              <div className="services__icon">
                <FontAwesomeIcon icon={s.icon} />
              </div>
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
