import { FormikProps } from 'formik'
import { AutoCompleteChangeEvent, AutoCompleteSelectEvent } from 'primereact/autocomplete'

import s from '../VolunteerOrgProfileEdit.module.scss'

import ProfileImg from '../../../components/ProfileImg/ProfileImg'
import CustomInputBlock from '../../../components/CustomInputBlock/CustomInputBlock'
import { FormValues, forMapV } from '../voluntProfEditData'
import { forMapO } from '../orgProfEditData'

interface IProps {
  isMobile: boolean
  formik: FormikProps<FormValues>
  aboutTitle: string
  isVoluntProfile: boolean
}

const InputBlock: React.FC<IProps> = ({ formik, isMobile, aboutTitle, isVoluntProfile }) => {
  const forMap = isVoluntProfile ? forMapV : forMapO
  const handleInputChange = (e: AutoCompleteChangeEvent) => {
    const query = e.target.value
    formik.setFieldValue('category', query)
  }

  const handleSelect = (e: AutoCompleteSelectEvent) => {
    const selectedValue = e.value
    formik.setFieldValue('category', selectedValue)
  }

  const handleRadioChange = (name: string, value: string) => {
    formik.setFieldValue(name, value)
  }

  const [arr1, arr2] = forMap.reduce(
    (acc, it, indx) => {
      const [acc1, acc2] = acc
      return indx <= (isVoluntProfile ? 13 : 10) ? [[...acc1, it], acc2] : [acc1, [...acc2, it]]
    },
    [[], []] as [typeof forMap, typeof forMap]
  )

  const inputMap = (arr: typeof forMap) =>
    arr.map((it) => {
      return (
        <CustomInputBlock
          blockTypes={it.blockTypes}
          title={it.title}
          name={it.name}
          checkboxName={'checkName' in it ? it.checkName : undefined}
          isErr={
            formik.errors[it.name as keyof typeof formik.values] &&
            formik.touched[it.name as keyof typeof formik.values]
          }
          inputClass={`${it.inputClass}`}
          placeholder={it.placeholder}
          mask={'mask' in it ? it.mask : undefined}
          onChange={(
            e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            formik.handleChange(e)
            formik.validateField(it.name)
          }}
          onChangeSetRadio={(value: string) => handleRadioChange(it.name, value)}
          onChangeAutoComplete={handleInputChange}
          onSelectAutoComplete={handleSelect}
          onBlur={(
            e: AutoCompleteChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            formik.handleBlur(e)
            formik.validateField(it.name)
          }}
          value={formik.values[it.name as keyof typeof formik.values]}
          array={'radioList' in it ? it.radioList : undefined}
          text={'text' in it ? it.text : undefined}
          rowBlock={!isMobile && it.blockTypes !== 'area'}
        />
      )
    })
  return (
    <>
      <div className={s['content-block__info-block']}>
        <ProfileImg
          isMobile={false}
          sVolunteerData={{}}
          imgInput
          isVoluntProfile={isVoluntProfile}
        />
        <ul className={s['content-block__info-list']}>{inputMap(arr1)}</ul>
      </div>
      <div className={s['content-block__description-block']}>
        <div className={s['content-block__description-title']}>
          <h2 className={s['content-block__description-title_title']}>{aboutTitle}</h2>
        </div>
        <div className={s['content-block__description']}>{inputMap(arr2)}</div>
      </div>
    </>
  )
}

export default InputBlock
