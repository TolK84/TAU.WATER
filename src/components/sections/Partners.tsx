// Секция партнёров (задача 39): карта с метками, список дистрибьюторов по городам, логотипы.
// Данные — src/data/partners.ts, файлы — public/partners/ (задача 38); стиль — DESIGN.md «Задача 39».
import SectionLabel from '../ui/SectionLabel'
import { distributors, type Distributor } from '../../data/partners'

// Токена --color-line в src/index.css нет — fallback со значением из DESIGN.md «Направление».
const LINE = 'border-[color:var(--color-line,rgba(255,255,255,.14))]'

// Радиус метки в px: sm → 8px, lg → 12px по диаметру (DESIGN.md «Задача 39»).
const PIN_RADIUS: Record<Distributor['pin']['size'], number> = { sm: 4, lg: 6 }

// 16 логотипов: logo-01.png, logo-02..16.webp (задача 38).
const LOGOS = Array.from({ length: 16 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return `/partners/logo-${n}.${i === 0 ? 'png' : 'webp'}`
})

// Группировка по городу с сохранением порядка из data-файла.
const byCity = distributors.reduce<{ city: string; items: Distributor[] }[]>((groups, d) => {
  const group = groups.find((g) => g.city === d.city.ru)
  if (group) group.items.push(d)
  else groups.push({ city: d.city.ru, items: [d] })
  return groups
}, [])

export default function Partners() {
  return (
    <section id="partners" className="bg-section py-12 sm:py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4">
        <SectionLabel text="Партнёры" />

        <div className="relative">
          <img
            src="/partners/map.webp"
            alt="Карта Казахстана с дистрибьюторами"
            className="block h-auto w-full"
          />
          {/* Метки — SVG-круги с процентными cx/cy поверх карты: позиция из данных без inline-style. */}
          <svg className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
            {distributors.map((d) => (
              <circle
                key={d.id}
                data-pin={d.id}
                cx={`${d.pin.left}%`}
                cy={`${d.pin.top}%`}
                r={PIN_RADIUS[d.pin.size]}
                className="fill-lime stroke-[color:var(--color-bg)] stroke-2"
              />
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5">
          {byCity.map(({ city, items }) => (
            <div
              key={city}
              className={`${LINE} border-t py-6 first:border-t-0 first:pt-0 sm:border-t-0 sm:py-0`}
            >
              <h3 className="mb-3 font-display text-[28px] font-bold leading-[1.05] uppercase tracking-[0.02em] text-fg">
                {city}
              </h3>
              {items.map((d) => (
                <div key={d.id} data-distributor={d.id} className="font-body text-[15px] leading-[1.5]">
                  <p className="text-fg">{d.name.ru}</p>
                  <p className="text-fg/60">Адрес: {d.address.ru}</p>
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
