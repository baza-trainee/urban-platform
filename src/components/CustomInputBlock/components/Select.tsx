import { useState } from 'react'
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteSelectEvent
} from 'primereact/autocomplete'

import s from '../CustomInputBlock.module.scss'

interface IProps {
  array?: string[]
  inputClassName?: string
  isErr: boolean | string | undefined
  onChangeAutoComplete: (e: AutoCompleteChangeEvent) => void | undefined
  onSelectAutoComplete: (e: AutoCompleteSelectEvent) => void | undefined
  onBlur: (
    e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  value?: string | boolean | string[]
}

const Select: React.FC<IProps> = ({
  isErr,
  array,
  onChangeAutoComplete,
  onBlur,
  onSelectAutoComplete,
  value
}) => {
  const [suggestions, setSuggestions] = useState<string[] | undefined>(array)
  const [isFocus, setIsFocus] = useState<boolean>(false)

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
  return (
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
  )
}

export default Select
