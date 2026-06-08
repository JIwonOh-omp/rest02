import './Hero.css'

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-grid" />
      <div className="hero__glow" />

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          2026년 6월 개업 · IT 개발 전문 기업
        </div>

        <h1 className="hero__title">
          아이디어를<br />
          <span className="accent">현실로</span> 만드는<br />
          개발 파트너
        </h1>

        <p className="hero__desc">
          프로그램 개발부터 웹 서비스까지,<br />
          기술로 비즈니스의 가능성을 확장합니다.
        </p>

        <div className="hero__actions">
          <button className="btn-primary" onClick={() => handleScroll('#contact')}>
            프로젝트 문의
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn-secondary" onClick={() => handleScroll('#portfolio')}>
            포트폴리오 보기
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num accent">2026</span>
            <span className="hero__stat-label">설립 연도</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num accent">100%</span>
            <span className="hero__stat-label">고객 만족</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num accent">빠른</span>
            <span className="hero__stat-label">납기 준수</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" onClick={() => handleScroll('#services')}>
        <span>스크롤</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
