import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from 'react'
import { SHOWCASE_PRODUCTS, type ShowcaseProduct } from './showcase-products'
import './Cylinder.css'

// Цилиндр карточек (задача 34). Геометрия — design/showcase/index.html:171,187-209.
// Управление (задача 35) — порт обработчиков design/showcase/index.html:259-313.
const REPEAT = 3 // M = N * 3 — товары повторяются по кругу
const STEP = 30 // угол между карточками, градусы
const MOBILE = 560 // px, совпадает с @media (max-width: 560px) в Cylinder.css
const SETTLE_MS = 160 // пауза курсора перед выбором центрального товара
const TOUCH_SLOP = 6 // px — сдвиг пальца, после которого касание считается драгом

type Props = {
  products?: ShowcaseProduct[]
  selected?: number
  onSelect?: (index: number) => void
}

export default function Cylinder({ products = SHOWCASE_PRODUCTS, selected = 0, onSelect }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  // pos — положение цилиндра в карточках (дробное): какая карточка кольца сейчас в центре
  const [pos, setPosState] = useState(0)
  const [scrub, setScrub] = useState(false)
  const posRef = useRef(0)
  const anchor = useRef({ x: 0, pos: 0 })
  const settle = useRef<number | undefined>(undefined)
  const touch = useRef<{ moved: boolean; x: number } | null>(null)
  const drag = useRef(false)
  const live = useRef({ selected, onSelect, width })
  live.current = { selected, onSelect, width }

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

  const wrapM = (x: number) => ((x % m) + m) % m
  // смещение карточки v от центра в карточках, кратчайшим путём по кольцу
  const off = (v: number, from = posRef.current) => {
    const d = wrapM(v - from)
    return d > m / 2 ? d - m : d
  }
  const centerProduct = () => wrapM(Math.round(posRef.current)) % n
  const setPos = (p: number) => {
    posRef.current = p
    setPosState(p)
  }
  const select = (i: number) => live.current.onSelect?.(((i % n) + n) % n)

  // Вращение вслед за указателем; withSettle — выбор центрального товара после паузы (только мышь)
  const follow = (clientX: number, withSettle: boolean) => {
    const pxPerCard = live.current.width < MOBILE ? 90 : 170
    setScrub(true)
    setPos(anchor.current.pos - (clientX - anchor.current.x) / pxPerCard)
    window.clearTimeout(settle.current)
    if (!withSettle) return
    const c = centerProduct()
    if (c !== live.current.selected) settle.current = window.setTimeout(() => select(c), SETTLE_MS)
  }
  const followRef = useRef(follow)
  followRef.current = follow

  // Касание: палец тянет цилиндр; по отпусканию ничего не выбирается
  useEffect(() => {
    const move = (e: globalThis.PointerEvent) => {
      const t = touch.current
      if (!t) return
      if (Math.abs(e.clientX - t.x) > TOUCH_SLOP) t.moved = true
      if (t.moved) followRef.current(e.clientX, false)
    }
    const up = () => {
      const t = touch.current
      if (!t) return
      if (t.moved) {
        drag.current = true // гасит клик, пришедший сразу после драга
        window.setTimeout(() => {
          drag.current = false
        }, 0)
      }
      touch.current = null
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
      window.clearTimeout(settle.current)
    }
  }, [])

  const onPointerEnter = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    anchor.current = { x: e.clientX, pos: posRef.current }
  }
  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') follow(e.clientX, true)
  }
  // Уход курсора: только снимаем состояние скраба — положение и выбор не меняются (без доводки)
  const onPointerLeave = () => setScrub(false)
  const onPointerDown = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') return
    touch.current = { moved: false, x: e.clientX }
    anchor.current = { x: e.clientX, pos: posRef.current }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    e.preventDefault()
    setPos(Math.round(posRef.current) + d)
    anchor.current.pos = posRef.current
    window.clearTimeout(settle.current)
    select(centerProduct())
  }

  const onCardClick = (v: number, e: MouseEvent) => {
    if (drag.current) return
    setScrub(false)
    setPos(posRef.current + off(v)) // карточка приезжает в центр
    anchor.current = { x: e.clientX, pos: posRef.current }
    window.clearTimeout(settle.current)
    select(v % n)
  }

  return (
    <div
      className={scrub ? 'cyl-layer scrub' : 'cyl-layer'}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
    >
      <div ref={ref} className="cyl" role="listbox" aria-label="Выбор товара" tabIndex={0} onKeyDown={onKeyDown}>
        {Array.from({ length: m }, (_, v) => {
          const p = products[v % n]
          const d = off(v, pos) // смещение от центра в карточках
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
            <div
              key={v}
              className={cls}
              style={style}
              role="option"
              aria-selected={on}
              aria-label={p.name}
              onClick={(e) => onCardClick(v, e)}
            >
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
