import { Field } from 'formik'
import { AutoCompleteChangeEvent } from 'primereact/autocomplete'

import s from '../CustomInputBlock.module.scss'

interface IProps {
  name: string
  array?: string[]
  inputClassName?: string
  isErr: boolean | string | undefined
  valueRadioInput?: string
  onChangeSetRadio?: (value: string) => void
  onChange?: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value?: string | boolean | string[]
}

const RadioInputBlock: React.FC<IProps> = ({
  array,
  onChangeSetRadio,
  name,
  value,
  onChange,
  valueRadioInput
}) => {
  const radio =
    array &&
    array.map((it: string) => {
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
  return <div className={s['input-block__radio-container']}>{radio}</div>
}

export default RadioInputBlock
