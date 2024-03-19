import React from 'react'
// import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import useAvatarImg from '../../../src/pages/Organization/img/Use-avatar.png'
import facebook from '../../../src/pages/Organization/img/facebook.svg'
import globe from '../../../src/pages/Organization/img/globe.svg'
import instagram from '../../../src/pages/Organization/img/instagram.svg'
import telegram from '../../../src/pages/Organization/img/telegram.svg'
import youtube from '../../../src/pages/Organization/img/youtube.svg'
import organizaconeImg from '../../../src/pages/Organization/img/organizacone-img.jpg'
import s from './Organization.module.scss'

const Organization: React.FC = () => {

  return (
    <section className={s.organization}>
      <div className={s.organization__container}>
        <div className={s.organization__body}>
          <div className={s.organization__avatar}>
            <div className={s.organization__imgUser}>
              <img src={useAvatarImg} alt="useAvatarImg" />
            </div>
            <div className={s.organization__avatarSocial}>
              <Link to="/">
                <img src={instagram} alt="instagramSocial" />
              </Link>
              <Link to="/">
                <img src={youtube} alt="youtubeSocial" />
              </Link>
              <Link to="/">
                <img src={facebook} alt="facebookSocial" />
              </Link>
              <Link to="/">
                <img src={telegram} alt="telegramSocial" />
              </Link>
              <Link to="/">
                <img src={youtube} alt="youtubeSocial" />
              </Link>
              <Link to="/">
                <img src={globe} alt="globeSocial" />
              </Link>
            </div>
          </div>
          <div className={s.organization__content}>
            <h3 className={s.title}>ГО “Спільні кроки”</h3>
            <div className={s.organization__text}>
              <p>Громадська організація "Спільні кроки" є активним учасником соціального розвитку в
                Львові. Організація заснована Олександром Івановим, який вирішив об'єднати зусилля
                громади для вирішення соціальних питань. Реєструючись на платформі "Місто активних
                людей",  ГО "Спільні кроки" прагне знаходити волонтерів для реалізації своїх проєктів,
                спрямованих на волонтерство для вразливих категорій населення та освіту.<br />
                Коротка біографія:</p>
              <p>ГО "Спільні кроки" заснована в 2010 році в Львові, має багаторічний досвід у роботі з волонтерами та соціальними проєктами.</p>
            </div>
            <div className={s.organization__info}>
              <div className={s.organization__sity}>Місто:</div>
              <div className={s.organization__sityName}>Київ</div>
            </div>
            <div className={s.organization__info}>
              <div className={s.organization__sity}>Електрона пошта:</div>
              <div className={s.organization__sityName}>example@example.com</div>
            </div>
            <div className={s.organization__info}>
              <div className={s.organization__sity}>Цікавлять напрями:</div>
              <div className={s.organization__sityName}>Допомога ветеранам та військовим.<br />
                Підтримка людей похилого віку. Мистецтво.<br />
                Культура. Молодь та діти. Спорт.</div>
            </div>
            <div className={s.organization__info}>
              <div className={s.organization__sity}>Контактна особа</div>
              <div className={s.organization__sityName}>Олександр</div>
            </div>
            <div className={s.organization__projects}>
              <h3 className={s.organization__title}>Проєкти ГО “Спільні кроки”</h3>
              <div className={s.organization__projBody}>
                <div className={s.organization__project}>
                  <div className={s.organization__projectImg}>
                    <div className={s.organization__projectLabel}><span>Київ</span></div>
                    <Link to="/">
                      <img src={organizaconeImg} alt="instagramSocial" />
                    </Link>
                  </div>
                  <div className={s.organization__projectContent}>
                    <a className={s.title} href="">Найкращий проєкт</a>
                    <div className={s.organization__date}>28.11.2023 - 01.09.2024</div>
                    <div className={s.organization__projectText}>
                      <p>На платформі “Місто активних людей”
                        Ви можете сформувати команду та виконати спільний проєкт,
                        найти однодумців, інвесторів, долучитись до існуючого проєкту.</p>
                    </div>
                    <div className={s.organization__projectBody}>
                      <Link to="/" className={s.organization__organisatin}>
                        <img src={useAvatarImg} alt="useAvatarImg" />
                        <span>ГО "Спшльні кроки"</span>
                      </Link>
                      <div className={s.organization__button}>
                        <Link to="/" className={s.organization__link}>Приєднатись</Link>
                        <div className={s.organization__like}><span>123</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.organization__project}>
                  <div className={s.organization__projectImg}>
                    <div className={s.organization__projectLabel}><span>Київ</span></div>
                    <Link to="/">
                      <img src={organizaconeImg} alt="instagramSocial" />
                    </Link>
                  </div>
                  <div className={s.organization__projectContent}>
                    <a className={s.title} href="">Найкращий проєкт</a>
                    <div className={s.organization__date}>28.11.2023 - 01.09.2024</div>
                    <div className={s.organization__projectText}>
                      <p>На платформі “Місто активних людей”
                        Ви можете сформувати команду та виконати спільний проєкт,
                        найти однодумців, інвесторів, долучитись до існуючого проєкту.</p>
                    </div>
                    <div className={s.organization__projectBody}>
                      <Link to="/" className={s.organization__organisatin}>
                        <img src={useAvatarImg} alt="useAvatarImg" />
                        <span>ГО "Спшльні кроки"</span>
                      </Link>
                      <div className={s.organization__button}>
                        <Link to="/" className={s.organization__link}>Приєднатись</Link>
                        <div className={s.organization__like}><span>123</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.organization__project}>
                  <div className={s.organization__projectImg}>
                    <div className={s.organization__projectLabel}><span>Київ</span></div>
                    <Link to="/">
                      <img src={organizaconeImg} alt="instagramSocial" />
                    </Link>
                  </div>
                  <div className={s.organization__projectContent}>
                    <a className={s.title} href="">Найкращий проєкт</a>
                    <div className={s.organization__date}>28.11.2023 - 01.09.2024</div>
                    <div className={s.organization__projectText}>
                      <p>На платформі “Місто активних людей”
                        Ви можете сформувати команду та виконати спільний проєкт,
                        найти однодумців, інвесторів, долучитись до існуючого проєкту.</p>
                    </div>
                    <div className={s.organization__projectBody}>
                      <Link to="/" className={s.organization__organisatin}>
                        <img src={useAvatarImg} alt="useAvatarImg" />
                        <span>ГО "Спшльні кроки"</span>
                      </Link>
                      <div className={s.organization__button}>
                        <Link to="/" className={s.organization__link}>Приєднатись</Link>
                        <div className={s.organization__like}><span>123</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}



export default Organization