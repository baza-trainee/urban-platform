export interface IDataDefault {
  [key: string]: string
}
export interface IDataFromServer {
  [key: string]: string
}

export const dataDefault = {
  btnTitle: 'Заповнити форму',
  editBtnTitle: 'Редагувати',
  grantor: 'Грантодавець:',
  city: 'Місто:',
  category: 'Категорія:',
  validity: 'Термін дії гранту:',
  participationType: 'Тип участі:',
  opportunityType: 'Тип можливості:'
}

export const dataFromServer: IDataFromServer = {
  title: 'Найкращий грант',
  grantDescription:
    'Lorem ipsum dolor sit amet consectetur. Fames consectetur non imperdiet consequat odio ut. Egestas mollis massa consectetur hendrerit ac eget. Nunc eget enim eget tincidunt in amet. Tortor vitae mattis tellus felis purus. Augue quam proin proin nullam duis ac sed nam. Venenatis tellus elit praesent eu nunc id. Pellentesque nulla donec dolor in cursus id id eleifend augue. Elit tellus risus non scelerisque at at. Id vitae vulputate enim non facilisi mauris varius neque. Lorem ipsum dolor sit amet consectetur. Fames consectetur non imperdiet consequat odio ut. Egestas mollis massa consectetur hendrerit ac eget. Nunc eget enim eget tincidunt in amet. Tortor vitae mattis tellus felis purus. Augue quam proin proin nullam duis ac sed nam. Venenatis tellus elit praesent eu nunc id. Pellentesque nulla donec dolor in cursus id id eleifend augue. Elit tellus risus non scelerisque at at. Id vitae vulputate enim non facilisi mauris varius neque.',
  grantor: 'ГО “Спільні кроки”',
  grantorImg: 'link',
  city: 'Київ',
  category: 'Освіта',
  validity: '28.11.2023 - 01.09.2024',
  participationType: 'Персональний',
  opportunityType: 'Стипендія'
}
