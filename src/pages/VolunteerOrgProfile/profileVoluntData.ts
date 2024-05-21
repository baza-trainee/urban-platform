import { IProjectData } from '../VolunteerOrgPage/volunteerData'

export const dVolunteerData = {
  btnTitle: 'Редагувати',
  defaultInfo: 'Основна інформація',
  myProject: 'Мої проєкти',
  checkboxTitle: 'показувати контактний номер на сторінці',
  participationInProject: 'Участь у проєктах',
  myVacancy: 'Мої вакансії',
  myGrants: 'Мої гранти',
  aboutTitle: 'Про себе',
  reqProjects: 'Проєкти, у які Вас запросили',
  btnDrafts: 'Чернетки',
  btnReqInProject: 'Запрошення до проєктів',
  btnCreateVacancy: 'Створити вакансію',
  btnCreateGrant: 'Створити грант',
  btnCreateProject: 'Створити проєкт',
  btnCheck: 'Переглянути',
  invitedMsgNon: 'На даний момент у Вас немає запрошень до проєктів.',
  btnJoin: 'Приєднатись',
  pMsgBtnL: 'На даний момент немає участі у проєктах.',
  pMsgBtnLM: 'На даний момент у Вас немає створених проєктів. Бажаєте створити?',
  pMsgBtnC: 'На даний момент у Вас немає створених проєктів. Бажаєте створити?',
  pMsgBtnRM: 'На даний момент немає запрошень до проєктів.',
  pMsgBtnR: 'На даний момент у Вас немає збережених чернеток. Бажаєте створити новий проєкт?',
  vMsgBtnL: 'На даний момент у Вас немає створених вакансій. Бажаєте створити?',
  vMsgBtnR: 'На даний момент у Вас немає збережених чернеток. Бажаєте створити нову вакансію?',
  gMsgBtnL: 'На даний момент у Вас немає створених грантів. Бажаєте створити?',
  gMsgBtnR: 'На даний момент у Вас немає збережених чернеток. Бажаєте створити новий грант?'
}

export const projectDataTest = []

export const mapVolunteerProfData: { [key: string]: string } = {
  city: 'Місто:',
  possibilities: 'Розглядаю можливості:',
  email: 'Електронна пошта:',
  phone: 'Номер телефону:',
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
  phone: '+380990000000',
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

export const vacancyData: IProjectData[] = [
  {
    id: '1',
    title: 'Веб дизайнер',
    titleUrl: 'sdasd',
    keys: [
      {
        experience: 'Досвід',
        fromat: 'Формат роботи',
        employ: 'Зайнятість',
        category: 'Категорія',
        salary: 'Зарплата',
        orgType: 'Тип установи'
      },
      {
        experience: 'Без досвіду',
        fromat: 'Віддалено',
        employ: 'Часткова',
        category: 'Розвиток соціального підприємництва',
        salary: 'Не вказано',
        orgType: 'Неурядова (громадська)'
      }
    ],
    description:
      'ГО “Спільні кроки у пошуках талановитого маркетолога, який ..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123'
  },
  {
    id: '6',
    title: 'Веб дизайнер',
    titleUrl: 'sdasdasdasd164',
    keys: [
      {
        experience: 'Досвід',
        fromat: 'Формат роботи',
        employ: 'Зайнятість',
        category: 'Категорія',
        salary: 'Зарплата',
        orgType: 'Тип установи'
      },
      {
        experience: 'Без досвіду',
        fromat: 'Віддалено',
        employ: 'Часткова',
        category: 'Розвиток соціального підприємництва',
        salary: 'Не вказано',
        orgType: 'Неурядова (громадська)'
      }
    ],
    description:
      'ГО “Спільні кроки у пошуках талановитого маркетолога, який ..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123'
  },
  {
    id: '8',
    title: 'Веб дизайнер',
    titleUrl: 'sdasdasdasd90',
    keys: [
      {
        experience: 'Досвід',
        fromat: 'Формат роботи',
        employ: 'Зайнятість',
        category: 'Категорія',
        salary: 'Зарплата',
        orgType: 'Тип установи'
      },
      {
        experience: 'Без досвіду',
        fromat: 'Віддалено',
        employ: 'Часткова',
        category: 'Розвиток соціального підприємництва',
        salary: 'Не вказано',
        orgType: 'Неурядова (громадська)'
      }
    ],
    description:
      'ГО “Спільні кроки у пошуках талановитого маркетолога, який ..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123'
  },
  {
    id: '96',
    title: 'Веб дизайнер',
    titleUrl: 'sdasdasdasd546',
    keys: [
      {
        experience: 'Досвід',
        fromat: 'Формат роботи',
        employ: 'Зайнятість',
        category: 'Категорія',
        salary: 'Зарплата',
        orgType: 'Тип установи'
      },
      {
        experience: 'Без досвіду',
        fromat: 'Віддалено',
        employ: 'Часткова',
        category: 'Розвиток соціального підприємництва',
        salary: 'Не вказано',
        orgType: 'Неурядова (громадська)'
      }
    ],
    description:
      'ГО “Спільні кроки у пошуках талановитого маркетолога, який ..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123'
  }
]

export const grantData: IProjectData[] = [
  {
    id: '1994',
    title: 'Найкращий грант',
    titleUrl: 'sdasddfxcv8',
    timeFrom: '28.11.2023',
    timeTo: '01.09.2024',
    keys: [
      {
        category: 'Категорія',
        participation: 'Тип участі',
        opportunity: 'Тип можливості'
      },
      {
        category: 'Освіта',
        participation: 'Персональний',
        opportunity: 'Стипендія'
      }
    ],
    description:
      'Цей грант надає можливість студентам ..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123'
  },
  {
    id: '96548',
    title: 'Найкращий грант',
    titleUrl: 'sdasdbnmbn7,',
    timeFrom: '28.11.2023',
    timeTo: '01.09.2024',
    keys: [
      {
        category: 'Категорія',
        participation: 'Тип участі',
        opportunity: 'Тип можливості'
      },
      {
        category: 'Освіта',
        participation: 'Персональний',
        opportunity: 'Стипендія'
      }
    ],
    description:
      'Цей грант надає можливість студентам ..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    org: 'ГО “Спільні кроки”',
    orgUrl: '',
    likes: '123'
  }
]
