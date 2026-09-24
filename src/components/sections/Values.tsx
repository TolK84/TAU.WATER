// Секция ценностей (задача 15). Композиция и порядок — design/figma-make/src/App.tsx:483-499,
// тексты — карточка 15 (описания «Полезно»/«Натурально» заменены), стиль — DESIGN.md «Задача 15».
const VALUES = [
  { title: 'Вкусно', text: 'Рецептуры разработаны без лишних компромиссов' },
  { title: 'Полезно', text: 'Контроль состава на каждом этапе производства' },
  { title: 'С любовью', text: 'Производство в Казахстане, своими руками' },
  { title: 'Натурально', text: 'Полный состав продукта - на этикетке каждой упаковки' },
  { title: 'Уверенно', text: 'Качество гарантировано лабораторным контролем' },
]

// Токена --color-line в src/index.css нет — fallback со значением из DESIGN.md «Направление».
const LINE = 'border-[color:var(--color-line,rgba(255,255,255,.14))]'

// Разделители: мобильный — border-top со 2-й карточки; sm (2 колонки) — border-left у правой
// колонки, border-top со 2-го ряда; lg (5 колонок) — border-left у колонок 2–5.
const CELL = [
  LINE,
  'border-t first:border-t-0',
  'sm:[&:nth-child(-n+2)]:border-t-0 sm:even:border-l',
  'lg:border-t-0 lg:border-l lg:first:border-l-0',
  'px-4 py-6 sm:px-7 sm:py-9',
].join(' ')

export default function Values() {
  return (
    <section id="values" className={`border-t ${LINE}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {VALUES.map(({ title, text }) => (
          <div key={title} className={CELL}>
            <div className="mb-4 size-2 bg-lime" />
            <h3 className="mb-3 font-display text-[26px] font-bold uppercase tracking-[0.02em] text-fg">
              {title}
            </h3>
            <p className="font-body text-xs leading-[1.65] font-normal text-fg/35">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
