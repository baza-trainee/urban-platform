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
                  <a href={routs.about} className={s.footer__link}>
                    Про нас
                  </a>
                </li>
                <li>
                  <a href={routs.projects} className={s.footer__link}>
                    Проєкти
                  </a>
                </li>
                <li>
                  <a href={routs.members} className={s.footer__link}>
                    Учасники
                  </a>
                </li>
                <li>
                  <a href={routs.grants} className={s.footer__link}>
                    Гранти
                  </a>
                </li>
                <li>
                  <a href={routs.organizations} className={s.footer__link}>
                    ГО
                  </a>
                </li>
                <li>
                  <a href={routs.vacancies} className={s.footer__link}>
                    Вакансії у громадському секторі
                  </a>
                </li>
                <li>
                  <a href={routs.contacts} className={s.footer__link}>
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
                  <a href={routs.privacyPolicy} target="_blank">
                    Політика конфіденційності
                  </a>
                </div>
                <div className={s.footer__link}>
                  <a href={routs.termsOfSite} target="_blank">
                    Правила користування сайтом
                  </a>
                </div>
              </div>
              <div className={s.footer__social}>
                <h3 className={s.footer__title}>Ми в соцмережа:</h3>
                <div className={s.footer__socialLink}>
                  <Link to={routs.facebook}>
                    <img src={socilalImgFrooter1} alt="socilalImgFrooter1" />
                  </Link>
                  <Link to={routs.linkedIn}>
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
                  <a href={routs.phone}>
                    <span>+38 096 016 59 07</span>
                  </a>
                </div>
                <div className={s.footer__emailContacts}>
                  <a href={routs.email}>
                    <span>active.people.city@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer__copy}>
          Розробка <a href={routs.baza}>Baza Trainee Ukraine </a> © Усі права захищені
        </div>
      </div>
    </footer>
  )
}

export default Footer
