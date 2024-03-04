import first from '../../assets/images/howItWorks/1.svg'
import second from '../../assets/images/howItWorks/2.svg'
import third from '../../assets/images/howItWorks/3.svg'
import fourth from '../../assets/images/howItWorks/4.svg'
import fifth from '../../assets/images/howItWorks/5.svg'

interface HowItWorksData {
  id: number
  imgSrc?: string
  title: string
  text: string
  link?: string
  linkText?: string
}

export const blocks1: HowItWorksData[] = [
  {
    id: 1,
    imgSrc: first,
    title: 'Зареєструйся на платформі',
    text: 'Перейди на ',
    link: '/registration',
    linkText: 'сторінку реєстрації'
  },
  {
    id: 2,
    imgSrc: second,
    title: 'Маєш ідею, але немає команди?',
    text: 'Тоді тисни на ',
    link: '/createProject',
    linkText: '"Створити проект"'
  },
  {
    id: 3,
    imgSrc: third,
    title: 'Опиши свій проект',
    text: 'Вкажи необхідні дані та кого або що ти шукаєш'
  },
  {
    id: 4,
    imgSrc: fourth,
    title: 'Опублікуй проект',
    text: 'Натисни кнопку “Опублікувати”'
  },
  {
    id: 5,
    imgSrc: fifth,
    title: 'Вуаля !!!',
    text: 'Тепер до твого проекту можуть долучитись інші учасники'
  }
]

export const blocks2: HowItWorksData[] = [
  {
    id: 6,
    imgSrc: first,
    title: 'Зареєструйся на платформі',
    text: 'Перейди на ',
    link: '/registration',
    linkText: 'сторінку реєстрації'
  },
  {
    id: 7,
    imgSrc: second,
    title: 'Опиши про себе кілька слів',
    text: 'Вкажи галузь та рівень своєї експертності'
  },
  {
    id: 8,
    imgSrc: third,
    title: 'Визначся із проєктами',
    text: 'Вкажи напрями проектів, до яких ти хочеш долучитись'
  },
  {
    id: 9,
    imgSrc: fourth,
    title: 'Ким ти хочеш бути на проєкті?',
    text: 'Обери свою роль: ментор, фахівець, волонтер, партнер-співзасновни, інвестор'
  },
  {
    id: 10,
    imgSrc: fifth,
    title: 'Вуаля !!!',
    text: 'Тепер ти можеш написати автору проекту та почати працювати над ініціативою'
  }
]

export const whoIsItFor: HowItWorksData[] = [
  {
    id: 1,
    title: 'Волонтери, фахівці',
    text: 'Для тих, хто хоче отримати свій перший робочий досвід в громадському секторі',
    link: '/registration'
  },
  {
    id: 2,
    title: 'Ініціатори проєктів',
    text: 'Для тих, хто має ідею важливого проєкту, але немає команди',
    link: '/registration'
  },
  {
    id: 3,
    title: 'Консультанти, інвестори',
    text: 'Для тих, хто хоче долучитись до цікавого проекту та принести користь',
    link: '/registration'
  }
]
