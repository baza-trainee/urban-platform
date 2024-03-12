import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import s from './CreateGrant.module.scss'

import { cGrantData } from './createGrantData'
// import { cardsData } from '../../../components/Categories/categoriesData'
import GrantInputBlock from '../components/GrantInputBlock'
import Button from '../../../components/Button/Button'

const CreateGrant: React.FC = () => {
  const [inputName, setInputName] = useState('')
  const [area, setArea] = useState('')
  const [inputLocation, setInputLocation] = useState('')
  const [inputCategory, setInputCategory] = useState('Екологія')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [inputUser, setInputUser] = useState('')
  const [inputOpportunity, setInputOpportunity] = useState('')
  const [inputContact, setInputContact] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const location = useLocation().pathname

  const handleInputName = (e: { target: { value: React.SetStateAction<string> } }): void => {
    setInputName(e.target.value)
  }
  const handleArea = (e: { target: { value: React.SetStateAction<string> } }): void => {
    setArea(e.target.value)
  }
  const handleInputLocation = (e: { target: { value: React.SetStateAction<string> } }): void => {
    setInputLocation(e.target.value)
  }
  const handleInputCategory = (e: { target: { value: React.SetStateAction<string> } }): void => {
    setInputCategory(e.target.value)
  }
  const handleInputFromDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputDate = e.target.value
    const formattedDate = inputDate
      .replace(/[^\d.]/g, '')
      .replace(/(\d{2})(?=\d)/g, '$1.')
      .slice(0, 8)
    setFromDate(formattedDate)
  }
  const handleInputToDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputDate = e.target.value
    const formattedDate = inputDate
      .replace(/[^\d.]/g, '')
      .replace(/(\d{2})(?=\d)/g, '$1.')
      .slice(0, 8)
    setToDate(formattedDate)
  }
  const handleInputUser = (e: { target: { value: React.SetStateAction<string> } }): void => {
    setInputUser(e.target.value)
  }
  const handleInputOpportunity = (e: { target: { value: React.SetStateAction<string> } }): void => {
    setInputOpportunity(e.target.value)
  }
  const handleInputContact = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const inputDate = e.target.value
    const formattedDate = inputDate.replace(/[^+\d]/g, '').slice(0, 13)
    setInputContact(formattedDate)
  }

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  // const categoryOptions = cardsData.map((it, ind) => {
  //   return (
  //     <option key={ind} value={it.title}>
  //       {it.title}
  //     </option>
  //   )
  // })
  return (
    <section className={s.section}>
      <form className={s.container}>
        <h1 className={s.title}>
          {location === '/createGrant' ? cGrantData.title : cGrantData.editTitle}
        </h1>
        <div className={s['content-box']}>
          <GrantInputBlock
            blockTypes={'input'}
            title={cGrantData.nameTitleInput}
            inputClass="input-block__input"
            placeholder={cGrantData.nameInput}
            onChange={handleInputName}
            value={inputName}
          />
          <GrantInputBlock
            blockTypes={'area'}
            title={cGrantData.descriptionTitleInput}
            inputClass="input-block__input input-block__input_area"
            placeholder={cGrantData.descriptionInput}
            onChange={handleArea}
            value={area}
          />
          <GrantInputBlock
            blockTypes={'input'}
            title={cGrantData.locationTitleInput}
            inputClass="input-block__input"
            placeholder={cGrantData.locationInput}
            onChange={handleInputLocation}
            value={inputLocation}
          />
          <div className={`${s['input-block']}`}>
            <h2 className={s['input-block__title']}>{cGrantData.categoryTitleInput}</h2>
            <div className={s.select}>
              <input
                className={s.input}
                placeholder={cGrantData.categoryInput}
                onChange={handleInputCategory}
                value={inputCategory}
                type="text"
              />
              <button className={s.btn} />
            </div>
          </div>
          {/* <GrantInputBlock
            blockTypes={'select'}
            title={cGrantData.categoryTitleInput}
            inputClass="input-block__input input-block__input_select"
            placeholder={cGrantData.categoryInput}
            onChange={handleInputCategory}
            value={inputCategory}
            option={categoryOptions}
          /> */}
          <div className={`${s['input-block']} ${s['input-block_time-block']}`}>
            <h2 className={s['input-block__title']}>{cGrantData.timeTitleInput}</h2>
            <div className={s['align-start']}>
              <span className={s['input-block__span']}>{cGrantData.timeTextFrom}</span>
              <input
                type="text"
                className={`${s['input-block__input']} ${s['input-block__input_time']}`}
                placeholder={cGrantData.timeInputFrom}
                onChange={handleInputFromDate}
                value={fromDate}
              />
              <span className={s['input-block__span']}>{cGrantData.timeTextTo}</span>
              <input
                type="text"
                className={`${s['input-block__input']} ${s['input-block__input_time']}`}
                placeholder={cGrantData.timeInputTo}
                onChange={handleInputToDate}
                value={toDate}
              />
            </div>
          </div>
          <GrantInputBlock
            blockTypes={'radio'}
            title={cGrantData.userTypeTitle}
            inputClass="input-block__radio-container"
            onChange={handleInputUser}
            value={inputUser}
            radioList={cGrantData.userTypeList}
          />
          <GrantInputBlock
            blockTypes={'radio'}
            title={cGrantData.grantTypeTitle}
            inputClass="input-block__radio-container"
            onChange={handleInputOpportunity}
            value={inputOpportunity}
            radioList={cGrantData.grantTypeList}
          />
          <GrantInputBlock
            blockTypes={'input&checkbox'}
            title={cGrantData.contactTitleInput}
            inputClass="input-block__input input-block__input_contact align-start"
            placeholder={cGrantData.contactInput}
            onChange={handleInputContact}
            value={inputContact}
            checked={isChecked}
            onChangeCheck={handleCheckbox}
            text={cGrantData.contactCheckBocks}
          />
          <GrantInputBlock
            blockTypes={'input'}
            title={cGrantData.urlTitleInput}
            inputClass="input-block__input"
            placeholder={cGrantData.urlInput}
            onChange={handleInputName}
            value={inputName}
          />
        </div>
        <div className={s['input-block__btn-block']}>
          <Button
            buttonClasses="outlineBtn fullСoverage"
            name={location === '/createGrant' ? cGrantData.btnSaveDraft : cGrantData.btnCancelEdit}
          />
          <div className={s.gap} />
          <Button
            buttonClasses="filledBtn fullСoverage"
            name={location === '/createGrant' ? cGrantData.btnPublish : cGrantData.btnSaveEdit}
          />
        </div>
      </form>
    </section>
  )
}

export default CreateGrant
