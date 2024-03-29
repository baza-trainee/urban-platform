import * as yup from 'yup'

export interface ICGrantData {
  title: string
  nameTitleInput: string
  nameInput: string
  descriptionTitleInput: string
  descriptionInput: string
  locationTitleInput: string
  locationInput: string
  categoryTitleInput: string
  categoryInput: string
  timeTitleInput: string
  timeInputFrom: string
  timeTextFrom: string
  timeInputTo: string
  timeTextTo: string
  userTypeTitle: string
  userTypeList: [string]
  grantTypeTitle: string
  grantTypeList: [string]
  contactTitleInput: string
  contactInput: string
  contactCheckBocks: string
  urlTitleInput: string
  urlInput: string
  btnSaveDraft: string
  btnPublish: string
  select: string[]
}

export const cGrantData = {
  title: 'Створити грант',
  editTitle: 'Редагувати грант',
  nameTitleInput: 'Назва можливості',
  nameInput: 'Грант для студентів',
  descriptionTitleInput: 'Коротко опишіть можливість',
  descriptionInput: 'Запрошуємо всіх приєднатися до толоки.',
  locationTitleInput: 'Локація',
  locationInput: 'Місто',
  categoryTitleInput: 'Оберіть категорію',
  categoryInput: 'Екологія',
  timeTitleInput: 'Термін дії пропозиції',
  timeInputFrom: '12.12.2023',
  timeTextFrom: 'З',
  timeInputTo: '11.11.2024',
  timeTextTo: 'До',
  userTypeTitle: 'Тип участі',
  userTypeList: [
    'персональний',
    'для громадських організацій',
    'для органів самоврядування',
    'для бізнесу'
  ],
  grantTypeTitle: 'Тип можливості',
  grantTypeList: [
    'грант',
    'навчальна подорож',
    'програма',
    'стипендія',
    'тренінг',
    'програма обміну',
    'воркшоп',
    'інше (вказати)'
  ],
  contactTitleInput: 'Контакти:',
  contactInput: '+380(12)345-67-89',
  contactCheckBocks: 'показувати контактний номер на сторінці',
  urlTitleInput: 'Посилання на аплікаційну форму:',
  urlInput: 'Посилання на форму',
  btnSaveDraft: 'Зберегти чернетку',
  btnCancelEdit: 'Відмінити',
  btnPublish: 'Опублікувати можливість',
  btnSaveEdit: 'Зберегти зміни',
  select: [
    'Підтримка тварин та захист тваринництва',
    'Мистецтво',
    'Будівництво, відновлення житла',
    'Культура',
    'Екологія',
    'Освіта',
    'Підтримка людей похилого віку',
    'Розвиток підприємництва',
    'Розваги та відпочинок',
    'Охорона здоров`я та надання соціальної допомоги',
    'Харчування, боротьба з голодом',
    'Інклюзія',
    'Інфраструктура та розвиток громадських просторів',
    'Міжнародна співпраця',
    'IT',
    'Юридична підтримка',
    'Розвиток місцевих громад',
    'Місцеве самоврядування',
    'Медіа та інформаційна грамотність',
    'Виробництво',
    'Психологічна підтримка',
    'Науково-технічна діяльність',
    'Спорт',
    'Торгівля',
    'Транспортування, поштова та кур`єрська діяльність',
    'Допомога ветеранам та військовим',
    'Молодь та діти'
  ]
}

export const forMap = [
  {
    blockTypes: 'input',
    title: cGrantData.nameTitleInput,
    name: 'opportunity',
    inputClass: 'input-block__input',
    placeholder: cGrantData.nameInput
  },
  {
    blockTypes: 'area',
    title: cGrantData.descriptionTitleInput,
    name: 'area',
    inputClass: 'input-block__input input-block__input_area',
    placeholder: cGrantData.descriptionInput
  },
  {
    blockTypes: 'input',
    title: cGrantData.locationTitleInput,
    name: 'city',
    inputClass: 'input-block__input',
    placeholder: cGrantData.locationInput
  },
  {
    blockTypes: 'select',
    title: cGrantData.categoryTitleInput,
    name: 'category',
    inputClass: 'complate',
    radioList: cGrantData.select
  },
  {
    blockTypes: 'radio',
    title: cGrantData.userTypeTitle,
    name: 'user',
    inputClass: 'input-block__radio-container',
    radioList: cGrantData.userTypeList
  },
  {
    blockTypes: 'radio',
    title: cGrantData.grantTypeTitle,
    name: 'grantType',
    inputClass: 'input-block__radio-container',
    radioList: cGrantData.grantTypeList
  },
  {
    blockTypes: 'input&checkbox',
    title: cGrantData.contactTitleInput,
    name: 'phone',
    mask: '+380(99)999-99-99',
    checkName: 'checkbox',
    inputClass: 'input-block__input input-block__input_contact align-start',
    placeholder: cGrantData.contactInput,
    text: cGrantData.contactCheckBocks
  },
  {
    blockTypes: 'input',
    title: cGrantData.urlTitleInput,
    name: 'url',
    inputClass: 'input-block__input',
    placeholder: cGrantData.urlInput
  }
]

export type FormValues = {
  url: string
  phone: string
  user: string
  grantType: string
  grantTypeText: string
  checkbox: boolean
  city: string
  opportunity: string
  area: string
  timeFrom: string
  timeTo: string
  category: string
}

export const initialValues: FormValues = {
  url: '',
  user: '',
  grantType: '',
  grantTypeText: '',
  phone: '',
  checkbox: false,
  city: '',
  opportunity: '',
  area: '',
  timeFrom: '',
  timeTo: '',
  category: ''
}

const phoneRegExp = /^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/
const urlRegExp = /\bhttps?:\/\/\S+\b/
const dateRegExp =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export const grantFormSchema = yup.object().shape({
  opportunity: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  area: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  city: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  user: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  grantType: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  grantTypeText: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  category: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .oneOf(cGrantData.select, 'Виберіть варіант зі списку'),
  phone: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(phoneRegExp, 'Введіть коректний номер телефону'),
  url: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(urlRegExp, 'Введіть коректне посилання'),
  timeFrom: yup.string().required('Обов`язкове поле').matches(dateRegExp, 'Введіть коректну дату'),
  timeTo: yup.string().required('Обов`язкове поле').matches(dateRegExp, 'Введіть коректну дату')
})
