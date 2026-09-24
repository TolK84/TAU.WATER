import type { MouseEvent } from 'react'

const COLUMNS = [
  { title: 'Продукция', items: ['Вода TAU', 'Лимонад', 'МО', 'Буратино'] },
  { title: 'Компания', items: ['О нас', 'Производство', 'Качество', 'Оборудование', 'Контакты'] },
  { title: 'Сотрудничество', items: ['Оптовые поставки', 'HoReCa', 'Дистрибьюторам', 'Написать нам'] },
]

const preventNavigation = (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault()

export default function Footer() {
  return (
    <footer className="bg-bg px-6 pt-12 pb-8 font-body text-fg lg:px-12 lg:pt-14 lg:pb-10">
      <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <div className="mb-2 font-display text-[24px] font-bold tracking-[.12em]">
            <span className="text-lime">TAU</span>
            <span className="ml-1.5 text-[15px] font-normal tracking-[.1em] opacity-50">WATERS</span>
          </div>
          <div className="mb-5 text-[11px] tracking-[.06em] text-fg/25 uppercase">ТОО «TAU-PRODUCT»</div>
          <p className="max-w-[260px] text-[13px] leading-[1.7] font-light text-fg/30">
            Казахстанский производитель артезианской воды и лимонадов. Будь уверен в каждом глотке.
          </p>
        </div>
        {COLUMNS.map(({ title, items }) => (
          <div key={title}>
            <div className="mb-5 text-[11px] font-medium tracking-[.15em] text-fg/25 uppercase">{title}</div>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={preventNavigation}
                    className="text-[13px] text-fg/45 no-underline transition-colors duration-200 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[color:var(--color-line,rgba(255,255,255,.14))] flex flex-wrap items-center justify-between gap-3 pt-6 text-[12px] text-fg/18">
        <span>© 2019–2026 ТОО «TAU-PRODUCT». Все права защищены.</span>
        <span>tau-water.kz</span>
      </div>
    </footer>
  )
}
