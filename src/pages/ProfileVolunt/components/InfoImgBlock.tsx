import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import s from '../ProfileVolunt.module.scss'

import Instagram from '../../../assets/icons/volunteer/Instagram'
import Facebook from '../../../assets/icons/volunteer/Facebook'
import Telegram from '../../../assets/icons/volunteer/Telegram'
import YouTube from '../../../assets/icons/volunteer/YouTube'
import Button from '../../../components/Button/Button'
import EditIcon from '../../../../public/images/icons/EditIcon'

type Props = {
  isMobile: boolean
  mapLi: React.ReactNode[]
  sVolunteerData: { [key: string]: string }
  btnTitle: string
  navLink: string
  isVisible: boolean
}

const InfoImgBlock: React.FC<Props> = ({
  isMobile,
  mapLi,
  sVolunteerData,
  btnTitle,
  navLink,
  isVisible
}) => {
  const img = sVolunteerData.userImg
  return (
    <div className={`${s['content-block__top']} ${isVisible && s.animation}`}>
      <ul className={s['content-block__info-block']}>{mapLi}</ul>
      {isMobile && (
        <div className={s['content-block__description']}>
          <ReactMarkdown className={s.text} children={sVolunteerData.userDescription} />
        </div>
      )}
      <div className={s['img-block']}>
        <div className={s['img-block__img-container']}>
          {img ? (
            <img className={s['img-block__img']} src={img} alt="Your Image" />
          ) : (
            <img
              className={s['img-block__img']}
              src="/images/default_user_icon.svg"
              alt="Default Image"
            />
          )}
        </div>
        <div className={s['img-block__url-icons']}>
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
        </div>
        {isMobile && (
          <Button
            component="link"
            to={navLink}
            handleMouseEnter={() => null}
            handleMouseLeave={() => null}
            buttonClasses="outlineIconLike outlineIconLike_mobile"
            name={btnTitle}
            startIcon={<EditIcon stroke={'#0041A1'} />}
          />
        )}
      </div>
    </div>
  )
}

export default InfoImgBlock
