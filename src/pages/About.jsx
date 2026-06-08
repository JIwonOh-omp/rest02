import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faHandshake, faShield, faComments } from '@fortawesome/free-solid-svg-icons'
import './About.css'

const values = [
  {
    icon: faLightbulb,
    title: '기술 혁신',
    desc: '최신 기술 트렌드를 적극 도입하고 끊임없이 학습하여 최선의 솔루션을 제공합니다.',
  },
  {
    icon: faHandshake,
    title: '고객 중심',
    desc: '고객의 비즈니스 목표를 이해하고, 그에 맞는 맞춤형 개발로 실질적인 가치를 창출합니다.',
  },
  {
    icon: faShield,
    title: '책임과 신뢰',
    desc: '약속한 일정과 품질을 반드시 지키며, 프로젝트 완료 후에도 책임 있는 유지보수를 약속합니다.',
  },
  {
    icon: faComments,
    title: '소통과 투명성',
    desc: '개발 과정을 투명하게 공유하고, 클라이언트와 긴밀한 소통을 통해 방향을 맞춥니다.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <span className="about__label">ABOUT US</span>
            <h2 className="section-title">
              기술로 성장하는<br />
              <span className="accent">개발 파트너</span>
            </h2>
            <p className="about__desc">
              Piece of Cake Studio는 2026년 6월에 설립된 프로그램 개발 및 웹 개발 전문 기업입니다.
              소규모이지만 탄탄한 기술력을 바탕으로, 중소기업과 스타트업의 디지털 전환을 돕고 있습니다.
            </p>
            <p className="about__desc">
              단순한 외주 개발을 넘어, 클라이언트의 비즈니스를 깊이 이해하고
              장기적인 파트너십을 추구합니다. 아이디어가 있다면 함께 만들어갑니다.
            </p>

            <div className="about__founded">
              <div className="about__founded-item">
                <span className="about__founded-date accent">2026.06.08</span>
                <span className="about__founded-label">회사 설립</span>
              </div>
              <div className="about__founded-item">
                <span className="about__founded-date accent">서울</span>
                <span className="about__founded-label">소재지</span>
              </div>
              <div className="about__founded-item">
                <span className="about__founded-date accent">5+</span>
                <span className="about__founded-label">핵심 기술스택</span>
              </div>
            </div>
          </div>

          <div className="about__right">
            <div className="about__values">
              {values.map((v, i) => (
                <div className="about__value-card" key={i}>
                  <div className="about__value-icon">
                    <FontAwesomeIcon icon={v.icon} />
                  </div>
                  <div>
                    <h3 className="about__value-title">{v.title}</h3>
                    <p className="about__value-desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
