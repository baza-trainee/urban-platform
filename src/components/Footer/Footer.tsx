import React from 'react'
// import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import logoImgFrooter from '../../../src/components/Footer/img/logo.png'
import socilalImgFrooter1 from '../../../src/components/Footer/img/facebook.png'
import socilalImgFrooter2 from '../../../src/components/Footer/img/linkedln.png'
import s from './Footer.module.scss'
import routs from '../../routes/NavLinks'

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__body}>
          <div className={s.footer__logo}>
            <img src={logoImgFrooter} alt="logo" />
          </div>
          <div className={s.footer__column}>
            <div className={s.footer__menu}>
              <ul className={s.footer__list}>
                <li>
                  <a href="" className={s.footer__link}>
                    Про нас
                  </a>
                </li>
                <li>
                  <a href="" className={s.footer__link}>
                    Проєкти
                  </a>
                </li>
                <li>
                  <a href="" className={s.footer__link}>
                    Учасники
                  </a>
                </li>
                <li>
                  <a href="" className={s.footer__link}>
                    Гранти
                  </a>
                </li>
                <li>
                  <a href="" className={s.footer__link}>
                    ГО
                  </a>
                </li>
                <li>
                  <a href="" className={s.footer__link}>
                    Вакансії у громадському секторі
                  </a>
                </li>
                <li>
                  <a href="" className={s.footer__link}>
                    Контакти
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.footer__column}>
            <div className={s.footer__item}>
              <div className={s.footer__items}>
                <div className={s.footer__link}>
                  <a href="" target="_blank">
                    Політика конфіденційності
                  </a>
                </div>
                <div className={s.footer__link}>
                  <a href="" target="_blank">
                    Правила користування сайтом
                  </a>
                </div>
              </div>
              <div className={s.footer__social}>
                <h3 className={s.footer__title}>Ми в соцмережа:</h3>
                <div className={s.footer__socialLink}>
                  <Link to="/">
                    <img src={socilalImgFrooter1} alt="socilalImgFrooter1" />
                  </Link>
                  <Link to="/">
                    <img src={socilalImgFrooter2} alt="socilalImgFrooter2" />
                  </Link>
                </div>
              </div>
              <div className={s.footer__button}>
                <Link to={routs.donation} className={s.footer__btn}>
                  Підтримати проєкт
                </Link>
              </div>
              <div className={s.footer__contact}>
                <div className={s.footer__phoneContact}>
                  <span>+38 096 016 59 07</span>
                </div>
                <div className={s.footer__emailContacts}>
                  <span>active.people.city@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer__copy}>
          Розробка <a href="https://baza-trainee.tech/ua">Baza Trainee Ukraine </a> © Усі права
          захищені
        </div>
      </div>
    </footer>
  )
}

export default Footer
