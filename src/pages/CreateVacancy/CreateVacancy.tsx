import React from 'react'
import { useLocation } from 'react-router-dom'
import { FormikProvider, Form, useFormik, ErrorMessage, Field } from 'formik'
import { AutoCompleteChangeEvent, AutoCompleteSelectEvent } from 'primereact/autocomplete'
import { InputMask } from 'primereact/inputmask'

import s from './CreateVacancy.module.scss'

import CustomInputBlock from '../../components/CustomInputBlock/CustomInputBlock'
import Button from '../../components/Button/Button'

import {
  FormValues,
  cVacancyData,
  forMap,
  vacancyFormSchema,
  initialValues
} from './createVacancyData'
import useMediaQuery from '../../hooks/useMediaQuery'

const CreateVacancy: React.FC = () => {
  const location = useLocation().pathname
  const { isTablet, isDesktop } = useMediaQuery()

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: vacancyFormSchema,
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

  const btnSize =
    (isDesktop && { width: '282px', height: '56px' }) ||
    (isTablet && { width: '216px', height: '48px' }) ||
    {}

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

  const handleChangeValidTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e)
    formik.validateField('validTime')
  }

  const handleBlurValidTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleBlur(e)
    formik.validateField('validTime')
  }

  const [arr1, arr2] = forMap.reduce(
    (acc, it, indx) => {
      const [acc1, acc2] = acc
      return indx <= 8 ? [[...acc1, it], acc2] : [acc1, [...acc2, it]]
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
        />
      )
    })

  return (
    <section className={s.section}>
      <FormikProvider value={formik}>
        <Form className={s.container}>
          <h1 className={s.title}>
            {location === '/createVacancy' ? cVacancyData.title : cVacancyData.titleEdit}
          </h1>
          <div className={s['content-box']}>
            {inputMap(arr1)}
            <div className={`${s['input-block']}`}>
              <h2 className={s['input-block__title']}>{cVacancyData.validTitle}</h2>
              <Field
                as={InputMask}
                mask="99.99.9999"
                slotChar="дд.мм.рррр"
                className={`${formik.errors.validTime && formik.touched.validTime ? `${s['input-block__input_error']}` : ''} ${s['input-block__input']} ${s['input-block__input_valid-time']} ${s['align-start']}`}
                name={'validTime'}
                id={'validTime'}
                required
                placeholder={cVacancyData.validPh}
                onChange={handleChangeValidTime}
                onBlur={handleBlurValidTime}
                value={formik.values.validTime}
                type="text"
              />
              <ErrorMessage className={s.err} name={'validTime'} component="div" />
            </div>
            {inputMap(arr2)}
          </div>
          <div className={s['input-block__btn-block']}>
            <Button
              buttonClasses="outlineBtn fullСoverage"
              type="submit"
              styleBtn={btnSize}
              name={location === '/createVacancy' ? cVacancyData.btnSave : cVacancyData.btnCancel}
            />
            <div className={s.gap} />
            <Button
              buttonClasses="filledBtn fullСoverage"
              type="submit"
              styleBtn={btnSize}
              name={
                location === '/createVacancy' ? cVacancyData.btnPublish : cVacancyData.btnSaveChange
              }
            />
          </div>
        </Form>
      </FormikProvider>
    </section>
  )
}

export default CreateVacancy
