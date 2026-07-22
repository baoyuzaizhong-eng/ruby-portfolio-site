import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Advantages from './components/Advantages'
import Enjoy from './components/Enjoy'
import Contact from './components/Contact'
import PasswordGate from './components/PasswordGate'

const SITE_PASSWORD = 'zxr-2026'

export default function App() {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem('ruby_auth') === SITE_PASSWORD
    } catch {
      return false
    }
  })

  if (!unlocked) {
    return <PasswordGate onSubmit={(pwd) => {
      if (pwd === SITE_PASSWORD) {
        try { sessionStorage.setItem('ruby_auth', pwd) } catch {}
        setUnlocked(true)
        return true
      }
      return false
    }} />
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Advantages />
        <Enjoy />
        <Contact />
      </main>
    </div>
  )
}
