import { personalInfo } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="contact" id="contact">
      <div className="dot-grid" />
      <div className="contact-glow" />
      <div className="contact-glow-2" />
      <div className="container">
        <div ref={ref} className={`contact-inner reveal ${visible ? 'in-view' : ''}`}>
          <div className="contact-label">
            Let's Connect
          </div>
          <h2 className="contact-title">
            有好项目？<br />
            <span className="italic">聊聊吧.</span>
          </h2>

          <a href={`mailto:${personalInfo.email}`} className="contact-email">
            拿起手机扫一扫
            <span>→</span>
          </a>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="label">Email</div>
              <div className="value">{personalInfo.email}</div>
            </div>
            <div className="contact-info-item">
              <div className="label">Location</div>
              <div className="value">{personalInfo.location}</div>
            </div>
            <div className="contact-info-item">
              <div className="label">Role</div>
              <div className="value">{personalInfo.title}<br />{personalInfo.subtitle}</div>
            </div>
          </div>

          {/* 二维码 — 绝对定位在右侧 */}
          <div className="contact-qrcode">
            <img src="/assets/qrcode.jpg" alt="微信二维码" />
          </div>
        </div>

        <div className="contact-footer">
          <span>© 2026 Ruby Zhong · All Rights Reserved</span>
          <span>Designed & Built with <span className="accent">passion</span></span>
        </div>
      </div>
    </section>
  )
}
