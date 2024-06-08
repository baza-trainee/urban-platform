import { useState } from 'react'
import { FormikProvider, Form, useFormik } from 'formik'
import { AutoCompleteChangeEvent, AutoCompleteSelectEvent } from 'primereact/autocomplete'

import s from './VolunteerOrgProfileEdit.module.scss'

import {
  FormValues,
  dVoluntProfEditData,
  forMap,
  grantFormSchema,
  initialValues
} from './voluntProfEditData'

import CustomInputBlock from '../../components/CustomInputBlock/CustomInputBlock'
import ProfileImg from '../../components/ProfileImg/ProfileImg'
import Button from '../../components/Button/Button'
import ProfileCards from '../../components/ProfileCards/ProfileCards'
import { projectData } from '../VolunteerOrgPage/volunteerData'
import useMediaQuery from '../../hooks/useMediaQuery'

const VolunteerOrgProfileEdit = () => {
  const [visibleCount, setVisibleCount] = useState(3)
  const { isMobile } = useMediaQuery()

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: grantFormSchema,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: () => {
      console.log('submited')

      const isValid = formik.validateForm()

      console.log('Form values:', formik.values)
      console.log('Form touched:', formik.touched)
      console.log('Form isValid:', isValid)
    }
  })

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

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 3)
  }

  const profileCardsData = projectData.slice(0, visibleCount)

  const isShowMoreBtn = projectData.length > visibleCount

  const [arr1, arr2] = forMap.reduce(
    (acc, it, indx) => {
      const [acc1, acc2] = acc
      return indx <= 13 ? [[...acc1, it], acc2] : [acc1, [...acc2, it]]
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
          checkboxName={it.checkName}
          isErr={
            formik.errors[it.name as keyof typeof formik.values] &&
            formik.touched[it.name as keyof typeof formik.values]
          }
          inputClass={`${it.inputClass}`}
          placeholder={it.placeholder}
          mask={it.mask}
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
          array={it.radioList}
          text={it.text}
          rowBlock={!isMobile && it.blockTypes !== 'area'}
        />
      )
    })

  return (
    <FormikProvider value={formik}>
      <section className={s.section}>
        <Form className={s.container} onSubmit={formik.handleSubmit}>
          <div className={s['content-block']}>
            <div className={s['content-block__title']}>
              <h1>{`${dVoluntProfEditData.firstName} ${dVoluntProfEditData.lastName}`}</h1>
            </div>
            <div className={s['content-block__info-block']}>
              <ProfileImg isMobile={false} sVolunteerData={{}} imgInput isVoluntProfile />
              <ul className={s['content-block__info-list']}>{inputMap(arr1)}</ul>
            </div>
            <div className={s['content-block__description-block']}>
              <div className={s['content-block__description-title']}>
                <h2 className={s['content-block__description-title_title']}>
                  {dVoluntProfEditData.aboutTitle}
                </h2>
              </div>
              <div className={s['content-block__description']}>{inputMap(arr2)}</div>
            </div>
            <div className={s['content-block__btn']}>
              <Button
                buttonClasses="outlineBtn fullСoverage"
                type="submit"
                name={dVoluntProfEditData.btnCnc}
                styleBtn={{ width: '281.5px', height: '56px' }}
              />
              <Button
                buttonClasses="filledBtn fullСoverage"
                type="submit"
                name={dVoluntProfEditData.btnSave}
                styleBtn={{ width: '281.5px', height: '56px' }}
              />
            </div>
          </div>
          <div className={s['profile-block']}>
            <div>
              <h2 className={s['profile-block__title']}>{dVoluntProfEditData.reqTitle}</h2>
            </div>
            <ProfileCards
              profileMap={profileCardsData}
              type={'project'}
              mobile={!isMobile}
              buttonCheck
              checkBtnTitle="Переглянути"
            />
            {isShowMoreBtn && !isMobile && (
              <div className={s['profile-block__btn']} onClick={handleShowMore}>
                <p className={s['profile-block__btn-title']}>{dVoluntProfEditData.btnShowMore}</p>
              </div>
            )}
          </div>
        </Form>
      </section>
    </FormikProvider>
  )
}

export default VolunteerOrgProfileEdit
