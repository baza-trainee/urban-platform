export const dVolunteerData = {
  btnTitle: 'Написати',
  city: 'Місто:',
  email: 'Електронна пошта:',
  possibilities: 'Розглядаю можливості:',
  opportunity: 'Цікавлять напрями:',
  desiredRole: 'Бажана роль у проєктах:',
  interestingProject: 'Які проєкти  цікавлять?',
  coopTerms: 'Умови співпраці:',
  firstBlueBtn: 'Участь у проєктах',
  secondBlueBtn: 'Організація проєктів'
}

export const mapVolunteerData: { [key: string]: string } = {
  city: 'Місто:',
  email: 'Електронна пошта:',
  possibilities: 'Розглядаю можливості:',
  opportunity: 'Цікавлять напрями:',
  desiredRole: 'Бажана роль у проєктах:',
  interestingProject: 'Які проєкти  цікавлять?',
  coopTerms: 'Умови співпраці:'
}

export const sVolunteerData: { [key: string]: string } = {
  userImg: '',
  firstName: 'Олена',
  lastName: 'Волонтер',
  likes: '123',
  userDescription: `
Привіт! Мене звати Олена, і я - волонтер на платформі "Місто активних людей". 🌟

✨ Моя місія: Сприяти створенню позитивних змін у моєму місті та навколишньому середовищі через участь у різноманітних громадських проєктах.

🌱 Мої інтереси:
* Екологія та збереження природи.
* Розвиток мистецтва та культури.
* Волонтерська допомога вразливим категоріям населення.

🤝 Мої навички:
* Організація та керівництво проєктами.
* Комунікація та співпраця в команді.
* Волонтерська робота та соціальний імпакт.

🌍 Долучайтеся до позитивних змін разом зі мною! 💪
Завітайте на мою сторінку, щоб бути в курсі моїх проєктів та подій. Разом ми можемо зробити наше місто кращим місцем для життя! 🏡🌺
`,
  city: 'Київ',
  email: 'example@example.com',
  possibilities: 'тільки в Києві',
  opportunity:
    'Допомога ветеранам та військовим. Підтримка людей похилого віку. Мистецтво. Культура. Молодь та діти. Спорт.',
  desiredRole: 'Художник, дизайнер, актор',
  interestingProject: 'Ініціативи, Діючі',
  coopTerms: 'Безкоштовно',
  urlInsta: '',
  urlYouTube: '',
  urlF: '',
  urlTg: ''
}

export interface IProjectData {
  id: string
  title: string
  titleUrl: string
  timeFrom?: string
  timeTo?: string
  description: string
  org: string
  orgUrl: string
  likes: string
  city?: string
  keys?: { [key: string]: string }[]
}

export const projectData: IProjectData[] = [
  {
    id: '1',
    title: 'Найкращий проєкт',
    titleUrl: 'sdasd',
    timeFrom: '28.11.2023',
    timeTo: '01.09.2024',
    description:
      'На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123',
    city: 'Київ'
  },
  {
    id: '2',
    title: 'Найкращий проєкт',
    titleUrl: 'dwrqwe',
    timeFrom: '28.11.2023',
    timeTo: '01.09.2024',
    description:
      'На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123',
    city: 'Київ'
  }
]
