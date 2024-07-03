import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { Formik, FormikHelpers, useField } from 'formik'
import clsx from 'clsx'

import Button from '../Button/Button.tsx'
import Eye from '../Eye/Eye.tsx'
import s from './ConfirmPasswordForm.module.scss'
// import { useLoginForm } from '../../hooks/useLoginForm'
// import confpassData from './confpassData.json'
import { confirmPasswSchema } from '../../schemas/confirmPassword.schema.ts'
import ModalMsg from '../ModalMsg/ModalMsg.tsx'
// import { useActions } from '../../hooks/useActions'
import { useResetPassMutation } from '../../store/slice/authApiSlice.ts'

interface InitValuesConfirmPassw {
  password: string
  password_confirm: string
}

interface InputPasswordProps {
  // label: string
  // placeholder?: string
  name: string
  // title?: string
}

// interface FormValues {
//   password: string
//   password_confirm: string
// }

const initialValues: InitValuesConfirmPassw = {
  password: '',
  password_confirm: ''
}

const ConfirmPasswordForm = ({ name }: InputPasswordProps) => {
  const [isSuccessResponse, setIsSuccessResponse] = useState<boolean>(false)
  // const navigate = useNavigate()
  // const { showLogin } = useActions()
  const location = useLocation()
  const [resetPass] = useResetPassMutation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get('token')
  const [email, setEmail] = useState('')

  const [fields, meta] = useField(name)

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

  const [onShowPass, setOnShowPass] = useState<boolean>(false)
  // const { errors, touched, validateField, handleChange, handleBlur } =
  //   useFormikContext<FormValues>()

  return (
    <div className={s.wrapper}>
      <div className={s.pageTitle}>
        <span className={s.titleLeft}>Головна</span>
        <span className={s.titleDot}>&#183;</span>
        <span className={s.titleRight}>Відновлення паролю</span>
        {/* <span className={s.actionHidden}>{action}</span> */}
      </div>

      <main className={`${s.main} ${s.fadeIn}`}>
        <div className={s.mainGreetings}>
          <div className={s.logoWrap}>{/* <LogoGreeting /> */}</div>
        </div>
        <div className={s.mainTitle}>
          <h2>Cкинути пароль</h2>
        </div>

        <Formik
          initialValues={initialValues}
          // validationSchema={LoginSchema}
          validationSchema={confirmPasswSchema(email || '')}
          onSubmit={onSubmitForm}
          // validateOnChange={true}
          // validateOnBlur={true}
          // enableReinitialize={true}
        >
          {/* {({ isSubmitting, isValid }) => {
            return ( */}
          {/* <Form className={s.login__form}> */}
          {({ handleSubmit, isValid, values }) => (
            <form className={s.login__form} onSubmit={handleSubmit}>
              <div className={s.mainForm}>
                <section className={s.inputs}>
                  <div className={s.inputWrapper}>
                    <label
                      htmlFor="password"
                      // className={
                      //   errors.password && touched.password ? clsx(s.label, s.label_error) : s.label
                      // }
                      className={clsx(s.label, meta.error && meta.touched && s.errorColor)}
                    >
                      Новий пароль
                    </label>

                    <div className={s.inputManipulPass}>
                      <input
                        id="password"
                        name="password"
                        autoComplete="password"
                        type={onShowPass ? 'text' : 'password'}
                        // className={
                        //   errors.password && touched.password
                        //     ? clsx(s.input, s.input_paddingR, s.input_error)
                        //     : clsx(s.input, s.input_paddingR)
                        // }
                        className={clsx(
                          s.input,
                          fields.value && s.active,
                          meta.error && meta.touched && s.error
                        )}
                        // placeholder="Ввести пароль"
                        // onChange={(e) => {
                        //   // setLoginError(null)
                        //   handleChange(e)
                        //   validateField('password')
                        // }}
                        // onBlur={(e) => {
                        //   handleBlur(e)
                        //   validateField('password')
                        // }}
                      />
                    </div>
                    <div className={s.eye}>
                      <Eye
                        onClickShowPass={(boolean: boolean) => {
                          setOnShowPass(boolean)
                        }}
                        onShowPass={onShowPass}
                      />
                    </div>

                    {/* {errors.password && touched.password ? (
                      <div className={s.errorMessage}>{errors.password}</div>
                    ) : null} */}
                    {meta.error && meta.touched && <div className={s.errorMsg}>{meta.error}</div>}
                  </div>

                  <div className={s.inputWrapper}>
                    <label
                      htmlFor="password_confirm"
                      className={
                        errors.password_confirm && touched.password_confirm
                          ? clsx(s.label, s.label_error)
                          : s.label
                      }
                    >
                      {/* {labelPass} */}
                      Підтвердити пароль
                    </label>

                    <div className={s.inputManipulPass}>
                      <input
                        id="password_confirm"
                        name="password_confirm"
                        autoComplete="password_confirm"
                        type={onShowPass ? 'text' : 'password'}
                        className={
                          errors.password_confirm && touched.password_confirm
                            ? clsx(s.input, s.input_paddingR, s.input_error)
                            : clsx(s.input, s.input_paddingR)
                        }
                        // placeholder="Ввести пароль"
                        onChange={(e) => {
                          // setLoginError(null)
                          handleChange(e)
                          validateField('password_confirm')
                        }}
                        onBlur={(e) => {
                          handleBlur(e)
                          validateField('password_confirm')
                        }}
                      />
                    </div>
                    <div className={s.eye}>
                      <Eye
                        onClickShowPass={(boolean: boolean) => {
                          setOnShowPass(boolean)
                        }}
                        onShowPass={onShowPass}
                      />
                    </div>

                    {errors.password_confirm && touched.password_confirm ? (
                      <div className={s.errorMessage}>{errors.password_confirm}</div>
                    ) : null}
                  </div>

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
                    {/* <ErrorMessage className={css.error} name="checkbox" component="div" /> */}
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

                  {/* {loginError && <div className={css.errorLogin}>{loginError}</div>} */}
                  {/* <div className={css.errorLogin}>loginError</div> */}
                </section>
              </div>
            </form>
          )}
          {/* )
          }} */}
        </Formik>

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
