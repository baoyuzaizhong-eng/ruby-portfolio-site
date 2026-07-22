import { useState } from 'react'

export default function PasswordGate({ onSubmit }) {
  const [pwd, setPwd] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const ok = onSubmit(pwd)
    if (!ok) {
      setError(true)
      setShake(true)
      setTimeout(() => { setShake(false); setPwd('') }, 600)
    }
  }

  return (
    <div className="gate">
      <div className={`gate-card ${shake ? 'gate-shake' : ''}`}>
        <div className="gate-logo">Ruby<span className="accent">.</span></div>
        <h1 className="gate-title">Private Portfolio</h1>
        <p className="gate-desc">请输入访问密码</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className={`gate-input ${error ? 'gate-input-error' : ''}`}
            placeholder="Password"
            value={pwd}
            onChange={(e) => { setPwd(e.target.value); setError(false) }}
            autoFocus
          />
          <button type="submit" className="gate-btn">
            进入
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
        {error && <p className="gate-error">密码错误，请重试</p>}
      </div>
      <div className="gate-bg" />
    </div>
  )
}
