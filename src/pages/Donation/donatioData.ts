export interface IDonationData {
  submitTitle: string
  submitText: string
  mediaTitle: string
  thanksText: string
  title: string
  choiceBtnLeft: string
  choiceBtnRight: string
  inputTitle: string
  button: string
  selectList: string[]
}

export const donationData: IDonationData = {
  submitTitle: 'Дякуємо за ваш внесок у спільну справу!',
  submitText:
    '<p>Ваша щедрість стала кроком до реалізації громадських ініціатив та надання підтримки тим, хто її потребує.</p> </br> <p>Будь ласка, слідкуйте за нашими новинами та проєктами, бо разом ми змінюємо оточуючий світ на краще!</p>',
  mediaTitle: 'Ми в соцмережах:',
  thanksText: 'Ще раз вам дякуємо за вашу підтримку!',
  title: 'Оберіть або введіть суму',
  choiceBtnLeft: 'Одноразово',
  choiceBtnRight: 'Щомісячно',
  inputTitle: 'Введіть суму',
  button: 'Підтримати проєкт',
  selectList: ['50 грн', '100 грн', '500 грн', '1000 грн']
}
