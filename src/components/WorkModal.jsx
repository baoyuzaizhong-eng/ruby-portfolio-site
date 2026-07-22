import { useEffect } from 'react'

export default function WorkModal({ work, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-title">{work.title}</div>
            <div className="modal-subtitle">{work.subtitle} · {work.tags.join(' / ')}</div>
          </div>
          <button className="modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6L18 18M6 18L18 6" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '700px' }}>
            {work.description}
          </p>

          {work.type === 'gallery' && (
            <div className="modal-gallery">
              {work.images.map((img, i) => (
                <div key={i} className="modal-gallery-item">
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="modal-gallery-caption">{img.caption}</div>
                </div>
              ))}
            </div>
          )}

          {work.type === 'video' && (
            <div className="modal-videos">
              {work.videos.map((v, i) => (
                <div key={i} className="modal-video-item">
                  <video controls preload="metadata" {...(v.cover ? { poster: v.cover } : {})}>
                    <source src={v.src} type="video/mp4" />
                  </video>
                  <div className="modal-video-title">{v.title}</div>
                </div>
              ))}
            </div>
          )}

          {work.type === 'document' && (
            <div className="modal-docs">
              {work.documents.map((doc, i) => (
                <a
                  key={i}
                  href={doc.file || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-doc-item"
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => {
                    if (!doc.file) {
                      e.preventDefault()
                    }
                  }}
                >
                  <div className="modal-doc-icon">{doc.file ? (doc.file.endsWith('.pptx') ? 'PPT' : 'PDF') : 'PDF'}</div>
                  <div className="modal-doc-info">
                    <div className="modal-doc-name">{doc.name}</div>
                    <div className="modal-doc-cat">{doc.category}{doc.file ? ' · 点击查看' : ' · 文件整理中'}</div>
                  </div>
                  <div className="modal-doc-arrow">↗</div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
