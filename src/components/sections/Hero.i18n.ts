import type { Lang } from '../../i18n/LanguageContext'

// Тексты первого экрана (задача 41). RU — без изменений из задачи 19;
// KZ/EN — машинный перевод с русского, черновой до вычитки носителем.
// «ТОО TAU-PRODUCT» и «TAU WATERS» не переводятся (решение пользователя).
type HeroText = { meta: string; title: string; lead: string }

export const HERO_I18N: Record<Lang, HeroText> = {
  ru: {
    meta: 'ТОО TAU-PRODUCT · Казахстан',
    title: 'Будь уверен в воде',
    lead: 'Артезианская вода и лимонады от TAU WATERS. Контроль качества на каждом этапе - никакого компромисса со вкусом.',
  },
  kz: {
    meta: 'ТОО TAU-PRODUCT · Қазақстан',
    title: 'Суға сенімді бол',
    lead: 'TAU WATERS артезиан суы мен лимонадтары. Әр кезеңде сапа бақылауы - дәмге ешқандай ымыра жоқ.',
  },
  en: {
    meta: 'ТОО TAU-PRODUCT · Kazakhstan',
    title: 'Be sure of the water',
    lead: 'Artesian water and lemonades from TAU WATERS. Quality control at every stage - no compromise on taste.',
  },
}
