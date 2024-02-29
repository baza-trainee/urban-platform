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
}

export const blocks1: HowItWorksData[] = [
  {
    id: 1,
    imgSrc: first,
    title: 'Block 1 Title',
    text: 'Some text for block 1',
    link: '/path/to/link1'
  },
  {
    id: 2,
    imgSrc: second,
    title: 'Block 2 Title',
    text: 'Some text for block 2'
  },
  {
    id: 3,
    imgSrc: third,
    title: 'Block 3 Title',
    text: 'Some text for block 3'
  },
  {
    id: 4,
    imgSrc: fourth,
    title: 'Block 4 Title',
    text: 'Some text for block 4'
  },
  {
    id: 5,
    imgSrc: fifth,
    title: 'Block 5 Title',
    text: 'Some text for block 5'
  }
]

export const blocks2: HowItWorksData[] = [
  {
    id: 6,
    imgSrc: first,
    title: 'Block 6 Title',
    text: 'Some text for block 6'
  },
  {
    id: 7,
    imgSrc: second,
    title: 'Block 7 Title',
    text: 'Some text for block 7'
  },
  {
    id: 8,
    imgSrc: third,
    title: 'Block 8 Title',
    text: 'Some text for block 8'
  },
  {
    id: 9,
    imgSrc: fourth,
    title: 'Block 9 Title',
    text: 'Some text for block 9'
  },
  {
    id: 10,
    imgSrc: fifth,
    title: 'Block 10 Title',
    text: 'Some text for block 10'
  }
]

export const whoIsItFor: HowItWorksData[] = [
  {
    id: 1,
    title: 'Волонтери, фахівці',
    text: 'Для тих, хто хоче отримати свій перший робочий досвід в громадському секторі',
    link: '/'
  },
  {
    id: 2,
    title: 'Ініціатори проєктів',
    text: 'Для тих, хто має ідею важливого проєкту, але немає команди',
    link: '/'
  },
  {
    id: 3,
    title: 'Консультанти, інвестори',
    text: 'Для тих, хто хоче долучитись до цікавого проекту та принести користь',
    link: '/'
  }
]
