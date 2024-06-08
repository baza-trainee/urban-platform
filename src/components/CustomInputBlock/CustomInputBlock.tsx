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
import Eye from '../Eye/Eye'

interface IGrantInputBlockProps {
  blockTypes: string
  title?: string
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
  value?: string | boolean | string[]
  valueRadioInput?: string
  array?: string[]
  text?: string
  rowBlock?: boolean
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
  text,
  rowBlock
}) => {
  const [suggestions, setSuggestions] = useState<string[] | undefined>(array)
  const [visiblePassword, setVisiblePassword] = useState(false)
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

  const checkbox =
    array &&
    array.map((it) => {
      return (
        <label key={it} className={`${s['input-block__checkbox-block']}`}>
          <Field
            type="checkbox"
            className={`${s['input-block__input_checkbox']}`}
            name={name}
            id={it}
            value={it}
          />
          <span
            className={`${s['input-block__radio-text']} ${s['input-block__radio-text_checkbox']}`}
          >
            {it}
          </span>
        </label>
      )
    })

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
        type="text"
        required
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
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
        {mask ? (
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
        ) : (
          <Field
            className={inputClassName}
            placeholder={placeholder}
            name={name}
            id={name}
            required
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        <div
          className={`${s['input-block__checkbox-block']} ${s['input-block__checkbox-block_phone']}`}
        >
          <div>
            <Field
              type="checkbox"
              className={`${s['input-block__input_checkbox']} ${s['align-start']}`}
              name={checkboxName}
              id={checkboxName}
            />
            <span className={s['input-block__input_checkbox-mark']} />
          </div>
          <span className={s['input-block__checkbox-text']}>{text}</span>
        </div>
      </>
    ) : blockTypes === 'password' ? (
      <>
        {' '}
        <Field
          className={inputClassName}
          title="Пароль має містити від 8 до 64 символів (латинські літери нижнього, верхнього регістру, цифри, та @, #, $, %, ^, &, +, =, !)"
          name={name}
          type={visiblePassword ? 'text' : 'password'}
          placeholder="Ввести пароль"
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className={s.eye}>
          <Eye
            onClickShowPass={(boolean: boolean) => {
              setVisiblePassword(boolean)
            }}
            onShowPass={visiblePassword}
          />
        </div>{' '}
      </>
    ) : blockTypes === 'checkbox' ? (
      <div role="group" className={s['input-block__checkbox-container']}>
        {checkbox}
      </div>
    ) : blockTypes === 'popup' ? (
      <button className={s['input-block__popup']}>{placeholder}</button>
    ) : (
      ''
    )

  return (
    <div>
      {blockTypes && (
        <div className={`${s['input-block']} ${rowBlock && s['input-block_row']}`}>
          <div
            className={`${s.width} ${rowBlock && s['input-block__title-block-row']} ${
              rowBlock &&
              blockTypes === 'input&checkbox' &&
              s['input-block__title-block-row_checkbox-input']
            }`}
          >
            {title && (
              <h2
                className={`${s['input-block__title']} ${rowBlock && s['input-block__title_row']}`}
              >
                {title}
              </h2>
            )}
          </div>
          <div className={`${s.width} ${rowBlock && s['input-block__field-error']}`}>
            {input}
            <ErrorMessage className={s.err} name={name} component="div" />
          </div>
        </div>
      )}
    </div>
  )
}

export default GrantInputBlock
