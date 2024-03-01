import React from 'react'
import s from './NumbersSection.module.scss'

const NumbersSection: React.FC = () => {
  const achievementData = [
    { count: '30', text: 'успішних проєктів' },
    {
      count: '218',
      text: 'залучених учасників'
    },
    { count: '546 000', text: 'грн зібрано та залучено' }
  ]

  return (
    <section className={s.numbersSection} id="numbersSection">
      <div className={s.contentWrapper}>
        {achievementData.map(({ count, text }, i) => (
          <div key={`achievement_key_${count! + i}`} className={s.textWrap}>
            <p className={s.count}>{count}</p>

            <p className={s.text}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NumbersSection
