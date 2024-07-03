import { useState } from 'react'
import { Field } from 'formik'
import { AutoCompleteChangeEvent } from 'primereact/autocomplete'

import s from '../CustomInputBlock.module.scss'

import Eye from '../../Eye/Eye'

interface IProps {
  name: string
  inputClassName?: string
  isErr: boolean | string | undefined
  onChange?: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onBlur?: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value?: string | boolean | string[]
}

const PasswordInput: React.FC<IProps> = ({ inputClassName, name, value, onChange, onBlur }) => {
  const [visiblePassword, setVisiblePassword] = useState(false)
  return (
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
  )
}

export default PasswordInput
