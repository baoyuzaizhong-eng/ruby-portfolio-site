import { personalInfo } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* 左侧内容 */}
      <div className="hero-left">
        <div className="hero-brand">
          <span className="hero-star">✦</span>
          <span className="hero-brand-text">Ruby Zhong · Creative Portfolio</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">Portfolio</span>
          <span className="hero-title-line accent">钟欣汝</span>
        </h1>

        <div className="hero-signature">
          <span className="hero-sig-name">Ruby</span>
          <span className="hero-sig-star">✦</span>
          <span className="hero-sig-role">活动策划师</span>
        </div>

        <div className="hero-divider">
          <span className="hero-divider-dot" />
        </div>

        <p className="hero-desc">
          8年资深策划及项目运营管理者，擅长从项目概念到成果落地的全流程管理与质控，以创意驱动价值，用数据丈量效果。
        </p>

        {/* 底部联系栏 */}
        <div className="hero-contact-bar">
          <div className="hero-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>{personalInfo.location}</span>
          </div>
          <div className="hero-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>Open to Work</span>
          </div>
          <div className="hero-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
        </div>
      </div>

      {/* 右侧Q版形象 + 装饰 */}
      <div className="hero-right">
        <div className="hero-bg-pattern" />
        <div className="hero-gradient-orb" />
        <div className="hero-deco-circle hero-deco-circle-1" />
        <div className="hero-deco-circle hero-deco-circle-2" />
        <div className="hero-deco-circle hero-deco-circle-3" />
        <img
          className="hero-q-avatar"
          src="/assets/q-avatar.png"
          alt="Ruby Q版形象"
        />
      </div>
    </section>
  )
}
