import { useState } from 'react'
import './Portfolio.css'

const categories = ['전체', '웹 개발', '프로그램', '모바일']

const projects = [
  {
    title: '스마트 재고 관리 시스템',
    category: '프로그램',
    desc: '중소기업 대상 실시간 재고 추적 및 발주 자동화 솔루션',
    stack: ['Python', 'PyQt', 'PostgreSQL'],
    color: '#2a2a2a',
  },
  {
    title: '부동산 플랫폼 웹사이트',
    category: '웹 개발',
    desc: '매물 검색, 지도 연동, 중개사 매칭 기능의 종합 부동산 서비스',
    stack: ['React', 'Node.js', 'MongoDB'],
    color: '#252520',
  },
  {
    title: '배달 주문 앱',
    category: '모바일',
    desc: '사장님 앱과 고객 앱을 분리한 배달 주문 관리 플랫폼',
    stack: ['React Native', 'Firebase'],
    color: '#22222a',
  },
  {
    title: '병원 예약 관리 시스템',
    category: '프로그램',
    desc: '환자 예약, 진료 기록, 처방전 관리 통합 솔루션',
    stack: ['C#', 'WPF', 'MySQL'],
    color: '#1e2222',
  },
  {
    title: '쇼핑몰 관리 대시보드',
    category: '웹 개발',
    desc: '매출 분석, 상품 관리, 주문 처리 통합 어드민 패널',
    stack: ['Vue.js', 'Express', 'Chart.js'],
    color: '#22201a',
  },
  {
    title: '헬스케어 트래킹 앱',
    category: '모바일',
    desc: '운동 기록, 식단 관리, 건강 지표 시각화 앱',
    stack: ['Flutter', 'Dart', 'AWS'],
    color: '#1a2222',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('전체')

  const filtered = active === '전체' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="portfolio__header">
          <span className="portfolio__label">PORTFOLIO</span>
          <h2 className="section-title">
            우리가 만든 <span className="accent">결과물</span>
          </h2>
          <p className="section-subtitle">
            다양한 분야에서 쌓아온 개발 경험을 확인하세요.
          </p>
        </div>

        <div className="portfolio__filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`portfolio__filter-btn ${active === cat ? 'portfolio__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((project, i) => (
            <div
              className="portfolio__card"
              key={i}
              style={{ '--card-color': project.color }}
            >
              <div className="portfolio__card-thumb" style={{ backgroundColor: project.color }}>
                <div className="portfolio__card-overlay">
                  <span className="portfolio__card-category">{project.category}</span>
                </div>
              </div>
              <div className="portfolio__card-body">
                <h3 className="portfolio__card-title">{project.title}</h3>
                <p className="portfolio__card-desc">{project.desc}</p>
                <div className="portfolio__card-stack">
                  {project.stack.map((s) => (
                    <span key={s} className="portfolio__card-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
