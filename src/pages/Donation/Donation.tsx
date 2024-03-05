import { SetStateAction, useState } from 'react'

import s from './Donation.module.scss'

import donate from '../../assets/icons/donation/donate.svg'
import { donationData } from './donatioData'
import { Link } from 'react-router-dom'
import routs from '../../routes/NavLinks'
import Facebook from '../../assets/icons/donation/Facebook'
import LinkedIn from '../../assets/icons/donation/LinkedIn'

const Donation = () => {
  const [active, setActive] = useState('left')
  const [select, setSelect] = useState('50 грн')
  const [inputValue, setInputValue] = useState('50')
  const [submit, setSubmit] = useState(false)

  const handleCLickChoiceBtn = (active: string) => {
    setActive(active)
  }
  const handleCLickSelect = (select: string) => {
    setSelect(select)
    const forInput = select.split(' ')
    setInputValue(forInput[0])
  }

  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value)
  }

  const handleCLickSubmit = () => {
    setSubmit(!submit)
  }

  const mapSelect = donationData.selectList.map((it, ind) => {
    return (
      <li
        key={ind}
        className={`${s.select} ${select === it && s.active}`}
        onClick={() => handleCLickSelect(it)}
      >
        {it}
      </li>
    )
  })
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.iconContainer}>
          <img className={s.icon} src={donate} alt="donationIcon" />
          {submit && <h1 className={s.submitTitle}>{donationData.submitTitle}</h1>}
        </div>
        {submit ? (
          <>
            <div
              className={s.submitText}
              dangerouslySetInnerHTML={{ __html: donationData.submitText }}
            />
            <div className={s.mediaContainer}>
              <span className={s.mediaTitle}>{donationData.mediaTitle}</span>
              <div className={s.mediaIconContainer}>
                <Link to={routs.facebook} className={s.iconMargin}>
                  <Facebook />
                </Link>
                <Link to={routs.linkedIn}>
                  <LinkedIn />
                </Link>
              </div>
            </div>
            <div className={s.thanksText}>
              <span>{donationData.thanksText}</span>
            </div>
          </>
        ) : (
          <>
            <h1 className={s.title}>{donationData.title}</h1>
            <div className={s.choiceBlock}>
              <div className={s.choiceBtnBlock}>
                <button
                  className={`${s.choiceBtn} ${s.left} ${active === 'left' && s.active}`}
                  onClick={() => handleCLickChoiceBtn('left')}
                >
                  {donationData.choiceBtnLeft}
                </button>
                <button
                  className={`${s.choiceBtn} ${s.right} ${active === 'right' && s.active}`}
                  onClick={() => handleCLickChoiceBtn('right')}
                >
                  {donationData.choiceBtnRight}
                </button>
              </div>
              <ul className={s.selectList}>{mapSelect}</ul>
              <div className={s.inputBlock}>
                <h2 className={s.inputTitle}>{donationData.inputTitle}</h2>
                <input className={s.input} type="text" value={inputValue} onChange={handleInput} />
              </div>
            </div>
            <button className={s.button} onClick={handleCLickSubmit}>
              {donationData.button}
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default Donation
