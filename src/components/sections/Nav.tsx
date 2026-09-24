import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useLanguage } from '../../i18n/LanguageContext'
import { NAV_I18N } from './Nav.i18n'
import './Nav.css'

// Правка 2026-09-24 (DESIGN.md «Рабочие ссылки и кнопки»): плавная прокрутка к секции без смены URL/hash.
// Отступ под фиксированную навигацию — scroll-margin-top цели; у цели без него (#partners) — высота .nav + 16px.
// prefers-reduced-motion: reduce — прыжок мгновенно.
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = document.querySelector<HTMLElement>('.nav')?.offsetHeight ?? 0
  const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || navH + 16
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: reduce ? 'instant' : 'smooth',
  })
}

// Цели пунктов меню по порядку NAV_I18N.items: Вода, Лимонады, О компании, Контакты.
const ITEM_TARGETS = ['water', 'lemonades', 'quality', 'partners']

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

  const go = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

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
            <button key={i} type="button" className="nav-link" onClick={() => go(ITEM_TARGETS[i])}>
              {item}
            </button>
          ))}
        </div>
        <LanguageSwitcher />
        <Button variant="primary" onClick={() => go('cta')}>
          {t.order}
        </Button>
      </div>
    </nav>
  )
}
