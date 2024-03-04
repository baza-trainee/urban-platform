import { Link } from 'react-router-dom'

import s from '../Header.module.scss'

import routs from '../../../routes/NavLinks'

import BurgerClosed from '../../../assets/icons/header/BurgerClosed'
import BurgerMenu from '../../../assets/icons/header/BurgerMenu'
import LogOut from '../../../assets/icons/header/LogOut'
import LogIn from '../../../assets/icons/header/LogIn'
import NewMessage from '../../../assets/icons/header/NewMessage'
import Message from '../../../assets/icons/header/Message'
import Button from '../../Button/Button'

interface HeaderButtonBlockProps {
  isMobile?: boolean
  isDesktop?: boolean
  isActive?: boolean
  isLogIn?: boolean
  isMessage?: boolean
  handleClickBurger?: () => void
  handleClickLogIn?: () => void
  handleClickMessage?: () => void
  handleClick?: () => void
}

const HeaderButtonBlock: React.FC<HeaderButtonBlockProps> = ({
  isMobile,
  isDesktop,
  isActive,
  isLogIn,
  isMessage,
  handleClickBurger,
  handleClickLogIn,
  handleClickMessage
}) => {
  const iconSize = isMobile || isDesktop ? { width: 32, height: 32 } : { width: 24, height: 24 }

  return (
    <div className={s.buttonBlock}>
      <div className={s.iconButtonBlock}>
        <Link to={routs.messages} className={s.iconButton} onMouseEnter={handleClickMessage}>
          {isMessage ? (
            <NewMessage width={iconSize.width} height={iconSize.height} />
          ) : (
            <Message width={iconSize.width} height={iconSize.height} />
          )}
        </Link>
        <Link to={routs.userProfile} className={s.iconButton} onMouseEnter={handleClickLogIn}>
          {isLogIn ? (
            <LogOut width={iconSize.width} height={iconSize.height} />
          ) : (
            <LogIn width={iconSize.width} height={iconSize.height} />
          )}
        </Link>
      </div>
      {!isMobile && (
        <Button
          buttonClasses={'outlineBtn header_tablet'}
          component={'link'}
          name={'Створити проєкт'}
          to={routs.createProject}
          styleBtn={{ width: '100%' }}
          handleMouseEnter={() => {}}
          handleMouseLeave={() => {}}
        />
      )}
      <button className={s.burgerMenu} type="button" onClick={handleClickBurger}>
        {isMobile &&
          (isActive ? (
            <BurgerClosed width={iconSize.width} height={iconSize.height} />
          ) : (
            <BurgerMenu width={iconSize.width} height={iconSize.height} />
          ))}
      </button>
    </div>
  )
}

export default HeaderButtonBlock
