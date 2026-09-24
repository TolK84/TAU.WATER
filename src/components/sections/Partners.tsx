// Секция партнёров (задача 39): карта с метками, список дистрибьюторов по городам, логотипы.
// Данные — src/data/partners.ts, файлы — public/partners/ (задача 38); стиль — DESIGN.md «Задача 39».
// Язык (задача 43): тексты секции — Partners.i18n.ts, город/компания/адрес — готовые {ru,kz,en} из partners.ts.
import type { CSSProperties } from 'react'
import SectionLabel from '../ui/SectionLabel'
import { distributors, type Distributor } from '../../data/partners'
import { useLanguage } from '../../i18n/LanguageContext'
import { publicUrl } from '../../lib/publicUrl'
import { partnersText } from './Partners.i18n'

// Токена --color-line в src/index.css нет — fallback со значением из DESIGN.md «Направление».
const LINE = 'border-[color:var(--color-line,rgba(255,255,255,.14))]'

// Радиус метки в px (DESIGN.md «Задача 39», решения пользователя 2026-09-24): < 640px — диаметр 12/18
// (r 6/9, обводка 3px), от 640px (sm) — 28/42 (r 14/21, обводка 7px). Атрибут r — мобильное значение,
// CSS-свойство r из класса перекрывает его на sm+.
const PIN_RADIUS: Record<Distributor['pin']['size'], number> = { sm: 6, lg: 9 }
const PIN_R_CLASS: Record<Distributor['pin']['size'], string> = {
  sm: '[r:6px] sm:[r:14px]',
  lg: '[r:9px] sm:[r:21px]',
}

// Крупные метки рисуются последними (SVG — порядок отрисовки), чтобы на узкой карте соседние sm не перекрывали lg.
const PINS = [...distributors].sort((a, b) => PIN_RADIUS[a.pin.size] - PIN_RADIUS[b.pin.size])

// Карта — линии map-lines.webp (прозрачный фон) как CSS-маска, цвет линий — фон --color-lime.
// Пропорция 1782/1060 — размер исходника map.webp/map-lines.webp: метки в % остаются на городах.
// -webkit-mask-* сборка добавляет сама (проверено по dist/assets/*.css).
// URL маски — CSS-переменная --map-url (inline-style только ради переменной): статический url() в классе
// не учитывает base сборки (vite.config.ts, VITE_BASE).
const MAP_MASK =
  'bg-lime [mask-image:var(--map-url)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]'
const MAP_STYLE = { '--map-url': `url(${publicUrl('partners/map-lines.webp')})` } as CSSProperties

// 16 логотипов: logo-01.png, logo-02..16.webp (задача 38).
const LOGOS = Array.from({ length: 16 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return publicUrl(`partners/logo-${n}.${i === 0 ? 'png' : 'webp'}`)
})

// Группировка по городу с сохранением порядка из data-файла; ключ — RU-название (стабилен для всех языков),
// подпись группы берётся из city[lang] при рендере.
const byCity = distributors.reduce<{ key: string; city: Distributor['city']; items: Distributor[] }[]>((groups, d) => {
  const group = groups.find((g) => g.key === d.city.ru)
  if (group) group.items.push(d)
  else groups.push({ key: d.city.ru, city: d.city, items: [d] })
  return groups
}, [])

export default function Partners() {
  const { lang } = useLanguage()
  const t = partnersText[lang]

  return (
    <section id="partners" className="bg-section py-12 sm:py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4">
        <SectionLabel text={t.label} />

        <div className="relative aspect-[1782/1060] w-full">
          <div role="img" aria-label={t.mapAlt} data-map="lines" className={`absolute inset-0 ${MAP_MASK}`} style={MAP_STYLE} />
          {/* Метки — SVG-круги с процентными cx/cy поверх карты: позиция из данных без inline-style. */}
          <svg className="pointer-events-none absolute inset-0 size-full overflow-visible" aria-hidden="true">
            {PINS.map((d) => (
              <circle
                key={d.id}
                data-pin={d.id}
                cx={`${d.pin.left}%`}
                cy={`${d.pin.top}%`}
                r={PIN_RADIUS[d.pin.size]}
                className={`fill-lime stroke-[color:var(--color-bg)] stroke-[3px] sm:stroke-[7px] ${PIN_R_CLASS[d.pin.size]}`}
              />
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5">
          {byCity.map(({ key, city, items }) => (
            <div
              key={key}
              className={`${LINE} border-t py-6 first:border-t-0 first:pt-0 sm:border-t-0 sm:py-0`}
            >
              <h3 className="mb-3 font-display text-[28px] font-bold leading-[1.05] uppercase tracking-[0.02em] text-fg">
                {city[lang]}
              </h3>
              {items.map((d) => (
                <div key={d.id} data-distributor={d.id} className="font-body text-[15px] leading-[1.5]">
                  <p className="text-fg">{d.name[lang]}</p>
                  <p className="text-fg/60">
                    {t.addressPrefix} {d.address[lang]}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-6 lg:grid-cols-8">
          {LOGOS.map((src) => (
            <li key={src} className="flex h-16 items-center justify-center">
              <img src={src} alt="" className="max-h-full max-w-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
