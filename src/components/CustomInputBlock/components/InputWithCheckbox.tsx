import { Field } from 'formik'
import { InputMask } from 'primereact/inputmask'

import s from '../CustomInputBlock.module.scss'
import { AutoCompleteChangeEvent } from 'primereact/autocomplete'

interface IProps {
  name: string
  checkboxName?: string
  inputClassName?: string
  isErr: boolean | string | undefined
  mask?: string
  placeholder?: string
  onChange?: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onBlur?: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value?: string | boolean | string[]
  text?: string
}

const InputWithCheckbox: React.FC<IProps> = ({
  mask,
  inputClassName,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  checkboxName,
  text
}) => {
  return (
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
  )
}

export default InputWithCheckbox
