import { SetStateAction, useState } from 'react'

import s from './Donation.module.scss'

import donate from '../../assets/icons/donation/donate.svg'
import { donationData } from './donatioData'
import routs from '../../routes/NavLinks'

import DonationSuccess from './components/DonationSuccess'
import DonationChoice from './components/DonationChoice'

const Donation = () => {
  const [active, setActive] = useState('left')
  const [select, setSelect] = useState('50 грн')
  const [inputValue, setInputValue] = useState('50')
  const [submit, setSubmit] = useState(false)

  const handleCLickChoiceBtn = (active: string): void => {
    setActive(active)
  }
  const handleCLickSelect = (select: string): void => {
    setSelect(select)
    const forInput = select.split(' ')
    setInputValue(forInput[0])
  }

  const handleInput = (e: { target: { value: SetStateAction<string> } }): void => {
    setInputValue(e.target.value)
  }

  const handleFocusInput = (): void => {
    setInputValue('')
  }

  const handleCLickSubmit = (): void => {
    setSubmit(!submit)
  }
  return (
    <section className={s.donation}>
      <div className={s.donation__container}>
        <div className={`${s['donation__icon-container']} ${s['margin-bottom']}`}>
          <img className={s.donation__icon} src={donate} alt="donationIcon" />
          {submit && <h1 className={s.donation__title}>{donationData.submitTitle}</h1>}
        </div>
        {submit ? (
          <DonationSuccess donationData={donationData} routs={routs} />
        ) : (
          <>
            <h1 className={`${s.donation__title} ${s.title} ${s['margin-bottom']}`}>
              {donationData.title}
            </h1>
            <DonationChoice
              donationData={donationData}
              active={active}
              inputValue={inputValue}
              select={select}
              handleCLickChoiceBtn={handleCLickChoiceBtn}
              handleCLickSelect={handleCLickSelect}
              handleInput={handleInput}
              handleFocusInput={handleFocusInput}
            />
            <button className={s.donation__button} onClick={handleCLickSubmit}>
              {donationData.button}
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default Donation
