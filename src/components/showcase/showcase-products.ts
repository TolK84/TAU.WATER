// Товары витрины (задача 34). Состав, порядок, цвета и тексты — design/showcase/index.html:154-158;
// meta Буратино исправлен с копипаст-ошибки эталона на «Буратино · 1,5 л» (карточка 34, Техника).
// Пути — литеральные, сверены с файлами задач 32 (public/packshots) и 33 (public/showcase).
export type ShowcaseProduct = {
  id: string
  name: string
  meta: string
  colorVar: string
  bottleSrc: string
  sceneSrc: string
}

export const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  {
    id: 'lim',
    name: 'Лимонад',
    meta: 'Лимонад · 1 / 1,5 л',
    colorVar: 'var(--color-product-limonad)',
    bottleSrc: '/packshots/limonad.webp',
    sceneSrc: '/showcase/scene-limonad.webp',
  },
  {
    id: 'mo',
    name: 'МО',
    meta: 'Мохито · 0,5 / 1 / 1,5 л',
    colorVar: 'var(--color-product-mo)',
    bottleSrc: '/packshots/mo.webp',
    sceneSrc: '/showcase/scene-mo.webp',
  },
  {
    id: 'bur',
    name: 'Буратино',
    meta: 'Буратино · 1,5 л',
    colorVar: 'var(--color-product-buratino)',
    bottleSrc: '/packshots/buratino.webp',
    sceneSrc: '/showcase/scene-bur.webp',
  },
  {
    id: 'water',
    name: 'Вода TAU',
    meta: 'Без газа · 0,33 / 0,5 / 1 / 1,5 / 5 л',
    colorVar: 'var(--color-product-water)',
    bottleSrc: '/packshots/water.webp',
    sceneSrc: '/showcase/scene-water.webp',
  },
]
