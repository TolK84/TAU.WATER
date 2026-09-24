export type Locale = 'ru' | 'kz' | 'en';
export type Localized = Record<Locale, string>;

export interface Distributor {
  id: number;
  name: Localized;
  address: Localized;
  city: Localized;
  pin: { left: number; top: number; size: 'sm' | 'lg' };
}

export const distributors: Distributor[] = [
  {
    id: 1,
    name: { ru: "ТОО «TAU Mart»", kz: "ЖШС «TAU Mart»", en: "LLC “TAU Mart”" },
    address: { ru: "ж/м Тассай 15/1", kz: "Тассай ықшам ауданы 15/1", en: "Tassay mkr. 15/1" },
    city: { ru: "Шымкент", kz: "Шымкент", en: "Shymkent" },
    pin: { left: 52.7469, top: 81.4417, size: "lg" },
  },
  {
    id: 2,
    name: { ru: "ТОО «TAU Mart»", kz: "ЖШС «TAU Mart»", en: "LLC “TAU Mart”" },
    address: { ru: "ул. Жарылкапова 206", kz: "Жарылқапова көш. 206", en: "Zharylkаpova St 206" },
    city: { ru: "Туркестан", kz: "Түркістан", en: "Turkestan" },
    pin: { left: 49.4475, top: 80.1858, size: "sm" },
  },
  {
    id: 3,
    name: { ru: "ТОО «Артемида Тараз»", kz: "ЖШС «Артемида Тараз»", en: "LLC “Артемида Тараз”" },
    address: { ru: "ул. Сыпатай Батыра, 28", kz: "Сыпатай Батыр көш. 28", en: "Sypatai Batyr St 28" },
    city: { ru: "Тараз", kz: "Тараз", en: "Taraz" },
    pin: { left: 59.2081, top: 77.709, size: "sm" },
  },
  {
    id: 4,
    name: { ru: "ИП «Zhomart trade»", kz: "ЖК «Zhomart trade»", en: "IE “Zhomart trade”" },
    address: { ru: "переулок Динмухамед Конаев, д. 200М", kz: "Дінмұхамед Қонаев өтк. 200М", en: "Dinmukhamed Kunaev Lane 200M" },
    city: { ru: "Кызылорда", kz: "Қызылорда", en: "Kyzylorda" },
    pin: { left: 46.1326, top: 68.4211, size: "sm" },
  },
  {
    id: 5,
    name: { ru: "ТОО «Павлодар Продснаб плюс»", kz: "ЖШС «Павлодар Продснаб плюс»", en: "LLC “Павлодар Продснаб плюс”" },
    address: { ru: "Циолковского, 140/1", kz: "Циолковский көш. 140/1", en: "Tsiolkovsky St 140/1" },
    city: { ru: "Павлодар", kz: "Павлодар", en: "Pavlodar" },
    pin: { left: 71.9153, top: 27.709, size: "sm" },
  },
  {
    id: 6,
    name: { ru: "ТОО «TAU Mart»", kz: "ЖШС «TAU Mart»", en: "LLC “TAU Mart”" },
    address: { ru: "Жетысуский район, улица Бурундайская, д. 93Д Склад №28", kz: "Жетісу ауданы, Бурундайская көш. 93Д, Қойма №28", en: "Jetysu district, Burundai St 93D, Warehouse No. 28" },
    city: { ru: "Алматы", kz: "Алматы", en: "Almaty" },
    pin: { left: 70.2429, top: 76.4661, size: "sm" },
  },
  {
    id: 7,
    name: { ru: "ТОО «Торговая Сеть Вавилон»", kz: "ЖШС «Торговая Сеть Вавилон»", en: "LLC “Торговая Сеть Вавилон”" },
    address: { ru: "ул. О. Тищенко, 12", kz: "О. Тищенко көш. 12", en: "O. Tishchenko St 12" },
    city: { ru: "Караганда, Темиртау", kz: "Қарағанды, Теміртау", en: "Karaganda, Temirtau" },
    pin: { left: 56.7509, top: 30.2269, size: "sm" },
  },
  {
    id: 8,
    name: { ru: "ТОО «Аджип»", kz: "ЖШС «Аджип»", en: "LLC “Аджип”" },
    address: { ru: "ул. Алтынкол, 12", kz: "Алтынкөл көш. 12", en: "Altynkol St 12" },
    city: { ru: "Атырау", kz: "Атырау", en: "Atyrau" },
    pin: { left: 14.825, top: 53.5604, size: "sm" },
  },
  {
    id: 9,
    name: { ru: "ТОО «Чаян»", kz: "ЖШС «Чаян»", en: "LLC “Чаян”" },
    address: { ru: "ул. Ракишева, д. 18А", kz: "Рақышев көш. 18А", en: "Rakysheva St 18A" },
    city: { ru: "Талдыкорган", kz: "Талдықорған", en: "Taldykorgan" },
    pin: { left: 73.5727, top: 65.9443, size: "sm" },
  },
];
