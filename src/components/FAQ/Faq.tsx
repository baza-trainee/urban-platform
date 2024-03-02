import React, { useState } from 'react'
import s from './Faq.module.scss'

const Faq: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null)

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const data = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus amet eget mollis ',
      answer:
        'На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту. На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus amet eget mollis ',
      answer:
        'На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту. На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus amet eget mollis ',
      answer:
        'На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту. На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus amet eget mollis ',
      answer:
        'На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту. На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus amet eget mollis ',
      answer:
        'На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту. На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний проєкт.'
    }
  ]

  return (
    <section className={s.faq} id="faq">
      <h2 className={s.contentTitle}>Найчастіші запитання</h2>
      <div className={s.accordion}>
        {data.map((item, i) => (
          <div className={s.item}>
            <div className={s.title} onClick={() => toggle(i)}>
              <h4>{item.question}</h4>
              <span className={s.plus}>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={`${s.content} ${selected === i ? s.show : s.hide}`}>{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
