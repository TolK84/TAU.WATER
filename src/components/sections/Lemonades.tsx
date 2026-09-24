import type { CSSProperties } from 'react'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageContext'
import { LEMONADES_I18N } from './Lemonades.i18n'
import './Lemonades.css'

// Линейка лимонадов (задача 20): статический список, стиль — DESIGN.md «Задача 20».
// Состав и объёмы — каталог (design/BRIEF.md:42-44), цвет товара — токены --color-product-* (src/index.css).
// Тексты по языку — Lemonades.i18n.ts (задача 45); названия товаров не переводятся.
const LEMONADES = [
  {
    id: 'limonad',
    src: '/packshots/limonad.webp',
    width: 1068,
    height: 1605,
    name: 'Лимонад',
    color: 'var(--color-product-limonad)',
  },
  {
    id: 'mo',
    src: '/packshots/mo.webp',
    width: 1062,
    height: 1682,
    name: 'МО/Мохито',
    color: 'var(--color-product-mo)',
  },
  {
    id: 'buratino',
    src: '/packshots/buratino.webp',
    width: 1025,
    height: 1560,
    name: 'Буратино',
    color: 'var(--color-product-buratino)',
  },
] as const

export default function Lemonades() {
  const { lang } = useLanguage()
  const t = LEMONADES_I18N[lang]

  return (
    <section id="lemonades" className="lemonades scroll-mt-[72px] lg:scroll-mt-[80px]">
      <div className="lemonades__wrap">
        <header className="lemonades__head">
          <SectionLabel text={t.label} className="lemonades__label" />
          <SectionHeading text={t.heading} />
        </header>

        <ul className="lemonades__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {LEMONADES.map((item) => {
            const text = t.items[item.id]
            return (
              <li
                key={item.id}
                className="lemonades__card"
                style={{ '--flavor-color': item.color } as CSSProperties}
              >
                <img
                  className="lemonades__img"
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                />
                <h3 className="lemonades__name">{item.name}</h3>
                <p className="lemonades__desc">{text.desc}</p>
                <dl className="lemonades__specs">
                  <div>
                    <dt>{t.volume}</dt> <dd>{text.volume}</dd>
                  </div>
                  <div>
                    <dt>{t.gas}</dt> <dd>{t.gasValue}</dd>
                  </div>
                  <div>
                    <dt>{t.composition}</dt> <dd>{text.composition}</dd>
                  </div>
                </dl>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
