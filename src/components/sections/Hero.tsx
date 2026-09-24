import Button from '../ui/Button'
import Showcase from '../showcase/Showcase'
import { useLanguage } from '../../i18n/LanguageContext'
import { HERO_I18N } from './Hero.i18n'
import './Hero.css'

// Первый экран (задача 19): текст hero, под ним полноширинная витрина (задачи 34-37).
// Компоновка — DESIGN.md «Задача 19»; тексты — Hero.i18n.ts (задача 41).

export default function Hero() {
  const t = HERO_I18N[useLanguage().lang]
  return (
    <section id="hero" className="hero">
      <div className="hero__wrap">
        <p className="hero__meta">{t.meta}</p>
        <h1 className="hero__title">{t.title}</h1>
        <p className="hero__lead">{t.lead}</p>
        <div className="hero__actions">
          <Button>
            {t.catalog}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button variant="ghost">{t.about}</Button>
        </div>
      </div>
      <div className="hero__showcase">
        <Showcase />
      </div>
    </section>
  )
}
