import type { Lang } from '../../i18n/LanguageContext'

// Тексты навигации (задача 41). RU — без изменений из задачи 8;
// KZ/EN — машинный перевод с русского, черновой до вычитки носителем.
// Логотип «TAU WATERS» не переводится (решение пользователя) и сюда не входит.
type NavText = { items: string[]; order: string; menu: string }

export const NAV_I18N: Record<Lang, NavText> = {
  ru: {
    items: ['Вода', 'Лимонады', 'О компании', 'Контакты'],
    order: 'Заказать',
    menu: 'Меню',
  },
  kz: {
    items: ['Су', 'Лимонадтар', 'Компания туралы', 'Байланыс'],
    order: 'Тапсырыс беру',
    menu: 'Мәзір',
  },
  en: {
    items: ['Water', 'Lemonades', 'About the company', 'Contacts'],
    order: 'Order',
    menu: 'Menu',
  },
}
