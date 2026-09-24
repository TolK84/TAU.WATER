import { SHOWCASE_PRODUCTS, type ShowcaseProduct } from './showcase-products'
import './Caption.css'

// Подпись выбранного товара под сценой (задача 37): название и объёмы.
// Разметка — design/showcase/index.html:145-148; цвет объёмов — var(--c) в Caption.css.
type Props = { product?: ShowcaseProduct }

export default function Caption({ product = SHOWCASE_PRODUCTS[0] }: Props) {
  return (
    <div className="caption" aria-live="polite">
      <h2>{product.name}</h2>
      <p>{product.meta}</p>
    </div>
  )
}
