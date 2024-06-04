import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import s from './LiginIndex.module.scss'
import { LoginSchema } from './loginSchema'
import Button from '../../components/Button/Button'
import SocialAuth from '../../components/SocialAuth/SocialAuth'
import LoginFields from './Form/LoginFields'
import { useLoginForm } from '../../hooks/useLoginForm'

const Login: React.FC = () => {
  // const { handleSubmit, setLoginError, loginError, initialValues } = useLoginForm()
  const { handleSubmit, initialValues } = useLoginForm()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.pageTitle}>
        <span className={s.titleLeft}>Головна</span>
        <span className={s.titleDot}>&#183;</span>
        <span className={s.titleRight}>Увійти</span>
        {/* <span className={s.actionHidden}>{action}</span> */}
      </div>
      <main className={s.main}>
        <div className={s.mainGreetings}>
          <div className={s.logoWrap}>{/* <LogoGreeting /> */}</div>
          <p className={s.greetingsText}>Раді бачити Вас на нашій платформі!</p>
        </div>
        <div className={s.mainTitle}>
          <h2>Увійти</h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
          validateOnChange={true}
          validateOnBlur={true}
          enableReinitialize={true}
        >
          {/* {({ isSubmitting, isValid }) => {
            return ( */}
          <Form className={s.login__form}>
            <div className={s.mainForm}>
              <LoginFields
                labelEmail="Електронна адреса"
                labelPass="Пароль"
                // loginError={loginError}
                // setLoginError={setLoginError}
              />
            </div>

            <SocialAuth />
          </Form>
          {/* )
          }} */}
        </Formik>

        <div className={s.signinLink}>
          <div className={s.isProfile}>Немає профілю?</div>
          <div>
            <Button
              component="link"
              type="button"
              buttonClasses={'link'}
              to={''}
              name="Зареєструйтесь"
              onClick={() => (window.location.href = '/registration')}
              handleMouseEnter={() => {}}
              handleMouseLeave={() => {}}
              styleBtn={{ width: '100%' }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
