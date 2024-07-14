import { useFormik } from 'formik'
// import { useNavigate } from 'react-router'
import s from './RequestPasswordForm.module.scss'
import Button from '../Button/Button.tsx'
import { requestPasswSchema } from '../../schemas/requestPassword.schema.ts'
import clsx from 'clsx'
import { useState } from 'react'
import { useRequestPassMutation } from '../../store/slice/authApiSlice.ts'

interface InitValuesRequestPassw {
  email: string
}

const initialValues: InitValuesRequestPassw = {
  email: ''
}

const RequestPasswordForm = () => {
  const [isSuccessResponse, setIsSuccessResponse] = useState<boolean>(false)
  //   const navigate = useNavigate()
  const [requestPass] = useRequestPassMutation()

  const { handleSubmit, handleBlur, handleChange, values, errors, touched, isValid } = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: requestPasswSchema,
    onSubmit: async (values, actions) => {
      await requestPass(values).unwrap()
      setIsSuccessResponse(true)
      localStorage.setItem('email', values.email)
      actions.resetForm()
    }
  })

  const subtitleText = {
    textStart1:
      'Введіть емейл, вказаний при реєстрації  і ми надішлемо Вам лист із посиланням для відновлення паролю',
    textResponse1: `Ми надіслали Вам лист з інформацією про відновлення паролю на пошту ${values.email}`,
    textResponse2: 'Не отримали лист?  Перевірте папку “Спам” або натисніть:'
  }

  return (
    <div className={s.wrapper}>
      <div className={s.pageTitle}>
        <span className={s.titleLeft}>Головна</span>
        <span className={s.titleDot}>&#183;</span>
        <span className={s.titleRight}>Відновлення паролю</span>
        {/* <span className={s.actionHidden}>{action}</span> */}
      </div>

      <main className={`${s.main} ${!isSuccessResponse ? s.fadeIn : s.fadeOut}`}>
        <div className={s.mainGreetings}>
          <div className={s.logoWrap}>{/* <LogoGreeting /> */}</div>
        </div>

        <div className={s.mainTitle}>
          {!isSuccessResponse ? (
            <>
              <h2>Забули пароль?</h2>
            </>
          ) : (
            <>
              <h2>Перевірте свою пошту</h2>
            </>
          )}
        </div>

        <div className={s.formWrap}>
          <p className={clsx(s.subtitle, isSuccessResponse && s.responseText)}>
            {!isSuccessResponse ? (
              <>
                <span>{subtitleText.textStart1}</span>
              </>
            ) : (
              <>
                <span>{subtitleText.textResponse1}</span>
                <span>{subtitleText.textResponse2}</span>
              </>
            )}
          </p>
          <form className={s.login__form} onSubmit={handleSubmit}>
            <section className={s.inputs}>
              <div className={s.inputWrapper}>
                <label
                  className={clsx(s.label, errors.email && touched.email && s.errorColor)}
                  htmlFor="email"
                >
                  Електронна адреса
                </label>
                <div className={s.inputContainer}>
                  <input
                    type="email"
                    className={clsx(
                      s.input,
                      values.email && s.active,
                      errors.email && touched.email && s.input_error,
                      isSuccessResponse && s.disabled
                    )}
                    placeholder="example@example.com"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSuccessResponse}
                  />
                  {errors.email && touched.email && (
                    <p className={s.errorMessage}>{errors.email}</p>
                  )}
                </div>
              </div>

              <div className={s.btnWrap}>
                <Button
                  buttonClasses={'filledBtn'}
                  type={'submit'}
                  name={!isSuccessResponse ? 'Надіслати' : 'Надіслати ще раз'}
                  styleBtn={{ width: '100%', height: '100%' }}
                  disabled={!isValid || !values.email || isSuccessResponse}
                />
              </div>

              <div className={s.btnWrap}>
                <Button
                  buttonClasses={'outlineBtn header_tablet'}
                  component={'link'}
                  to={''}
                  name={'Повернутись до входу'}
                  onClick={() => (window.location.href = '/login')}
                  styleBtn={{ width: '100%' }}
                  handleMouseEnter={() => {}}
                  handleMouseLeave={() => {}}
                />
              </div>
            </section>
          </form>
        </div>
      </main>
    </div>
  )
}

export default RequestPasswordForm
