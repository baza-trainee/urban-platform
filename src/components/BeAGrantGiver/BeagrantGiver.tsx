import React from 'react'
import s from './BeagrantGiver.module.scss'
import Button from '../Button/Button.tsx'
import CalltoActionIcon from '../../assets/icons/calltoActionIcon.tsx'
import beagrantgiverTextData from './beagrantgiverTextData.json'

const BeagrantGiver: React.FC = () => {
  return (
    <section className={s.beagrantgiver} id="beagrantgiver">
      <div className={s.contentWrapper}>
        <div className={s.content}>
          <h2 className={s.contentTitle}>{beagrantgiverTextData[0]}</h2>
          <div className={s.textWrap}>
            <p className={s.contentText}>{beagrantgiverTextData[1]}</p>
            <h4 className={s.boldText}>{beagrantgiverTextData[2]}</h4>
          </div>
          <div className={s.btnWrap}>
            <Button
              component="link"
              buttonClasses={'filledBtn'}
              to={'/'}
              name={'Створити грант'}
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

export default BeagrantGiver
