import { Field } from 'formik'

import s from '../CustomInputBlock.module.scss'

interface IProps {
  name: string
  array?: string[]
}

const CheckboxBlock: React.FC<IProps> = ({ array, name }) => {
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
  return (
    <div role="group" className={s['input-block__checkbox-container']}>
      {checkbox}
    </div>
  )
}

export default CheckboxBlock
