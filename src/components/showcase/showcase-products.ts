import type { Lang } from '../../i18n/LanguageContext'
import { publicUrl } from '../../lib/publicUrl'

// Товары витрины (задача 34). Состав, порядок, цвета и тексты — design/showcase/index.html:154-158;
// meta Буратино исправлен с копипаст-ошибки эталона на «Буратино · 1,5 л» (карточка 34, Техника).
// Пути — литеральные (через publicUrl — base сборки), сверены с файлами задач 32 (public/packshots) и 33 (public/showcase).
// Переводы (задача 42): RU — исходный текст без изменений; KZ/EN — машинный перевод, черновой до вычитки носителем.
// name — название товара, не переводится ни на одном языке (одно значение). В meta не переводятся названия
// (Лимонад, Мохито, Буратино); объёмы: RU/KZ — «0,5 л», EN — «0.5 L».
export type Localized = Record<Lang, string>

export type ShowcaseProduct = {
  id: string
  name: string
  meta: Localized
  alt: Localized
  colorVar: string
  bottleSrc: string
  sceneSrc: string
}

export const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  {
    id: 'lim',
    name: 'Лимонад',
    meta: {
      ru: 'Лимонад · 1 / 1,5 л',
      kz: 'Лимонад · 1 / 1,5 л',
      en: 'Лимонад · 1 / 1.5 L',
    },
    alt: {
      ru: 'Девушка смеётся и протягивает в камеру бутылку TAU-Лимонад',
      kz: 'Қыз күліп, камераға TAU-Лимонад бөтелкесін ұсынып тұр',
      en: 'A girl laughs and holds out a bottle of TAU-Лимонад to the camera',
    },
    colorVar: 'var(--color-product-limonad)',
    bottleSrc: publicUrl('packshots/limonad.webp'),
    sceneSrc: publicUrl('showcase/scene-limonad.webp'),
  },
  {
    id: 'mo',
    name: 'МО',
    meta: {
      ru: 'Мохито · 0,5 / 1 / 1,5 л',
      kz: 'Мохито · 0,5 / 1 / 1,5 л',
      en: 'Мохито · 0.5 / 1 / 1.5 L',
    },
    alt: {
      ru: 'Девушка протягивает в камеру зелёную бутылку TAU-МО, парень показывает на неё',
      kz: 'Қыз камераға жасыл TAU-МО бөтелкесін ұсынып тұр, жігіт оны нұсқап тұр',
      en: 'A girl holds out a green bottle of TAU-МО to the camera, a guy points at it',
    },
    colorVar: 'var(--color-product-mo)',
    bottleSrc: publicUrl('packshots/mo.webp'),
    sceneSrc: publicUrl('showcase/scene-mo.webp'),
  },
  {
    id: 'bur',
    name: 'Буратино',
    meta: {
      ru: 'Буратино · 1,5 л',
      kz: 'Буратино · 1,5 л',
      en: 'Буратино · 1.5 L',
    },
    alt: {
      ru: 'Парень подмигивает, держит бутылку TAU-Буратино и показывает палец вверх',
      kz: 'Жігіт көз қысып, TAU-Буратино бөтелкесін ұстап, бас бармағын көтеріп тұр',
      en: 'A guy winks, holds a bottle of TAU-Буратино and gives a thumbs up',
    },
    colorVar: 'var(--color-product-buratino)',
    bottleSrc: publicUrl('packshots/buratino.webp'),
    sceneSrc: publicUrl('showcase/scene-bur.webp'),
  },
  {
    id: 'water',
    name: 'Вода TAU',
    meta: {
      ru: 'Без газа · 0,33 / 0,5 / 1 / 1,5 / 5 л',
      kz: 'Газсыз · 0,33 / 0,5 / 1 / 1,5 / 5 л',
      en: 'Still · 0.33 / 0.5 / 1 / 1.5 / 5 L',
    },
    alt: {
      ru: 'Трое друзей с водой TAU: девушка протягивает бутылку 0,33 л, парень поднимает бутылку 1 л',
      kz: 'TAU суы бар үш дос: қыз 0,33 л бөтелкені ұсынып тұр, жігіт 1 л бөтелкені көтеріп тұр',
      en: 'Three friends with TAU water: a girl holds out a 0.33 L bottle, a guy raises a 1 L bottle',
    },
    colorVar: 'var(--color-product-water)',
    bottleSrc: publicUrl('packshots/water.webp'),
    sceneSrc: publicUrl('showcase/scene-water.webp'),
  },
]
