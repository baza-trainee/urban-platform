import { useState } from 'react'
import { FormikProvider, Form, useFormik } from 'formik'

import s from './VolunteerOrgProfileEdit.module.scss'

import {
  FormValues,
  dVoluntProfEditData,
  grantFormSchema,
  initialValues,
  sVoluntProfEditData
} from './voluntProfEditData'
import { dOrgProfEditData, sOrgProfEditData, userData } from './orgProfEditData'
import routs from '../../routes/NavLinks'
import useMediaQuery from '../../hooks/useMediaQuery'
import { projectData } from '../VolunteerOrgPage/volunteerData'

import Button from '../../components/Button/Button'
import ProfileCards from '../../components/ProfileCards/ProfileCards'
import InputBlock from './components/InputBlock'
import BtnShowCards from './components/BtnShowCards'

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

  const isVoluntProfile =
    location.pathname.split('/')[1] === routs.volunteerProfileEdit.split('/')[1]

  const dData = isVoluntProfile ? dVoluntProfEditData : dOrgProfEditData
  const cardsData = isVoluntProfile ? projectData : userData

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 3)
  }
  const profileCardsData = isMobile ? cardsData : cardsData.slice(0, visibleCount)
  const isShowMoreBtn = cardsData.length > visibleCount

  return (
    <FormikProvider value={formik}>
      <section className={s.section}>
        <Form className={s.container} onSubmit={formik.handleSubmit}>
          <div className={s['content-block']}>
            <div className={s['content-block__title']}>
              <h1>
                {isVoluntProfile
                  ? `${sVoluntProfEditData.firstName} ${sVoluntProfEditData.lastName}`
                  : `${sOrgProfEditData.orgTitle}`}
              </h1>
            </div>
            <InputBlock
              formik={formik}
              isMobile={isMobile}
              aboutTitle={dData.aboutTitle}
              isVoluntProfile={isVoluntProfile}
            />
            <div className={s['content-block__btn']}>
              <Button
                buttonClasses="outlineBtn fullСoverage"
                type="submit"
                name={dData.btnCnc}
                styleBtn={{ width: '281.5px', height: '56px' }}
              />
              <Button
                buttonClasses="filledBtn fullСoverage"
                type="submit"
                name={dData.btnSave}
                styleBtn={{ width: '281.5px', height: '56px' }}
              />
            </div>
          </div>
          <div className={s['profile-block']}>
            <div>
              <h2 className={s['profile-block__title']}>{dData.reqTitle}</h2>
            </div>
            <ProfileCards
              profileMap={profileCardsData}
              type={'user'}
              mobile={!isMobile}
              buttonCheck
              checkBtnTitle="Запросити"
            />
            <BtnShowCards
              isShowMoreBtn={isShowMoreBtn}
              isMobile={isMobile}
              handleShowMore={handleShowMore}
              btnShowMore={dData.btnShowMore}
            />
          </div>
        </Form>
      </section>
    </FormikProvider>
  )
}

export default VolunteerOrgProfileEdit
