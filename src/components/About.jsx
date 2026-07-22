import { personalInfo, experiences } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [expRef, expVisible] = useScrollReveal()

  return (
    <section className="section about" id="about">
      <div className="dot-grid" />
      <div className="container">
        <div className="about-grid">
          {/* 左侧：头像 */}
          <div className="about-visual">
            <div className="about-img-wrap">
              <img src="/assets/avatar.png" alt="钟欣汝 Ruby" />
              <div className="about-img-tag">
                <span className="name">{personalInfo.name}</span>
                <span className="role">{personalInfo.englishName} · {personalInfo.title}</span>
              </div>
            </div>
          </div>

          {/* 右侧：内容 */}
          <div className="about-content">
            <div ref={headerRef} className={`reveal ${headerVisible ? 'in-view' : ''}`}>
              <div className="section-label">About Me</div>
              <h2 className="about-name">
                {personalInfo.name} <span className="en">{personalInfo.englishName}</span>
              </h2>
              <p className="about-role">{personalInfo.englishTitle}</p>
              <p className="about-bio">{personalInfo.bio}</p>
            </div>

            {/* 基本信息 */}
            <div className="about-meta">
              <div className="about-meta-item">
                <div className="label">Education</div>
                <div className="value">{personalInfo.education}</div>
              </div>
              <div className="about-meta-item">
                <div className="label">Languages</div>
                <div className="value">{personalInfo.languages}</div>
              </div>
              <div className="about-meta-item">
                <div className="label">Location</div>
                <div className="value">{personalInfo.location}</div>
              </div>
              <div className="about-meta-item">
                <div className="label">Certificates</div>
                <div className="value">{personalInfo.certificates.join(' · ')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 工作经历 — 独立全宽区域 */}
        <div ref={expRef} className={`about-experience reveal ${expVisible ? 'in-view' : ''}`}>
          <div className="section-label">Experience</div>
          <div className="exp-cards">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card">
                <div className="exp-card-period">{exp.period}</div>
                <div className="exp-card-role">{exp.role}</div>
                <div className="exp-card-company">{exp.company}</div>
                <div className="exp-card-location">{exp.location}</div>
                <div className="exp-card-divider" />
                <ul className="exp-card-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
