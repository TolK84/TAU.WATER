import Button from '../ui/Button'
import Showcase from '../showcase/Showcase'
import './Hero.css'

// Первый экран (задача 19): текст hero, под ним полноширинная витрина (задачи 34-37).
// Компоновка — DESIGN.md «Задача 19».

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__wrap">
        <p className="hero__meta">ТОО TAU-PRODUCT · Казахстан</p>
        <h1 className="hero__title">Будь уверен в воде</h1>
        <p className="hero__lead">
          Артезианская вода и лимонады от TAU WATERS. Контроль качества на каждом этапе - никакого компромисса со вкусом.
        </p>
        <div className="hero__actions">
          <Button>
            Смотреть каталог
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button variant="ghost">О компании</Button>
        </div>
      </div>
      <div className="hero__showcase">
        <Showcase />
      </div>
    </section>
  )
}
