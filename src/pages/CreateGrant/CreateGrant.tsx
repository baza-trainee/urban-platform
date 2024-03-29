import React from 'react'
import { useLocation } from 'react-router-dom'
import { FormikProvider, Form, useFormik, Field, ErrorMessage } from 'formik'
import { AutoCompleteChangeEvent, AutoCompleteSelectEvent } from 'primereact/autocomplete'
import { InputMask } from 'primereact/inputmask'

import s from './CreateGrant.module.scss'

import CustomInputBlock from '../../components/CustomInputBlock/CustomInputBlock'
import Button from '../../components/Button/Button'

import { FormValues, cGrantData, forMap, grantFormSchema, initialValues } from './createGrantData'

const CreateGrant: React.FC = () => {
  const location = useLocation().pathname

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

  const [arr1, arr2] = forMap.reduce(
    (acc, it, indx) => {
      const [acc1, acc2] = acc
      return indx <= 3 ? [[...acc1, it], acc2] : [acc1, [...acc2, it]]
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
          valueRadioInput={formik.values.grantTypeText}
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
            {location === '/createGrant' ? cGrantData.title : cGrantData.editTitle}
          </h1>
          <div className={s['content-box']}>
            {inputMap(arr1)}
            <div className={`${s['input-block']}`}>
              <h2 className={s['input-block__title']}>{cGrantData.timeTitleInput}</h2>
              <div className={s['align-start']}>
                <span className={s['input-block__span']}>З</span>
                <div className={s.column}>
                  <Field
                    as={InputMask}
                    mask="99.99.9999"
                    slotChar="дд.мм.рррр"
                    name={'timeFrom'}
                    id={'timeFrom'}
                    required
                    className={`${formik.errors.timeFrom && formik.touched.timeFrom ? `${s['input-block__input_error']}` : ''} ${s['input-block__input']} ${s['input-block__input_time']}`}
                    placeholder={cGrantData.timeInputFrom}
                    onChange={(e: AutoCompleteChangeEvent) => {
                      formik.handleChange(e)
                      formik.validateField('timeFrom')
                    }}
                    value={formik.values.timeFrom}
                  />
                  <ErrorMessage
                    className={`${s.err} ${s.err_time}`}
                    name={'timeFrom'}
                    component="div"
                  />
                </div>
                <span className={s['input-block__span']}>До</span>
                <div className={s.column}>
                  <Field
                    as={InputMask}
                    mask="99.99.9999"
                    slotChar="дд.мм.рррр"
                    name={'timeTo'}
                    id={'timeTo'}
                    required
                    className={`${formik.errors.timeTo && formik.touched.timeTo ? `${s['input-block__input_error']}` : ''} ${s['input-block__input']} ${s['input-block__input_time']}`}
                    placeholder={cGrantData.timeInputTo}
                    onChange={(e: AutoCompleteChangeEvent) => {
                      formik.handleChange(e)
                      formik.validateField('timeTo')
                    }}
                    value={formik.values.timeTo}
                  />
                  <ErrorMessage
                    className={`${s.err} ${s.err_time}`}
                    name={'timeTo'}
                    component="div"
                  />
                </div>
              </div>
            </div>
            {inputMap(arr2)}
          </div>
          <div className={s['input-block__btn-block']}>
            <Button
              buttonClasses="outlineBtn fullСoverage"
              type="submit"
              name={
                location === '/createGrant' ? cGrantData.btnSaveDraft : cGrantData.btnCancelEdit
              }
            />
            <div className={s.gap} />
            <Button
              buttonClasses="filledBtn fullСoverage"
              type="submit"
              name={location === '/createGrant' ? cGrantData.btnPublish : cGrantData.btnSaveEdit}
            />
          </div>
        </Form>
      </FormikProvider>
    </section>
  )
}

export default CreateGrant
