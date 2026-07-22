import { useState } from 'react'
import { enjoyCategories } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Enjoy() {
  const [active, setActive] = useState(enjoyCategories[0].id)
  const [headerRef, headerVisible] = useScrollReveal()

  const current = enjoyCategories.find((c) => c.id === active)

  return (
    <section className="section enjoy" id="enjoy">
      <div className="container">
        <div ref={headerRef} className={`enjoy-header reveal ${headerVisible ? 'in-view' : ''}`}>
          <div className="section-label">What I Enjoy</div>
          <h2 className="section-title">
            生活·探索<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
          <p className="section-subtitle">
            工作之外，用脚步丈量世界，用好奇心拥抱生活。旅行、运动、探索、学习——每一种体验都是创意的养分。
          </p>
        </div>

        <div className="enjoy-tabs">
          {enjoyCategories.map((cat) => (
            <button
              key={cat.id}
              className={`enjoy-tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.title} · {cat.en}
            </button>
          ))}
        </div>

        <div className="enjoy-gallery" key={active}>
          {/* 视频 — 排最前，方形封面，点击播放展开 */}
          {(current.videos || []).map((vid, i) => (
            <div key={`vid-${i}`} className="enjoy-item enjoy-item-media" style={{ animation: `fadeInUp 0.6s var(--ease) ${i * 0.06}s both` }}>
              <div className="enjoy-video-wrap" onClick={(e) => {
                const video = e.currentTarget.querySelector('video')
                if (video.paused) {
                  video.requestFullscreen?.() || video.webkitRequestFullscreen?.()
                }
              }}>
                <video controls preload="metadata" poster={vid.poster || ''}>
                  <source src={vid.src} type="video/mp4" />
                </video>
              </div>
              <div className="enjoy-caption">{vid.caption}</div>
            </div>
          ))}

          {/* 图片 — 正方形裁剪，hover显示完整比例 */}
          {current.images.map((img, i) => (
            <div key={`img-${i}`} className="enjoy-item" style={{ animation: `fadeInUp 0.6s var(--ease) ${((current.videos?.length || 0) + i) * 0.06}s both` }}>
              <div className="enjoy-img-wrap">
                <img src={img.src} alt={img.caption} loading="lazy" />
              </div>
              <div className="enjoy-caption">{img.caption}</div>
            </div>
          ))}

          {/* 音频 */}
          {(current.audios || []).map((aud, i) => (
            <div key={`aud-${i}`} className="enjoy-item enjoy-item-audio" style={{ animation: `fadeInUp 0.6s var(--ease) ${(current.images.length + (current.videos?.length || 0) + i) * 0.06}s both` }}>
              <div className="enjoy-audio-wrap">
                <div className="enjoy-audio-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <div className="enjoy-audio-info">
                  <div className="enjoy-audio-title">{aud.caption}</div>
                  {aud.artist && <div className="enjoy-audio-artist">{aud.artist}</div>}
                  <audio controls preload="metadata" src={aud.src} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
