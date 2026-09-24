import type { Lang } from '../../i18n/LanguageContext'

// Тексты секции «Линейка лимонадов» (задача 45). RU — исходный текст задачи 20 без изменений;
// KZ/EN — машинный перевод, черновой до вычитки носителем.
// Названия товаров (Лимонад, МО/Мохито, Буратино) не переводятся и сюда не входят — они в Lemonades.tsx.
type FlavorText = { desc: string; volume: string; composition: string }

type LemonadesText = {
  label: string
  heading: string
  volume: string
  gas: string
  gasValue: string
  composition: string
  items: { limonad: FlavorText; mo: FlavorText; buratino: FlavorText }
}

const RU_SUGAR = 'Вода высокой степени очистки, натуральный сахар, натуральные ароматизаторы, лимонная кислота'
const KZ_SUGAR = 'Жоғары дәрежеде тазартылған су, табиғи қант, табиғи хош иістендіргіштер, лимон қышқылы'
const EN_SUGAR = 'Highly purified water, natural sugar, natural flavourings, citric acid'

export const LEMONADES_I18N: Record<Lang, LemonadesText> = {
  ru: {
    label: 'Линейка лимонадов',
    heading: 'Три вкуса - у каждого свой состав, смотри ниже.',
    volume: 'Объём:',
    gas: 'Газ:',
    gasValue: 'да',
    composition: 'Состав:',
    items: {
      limonad: {
        desc: 'Освежающий лимонный вкус с нотой цедры. Любимый с детства.',
        volume: '1 / 1,5 л',
        composition: RU_SUGAR,
      },
      mo: {
        desc: 'Лайм и мята - бодрящая комбинация без алкоголя. Для жаркого дня.',
        volume: '0,5 / 1 / 1,5 л',
        composition: RU_SUGAR,
      },
      buratino: {
        desc: 'Лимонно-ванильный вкус из СССР. Тот самый.',
        volume: '1,5 л',
        composition:
          'Умягчённая вода, сахарозаменитель МИРАМИКС 200,5, регулятор кислотности Е-330, идентичный натуральному ароматизатор, краситель Е-150d, консервант Е-211',
      },
    },
  },
  kz: {
    label: 'Лимонадтар желісі',
    heading: 'Үш дәм - әрқайсысының өз құрамы бар, төменнен қара.',
    volume: 'Көлемі:',
    gas: 'Газдалған:',
    gasValue: 'иә',
    composition: 'Құрамы:',
    items: {
      limonad: {
        desc: 'Цедра нотасы бар сергітетін лимон дәмі. Балалық шақтан сүйікті.',
        volume: '1 / 1,5 л',
        composition: KZ_SUGAR,
      },
      mo: {
        desc: 'Лайм мен жалбыз - алкогольсіз сергітетін үйлесім. Ыстық күнге арналған.',
        volume: '0,5 / 1 / 1,5 л',
        composition: KZ_SUGAR,
      },
      buratino: {
        desc: 'КСРО-дан келген лимон-ваниль дәмі. Сол баяғы дәм.',
        volume: '1,5 л',
        composition:
          'Жұмсартылған су, МИРАМИКС 200,5 қант алмастырғышы, Е-330 қышқылдық реттегіші, табиғиға ұқсас хош иістендіргіш, Е-150d бояғышы, Е-211 консерванты',
      },
    },
  },
  en: {
    label: 'Lemonade line',
    heading: 'Three flavours - each with its own composition, see below.',
    volume: 'Volume:',
    gas: 'Carbonated:',
    gasValue: 'yes',
    composition: 'Ingredients:',
    items: {
      limonad: {
        desc: 'A refreshing lemon taste with a note of zest. A childhood favourite.',
        volume: '1 / 1.5 L',
        composition: EN_SUGAR,
      },
      mo: {
        desc: 'Lime and mint - an invigorating alcohol-free combination. For a hot day.',
        volume: '0.5 / 1 / 1.5 L',
        composition: EN_SUGAR,
      },
      buratino: {
        desc: 'A lemon-vanilla taste from the USSR. The very same one.',
        volume: '1.5 L',
        composition:
          'Softened water, sweetener MIRAMIX 200.5, acidity regulator E-330, nature-identical flavouring, colouring E-150d, preservative E-211',
      },
    },
  },
}
