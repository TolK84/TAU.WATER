import { useState } from 'react'
import Cylinder from './Cylinder'
import { SHOWCASE_PRODUCTS } from './showcase-products'

// Витрина (задача 34): оркестратор выбора товара. Смена выбора — задача 35,
// сцена и подпись — задачи 36/37.
export default function Showcase() {
  const [selected, setSelected] = useState(0)

  // Коммит выбора: синхронно обновляет выбранный товар (подсветка .on карточки)
  const commitSelection = (index: number) => setSelected(index)

  return (
    <section id="showcase" aria-label="Витрина">
      <div className="showcase-stage">
        <Cylinder products={SHOWCASE_PRODUCTS} selected={selected} onSelect={commitSelection} />
      </div>
    </section>
  )
}
