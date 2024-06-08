import Input from './components/Input'
import clsx from 'clsx'

import s from './CustomInputBlock.module.scss'
import { ErrorMessage } from 'formik'

const CustomInputBlock1 = (props) => {
  const { control, inputClass, isErr, ...rest } = props

  const inputClassName = clsx(
    isErr ? s['input-block__input_error'] : null,
    inputClass.split(' ').map((it: string) => s[it])
  )

  switch (control) {
    case 'input':
      return <Input inputClassName={inputClassName} {...rest} />
    case 'password':
    case 'textarea':
    case 'select':
    case 'radio':
    case 'checkbox':
    case 'input&checkbox':
    case 'popupMenu':
    default:
      return null
  }

  return (
    <div className={`${s['input-block']}`}>
      {title && <h2 className={s['input-block__title']}>{title}</h2>}
      {input}
      <ErrorMessage className={s.err} name={name} component="div" />
    </div>
  )
}

export default CustomInputBlock1
