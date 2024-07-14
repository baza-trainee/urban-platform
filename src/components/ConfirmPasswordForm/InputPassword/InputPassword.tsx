import { useState } from 'react'
import { useField } from 'formik'
import clsx from 'clsx'

import s from './InputPassword.module.scss'
import Eye from '../../Eye/Eye.tsx'

interface InputPasswordProps {
  label: string
  placeholder?: string
  name: string
  title?: string
}

const InputPassword = ({ label, name, title }: InputPasswordProps) => {
  const [onShowPass, setOnShowPass] = useState<boolean>(false)
  const [fields, meta] = useField(name)

  return (
    <div className={s.inputWrapper}>
      <label htmlFor={name} className={clsx(s.label, meta.error && meta.touched && s.label_error)}>
        {label}
      </label>

      <div className={s.inputContainer}>
        <input
          type={onShowPass ? 'text' : 'password'}
          className={clsx(
            s.input,
            fields.value && s.active,
            meta.error && meta.touched && s.input_error
          )}
          title={title}
          id={name}
          {...fields}
        />
      </div>
      <div className={s.eye}>
        <Eye
          onClickShowPass={(boolean: boolean) => {
            setOnShowPass(boolean)
          }}
          onShowPass={onShowPass}
        />
      </div>
      {meta.error && meta.touched && <div className={s.errorMsg}>{meta.error}</div>}
    </div>
  )
}

export default InputPassword
