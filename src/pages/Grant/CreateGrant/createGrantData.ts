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
  contactInput: '+380631234567',
  contactCheckBocks: 'показувати контактний номер на сторінці',
  urlTitleInput: 'Посилання на аплікаційну форму:',
  urlInput: 'Посилання на форму',
  btnSaveDraft: 'Зберегти чернетку',
  btnCancelEdit: 'Відмінити',
  btnPublish: 'Опублікувати можливість',
  btnSaveEdit: 'Зберегти зміни'
}
