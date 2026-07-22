import { useEffect, useState } from 'react'

const navItems = [
  { num: '01', label: '关于', href: '#about' },
  { num: '02', label: '作品', href: '#works' },
  { num: '03', label: '优势', href: '#advantages' },
  { num: '04', label: '生活', href: '#enjoy' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="nav-logo">
          Ruby<span className="accent">.</span>
          <span className="dot"></span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              <span className="num">{item.num}</span>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            联系我 →
          </a>
        </div>
      </div>
    </nav>
  )
}
