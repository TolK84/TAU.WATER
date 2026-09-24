import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Cylinder from './Cylinder'
import Stage from './Stage'
import { SHOWCASE_PRODUCTS } from './showcase-products'

const N = SHOWCASE_PRODUCTS.length
const REDUCE = '(prefers-reduced-motion: reduce)'

// Направление разворота — кратчайший путь по кольцу товаров от показанного к новому
const dirOf = (from: number, to: number) => (((to - from) % N) + N) % N <= N / 2 ? 1 : -1

function useReducedMotion() {
  const [reduce, setReduce] = useState(() => window.matchMedia(REDUCE).matches)
  useEffect(() => {
    const mq = window.matchMedia(REDUCE)
    const on = () => setReduce(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduce
}

// Витрина (задача 34): оркестратор выбора товара. Смена выбора — задача 35,
// центральная сцена и очередь переходов — задача 36, подпись — задача 37.
export default function Showcase() {
  const [selected, setSelected] = useState(0)
  const [dir, setDir] = useState(1)
  const reducedMotion = useReducedMotion()
  // Очередь переходов сцены — design/showcase/index.html:185-186,247-257
  const current = useRef(0)
  const busy = useRef(false)
  const pending = useRef<number | null>(null)

  // Коммит выбора: во время идущего перехода запоминается только последний запрошенный товар
  const commitSelection = (index: number) => {
    const i = ((index % N) + N) % N
    if (busy.current) {
      pending.current = i
      return
    }
    if (i === current.current) return
    busy.current = true
    setDir(dirOf(current.current, i))
    current.current = i
    setSelected(i)
  }

  const onTransitionEnd = () => {
    busy.current = false
    const next = pending.current
    pending.current = null
    if (next !== null) commitSelection(next)
  }

  const product = SHOWCASE_PRODUCTS[selected]

  return (
    <section id="showcase" aria-label="Витрина" style={{ '--c': product.colorVar } as CSSProperties}>
      <div className="showcase-stage">
        <Cylinder products={SHOWCASE_PRODUCTS} selected={selected} onSelect={commitSelection} />
        <Stage selectedId={product.id} dir={dir} reducedMotion={reducedMotion} onTransitionEnd={onTransitionEnd} />
      </div>
    </section>
  )
}
