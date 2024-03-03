import React from 'react'
import s from './PublishVacancy.module.scss'
import Button from '../Button/Button.tsx'
import CalltoActionIcon from '../../assets/icons/calltoActionIcon.tsx'
import publishVacancyTextData from './publishVacancyTextData.json'

const PublishVacancy: React.FC = () => {
  return (
    <section className={s.publishvacancy} id="publishvacancy">
      <div className={s.contentWrapper}>
        {/* <div className={s.iconWrap}>
          <CalltoActionIcon />
        </div> */}
        <div className={s.content}>
          <h2 className={s.contentTitle}>{publishVacancyTextData[0]}</h2>
          <div className={s.textWrap}>
            <p className={s.contentText}>{publishVacancyTextData[1]}</p>
            <h4 className={s.boldText}>{publishVacancyTextData[2]}</h4>
          </div>
          <div className={s.btnWrap}>
            <Button
              component="link"
              buttonClasses={'filledBtn'}
              to={'/'}
              name={'Створити вакансію'}
              styleBtn={{ width: '100%' }}
              handleMouseEnter={() => {}}
              handleMouseLeave={() => {}}
            />
          </div>
        </div>
        <div className={s.iconWrap}>
          <CalltoActionIcon />
        </div>
      </div>
    </section>
  )
}

export default PublishVacancy
