export interface IDOrgData {
  btnTitle: string
  defaultInfo: string
  myProject: string
  checkboxTitle: string
  participationInProject: string
  myVacancy: string
  myGrants: string
  aboutTitle: string
  reqProjects: string
  btnDrafts: string
  btnReqInProject: string
  btnCreateVacancy: string
  btnCreateGrant: string
  btnCreateProject?: string
}

export const dOrgData = {
  btnTitle: 'Редагувати',
  defaultInfo: 'Основна інформація',
  myProject: 'Наші проєкти',
  checkboxTitle: 'показувати контактний номер на сторінці',
  participationInProject: 'Наші проєкти',
  myVacancy: 'Наші вакансії',
  myGrants: 'Наші гранти',
  aboutTitle: 'Про організацію',
  reqProjects: 'Проєкти, у які Вас запросили',
  btnDrafts: 'Чернетки',
  btnReqInProject: 'Запрошення до проєктів',
  btnCreateVacancy: 'Створити вакансію',
  btnCreateGrant: 'Створити грант',
  btnCreateProject: 'Створити проєкт',
  btnCheck: 'Переглянути',
  btnJoin: 'Приєднатись',
  invitedMsgNon: 'На даний момент у Вас немає запрошень до проєктів.',
  pMsgBtnL: 'На даний момент у Вас немає створених проєктів. Бажаєте створити?',
  pMsgBtnLM: 'На даний момент у Вас немає створених проєктів. Бажаєте створити?',
  pMsgBtnC: 'На даний момент у Вас немає створених проєктів. Бажаєте створити?',
  pMsgBtnRM: 'На даний момент немає запрошень до проєктів.',
  pMsgBtnR: 'На даний момент у Вас немає збережених чернеток. Бажаєте створити новий проєкт?',
  vMsgBtnL: 'На даний момент у Вас немає створених вакансій. Бажаєте створити?',
  vMsgBtnR: 'На даний момент у Вас немає збережених чернеток. Бажаєте створити нову вакансію?',
  gMsgBtnL: 'На даний момент у Вас немає створених грантів. Бажаєте створити?',
  gMsgBtnR: 'На даний момент у Вас немає збережених чернеток. Бажаєте створити новий грант?'
}

export const mapOrgProfData: { [key: string]: string } = {
  city: 'Місто:',
  email: 'Електронна пошта:',
  phone: 'Номер телефону:',
  opportunity: 'Цікавлять напрями:',
  contact: 'Контактна особа'
}

export const sOrgData: { [key: string]: string } = {
  userImg: '',
  orgTitle: 'ГО “Спільні кроки”',
  phone: '+380990000000',
  userDescription: `
Громадська організація "Спільні кроки" є активним учасником соціального розвитку в Львові. Організація заснована Олександром Івановим, який вирішив об'єднати зусилля громади для вирішення соціальних питань. Реєструючись на платформі "Місто активних людей",  ГО "Спільні кроки" прагне знаходити волонтерів для реалізації своїх проєктів, спрямованих на волонтерство для вразливих категорій населення та освіту.
Коротка біографія:

ГО "Спільні кроки" заснована в 2010 році в Львові, має багаторічний досвід у роботі з волонтерами та соціальними проєктами.
`,
  city: 'Київ',
  email: 'example@example.com',
  opportunity:
    'Допомога ветеранам та військовим. Підтримка людей похилого віку. Мистецтво. Культура. Молодь та діти. Спорт.',
  contact: 'Олександр',
  urlInsta: '',
  urlYouTube: '',
  urlF: '',
  urlTg: '',
  urlWebSite: ''
}
