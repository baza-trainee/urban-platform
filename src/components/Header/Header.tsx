import { useState } from 'react'
import { Link } from 'react-router-dom'

import s from './Header.module.scss'

import routs from '../../routes/NavLinks'
import useMediaQuery from '../../hooks/useMediaQuery'

import HeaderButtonBlock from './components/HeaderButtonBlock'
import ChoiceBlock from './components/ChoiceBlock'

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [isLogIn, setIsLogIn] = useState(false)
  const [isMessage, setIsMessage] = useState(false)

  const { isMobile, isDesktop } = useMediaQuery()
  console.log(isMobile, isDesktop)

  const handleClickBurger = () => {
    setIsActive(!isActive)
  }
  const handleClickLogIn = () => {
    setIsLogIn(!isLogIn)
  }
  const handleClickMessage = () => {
    setIsMessage(!isMessage)
  }

  return (
    <header className={s.header}>
      <div className={`${s.headerGrad} ${isActive && s.activeSection}`}>
        <section className={s.section}>
          <div className={s.container}>
            <Link to={routs.home} className={s.logoContainer}>
              <img className={s.logo} src="./images/logo/header-logo.svg" alt="headerLogo" />
            </Link>
            <HeaderButtonBlock
              isMobile={isMobile}
              isDesktop={isDesktop}
              isActive={isActive}
              isLogIn={isLogIn}
              isMessage={isMessage}
              handleClickBurger={handleClickBurger}
              handleClickLogIn={handleClickLogIn}
              handleClickMessage={handleClickMessage}
            />
          </div>
        </section>
      </div>
      <ChoiceBlock isActive={isActive} />
    </header>
  )
}

export default Header
