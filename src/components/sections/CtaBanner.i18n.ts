import type { Lang } from '../../i18n/LanguageContext'

// Тексты CTA-блока (задача 46). RU — без изменений из задачи 16;
// KZ/EN — машинный перевод с русского, черновой до вычитки носителем.
// titleTop/titleBottom — два фрагмента заголовка, разделённые <br/> (DESIGN.md «Задача 46»).
type CtaText = { titleTop: string; titleBottom: string; lead: string; order: string; write: string }

export const CTA_I18N: Record<Lang, CtaText> = {
  ru: {
    titleTop: 'БУДЬ УВЕРЕН.',
    titleBottom: 'ЗАКАЖИ TAU.',
    lead: 'Доставка по Казахстану · Оптовые и розничные поставки',
    order: 'Оформить заказ →',
    write: 'Написать нам',
  },
  kz: {
    titleTop: 'СЕНІМДІ БОЛ.',
    titleBottom: 'TAU-ҒА ТАПСЫРЫС БЕР.',
    lead: 'Қазақстан бойынша жеткізу · Көтерме және бөлшек жеткізілімдер',
    order: 'Тапсырыс беру →',
    write: 'Бізге жазу',
  },
  en: {
    titleTop: 'BE SURE.',
    titleBottom: 'ORDER TAU.',
    lead: 'Delivery across Kazakhstan · Wholesale and retail supplies',
    order: 'Place an order →',
    write: 'Write to us',
  },
}
