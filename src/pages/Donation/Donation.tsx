import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './Donation.module.scss'

import donate from '../../assets/icons/donation/donate.svg'
import { donationData } from './donatioData'
import routs from '../../routes/NavLinks'

import DonationChoice from './components/DonationChoiceBlock'

const Donation: React.FC = () => {
  const [active, setActive] = useState<string>('left')
  const [select, setSelect] = useState<string>('50 грн')
  const [inputValue, setInputValue] = useState<string>('50')

  const navigate = useNavigate()

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
    navigate(routs.donationThanks)
  }
  return (
    <section className={s.donation}>
      <div className={s.donation__container}>
        <div className={`${s['donation__icon-container']} ${s['margin-bottom']}`}>
          <img className={s.donation__icon} src={donate} alt="donationIcon" />
        </div>
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
      </div>
    </section>
  )
}

export default Donation
