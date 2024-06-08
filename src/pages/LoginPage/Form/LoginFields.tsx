import { useState } from 'react'
import { useFormikContext } from 'formik'
import clsx from 'clsx'

import css from './LoginFields.module.scss'
import Button from '../../../components/Button/Button'
import Eye from '../../../components/Eye/Eye'
import './animations.scss'

interface TLoginFieldsProps {
  labelEmail: string
  labelPass: string
  // loginError: string | null
  // setLoginError: React.Dispatch<React.SetStateAction<string | null>>
}

interface FormValues {
  loginEmail: string
  loginPassword: string
}

// const LoginFields = ({ labelEmail, labelPass, loginError, setLoginError }: TLoginFieldsProps) => {
const LoginFields = ({ labelEmail, labelPass }: TLoginFieldsProps) => {
  // const LoginFields = () => {
  const [onShowPass, setOnShowPass] = useState<boolean>(false)
  const { errors, touched, validateField, handleChange, handleBlur } =
    useFormikContext<FormValues>()

  return (
    <>
      <section className={`${css.inputs} slideInLeft`}>
        <div className={css.inputWrapper}>
          <label
            htmlFor="loginEmail"
            className={
              errors.loginEmail && touched.loginEmail ? clsx(css.label, css.label_error) : css.label
            }
          >
            {labelEmail}
          </label>
          <div>
            <input
              id="loginEmail"
              name="loginEmail"
              type="email"
              className={
                errors.loginEmail && touched.loginEmail
                  ? clsx(css.input, css.input_error)
                  : css.input
              }
              placeholder="example@example.com"
              onChange={(e) => {
                // setLoginError(null)
                handleChange(e)
                validateField('loginEmail')
              }}
              onBlur={(e) => {
                handleBlur(e)
                validateField('loginEmail')
              }}
            />
            {errors.loginEmail && touched.loginEmail ? (
              <div className={css.errorMessage}>{errors.loginEmail}</div>
            ) : null}
          </div>
        </div>

        <div className={css.inputWrapper}>
          <label
            htmlFor="loginPassword"
            className={
              errors.loginPassword && touched.loginPassword
                ? clsx(css.label, css.label_error)
                : css.label
            }
          >
            {labelPass}
          </label>

          <div className={css.inputManipulPass}>
            <input
              id="loginPassword"
              name="loginPassword"
              autoComplete="password"
              type={onShowPass ? 'text' : 'password'}
              className={
                errors.loginPassword && touched.loginPassword
                  ? clsx(css.input, css.input_paddingR, css.input_error)
                  : clsx(css.input, css.input_paddingR)
              }
              placeholder="Ввести пароль"
              onChange={(e) => {
                // setLoginError(null)
                handleChange(e)
                validateField('loginPassword')
              }}
              onBlur={(e) => {
                handleBlur(e)
                validateField('loginPassword')
              }}
            />
          </div>
          <div className={css.eye}>
            <Eye
              onClickShowPass={(boolean: boolean) => {
                setOnShowPass(boolean)
              }}
              onShowPass={onShowPass}
            />
          </div>

          {errors.loginPassword && touched.loginPassword ? (
            <div className={css.errorMessage}>{errors.loginPassword}</div>
          ) : null}
        </div>

        <div className={css.checkboxes}>
          <label className={`${css.check} ${css.option}`}>
            <input
              type="checkbox"
              className={css.checkInput}
              // control="checkbox"
              name="checkbox"
              id="checkbox"
              // checked={values.checkbox}
              // onChange={() => handleCheckboxChange(index)}
            />
            <span className={css.checkBox}></span>
            <span className={css.checkboxText}>Запам&apos;ятати мене</span>
          </label>
          {/* <ErrorMessage className={css.error} name="checkbox" component="div" /> */}

          <div>
            <Button
              component="link"
              type="button"
              buttonClasses={'link'}
              to={''}
              name="Забули пароль?"
              onClick={() => (window.location.href = '/registration')}
              handleMouseEnter={() => {}}
              handleMouseLeave={() => {}}
              styleBtn={{ width: '100%' }}
            />
          </div>
        </div>

        <div className={css.btnWrap}>
          <Button
            buttonClasses={'filledBtn'}
            type={'submit'}
            name={'Увійти'}
            styleBtn={{ width: '100%' }}
          />
        </div>

        {/* {loginError && <div className={css.errorLogin}>{loginError}</div>} */}
        {/* <div className={css.errorLogin}>loginError</div> */}
      </section>
    </>
  )
}

export default LoginFields
