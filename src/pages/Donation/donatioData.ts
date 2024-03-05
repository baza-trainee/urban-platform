export interface IDonationData {
  title: string
  choiceBtnLeft: string
  choiceBtnRight: string
  inputTitle: string
  button: string
  selectList: string[]
}

export const donationData: IDonationData = {
  title: 'Оберіть або введіть суму',
  choiceBtnLeft: 'Одноразово',
  choiceBtnRight: 'Щомісячно',
  inputTitle: 'Введіть суму',
  button: 'Підтримати проєкт',
  selectList: ['50 грн', '100 грн', '500 грн', '1000 грн']
}
