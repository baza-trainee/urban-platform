import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import { AutoCompleteChangeEvent, AutoCompleteSelectEvent } from 'primereact/autocomplete'

import s from './CustomInputBlock.module.scss'

import InputWithCheckbox from './components/InputWithCheckbox'
import CheckboxBlock from './components/CheckboxBlock'
import PasswordInput from './components/PasswordInput'
import RadioInputBlock from './components/RadioInputBlock'
import Select from './components/Select'

interface IProps {
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

const CustomInputBlock: React.FC<IProps> = ({
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
  const inputClassName = clsx(
    isErr ? s['input-block__input_error'] : null,
    inputClass.split(' ').map((it) => s[it])
  )

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
      <Select
        isErr={isErr}
        array={array}
        onChangeAutoComplete={onChangeAutoComplete}
        onBlur={onBlur}
        onSelectAutoComplete={onSelectAutoComplete}
        value={value}
      />
    ) : blockTypes === 'radio' ? (
      <RadioInputBlock
        array={array}
        onChangeSetRadio={onChangeSetRadio}
        name={name}
        value={value}
        onChange={onChange}
        valueRadioInput={valueRadioInput}
        isErr={isErr}
      />
    ) : blockTypes === 'input&checkbox' ? (
      <InputWithCheckbox
        mask={mask}
        inputClassName={inputClassName}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        checkboxName={checkboxName}
        text={text}
        isErr={isErr}
      />
    ) : blockTypes === 'password' ? (
      <PasswordInput
        inputClassName={inputClassName}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isErr={isErr}
      />
    ) : blockTypes === 'checkbox' ? (
      <CheckboxBlock name={name} array={array} />
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

export default CustomInputBlock
