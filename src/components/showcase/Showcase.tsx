import { useState } from 'react'
import Cylinder from './Cylinder'
import { SHOWCASE_PRODUCTS } from './showcase-products'

// Витрина (задача 34): оркестратор выбора товара. Смена выбора — задача 35,
// сцена и подпись — задачи 36/37. Сейчас выбран начальный индекс 0.
export default function Showcase() {
  const [selected] = useState(0)

  return (
    <section id="showcase" aria-label="Витрина">
      <div className="showcase-stage">
        <Cylinder products={SHOWCASE_PRODUCTS} selected={selected} />
      </div>
    </section>
  )
}
