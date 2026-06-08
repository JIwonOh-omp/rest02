import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__header">
          <span className="contact__label">CONTACT</span>
          <h2 className="section-title">
            프로젝트를 <span className="accent">시작해볼까요?</span>
          </h2>
          <p className="section-subtitle">
            어떤 아이디어든 환영합니다. 편하게 말씀해 주세요.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <span className="contact__info-label">이메일</span>
                <span className="contact__info-value">hello@pieceofcakestudio.kr</span>
              </div>
            </div>
            <div className="contact__info-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <span className="contact__info-label">전화</span>
                <span className="contact__info-value">010-0000-0000</span>
              </div>
            </div>
            <div className="contact__info-card">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="contact__info-label">위치</span>
                <span className="contact__info-value">서울특별시</span>
              </div>
            </div>

            <div className="contact__process">
              <h4 className="contact__process-title">진행 프로세스</h4>
              {['상담 및 요구사항 분석', '견적 및 일정 확정', '개발 및 중간 보고', '납품 및 유지보수'].map((step, i) => (
                <div className="contact__process-step" key={i}>
                  <span className="contact__process-num accent">{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시간 내에 연락드리겠습니다.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <label htmlFor="name">성함</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="홍길동"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">이메일</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="type">문의 유형</label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>선택해 주세요</option>
                    <option value="web">웹 개발</option>
                    <option value="program">프로그램 개발</option>
                    <option value="mobile">모바일 앱</option>
                    <option value="design">UI/UX 디자인</option>
                    <option value="consult">컨설팅</option>
                    <option value="etc">기타</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label htmlFor="message">문의 내용</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="프로젝트에 대해 간략히 설명해 주세요."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  문의 보내기
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
