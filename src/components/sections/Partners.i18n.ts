// Тексты секции «Партнёры» (задача 43). RU — исходник, KZ/EN — машинный перевод с русского,
// черновик до вычитки носителем. Данные дистрибьюторов сюда не входят — они в src/data/partners.ts.
import type { Lang } from '../../i18n/LanguageContext'

type PartnersText = {
  label: string
  mapAlt: string
  addressPrefix: string
}

export const partnersText: Record<Lang, PartnersText> = {
  ru: {
    label: 'Партнёры',
    mapAlt: 'Карта Казахстана с дистрибьюторами',
    addressPrefix: 'Адрес:',
  },
  kz: {
    label: 'Серіктестер',
    mapAlt: 'Дистрибьюторлар белгіленген Қазақстан картасы',
    addressPrefix: 'Мекенжайы:',
  },
  en: {
    label: 'Partners',
    mapAlt: 'Map of Kazakhstan with distributors',
    addressPrefix: 'Address:',
  },
}
