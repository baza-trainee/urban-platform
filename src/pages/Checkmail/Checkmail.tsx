import React from 'react'
// import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import smartLockImg from '../../../src/pages/Checkmail/img/smart-lock.png'
import s from './Checkmail.module.scss'

const Сheckmail: React.FC = () => {

  return (
    <section className={s.checkmail}>
      <div className={s.checkmail__container}>
        <div className={s.checkmail__body}>
          <div className={s.checkmail__images}>
            <img src={smartLockImg} alt="smartLockImg" />
          </div>
          <h3 className={s.checkmail__title}>Перевірте свою пошту</h3>
          <div className={s.checkmail__text}>
            <p>Ми надіслали Вам лист з інформацією про відновлення паролю
              на пошту example@example.com</p>
            <p className={s.checkmail__spam}>Не отримали лист?
              Перевірте папку “Спам” або натисніть:</p>
          </div>
          <div className={s.checkmail__button}>
              <Link className={s.checkmail__link} to="/">
                Надіслати ще раз
              </Link>
              <Link className={s.checkmail__link} to="/">
                Повернутись до входу
              </Link>
          </div>
        </div>
      </div>
    </section>

  )

}



export default Сheckmail