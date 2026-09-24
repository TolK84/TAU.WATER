import type { Lang } from '../../i18n/LanguageContext'

// Подписи под числами секции «Цифры» (задача 44), по порядку STATS в Stats.tsx.
// RU — исходный текст задачи 12 без изменений; KZ/EN — машинный перевод с RU, черновой до вычитки носителем.
// «ТОО «TAU-PRODUCT»» и код модели GW-R-88 не переводятся (решение пользователя).
export const statsLabels: Record<Lang, [string, string, string, string]> = {
  ru: [
    'Вкуса в линейке лимонадов',
    'Форматов бутилированной воды под любую задачу',
    'Система обратного осмоса (GW-R-88)',
    'Год основания ТОО «TAU-PRODUCT»',
  ],
  kz: [
    'Лимонадтар желісіндегі дәм',
    'Кез келген міндетке арналған бөтелкедегі су форматы',
    'Кері осмос жүйесі (GW-R-88)',
    'ТОО «TAU-PRODUCT» құрылған жыл',
  ],
  en: [
    'Flavours in the lemonade range',
    'Bottled water formats for any need',
    'Reverse osmosis system (GW-R-88)',
    'Year ТОО «TAU-PRODUCT» was founded',
  ],
}
