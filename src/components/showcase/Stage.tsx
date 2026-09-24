import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { SHOWCASE_PRODUCTS, type ShowcaseProduct } from './showcase-products'
import './Stage.css'

// Центральная сцена витрины (задача 36): силуэт выбранного товара с тенью и подсветкой,
// смена — 3D-разворот через WAAPI. Порт design/showcase/index.html:215-245.
// Очередь быстрых выборов (busy/pending) — в Showcase.tsx; Stage сообщает об окончании
// перехода через onTransitionEnd.

// Альтернативный текст сцен — design/showcase/index.html:154-157
const ALT: Record<string, string> = {
  lim: 'Девушка смеётся и протягивает в камеру бутылку TAU-Лимонад',
  mo: 'Девушка протягивает в камеру зелёную бутылку TAU-МО, парень показывает на неё',
  bur: 'Парень подмигивает, держит бутылку TAU-Буратино и показывает палец вверх',
  water: 'Трое друзей с водой TAU: девушка протягивает бутылку 0,33 л, парень поднимает бутылку 1 л',
}

const OUT_MS = 480
const IN_MS = 620
const IN_DELAY_MS = 200

type Props = {
  selectedId?: string
  dir?: number
  reducedMotion?: boolean
  onTransitionEnd?: () => void
}

type Layer = { key: number; product: ShowcaseProduct }

const byId = (id: string | undefined) => SHOWCASE_PRODUCTS.find((p) => p.id === id) ?? SHOWCASE_PRODUCTS[0]

// Кадр декодирован до начала разворота — как ожидание img.complete в эталоне
const ready = (src: string) => {
  const im = new Image()
  im.src = src
  return im.decode().catch(() => undefined)
}

const play = (el: Element, frames: Keyframe[], opts: KeyframeAnimationOptions) => {
  const a = el.animate(frames, opts)
  return { a, done: a.finished.catch(() => undefined) }
}

export default function Stage({ selectedId, dir = 1, reducedMotion = false, onTransitionEnd }: Props) {
  const initial = byId(selectedId)
  const [layers, setLayers] = useState<Layer[]>(() => [{ key: 0, product: initial }])
  const shown = useRef(initial.id) // товар, к которому идёт (или пришла) сцена
  const nextKey = useRef(1)
  const anim = useRef<number | null>(null) // направление запланированного разворота
  const els = useRef(new Map<number, HTMLDivElement>())
  const live = useRef({ dir, reducedMotion, onTransitionEnd })
  live.current = { dir, reducedMotion, onTransitionEnd }

  // Прогрев всех кадров сцены — как в эталоне (index.html:169)
  useEffect(() => {
    SHOWCASE_PRODUCTS.forEach((p) => void ready(p.sceneSrc))
  }, [])

  useEffect(() => {
    const product = byId(selectedId)
    // Повторный выбор показанного товара — без нового перехода
    if (product.id === shown.current) return
    shown.current = product.id
    let cancelled = false
    ready(product.sceneSrc).then(() => {
      if (cancelled) return
      const layer = { key: nextKey.current++, product }
      if (live.current.reducedMotion) {
        setLayers([layer]) // мгновенная замена, без .animate()
        live.current.onTransitionEnd?.()
        return
      }
      anim.current = live.current.dir < 0 ? -1 : 1
      setLayers((ls) => [ls[ls.length - 1], layer])
    })
    return () => {
      cancelled = true
    }
  }, [selectedId])

  // Разворот: обе сцены в DOM — анимируем до первой отрисовки новой
  useLayoutEffect(() => {
    const d = anim.current
    if (d === null || layers.length < 2) return
    anim.current = null
    const [oldL, newL] = layers
    const oldEl = els.current.get(oldL.key)
    const freshEl = els.current.get(newL.key)
    if (!oldEl || !freshEl) return
    const out = play(
      oldEl,
      [
        { transform: 'rotateY(0deg) translateX(0) scale(1)', opacity: 1 },
        { transform: `rotateY(${80 * d}deg) translateX(${-8 * d}%) scale(0.92)`, opacity: 0 },
      ],
      { duration: OUT_MS, easing: 'cubic-bezier(0.6,0,0.85,0.35)', fill: 'forwards' },
    )
    const inn = play(
      freshEl,
      [
        { transform: `rotateY(${-80 * d}deg) translateX(${8 * d}%) scale(0.92)`, opacity: 0 },
        { transform: 'rotateY(0deg) translateX(0) scale(1)', opacity: 1 },
      ],
      { duration: IN_MS, delay: IN_DELAY_MS, easing: 'cubic-bezier(0.2,0.9,0.3,1)', fill: 'backwards' },
    )
    let cancelled = false
    Promise.all([out.done, inn.done]).then(() => {
      if (cancelled) return
      setLayers([newL])
      live.current.onTransitionEnd?.()
    })
    return () => {
      cancelled = true
      out.a.cancel()
      inn.a.cancel()
    }
  }, [layers])

  return (
    <div className="people">
      {layers.map(({ key, product }) => (
        <div
          key={key}
          className="scene"
          data-src={product.sceneSrc}
          ref={(el) => {
            if (el) els.current.set(key, el)
            else els.current.delete(key)
          }}
        >
          <img className="sh" src={product.sceneSrc} alt="" aria-hidden="true" />
          <img className="main" src={product.sceneSrc} alt={ALT[product.id] ?? product.name} decoding="async" />
        </div>
      ))}
    </div>
  )
}
