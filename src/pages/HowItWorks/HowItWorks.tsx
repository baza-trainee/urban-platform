import React, { useState } from 'react'
import BlockList from './components/BlockList'
import { whoIsItFor, blocks1, blocks2 } from './howItWorkData'
import s from './HowItWorks.module.scss'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/howItWorks/arrow.svg'

const HowItWorks: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('button1')

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId)
  }

  const blocks = selectedButton === 'button1' ? blocks1 : blocks2

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.title}>Як це працює?</h1>
        <div className={s.wrapper}>
          <div className={s.buttonBlock}>
            <button
              className={`${s.button} ${selectedButton === 'button1' ? s.buttonActive : ''}`}
              id="button1"
              onClick={() => handleButtonClick('button1')}
            >
              <h4>
                Хочу створити проект <br /> та знайти партнерів для реалізації
              </h4>
            </button>
            <button
              className={`${s.button} ${selectedButton === 'button2' ? s.buttonActive : ''}`}
              id="button2"
              onClick={() => handleButtonClick('button2')}
            >
              Хочу приєднатися до існуючого проекту
            </button>
          </div>
          <BlockList blocks={blocks} />
        </div>
        <p className={s.text}>
          На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний
          проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.
        </p>
        <p className={s.text}>
          На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний
          проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.
        </p>
        <h3 className={s.subtitle}>Для кого це?</h3>
        <div className={s.inner}>
          {whoIsItFor.map((item) => (
            <div key={item.id} className={s.inner__block}>
              <div className={s.inner__content}>
                <h5 className={s.inner__title}>{item.title}</h5>
                <p className={s.inner__text}>{item.text}</p>
              </div>
              <Link className={s.inner__link} to={item.link || '/'}>
                Долучитися
                <img className={s.inner__linkArrow} src={arrow} alt="Arrow" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
