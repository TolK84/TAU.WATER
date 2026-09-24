import type { Lang } from '../../i18n/LanguageContext'

// Тексты секции «Вода» (задача 44). RU — исходный текст задачи 11 без изменений;
// KZ/EN — машинный перевод с RU, черновой до вычитки носителем (design/BRIEF.md:86).
type Format = { vol: string; label?: string; desc?: string }

type WaterLineText = {
  label: string
  heading: string
  accent: string
  lead: string
  alt: string
  formats: Format[]
}

export const waterLineText: Record<Lang, WaterLineText> = {
  ru: {
    label: 'Линейка воды',
    heading: 'Артезианская',
    accent: 'Вода TAU',
    lead: 'Добывается из собственной артезианской скважины и проходит многоступенчатую очистку методом обратного осмоса.',
    alt: 'Артезианская вода TAU: 5 л, 1,5 л, 1 л, 0,5 л, 0,33 л',
    formats: [
      { vol: '0,33 л', label: 'Малая' },
      { vol: '0,5 л', label: 'Классическая', desc: 'Повседневный формат. Самый популярный объём.' },
      { vol: '1 л', label: 'Большая', desc: 'Для семьи и активного дня.' },
      { vol: '1,5 л' },
      { vol: '5 л', label: 'Офисная', desc: 'Для кулера, офиса и большой семьи. Бесплатная доставка по городу.' },
    ],
  },
  kz: {
    label: 'Су желісі',
    heading: 'Артезиандық',
    accent: 'TAU суы',
    lead: 'Меншікті артезиан ұңғымасынан өндіріледі және кері осмос әдісімен көп сатылы тазартудан өтеді.',
    alt: 'TAU артезиан суы: 5 л, 1,5 л, 1 л, 0,5 л, 0,33 л',
    formats: [
      { vol: '0,33 л', label: 'Шағын' },
      { vol: '0,5 л', label: 'Классикалық', desc: 'Күнделікті формат. Ең танымал көлем.' },
      { vol: '1 л', label: 'Үлкен', desc: 'Отбасы мен белсенді күнге арналған.' },
      { vol: '1,5 л' },
      { vol: '5 л', label: 'Кеңселік', desc: 'Кулерге, кеңсеге және үлкен отбасыға арналған. Қала бойынша тегін жеткізу.' },
    ],
  },
  en: {
    label: 'Water range',
    heading: 'Artesian',
    accent: 'TAU Water',
    lead: 'Extracted from our own artesian well and purified in several stages by reverse osmosis.',
    alt: 'TAU artesian water: 5 L, 1.5 L, 1 L, 0.5 L, 0.33 L',
    formats: [
      { vol: '0.33 L', label: 'Small' },
      { vol: '0.5 L', label: 'Classic', desc: 'An everyday format. The most popular size.' },
      { vol: '1 L', label: 'Large', desc: 'For the family and an active day.' },
      { vol: '1.5 L' },
      { vol: '5 L', label: 'Office', desc: 'For the water cooler, the office and a large family. Free delivery within the city.' },
    ],
  },
}
