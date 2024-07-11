import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { Formik, FormikHelpers } from 'formik'

import Button from '../Button/Button.tsx'
import s from './ConfirmPasswordForm.module.scss'
// import confpassData from './confpassData.json'
import { confirmPasswSchema } from '../../schemas/confirmPassword.schema.ts'
import ModalMsg from '../ModalMsg/ModalMsg.tsx'
// import { useActions } from '../../hooks/useActions'
import { useResetPassMutation } from '../../store/slice/authApiSlice.ts'
import InputPassword from './InputPassword/InputPassword.tsx'

interface InitValuesConfirmPassw {
  password: string
  password_confirm: string
}

const initialValues: InitValuesConfirmPassw = {
  password: '',
  password_confirm: ''
}

const ConfirmPasswordForm = () => {
  const [isSuccessResponse, setIsSuccessResponse] = useState<boolean>(false)
  // const navigate = useNavigate()
  // const { showLogin } = useActions()
  const location = useLocation()
  const [resetPass] = useResetPassMutation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get('token')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('email')
    if (data) {
      setEmail(data)
    }
  }, [])

  // const handleCloseModalMsg = () => {
  //   setIsSuccessResponse(false)
  //   navigate('/')
  // }

  // const handleNavigateToLogin = () => {
  //   navigate('/')

  //   setTimeout(() => {
  //     showLogin(true)
  //   })
  // }

  const onSubmitForm = async (
    values: InitValuesConfirmPassw,
    actions: FormikHelpers<InitValuesConfirmPassw>
  ) => {
    const data = {
      token,
      password: values.password
    }
    await resetPass(data).unwrap()
    setIsSuccessResponse(true)
    actions.resetForm()
    localStorage.removeItem('email')
  }

  return (
    <div className={s.wrapper}>
      <div className={s.pageTitle}>
        <span className={s.titleLeft}>Головна</span>
        <span className={s.titleDot}>&#183;</span>
        <span className={s.titleRight}>Відновлення паролю</span>
        {/* <span className={s.actionHidden}>{action}</span> */}
      </div>

      <main className={`${s.main} fadeIn`}>
        <div className={s.mainGreetings}>
          <div className={s.logoWrap}>{/* <LogoGreeting /> */}</div>
        </div>
        <div className={s.mainTitle}>
          <h2>Cкинути пароль</h2>
        </div>

        <div className={s.formWrap}>
          <p className={s.subtitle}>Оберіть новий пароль для свого аккаунту</p>
          <Formik
            initialValues={initialValues}
            // validationSchema={LoginSchema}
            validationSchema={confirmPasswSchema(email || '')}
            onSubmit={onSubmitForm}
            // validateOnChange={true}
            // validateOnBlur={true}
            // enableReinitialize={true}
          >
            {({ handleSubmit, isValid, values }) => (
              <form className={s.login__form} onSubmit={handleSubmit}>
                {/* <div className={s.mainForm}> */}
                <section className={s.inputs}>
                  <InputPassword
                    name="password"
                    label="Новий пароль"
                    title={
                      'Пароль має містити від 8 до 64 символів (латинські літери нижнього, верхнього регістру, цифри, та @, #, $, %, ^, &, +, =, !)'
                    }
                  />

                  <InputPassword name="password_confirm" label="Підтвердити пароль" />

                  <div className={s.checkboxes}>
                    <label className={`${s.check} ${s.option}`}>
                      <input
                        type="checkbox"
                        className={s.checkInput}
                        // control="checkbox"
                        name="checkbox"
                        id="checkbox"
                        // checked={values.checkbox}
                        // onChange={() => handleCheckboxChange(index)}
                      />
                      <span className={s.checkBox}></span>
                      <span className={s.checkboxText}>Запам&apos;ятати мене</span>
                    </label>
                  </div>

                  <div className={s.btnWrap}>
                    <Button
                      buttonClasses={'filledBtn'}
                      type={'submit'}
                      name={'Підтвердити новий пароль'}
                      styleBtn={{ width: '100%' }}
                      disabled={!isValid || !(values.password && values.password_confirm)}
                    />
                  </div>
                </section>
              </form>
            )}
          </Formik>
        </div>

        {isSuccessResponse && (
          <ModalMsg
            // handleCloseModal={handleCloseModalMsg}
            title="Ваш пароль успішно змінено!"
            // handleBtnClick={handleNavigateToLogin}
          />
        )}
      </main>
    </div>
  )
}

export default ConfirmPasswordForm
