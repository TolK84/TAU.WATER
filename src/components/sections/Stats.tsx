// Секция цифр (задача 12). Композиция — из прототипа design/figma-make/src/App.tsx:309-325,
// стиль — DESIGN.md «Задача 12». Разделитель — цвет line из «Направления» (rgba(255,255,255,.14)).
// Разделители: десктоп (lg, 4 колонки) — border-left у колонок 2–4;
// мобильный (2×2) — border-left у правой колонки ряда, border-top у нижнего ряда.

import { useLanguage } from '../../i18n/LanguageContext'
import { statsLabels } from './Stats.i18n'

// Подписи — Stats.i18n.ts (задача 44), по индексу.
const STATS = [
  { num: '3', divider: '' },
  { num: '5', divider: 'border-l' },
  { num: '1', divider: 'border-t lg:border-t-0 lg:border-l' },
  { num: '2019', divider: 'border-t border-l lg:border-t-0' },
]

export default function Stats() {
  const { lang } = useLanguage()
  const labels = statsLabels[lang]

  return (
    <section className="border-t border-white/14 bg-section px-4 py-16 lg:px-12 lg:py-[100px]">
      <div className="grid grid-cols-2 gap-0.5 lg:grid-cols-4">
        {STATS.map(({ num, divider }, i) => (
          <div key={num} className={`${divider} border-white/14 px-4 py-8 lg:px-8 lg:py-12`}>
            <div className="font-display text-[clamp(64px,8vw,108px)] leading-[0.88] font-bold text-lime">{num}</div>
            <p className="mt-4 max-w-[200px] font-body text-[13px] leading-[1.65] text-fg/35">{labels[i]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
