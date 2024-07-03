import * as yup from 'yup'
import { Block } from './orgProfEditData'

export const dVoluntProfEditData = {
  addPhoto: 'Додати фото',
  aboutTitle: 'Про себе',
  reqTitle: 'Проєкти, у які Вас запросили',
  btnCnc: 'Відмінити',
  btnSave: 'Зберегти зміни',
  btnShowMore: 'Показати більше проєктів'
}

export const sVoluntProfEditData = {
  firstName: 'Олена',
  lastName: 'Волонтер',
  fCity: 'Київ',
  fEmail: 'example@example.com',
  fPhone: '+380990000000',
  fcPhone: true,
  fcsOpportunities: [],
  direction: '',
  roles: '',
  fcsProjects: [],
  fcsTerms: [],
  fInstagram: '@olenavolonteer',
  fYouTube: 'https://www.youtube.com/olenavolonteer',
  fFacebook: 'https://www.facebook.com/olenavolonteer',
  fTelegram: 'https://t.me/olenavolonteer',
  fLinkedIn: 'https://www.linkedin.com/in/olenavolonteer',
  area: ''
}

export const forMapV: Block[] = [
  {
    blockTypes: 'input',
    title: 'Місто:',
    name: 'city',
    inputClass: 'input-block__input',
    placeholder: 'Укажіть місто'
  },
  {
    blockTypes: 'input',
    title: 'Електронна пошта:',
    name: 'email',
    inputClass: 'input-block__input',
    placeholder: 'example@example.com'
  },
  {
    blockTypes: 'input&checkbox',
    title: 'Номер телефону:',
    name: 'phone',
    mask: '+380(99)999-99-99',
    checkName: 'checkbox',
    inputClass: 'input-block__input align-start',
    placeholder: '+380990000000',
    text: 'показувати контактний номер на сторінці'
  },
  {
    blockTypes: 'password',
    title: 'Пароль:',
    name: 'password',
    inputClass: 'input-block__input',
    placeholder: ''
  },
  {
    blockTypes: 'checkbox',
    title: 'Розглядаю можливості:',
    name: 'opportunityLocation',
    inputClass: 'input-block__radio-container',
    radioList: ['тільки онлайн', 'тільки в Києві', 'по всій Україні']
  },
  {
    blockTypes: 'popup',
    title: 'Цікавлять напрями:',
    name: 'directions',
    placeholder: 'Усі напрями/оберіть напрям'
  },
  {
    blockTypes: 'popup',
    title: 'Бажана роль у проєктах:',
    name: 'desirableRole',
    placeholder: 'Усі ролі/оберіть ролі'
  },
  {
    blockTypes: 'checkbox',
    title: 'Які проєкти Вас цікавлять?',
    name: 'interestedProgects',
    inputClass: 'input-block__radio-container',
    radioList: ['Ініціативи', 'Діючі']
  },
  {
    blockTypes: 'checkbox',
    title: 'Умови співпраці',
    name: 'termsCoop',
    inputClass: 'input-block__radio-container',
    radioList: ['Безкоштовно', 'З оплатою']
  },
  {
    blockTypes: 'input',
    title: 'Додайте свій інстаграм',
    name: 'instagram',
    inputClass: 'input-block__input',
    placeholder: '@olenavolonteer'
  },
  {
    blockTypes: 'input',
    title: 'Додайте посилання на свій ютуб канал',
    name: 'youTube',
    inputClass: 'input-block__input',
    placeholder: 'https://www.youtube.com/olenavolonteer'
  },
  {
    blockTypes: 'input',
    title: 'Додайте посилання на свій фейсбук',
    name: 'facebook',
    inputClass: 'input-block__input',
    placeholder: 'https://www.facebook.com/olenavolonteer'
  },
  {
    blockTypes: 'input',
    title: 'Додайте посилання на свій телеграм канал',
    name: 'telegram',
    inputClass: 'input-block__input',
    placeholder: 'https://t.me/olenavolonteer'
  },
  {
    blockTypes: 'input',
    title: 'Додайте посилання на свій лінкедин',
    name: 'linkedIn',
    inputClass: 'input-block__input',
    placeholder: 'www.linkedin.com/in/olenavolonteer'
  },
  {
    blockTypes: 'area',
    name: 'area',
    inputClass: 'input-block__input input-block__input_area',
    placeholder: ''
  }
]

export type FormValues = {
  city: string
  email: string
  phone: string
  phoneCheckbox: boolean
  password: string
  opportunityLocation: string[]
  directions: string
  roles: string
  interestedProgects: string[]
  termsCoop: string[]
  instagram: string
  youTube: string
  facebook: string
  telegram: string
  linkedIn: string
  area: string
}

export const initialValues = {
  city: sVoluntProfEditData.fCity,
  email: sVoluntProfEditData.fEmail,
  phone: sVoluntProfEditData.fPhone,
  phoneCheckbox: sVoluntProfEditData.fcPhone,
  password: '',
  opportunityLocation: sVoluntProfEditData.fcsOpportunities,
  directions: sVoluntProfEditData.direction,
  roles: sVoluntProfEditData.roles,
  interestedProgects: sVoluntProfEditData.fcsProjects,
  termsCoop: sVoluntProfEditData.fcsTerms,
  instagram: sVoluntProfEditData.fInstagram,
  youTube: sVoluntProfEditData.fYouTube,
  facebook: sVoluntProfEditData.fFacebook,
  telegram: sVoluntProfEditData.fTelegram,
  linkedIn: sVoluntProfEditData.fLinkedIn,
  area: sVoluntProfEditData.area
}

const phoneRegExp = /^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/
const instagramRegExp = /^@[a-zA-Z0-9._]{1,30}$/
const youTubeRegExp = /^https:\/\/www\.youtube\.com\/[a-zA-Z0-9._-]+$/
const facebookRegExp = /^https:\/\/www\.facebook\.com\/[a-zA-Z0-9._-]+$/
const telegramRegExp = /^https:\/\/t\.me\/[a-zA-Z0-9._-]+$/
const linkedInRegExp = /^https:\/\/?www\.linkedin\.com\/in\/[a-zA-Z0-9._-]+$/
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,64}$/
const emailRules = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/

export const grantFormSchema = yup.object().shape({
  city: yup.string().required('Обов`язкове поле'),
  email: yup
    .string()
    .max(50, 'Максимальна кількість символів 50')
    .email('Введіть коректну e-mail адресу')
    .required('Обов`язкове поле')
    .matches(emailRules, {
      message: 'Введіть коректну e-mail адресу'
    }),
  phone: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(phoneRegExp, 'Введіть коректний номер телефону'),
  password: yup
    .string()
    .nullable()
    .label('Введіть коректний пароль')
    .min(8, 'Мінімальна кількість символів 8')
    .max(64, 'Максимальна кількість символів 64')
    .matches(passwordRules, {
      message: 'Введіть коректний пароль'
    }),
  opportunityLocation: yup
    .array()
    .of(yup.string().required('Обов`язкове поле'))
    .required()
    .min(1, 'Обов`язкове поле'),
  interestedProgects: yup
    .array()
    .of(yup.string().required('Обов`язкове поле'))
    .required()
    .min(1, 'Обов`язкове поле'),
  termsCoop: yup
    .array()
    .of(yup.string().required('Обов`язкове поле'))
    .required()
    .min(1, 'Обов`язкове поле'),
  instagram: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(instagramRegExp, 'Введіть коректне посилання'),
  youTube: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(youTubeRegExp, 'Введіть коректне посилання'),
  facebook: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(facebookRegExp, 'Введіть коректне посилання'),
  telegram: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(telegramRegExp, 'Введіть коректне посилання'),
  linkedIn: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(linkedInRegExp, 'Введіть коректне посилання'),
  area: yup.string().required('Обов`язкове поле').label('Обов`язкове поле')
})
