import React from 'react'

import s from '../CreateGrant/CreateGrant.module.scss'
import clsx from 'clsx'

interface IGrantInputBlockProps {
  blockTypes: string
  title: string
  inputClass: string
  placeholder?: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void
  onChangeCheck?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  option?: JSX.Element[]
  radioList?: string[]
  checked?: boolean
  text?: string
}

const GrantInputBlock: React.FC<IGrantInputBlockProps> = ({
  blockTypes,
  title,
  inputClass,
  placeholder,
  onChange,
  onChangeCheck,
  value,
  option,
  radioList,
  checked,
  text
}) => {
  const inputClassName = clsx(inputClass.split(' ').map((it) => s[it]))

  const radio = radioList
    ? radioList.map((it) => {
        return (
          <div key={it} className={`${s['input-block__radio-block']}`}>
            <input
              type="radio"
              className={`${s['input-block__input_radio']}`}
              onChange={onChange}
              checked={value === it}
              value={it}
            />
            <span className={s['input-block__radio-text']}>{it}</span>
          </div>
        )
      })
    : ''

  const input =
    blockTypes === 'input' ? (
      <input
        className={inputClassName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="text"
      />
    ) : blockTypes === 'area' ? (
      <textarea
        className={inputClassName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    ) : blockTypes === 'select' ? (
      <select
        className={inputClassName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      >
        {option}
      </select>
    ) : blockTypes === 'radio' ? (
      <div className={s['input-block__radio-container']}>{radio}</div>
    ) : blockTypes === 'input&checkbox' ? (
      <>
        <input
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className={`${s['input-block__checkbox-block']}`}>
          <input
            type="checkbox"
            className={`${s['input-block__input_checkbox']} ${s['align-start']}`}
            checked={checked}
            onChange={onChangeCheck}
          />
          <span className={s['input-block__checkbox-text']}>{text}</span>
        </div>
      </>
    ) : (
      ''
    )

  return (
    <>
      {blockTypes && (
        <div className={`${s['input-block']}`}>
          <h2 className={s['input-block__title']}>{title}</h2>
          {input}
        </div>
      )}
    </>
  )
}

export default GrantInputBlock
