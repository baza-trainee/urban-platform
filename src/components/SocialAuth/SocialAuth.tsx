import React from 'react'
import s from './SocialAuth.module.scss'
import AuthButton from '../../components/AuthButton/AuthButton'
import Google from '../../assets/icons/regpage/GoogleAuth'
import Facebook from '../../assets/icons/regpage/FacebookAuth'
import Apple from '../../assets/icons/regpage/AppleAuth'
// import Button from '../../components/Button/Button'

// interface SocialAuthProps {
//   titleType?: string
// }

// const SocialAuth: React.FC<SocialAuthProps> = ({ titleType }) => {
const SocialAuth: React.FC = () => {
  return (
    <>
      <div className={s.loginAlt}>
        <div className={s.loginAlternative}>
          <span className={s.loginAlernatLine}></span>
          <span>або зареєструйтесь за допомогою</span>
          <span className={s.loginAlernatLine}></span>
        </div>

        <div className={s.loginAlternatBtnBox}>
          <AuthButton
            title={'Увійти через Google'}
            buttonClasses={'authBtn'}
            type={'button'}
            children={<Google />}
          />
          <AuthButton
            title={'Увійти через Facebook'}
            buttonClasses={'authBtn'}
            type={'button'}
            // children={<Facebook className={s.loginAuthFacebookIcon} />}
            children={<Facebook />}
          />
          <AuthButton
            title={'Увійти через Apple'}
            buttonClasses={'authBtn'}
            type={'button'}
            children={<Apple />}
          />
        </div>
      </div>
    </>
  )
}

export default SocialAuth
