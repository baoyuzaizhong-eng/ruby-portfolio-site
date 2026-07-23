import { useState, useRef } from 'react'
import { works } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import WorkModal from './WorkModal'

export default function Works() {
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState(null)
  const [headerRef, headerVisible] = useScrollReveal()

  const go = (dir) => {
    setActive((prev) => {
      const next = prev + dir
      if (next < 0) return works.length - 1
      if (next >= works.length) return 0
      return next
    })
  }

  return (
    <section className="section works" id="works">
      <div className="container">
        <div ref={headerRef} className={`works-header reveal ${headerVisible ? 'in-view' : ''}`}>
          <div>
            <div className="section-label">What I Can Do</div>
            <h2 className="section-title">
              作品展示<span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
            <p className="section-subtitle">
              从活动策划到可持续运营，每一项作品都是全流程把控的成果。
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="stat-number" style={{ fontSize: '3rem', color: 'var(--accent)' }}>
              {String(active + 1).padStart(2, '0')}
              <span style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>/{String(works.length).padStart(2, '0')}</span>
            </div>
            <div className="stat-sublabel">Categories</div>
          </div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div className="works-carousel-wrapper">
        <div className="works-carousel">
          {works.map((work, i) => {
            const offset = i - active
            const absOffset = Math.abs(offset)
            const isCurrent = offset === 0
            const angle = offset * 18
            const translateZ = isCurrent ? 0 : -120
            const opacity = isCurrent ? 1 : Math.max(0.3, 1 - absOffset * 0.3)
            const scale = isCurrent ? 1 : Math.max(0.8, 1 - absOffset * 0.1)
            const zIndex = works.length - absOffset

            return (
              <div
                key={work.id}
                className={`works-slide ${isCurrent ? 'works-slide-active' : ''}`}
                onClick={() => {
                  if (isCurrent) {
                    setSelected(work)
                  } else {
                    setActive(i)
                  }
                }}
                style={{
                  transform: `translateX(${offset * 55}%) rotateY(${angle}deg) translateZ(${translateZ}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <img className="works-slide-img" src={work.cover} alt={work.title} />
                <div className="works-slide-overlay" />
                <div className="works-slide-content">
                  <div className="works-slide-num">0{i + 1}</div>
                  <h3 className="works-slide-title">{work.title}</h3>
                  <div className="works-slide-subtitle">{work.subtitle}</div>
                  <div className="works-slide-tags">
                    {work.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="works-slide-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                {isCurrent && (
                  <div className="works-slide-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Navigation arrows */}
        <div className="works-nav">
          <button className="works-nav-btn" onClick={() => go(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="works-nav-btn" onClick={() => go(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {selected && <WorkModal work={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
