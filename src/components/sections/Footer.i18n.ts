import type { Lang } from '../../i18n/LanguageContext'

// Тексты футера (задача 46). RU — без изменений из задачи 17;
// KZ/EN — машинный перевод с русского, черновой до вычитки носителем.
// Не переводятся (решение пользователя): названия товаров колонки «Продукция» (в Footer.tsx),
// «TAU WATERS», «ТОО «TAU-PRODUCT»», домен tau-water.kz.
type FooterText = {
  products: string
  company: { title: string; items: string[] }
  partnership: { title: string; items: string[] }
  about: string
  rights: string
}

export const FOOTER_I18N: Record<Lang, FooterText> = {
  ru: {
    products: 'Продукция',
    company: { title: 'Компания', items: ['О нас', 'Производство', 'Качество', 'Оборудование', 'Контакты'] },
    partnership: { title: 'Сотрудничество', items: ['Оптовые поставки', 'HoReCa', 'Дистрибьюторам', 'Написать нам'] },
    about: 'Казахстанский производитель артезианской воды и лимонадов. Будь уверен в каждом глотке.',
    rights: 'Все права защищены.',
  },
  kz: {
    products: 'Өнімдер',
    company: { title: 'Компания', items: ['Біз туралы', 'Өндіріс', 'Сапа', 'Жабдық', 'Байланыс'] },
    partnership: {
      title: 'Ынтымақтастық',
      items: ['Көтерме жеткізілімдер', 'HoReCa', 'Дистрибьюторларға', 'Бізге жазу'],
    },
    about: 'Артезиан суы мен лимонадтардың қазақстандық өндірушісі. Әр жұтымға сенімді бол.',
    rights: 'Барлық құқықтар қорғалған.',
  },
  en: {
    products: 'Products',
    company: { title: 'Company', items: ['About us', 'Production', 'Quality', 'Equipment', 'Contacts'] },
    partnership: {
      title: 'Cooperation',
      items: ['Wholesale supplies', 'HoReCa', 'For distributors', 'Write to us'],
    },
    about: 'Kazakhstani producer of artesian water and lemonades. Be sure of every sip.',
    rights: 'All rights reserved.',
  },
}
