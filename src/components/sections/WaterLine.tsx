import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'
import './WaterLine.css'

type Format = { vol: string; label?: string; desc?: string }

// Тексты — DESIGN.md «Задача 11», Секции (каталог: design/BRIEF.md:45).
const formats: Format[] = [
  { vol: '0,33 л', label: 'Малая' },
  { vol: '0,5 л', label: 'Классическая', desc: 'Повседневный формат. Самый популярный объём.' },
  { vol: '1 л', label: 'Большая', desc: 'Для семьи и активного дня.' },
  { vol: '1,5 л' },
  { vol: '5 л', label: 'Офисная', desc: 'Для кулера, офиса и большой семьи. Бесплатная доставка по городу.' },
]

export default function WaterLine() {
  return (
    <section id="water" className="water-line">
      <div className="water-line__wrap">
        <header className="water-line__head">
          <div>
            <SectionLabel text="Линейка воды" className="water-line__label" />
            <SectionHeading text="Артезианская" accent="Вода TAU" />
          </div>
          <p className="water-line__lead">
            Добывается из собственной артезианской скважины и проходит многоступенчатую очистку методом обратного осмоса.
          </p>
        </header>

        <div className="water-line__body">
          <img
            className="water-line__img"
            src="/packshots/water.webp"
            alt="Артезианская вода TAU: 5 л, 1,5 л, 1 л, 0,5 л, 0,33 л"
            width={2045}
            height={1429}
          />
          <ul className="water-line__list">
            {formats.map((f) => (
              <li key={f.vol} className="water-line__item">
                <div className="water-line__title">
                  <span className="water-line__vol">{f.vol}</span>
                  {f.label && <span className="water-line__name">{f.label}</span>}
                </div>
                {f.desc && <p className="water-line__desc">{f.desc}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
