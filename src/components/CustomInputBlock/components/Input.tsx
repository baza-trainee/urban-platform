import { Field } from 'formik'
import { AutoCompleteChangeEvent } from 'primereact/autocomplete'

interface Props {
  inputClassName: string
  name: string
  placeholder?: string
  onChange?: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onBlur: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value: string
}

const Input: React.FC<Props> = (props) => {
  const { inputClassName, name, placeholder, onChange, onBlur, value } = props
  return (
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
  )
}

export default Input
