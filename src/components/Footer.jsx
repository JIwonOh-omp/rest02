import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">piece of <span className="accent">cake</span> studio</span>
          <p className="footer__tagline">아이디어를 현실로 만드는 개발 파트너</p>
        </div>

        <div className="footer__links">
          <a href="#services">서비스</a>
          <a href="#portfolio">포트폴리오</a>
          <a href="#about">회사소개</a>
          <a href="#contact">연락처</a>
        </div>

        <div className="footer__right">
          <div className="footer__socials">
            <a href="https://github.com/JIwonOh-omp" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:hello@pieceofcakestudio.kr" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <p className="footer__copy">© {year} Piece of Cake Studio</p>
          <p className="footer__established">Est. 2026.06.08</p>
        </div>
      </div>
    </footer>
  )
}
