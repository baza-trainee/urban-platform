import { Link, useLocation } from 'react-router-dom'

import profile from './ProfileImg.module.scss'
import page from './PageImg.module.scss'

import Button from '../Button/Button'
import Instagram from '../../assets/icons/volunteer/Instagram'
import Facebook from '../../assets/icons/volunteer/Facebook'
import Telegram from '../../assets/icons/volunteer/Telegram'
import YouTube from '../../assets/icons/volunteer/YouTube'
import WebIcon from '../../assets/icons/org/WebIcon'
import EditIcon from '../../../public/images/icons/EditIcon'
import IconLike from '../../assets/icons/IconLike'
import routs from '../../routes/NavLinks'

type Props = {
  isMobile: boolean
  sVolunteerData: { [key: string]: string }
  btnTitle?: string
  navLink?: string
  isVoluntProfile?: boolean
  editBtn?: boolean
  btnBlock?: boolean
  urlIcons?: boolean
  imgInput?: boolean
}

const ProfileImg: React.FC<Props> = ({
  sVolunteerData,
  isVoluntProfile,
  isMobile,
  navLink,
  btnTitle,
  editBtn,
  btnBlock,
  urlIcons,
  imgInput
}) => {
  const location = useLocation()
  const isPages =
    location.pathname.split('/')[1] === routs.volunteerPage.split('/')[1] ||
    routs.orgPage.split('/')[1]

  const img = sVolunteerData.userImg

  const s = isPages ? page : profile
  console.log(isPages)

  return (
    <div className={`${s['img-block']} ${imgInput && s['img-block__img-input']}`}>
      <div className={s['img-block__img-container']}>
        {img ? (
          <img className={s['img-block__img']} src={img} alt="Your Image" />
        ) : isVoluntProfile ? (
          <img
            className={s['img-block__img']}
            src="/images/default_user_icon.svg"
            alt="Default Image"
          />
        ) : (
          <img
            className={s['img-block__img']}
            src="/images/default_org_icon.svg"
            alt="Default Image"
          />
        )}
      </div>
      {imgInput && (
        <div className={s['img-block__img-info']}>
          <h4>{isVoluntProfile ? 'Додати фото' : 'Додати фото або логотип'}</h4>
        </div>
      )}
      <div
        className={`${s['img-block__url-icons']} ${
          !isVoluntProfile && s['img-block__url-icons_org']
        }`}
      >
        {urlIcons && (
          <>
            <Link to={sVolunteerData.urlInsta} className={s['img-block__icon']}>
              <Instagram />
            </Link>
            <Link to={sVolunteerData.urlF} className={s['img-block__icon']}>
              <Facebook />
            </Link>
            <Link to={sVolunteerData.urlTg} className={s['img-block__icon']}>
              <Telegram />
            </Link>
            <Link to={sVolunteerData.urlYouTube} className={s['img-block__icon']}>
              <YouTube />
            </Link>
            {!isVoluntProfile && (
              <Link to={sVolunteerData.urlWebSite} className={s['img-block__icon']}>
                <WebIcon />
              </Link>
            )}
          </>
        )}
      </div>
      {btnBlock && (
        <div className={s['img-block__btn-container']}>
          {isMobile && (
            <Button
              buttonClasses="outlineIconLike outlineIconLike_mobile"
              name={sVolunteerData.likes}
              startIcon={<IconLike />}
            />
          )}
          <Button
            component="link"
            to={''}
            name="Написати"
            buttonClasses="filledBtn fullСoverage"
            handleMouseEnter={() => {}}
            handleMouseLeave={() => {}}
          />
        </div>
      )}
      {isMobile && editBtn && (
        <Button
          component="link"
          to={navLink!}
          handleMouseEnter={() => null}
          handleMouseLeave={() => null}
          buttonClasses="outlineIconLike outlineIconLike_mobile"
          name={btnTitle}
          startIcon={<EditIcon stroke={'#0041A1'} />}
        />
      )}
    </div>
  )
}

export default ProfileImg
