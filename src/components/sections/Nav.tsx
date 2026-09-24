import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useLanguage } from '../../i18n/LanguageContext'
import { NAV_I18N } from './Nav.i18n'
import './Nav.css'

export default function Nav() {
  const t = NAV_I18N[useLanguage().lang]
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cls = ['nav', scrolled && 'nav--scrolled', open && 'nav--open'].filter(Boolean).join(' ')

  return (
    <nav className={cls}>
      <div className="nav__logo">
        <span className="nav__logo-tau">TAU</span>
        <span className="nav__logo-waters">WATERS</span>
      </div>
      <button
        type="button"
        className="nav__burger"
        aria-label={t.menu}
        aria-expanded={open}
        aria-controls="nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <div id="nav-panel" className="nav__panel">
        <div className="nav__links">
          {t.items.map((item, i) => (
            <button key={i} type="button" className="nav-link">
              {item}
            </button>
          ))}
        </div>
        <LanguageSwitcher />
        <Button variant="primary">{t.order}</Button>
      </div>
    </nav>
  )
}
