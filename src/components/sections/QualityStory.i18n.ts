import type { Lang } from '../../i18n/LanguageContext'

// Тексты секции «Контроль на каждом этапе» (задача 45). RU — исходный текст задачи 14 без изменений;
// KZ/EN — машинный перевод, черновой до вычитки носителем.
type QualityStoryText = {
  badge: string
  label: string
  heading: string
  p1: string
  p2: string
  points: string[]
}

export const QUALITY_STORY_I18N: Record<Lang, QualityStoryText> = {
  ru: {
    badge: 'Казахстан · Собственная скважина',
    label: 'О производстве',
    heading: 'Контроль\nна каждом\nэтапе',
    p1: 'Мы добываем воду из собственной артезианской скважины. Очистка методом обратного осмоса на оборудовании GW-R-88 производства CIT (США) гарантирует стабильное качество каждой партии.',
    p2: 'Современная производственная лаборатория ведёт контроль на каждом этапе — от скважины до упаковки. Состав на этикетке соответствует тому, что внутри.',
    points: ['Собственная\nскважина', 'Обратный\nосмос', 'Лаборатория\nконтроля'],
  },
  kz: {
    badge: 'Қазақстан · Меншікті ұңғыма',
    label: 'Өндіріс туралы',
    heading: 'Әр\nкезеңде\nбақылау',
    p1: 'Біз суды өзіміздің артезиан ұңғымамыздан өндіреміз. CIT (АҚШ) өндірген GW-R-88 жабдығында кері осмос әдісімен тазарту әр партияның тұрақты сапасына кепілдік береді.',
    p2: 'Заманауи өндірістік зертхана әр кезеңде бақылау жүргізеді — ұңғымадан қаптамаға дейін. Заттаңбадағы құрам ішіндегісіне сәйкес келеді.',
    points: ['Меншікті\nұңғыма', 'Кері\nосмос', 'Бақылау\nзертханасы'],
  },
  en: {
    badge: 'Kazakhstan · Own well',
    label: 'About production',
    heading: 'Control\nat every\nstage',
    p1: 'We extract water from our own artesian well. Reverse osmosis purification on GW-R-88 equipment made by CIT (USA) guarantees consistent quality of every batch.',
    p2: 'A modern production laboratory carries out control at every stage — from the well to the packaging. The composition on the label matches what is inside.',
    points: ['Own\nwell', 'Reverse\nosmosis', 'Control\nlaboratory'],
  },
}
