import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'
import { useLanguage } from '../../i18n/LanguageContext'
import { waterLineText } from './WaterLine.i18n'
import './WaterLine.css'

// Тексты — WaterLine.i18n.ts (RU — DESIGN.md «Задача 11», KZ/EN — задача 44).

export default function WaterLine() {
  const { lang } = useLanguage()
  const t = waterLineText[lang]

  return (
    <section id="water" className="water-line scroll-mt-[72px] lg:scroll-mt-[80px]">
      <div className="water-line__wrap">
        <header className="water-line__head">
          <div>
            <SectionLabel text={t.label} className="water-line__label" />
            <SectionHeading text={t.heading} accent={t.accent} />
          </div>
          <p className="water-line__lead">
            {t.lead}
          </p>
        </header>

        <div className="water-line__body">
          <img
            className="water-line__img"
            src="/packshots/water.webp"
            alt={t.alt}
            width={2045}
            height={1429}
          />
          <ul className="water-line__list">
            {t.formats.map((f) => (
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
