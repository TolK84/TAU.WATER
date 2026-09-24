import type { Lang } from '../../i18n/LanguageContext'

// Тексты секции ценностей (задача 46). RU — без изменений из задачи 15;
// KZ/EN — машинный перевод с русского, черновой до вычитки носителем.
type ValueItem = { title: string; text: string }

export const VALUES_I18N: Record<Lang, ValueItem[]> = {
  ru: [
    { title: 'Вкусно', text: 'Рецептуры разработаны без лишних компромиссов' },
    { title: 'Полезно', text: 'Контроль состава на каждом этапе производства' },
    { title: 'С любовью', text: 'Производство в Казахстане, своими руками' },
    { title: 'Натурально', text: 'Полный состав продукта - на этикетке каждой упаковки' },
    { title: 'Уверенно', text: 'Качество гарантировано лабораторным контролем' },
  ],
  kz: [
    { title: 'Дәмді', text: 'Рецептуралар артық ымырасыз әзірленген' },
    { title: 'Пайдалы', text: 'Өндірістің әр кезеңінде құрамды бақылау' },
    { title: 'Сүйіспеншілікпен', text: 'Қазақстанда, өз қолымызбен өндірілген' },
    { title: 'Табиғи', text: 'Өнімнің толық құрамы - әр қаптаманың затбелгісінде' },
    { title: 'Сенімді', text: 'Сапа зертханалық бақылаумен кепілдендірілген' },
  ],
  en: [
    { title: 'Tasty', text: 'Recipes developed without unnecessary compromises' },
    { title: 'Healthy', text: 'Composition control at every stage of production' },
    { title: 'With love', text: 'Made in Kazakhstan, with our own hands' },
    { title: 'Natural', text: 'Full product composition - on the label of every package' },
    { title: 'Confident', text: 'Quality guaranteed by laboratory control' },
  ],
}
