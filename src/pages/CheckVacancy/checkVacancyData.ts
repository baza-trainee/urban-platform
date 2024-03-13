export interface IDataDefault {
  [key: string]: string
}
export interface IDataFromServer {
  [key: string]: string
}

export const dataDefault = {
  btnTitle: 'Подати заявку',
  editBtnTitle: 'Редагувати',
  employer: 'Наймач:',
  experience: 'Досвід:',
  workFormat: 'Формат роботи:',
  employment: 'Зайнятість:',
  сategory: 'Категорія:',
  institution: 'Тип установи:',
  salary: 'Зарплата:',
  valid: 'Актуально до:'
}

export const dataFromServer: IDataFromServer = {
  title: 'Веб дизайнер',
  vacancyDescription:
    'Lorem ipsum dolor sit amet consectetur. Fames consectetur non imperdiet consequat odio ut. Egestas mollis massa consectetur hendrerit ac eget. Nunc eget enim eget tincidunt in amet. Tortor vitae mattis tellus felis purus. Augue quam proin proin nullam duis ac sed nam. Venenatis tellus elit praesent eu nunc id. Pellentesque nulla donec dolor in cursus id id eleifend augue. Elit tellus risus non scelerisque at at. Id vitae vulputate enim non facilisi mauris varius neque.Lorem ipsum dolor sit amet consectetur. Fames consectetur non imperdiet consequat odio ut. Egestas mollis massa consectetur hendrerit ac eget. Nunc eget enim eget tincidunt in amet. Tortor vitae mattis tellus felis purus. Augue quam proin proin nullam duis ac sed nam. Venenatis tellus elit praesent eu nunc id. Pellentesque nulla donec dolor in cursus id id eleifend augue. Elit tellus risus non scelerisque at at. Id vitae vulputate enim non facilisi mauris varius neque.',
  employer: 'ГО “Спільні кроки”',
  experience: 'до 6 місяців',
  workFormat: 'Віддалено',
  employment: 'Часткова',
  сategory: 'Освіта',
  institution: 'Урядова',
  salary: 'Не вказано',
  valid: '01.09.2024'
}
