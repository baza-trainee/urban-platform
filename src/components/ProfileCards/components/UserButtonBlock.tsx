import s from '../ProfileCards.module.scss'
import IconLike from '../../../assets/icons/IconLike'
import Button from '../../Button/Button'
import useMediaQuery from '../../../hooks/useMediaQuery'

interface IProps {
  isUser: boolean
  mobile?: boolean
  likeBtnClass: string
  checkBtnTitle?: string
  likes: string
}

const UserButtonBlock: React.FC<IProps> = ({
  isUser,
  mobile,
  likeBtnClass,
  checkBtnTitle,
  likes
}) => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery()
  const userBtnLike = isDesktop
    ? { width: '164px' }
    : isTablet
    ? { width: '108px', height: '48px' }
    : { width: '100%', height: '56px' }
  const userMobileBtnLike = isDesktop
    ? { width: '75px', height: '56px', padding: '16px 8px' }
    : isTablet
    ? { width: '184px', height: '40px' }
    : {}
  const userMobileBtnReq = isDesktop
    ? { width: '167px' }
    : isTablet
    ? { width: '184px', height: '40px' }
    : {}
  const userBtnReq = isMobile ? { width: '100%', height: '55px' } : {}
  return (
    <>
      {isUser && (
        <div
          className={`${s['profile-block__btns']} ${mobile && s['profile-block__btns_mobile']} ${
            mobile && isUser && s['profile-block__btns_mobile_user']
          } ${isUser && s['profile-block__btns_user']}`}
        >
          <Button
            buttonClasses={likeBtnClass}
            name={likes}
            startIcon={<IconLike />}
            styleBtn={mobile && !isMobile ? userMobileBtnLike : userBtnLike}
          />
          <Button
            name={checkBtnTitle}
            buttonClasses="filledBtn"
            styleBtn={mobile && !isMobile ? userMobileBtnReq : userBtnReq}
          />
        </div>
      )}
    </>
  )
}

export default UserButtonBlock
