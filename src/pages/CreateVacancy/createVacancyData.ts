import * as yup from 'yup'

export interface ICVacancyData {
  title: string
  titleEdit: string
  vacancyNameTitle: string
  vacancyNamePh: string
  experienceTitle: string
  experienceArr: [string]
  workFormatTitle: string
  workFormatArr: [string]
  locationTitle: string
  locationPh: string
  employmentFormatTitle: string
  employmentFormatArr: [string]
  salary: string
  salaryPh: string
  salaryCheckboxText: string
  categoryTitle: string
  categoryArr: [string]
  institutionTypeTitle: string
  institutionTypeArr: [string]
  vacancyDescriptionTitle: string
  vacancyDescriptionPh: [string]
  validTitle: string
  validPh: string
  contactTitle: string
  contactPh: string
  contactCheckboxText: string
  btnSave: string
  btnPublish: string
  btnCancel: string
  btnSaveChange: string
}

export const cVacancyData = {
  title: 'Створити вакансію',
  titleEdit: 'Редагувати вакансію',
  vacancyNameTitle: 'Назва вакансії',
  vacancyNamePh: 'Веб-дизайнер',
  experienceTitle: 'Досвід фахівця',
  experienceArr: ['без досвіду', 'до 6 місяців', 'до 1 року', 'більше 1 року'],
  workFormatTitle: 'Формат роботи',
  workFormatArr: ['онлайн', 'офлайн', 'гібридний'],
  locationTitle: 'Локація',
  locationPh: 'Місто',
  employmentFormatTitle: 'Формат зайнятості',
  employmentFormatArr: ['повна', 'часткова', 'стажування'],
  salaryTitle: 'Зарплата',
  salaryPh: '10000 грн',
  salaryCheckboxText: 'Не вказувати',
  categoryTitle: 'Оберіть категорію',
  categoryArr: [
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
  ],
  institutionTypeTitle: 'Тип установи',
  institutionTypeArr: ['урядова', 'неурядова', 'комерційна'],
  vacancyDescriptionTitle: 'Коротко опишіть вакансію',
  vacancyDescriptionPh: 'Запрошуємо всіх приєднатися до толоки.',
  validTitle: 'Актуально до:',
  validPh: '11.11.2024',
  contactTitle: 'Контакти:',
  contactPh: '+380631234567',
  contactCheckboxText: 'показувати контактний номер на сторінці',
  btnSave: 'Зберегти чернетку',
  btnPublish: 'Опублікувати можливість',
  btnCancel: 'Відмінити',
  btnSaveChange: 'Зберегти зміни'
}

export const forMap = [
  {
    blockTypes: 'input',
    title: cVacancyData.vacancyNameTitle,
    name: 'vacancy',
    inputClass: 'input-block__input',
    placeholder: cVacancyData.vacancyNamePh
  },
  {
    blockTypes: 'radio',
    title: cVacancyData.experienceTitle,
    name: 'experience',
    inputClass: 'input-block__radio-container',
    radioList: cVacancyData.experienceArr
  },
  {
    blockTypes: 'radio',
    title: cVacancyData.workFormatTitle,
    name: 'workFormat',
    inputClass: 'input-block__radio-container',
    radioList: cVacancyData.workFormatArr
  },
  {
    blockTypes: 'input',
    title: cVacancyData.locationTitle,
    name: 'location',
    inputClass: 'input-block__input',
    placeholder: cVacancyData.locationPh
  },
  {
    blockTypes: 'radio',
    title: cVacancyData.employmentFormatTitle,
    name: 'employmentFormat',
    inputClass: 'input-block__radio-container',
    radioList: cVacancyData.employmentFormatArr
  },
  {
    blockTypes: 'input&checkbox',
    title: cVacancyData.salaryTitle,
    name: 'salary',
    checkName: 'salaryCheckbox',
    inputClass: 'input-block__input input-block__input_contact align-start',
    placeholder: cVacancyData.salaryPh,
    text: cVacancyData.salaryCheckboxText
  },
  {
    blockTypes: 'select',
    title: cVacancyData.categoryTitle,
    name: 'category',
    inputClass: 'complate',
    radioList: cVacancyData.categoryArr
  },
  {
    blockTypes: 'radio',
    title: cVacancyData.institutionTypeTitle,
    name: 'institutionType',
    inputClass: 'input-block__radio-container',
    radioList: cVacancyData.institutionTypeArr
  },
  {
    blockTypes: 'area',
    title: cVacancyData.vacancyDescriptionTitle,
    name: 'vacancyDescription',
    inputClass: 'input-block__input input-block__input_area',
    placeholder: cVacancyData.vacancyDescriptionPh
  },
  {
    blockTypes: 'input&checkbox',
    title: cVacancyData.contactTitle,
    name: 'phone',
    mask: '+380(99)999-99-99',
    checkName: 'phoneCheckbox',
    inputClass: 'input-block__input input-block__input_contact align-start',
    placeholder: cVacancyData.contactPh,
    text: cVacancyData.contactCheckboxText
  }
]

export type FormValues = {
  vacancy: string
  experience: string
  workFormat: string
  location: string
  employmentFormat: string
  salary: string
  salaryCheckbox: boolean
  category: string
  institutionType: string
  vacancyDescription: string
  phone: string
  phoneCheckbox: boolean
  validTime: string
}

export const initialValues: FormValues = {
  vacancy: '',
  experience: '',
  workFormat: '',
  location: '',
  employmentFormat: '',
  salary: '',
  salaryCheckbox: false,
  category: '',
  institutionType: '',
  vacancyDescription: '',
  phone: '',
  phoneCheckbox: false,
  validTime: ''
}

const phoneRegExp = /^\+380\(\d{2}\)\d{3}-\d{2}-\d{2}$/
const sallaryRegExp = /^\d{1,3}(?: \d{3})*(?:,\d{2})?(?: грн\.?)?$/
const dateRegExp =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export const vacancyFormSchema = yup.object().shape({
  vacancy: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  experience: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  workFormat: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  location: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  employmentFormat: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  salary: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(sallaryRegExp, 'Введіть коректну суму'),
  category: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .oneOf(cVacancyData.categoryArr, 'Виберіть варіант зі списку'),
  institutionType: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  vacancyDescription: yup.string().required('Обов`язкове поле').label('Обов`язкове поле'),
  phone: yup
    .string()
    .required('Обов`язкове поле')
    .label('Обов`язкове поле')
    .matches(phoneRegExp, 'Введіть коректний номер телефону'),
  validTime: yup.string().required('Обов`язкове поле').matches(dateRegExp, 'Введіть коректну дату')
})
