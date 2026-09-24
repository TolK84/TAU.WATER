import type { CSSProperties } from 'react'
import SectionLabel from '../ui/SectionLabel'
import SectionHeading from '../ui/SectionHeading'
import './Lemonades.css'

// Линейка лимонадов (задача 20): статический список, стиль — DESIGN.md «Задача 20».
// Состав и объёмы — каталог (design/BRIEF.md:42-44), цвет товара — токены --color-product-* (src/index.css).
const COMPOSITION_SUGAR = 'Вода высокой степени очистки, натуральный сахар, натуральные ароматизаторы, лимонная кислота'

const LEMONADES = [
  {
    id: 'limonad',
    src: '/packshots/limonad.webp',
    width: 1068,
    height: 1605,
    name: 'Лимонад',
    desc: 'Освежающий лимонный вкус с нотой цедры. Любимый с детства.',
    volume: '1 / 1,5 л',
    composition: COMPOSITION_SUGAR,
    color: 'var(--color-product-limonad)',
  },
  {
    id: 'mo',
    src: '/packshots/mo.webp',
    width: 1062,
    height: 1682,
    name: 'МО/Мохито',
    desc: 'Лайм и мята - бодрящая комбинация без алкоголя. Для жаркого дня.',
    volume: '0,5 / 1 / 1,5 л',
    composition: COMPOSITION_SUGAR,
    color: 'var(--color-product-mo)',
  },
  {
    id: 'buratino',
    src: '/packshots/buratino.webp',
    width: 1025,
    height: 1560,
    name: 'Буратино',
    desc: 'Лимонно-ванильный вкус из СССР. Тот самый.',
    volume: '1,5 л',
    composition:
      'Умягчённая вода, сахарозаменитель МИРАМИКС 200,5, регулятор кислотности Е-330, идентичный натуральному ароматизатор, краситель Е-150d, консервант Е-211',
    color: 'var(--color-product-buratino)',
  },
]

export default function Lemonades() {
  return (
    <section id="lemonades" className="lemonades">
      <div className="lemonades__wrap">
        <header className="lemonades__head">
          <SectionLabel text="Линейка лимонадов" className="lemonades__label" />
          <SectionHeading text="Три вкуса - у каждого свой состав, смотри ниже." />
        </header>

        <ul className="lemonades__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {LEMONADES.map((item) => (
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
              <p className="lemonades__desc">{item.desc}</p>
              <dl className="lemonades__specs">
                <div>
                  <dt>Объём:</dt> <dd>{item.volume}</dd>
                </div>
                <div>
                  <dt>Газ:</dt> <dd>да</dd>
                </div>
                <div>
                  <dt>Состав:</dt> <dd>{item.composition}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
