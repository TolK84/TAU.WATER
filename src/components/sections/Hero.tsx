import Showcase from '../showcase/Showcase'
import { useLanguage } from '../../i18n/LanguageContext'
import { HERO_I18N } from './Hero.i18n'
import './Hero.css'

// Первый экран (задача 19): текст hero, под ним полноширинная витрина (задачи 34-37).
// Компоновка — DESIGN.md «Задача 19» (правка 2026-09-24: ниже, без кнопок); тексты — Hero.i18n.ts (задача 41).

export default function Hero() {
  const t = HERO_I18N[useLanguage().lang]
  return (
    <section id="hero" className="hero pt-[80px]! lg:pt-[96px]!">
      <div className="hero__wrap">
        <p className="hero__meta">{t.meta}</p>
        <h1 className="hero__title">{t.title}</h1>
        <p className="hero__lead">{t.lead}</p>
      </div>
      <div className="hero__showcase">
        <Showcase />
      </div>
    </section>
  )
}
