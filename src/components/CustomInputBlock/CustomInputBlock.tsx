import React, { useState } from 'react'
import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import { InputMask } from 'primereact/inputmask'
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteSelectEvent
} from 'primereact/autocomplete'

import s from './CustomInputBlock.module.scss'

interface IGrantInputBlockProps {
  blockTypes: string
  title: string
  name: string
  checkboxName?: string
  inputClass: string
  isErr: boolean | string | undefined
  mask?: string
  placeholder?: string
  onChange?: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onChangeSetRadio?: (value: string) => void
  onChangeAutoComplete: (e: AutoCompleteChangeEvent) => void | undefined
  onSelectAutoComplete: (e: AutoCompleteSelectEvent) => void | undefined
  onBlur: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value?: string | boolean
  valueRadioInput?: string
  array?: string[]
  text?: string
}

const GrantInputBlock: React.FC<IGrantInputBlockProps> = ({
  blockTypes,
  title,
  name,
  checkboxName,
  inputClass,
  isErr,
  mask,
  placeholder,
  onChange,
  onChangeSetRadio,
  onChangeAutoComplete,
  onSelectAutoComplete,
  onBlur,
  value,
  valueRadioInput,
  array,
  text
}) => {
  const [suggestions, setSuggestions] = useState<string[] | undefined>(array)
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const inputClassName = clsx(
    isErr ? s['input-block__input_error'] : null,
    inputClass.split(' ').map((it) => s[it])
  )

  const handleFocus = () => {
    setIsFocus(true)
  }
  const handleBlur = () => {
    setIsFocus(false)
  }

  const complete = (e: AutoCompleteCompleteEvent): void => {
    const value = e.query
    const filteredSuggestions =
      array && array.filter((it) => it.toLowerCase().includes(value.toLowerCase()))
    setSuggestions(filteredSuggestions)
  }

  const radio =
    array &&
    array.map((it) => {
      return it === 'інше (вказати)' ? (
        <div
          key={it}
          className={`${s['input-block__radio-block']}`}
          onClick={() => onChangeSetRadio && onChangeSetRadio(it)}
        >
          <Field
            type="radio"
            className={`${s['input-block__input_radio']}`}
            name={name}
            id={it}
            required
            value={it}
          />
          <span className={s['input-block__radio-text']}>
            {value === it ? (
              <>
                інше (вказати:{' '}
                <Field
                  type="text"
                  className={s.radioInput}
                  name={`${name}Text`}
                  id={`${name}Text`}
                  required
                  onChange={onChange}
                  value={valueRadioInput}
                />{' '}
                )
              </>
            ) : (
              `${it}`
            )}
          </span>
        </div>
      ) : (
        <div
          key={it}
          className={`${s['input-block__radio-block']}`}
          onClick={() => onChangeSetRadio && onChangeSetRadio(it)}
        >
          <Field
            type="radio"
            className={`${s['input-block__input_radio']}`}
            name={name}
            id={it}
            required
            value={it}
          />
          <span className={s['input-block__radio-text']}>{it}</span>
        </div>
      )
    })

  const input =
    blockTypes === 'input' ? (
      <Field
        className={inputClassName}
        name={name}
        id={name}
        required
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type="text"
      />
    ) : blockTypes === 'area' ? (
      <Field
        as="textarea"
        className={inputClassName}
        name={name}
        id={name}
        required
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    ) : blockTypes === 'select' ? (
      <AutoComplete
        className={
          isErr
            ? `${s.complete_error} ${s.complete}`
            : isFocus
              ? `${s.complete_focus} ${s.complete}`
              : `${s.complete} `
        }
        panelClassName={s.panel}
        dropdown
        name={'category'}
        id={'category'}
        onChange={(e) => {
          onChangeAutoComplete(e)
          onBlur(e)
        }}
        onSelect={onSelectAutoComplete}
        onFocus={handleFocus}
        onBlur={(e) =>
          setTimeout(() => {
            handleBlur()
            onBlur(e)
          }, 100)
        }
        completeMethod={complete}
        suggestions={suggestions}
        value={value}
      />
    ) : blockTypes === 'radio' ? (
      <div className={s['input-block__radio-container']}>{radio}</div>
    ) : blockTypes === 'input&checkbox' ? (
      <>
        <Field
          as={InputMask}
          mask={mask}
          className={inputClassName}
          placeholder={placeholder}
          name={name}
          id={name}
          required
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className={`${s['input-block__checkbox-block']}`}>
          <Field
            type="checkbox"
            className={`${s['input-block__input_checkbox']} ${s['align-start']}`}
            name={checkboxName}
            id={checkboxName}
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
          <ErrorMessage className={s.err} name={name} component="div" />
        </div>
      )}
    </>
  )
}

export default GrantInputBlock
