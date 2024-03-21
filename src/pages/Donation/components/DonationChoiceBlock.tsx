import React, { SetStateAction } from 'react'

import s from '../Donation.module.scss'
import { IDonationData } from '../donatioData'

interface IDonationChoiceProps {
  donationData: IDonationData
  active: string
  inputValue: string
  select: string
  handleCLickChoiceBtn: (active: string) => void
  handleCLickSelect: (select: string) => void
  handleInput: (e: { target: { value: SetStateAction<string> } }) => void
  handleFocusInput: () => void
}

const DonationChoice: React.FC<IDonationChoiceProps> = ({
  donationData,
  active,
  inputValue,
  select,
  handleCLickChoiceBtn,
  handleCLickSelect,
  handleInput,
  handleFocusInput
}) => {
  const mapSelect = donationData.selectList.map((it, ind) => {
    return (
      <li
        key={ind}
        className={`${s['choice-block__select-item']} ${
          select === it && s['choice-block__select-item_active']
        }`}
        onClick={() => handleCLickSelect(it)}
      >
        {it}
      </li>
    )
  })
  return (
    <div className={`${s['choice-block']} ${s['margin-bottom']}`}>
      <div className={`${s['choice-block__container']} ${s['margin-bottom']}`}>
        <button
          className={`${s['choice-block__btn']} ${s['choice-block__btn_left']} ${
            active === 'left' && s['choice-block__btn_active']
          }`}
          onClick={() => handleCLickChoiceBtn('left')}
        >
          {donationData.choiceBtnLeft}
        </button>
        <button
          className={`${s['choice-block__btn']} ${s['choice-block__btn_right']} ${
            active === 'right' && s['choice-block__btn_active']
          }`}
          onClick={() => handleCLickChoiceBtn('right')}
        >
          {donationData.choiceBtnRight}
        </button>
      </div>
      <ul className={`${s['choice-block__select-list']} ${s['margin-bottom']}`}>{mapSelect}</ul>
      <div className={s['input-container']}>
        <h2 className={s['input-container__title']}>{donationData.inputTitle}</h2>
        <input
          className={s['input-container__input']}
          type="text"
          value={inputValue}
          onChange={handleInput}
          onFocus={handleFocusInput}
        />
      </div>
    </div>
  )
}

export default DonationChoice
