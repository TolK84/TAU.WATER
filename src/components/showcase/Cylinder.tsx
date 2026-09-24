import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { SHOWCASE_PRODUCTS, type ShowcaseProduct } from './showcase-products'
import './Cylinder.css'

// Цилиндр карточек (задача 34). Геометрия — design/showcase/index.html:171,187-209.
const REPEAT = 3 // M = N * 3 — товары повторяются по кругу
const STEP = 30 // угол между карточками, градусы
const MOBILE = 560 // px, совпадает с @media (max-width: 560px) в Cylinder.css

type Props = { products?: ShowcaseProduct[]; selected?: number }

export default function Cylinder({ products = SHOWCASE_PRODUCTS, selected = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  // Радиус цилиндра зависит от ширины сцены (как в эталоне) — отслеживаем её размер.
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => setWidth(el.clientWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const n = products.length
  const m = n * REPEAT
  const mobile = width < MOBILE
  const r = mobile ? 260 : Math.min(620, width * 0.48) // радиус цилиндра
  const back = mobile ? 20 : 40 // камера позади центра — края ближе и крупнее

  return (
    <div className="cyl-layer">
      <div ref={ref} className="cyl" role="listbox" aria-label="Выбор товара">
        {Array.from({ length: m }, (_, v) => {
          const p = products[v % n]
          const d = v > m / 2 ? v - m : v // смещение от центра в карточках
          const th = (d * STEP * Math.PI) / 180
          const z = -back - r * Math.cos(th)
          const hidden = Math.abs(d * STEP) > 105 // за спиной зрителя
          const on = v % n === selected
          const style = {
            '--x': `${(r * Math.sin(th)).toFixed(1)}px`,
            '--z': `${z.toFixed(1)}px`,
            '--ry': `${(-d * STEP).toFixed(2)}deg`,
            '--zi': Math.round(1000 + z),
            '--pc': p.colorVar,
          } as CSSProperties
          const cls = ['cyl-card', on && 'on', hidden && 'invisible'].filter(Boolean).join(' ')
          return (
            <div key={v} className={cls} style={style} role="option" aria-selected={on} aria-label={p.name}>
              <img src={p.bottleSrc} alt="" draggable={false} />
              <span>{p.name}</span>
            </div>
          )
        })}
      </div>
      <div className="veil l" aria-hidden="true" />
      <div className="veil r" aria-hidden="true" />
    </div>
  )
}
