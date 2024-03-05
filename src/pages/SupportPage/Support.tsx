import React from 'react'
// import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import donateImgSupport from '../../../src/pages/SupportPage/img/donate.png'
import FacebookImgSup from '../../../src/pages/SupportPage/img/facebook.png'
import LinkedlnImgSup from '../../../src/pages/SupportPage/img/linkedin.png'
import s from './Support.module.scss'

const Support: React.FC = () => {

  return (
    <section className={s.support}>
      <div className={s.support__container}>
        <div className={s.support__body}>
          <div className={s.support__images}>
            <img src={donateImgSupport} alt="smartLockImg" />
          </div>
          <h3 className={s.support__title}>Дякуємо за ваш внесок у спільну справу!</h3>
          <div className={s.support__text}>
            <p>Ваша щедрість стала кроком до реалізації громадських ініціатив та надання підтримки тим, хто її потребує.</p>
            <p>Будь ласка, слідкуйте за нашими новинами та проєктами, бо разом ми змінюємо оточуючий світ на краще!</p>
          </div>
          <div className={s.support__social}>
            <h3>Ми в соцмережа:</h3>
            <div className={s.support__socialLink}>
              <Link to="/">
                <img src={FacebookImgSup} alt="FacebookImgSup" />
              </Link>
              <Link to="/">
                <img src={LinkedlnImgSup} alt="LinkedlnImgSup" />
              </Link>
            </div>
          </div>
          <h3 className={s.support__subTitle}>Ще раз вам дякуємо за вашу підтримку!</h3>
        </div>
      </div>
    </section>
  )

}



export default Support