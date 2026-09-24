// Секция «Контроль на каждом этапе» (задача 14). Композиция и тексты — прототип
// design/figma-make/src/App.tsx:434-480, стиль — DESIGN.md «Задача 14».
// WaterSource (задача 7) — только импорт; затемняющий градиент к фону страницы #363636
// накладывает сама секция. Разделители — токен line из «Направления» (fallback-значение).
import WaterSource from '../graphics/WaterSource'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'

const POINTS = ['Собственная\nскважина', 'Обратный\nосмос', 'Лаборатория\nконтроля']

export default function QualityStory() {
  return (
    <section id="quality" className="grid grid-cols-1 bg-bg lg:min-h-[580px] lg:grid-cols-2">
      <div className="relative h-[280px] overflow-hidden lg:h-auto">
        <div className="absolute inset-0">
          <WaterSource />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_55%,#363636_100%)]" />
        <div className="absolute bottom-6 left-4 border border-[var(--color-line,rgba(255,255,255,.14))] bg-bg/75 px-5 py-3 lg:bottom-10 lg:left-10">
          <span className="font-body text-[11px] tracking-[0.12em] text-fg/35 uppercase">
            Казахстан · Собственная скважина
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center px-4 py-12 lg:px-[72px] lg:py-20">
        <SectionLabel text="О производстве" className="mb-7" />
        <SectionHeading text={'Контроль\nна каждом\nэтапе'} className="mb-7 lg:whitespace-pre-line" />
        <p className="mb-5 font-body text-[14px] leading-[1.8] font-light text-fg/45">
          Мы добываем воду из собственной артезианской скважины. Очистка методом обратного осмоса на оборудовании
          GW-R-88 производства CIT (США) гарантирует стабильное качество каждой партии.
        </p>
        <p className="mb-10 font-body text-[14px] leading-[1.8] font-light text-fg/45">
          Современная производственная лаборатория ведёт контроль на каждом этапе — от скважины до упаковки. Состав на
          этикетке соответствует тому, что внутри.
        </p>
        <ul className="flex flex-col gap-4 lg:flex-row lg:gap-0">
          {POINTS.map((text, i) => (
            <li
              key={text}
              className={`flex items-center gap-3 lg:flex-1 lg:flex-col lg:items-start lg:gap-2.5 ${
                i > 0 ? 'lg:border-l lg:border-[var(--color-line,rgba(255,255,255,.14))] lg:pl-6' : ''
              }`}
            >
              <span className="size-2 shrink-0 rounded-full bg-lime" />
              <span className="font-body text-[12px] leading-[1.5] font-light text-fg/50 lg:whitespace-pre-line">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
