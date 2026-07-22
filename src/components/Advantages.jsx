import { advantages } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Advantages() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section className="section advantages" id="advantages">
      <div className="dot-grid" />
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'in-view' : ''}`} style={{ marginBottom: '60px' }}>
          <div className="section-label">Core Strengths</div>
          <h2 className="section-title">
            个人优势<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
          <p className="section-subtitle">
            创意策划 / 持续运营 / 资源整合 / 技术赋能
          </p>
        </div>

        <div ref={gridRef} className={`adv-grid reveal ${gridVisible ? 'in-view' : ''}`}>
          {advantages.map((adv, i) => (
            <div key={i} className="adv-card" style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="adv-icon">{adv.icon}</span>
              <h3 className="adv-title">{adv.title}</h3>
              <div className="adv-en">{adv.en}</div>
              <p className="adv-desc">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
