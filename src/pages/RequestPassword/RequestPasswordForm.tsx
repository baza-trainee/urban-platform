import { useFormik } from 'formik'
// import { useNavigate } from 'react-router'
import s from './RequestPasswordForm.module.scss'
// import ModalBack from 'src/components/ModalBack/ModalBack.tsx';
import Button from '../../components/Button/Button'
import { requestPasswSchema } from '../../schemas/requestPassword.schema.ts'
import clsx from 'clsx'
import { useState } from 'react'
import { useRequestPassMutation } from '../../store/slice/authApiSlice.ts'

interface InitValuesRequestPassw {
  email: string
}

// const btnStyle = { width: '100%' }
const subtitleText = {
  textStart1:
    'Введіть емейл, вказаний при реєстрації  і ми надішлемо Вам лист із посиланням для відновлення паролю',
  //   textStart2: 'Якщо у вас є акаунт, вам на email буде надіслано посилання для відновлення пароля',
  textResponse1:
    'Ми надіслали Вам лист з інформацією про відновлення паролю на пошту example@example.com',
  textResponse2: 'Не отримали лист?  Перевірте папку “Спам” або натисніть:'
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

  return (
    // <ModalBack handleCloseModal={() => navigate('/')}>
    <div className={s.wrapper}>
      <div className={s.pageTitle}>
        <span className={s.titleLeft}>Головна</span>
        <span className={s.titleDot}>&#183;</span>
        <span className={s.titleRight}>Відновлення паролю</span>
        {/* <span className={s.actionHidden}>{action}</span> */}
      </div>

      <main className={s.main}>
        <div className={s.mainGreetings}>
          <div className={s.logoWrap}>{/* <LogoGreeting /> */}</div>
        </div>

        <div className={s.mainTitle}>
          <h2>Забули пароль?</h2>
        </div>

        <div className={s.formWrap}>
          {/* <h2 className={s.title}>Відновлення пароля</h2> */}
          <p className={clsx(s.subtitle, isSuccessResponse && s.responseText)}>
            {!isSuccessResponse ? (
              <>
                <span>{subtitleText.textStart1}</span>
                {/* <span>{subtitleText.textStart2}</span> */}
              </>
            ) : (
              <>
                // subtitleText.textResponse
                <span>{subtitleText.textResponse1}</span>
                <span>{subtitleText.textResponse2}</span>
              </>
            )}
          </p>
          <form className={s.login__form} onSubmit={handleSubmit}>
            {/* <section className={`${s.inputs} slideInLeft`}> */}
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
                      errors.email && touched.email && s.error,
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
                  {errors.email && touched.email && <p className={s.errorMsg}>{errors.email}</p>}
                </div>
              </div>

              <div className={s.btnWrap}>
                <Button
                  buttonClasses={'filledBtn'}
                  type={'submit'}
                  name={'Надіслати'}
                  styleBtn={{ width: '100%' }}
                  disabled={!isValid || !values.email || isSuccessResponse}
                />
              </div>

              <div className={s.btnWrap}>
                <Button
                  buttonClasses={'outlineBtn header_tablet'}
                  component={'link'}
                  to={''}
                  name={'Створити проєкт'}
                  onClick={() => (window.location.href = '/registration')}
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
    // </ModalBack>
  )
}

export default RequestPasswordForm
