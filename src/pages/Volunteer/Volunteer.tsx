import React from 'react'
import { Link } from 'react-router-dom'

import s from './Volunteer.module.scss'

import Button from '../../components/Button/Button'
import Instagram from '../../assets/icons/volunteer/Instagram'
import Facebook from '../../assets/icons/volunteer/Facebook'
import Telegram from '../../assets/icons/volunteer/Telegram'
import YouTube from '../../assets/icons/volunteer/YouTube'
import { dVolunteerData, mapVolunteerData, projectData, sVolunteerData } from './volunteerData'
import IconLike from '../../assets/icons/IconLike'
import useMediaQuery from '../../hooks/useMediaQuery'
import Profile from '../../components/Profile/Profile'
import ReactMarkdown from 'react-markdown'

const Volunteer = () => {
  const { isMobile } = useMediaQuery()

  const img = sVolunteerData.userImg

  const mapLi: React.ReactNode[] = Object.keys(mapVolunteerData).map((it, indx) => {
    return (
      <li key={indx} className={s['content-block__info']}>
        <span className={s['content-block__info-keys']}>{mapVolunteerData[it]}</span>
        <span className={s['content-block__info-value']}>{sVolunteerData[it]}</span>
      </li>
    )
  })

  return (
    <section className={s.section}>
      <div className={s.container}>
        {isMobile && (
          <div className={s['content-block__title-block']}>
            <h1
              className={s['content-block__title']}
            >{`${sVolunteerData.firstName} ${sVolunteerData.lastName}`}</h1>
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
              name={dVolunteerData.btnTitle}
              buttonClasses="filledBtn fullСoverage"
              handleMouseEnter={() => {}}
              handleMouseLeave={() => {}}
            />
          </div>
        </div>
        <div className={s['content-block']}>
          {!isMobile && (
            <div className={s['content-block__title-block']}>
              <h1
                className={s['content-block__title']}
              >{`${sVolunteerData.firstName} ${sVolunteerData.lastName}`}</h1>
              <Button
                buttonClasses="outlineIconLike outlineIconLike_mobile"
                name={sVolunteerData.likes}
                startIcon={<IconLike />}
              />
            </div>
          )}
          <div className={s['content-block__description']}>
            <ReactMarkdown className={s.text} children={sVolunteerData.userDescription} />
          </div>
          <div className={s['content-block__info-block']}>
            <ul className={s['content-block__info-list']}>{mapLi}</ul>
          </div>
          <Profile
            profileMap={projectData}
            leftBtn={dVolunteerData.firstBlueBtn}
            rightBtn={dVolunteerData.secondBlueBtn}
            button={false}
            type={'project'}
          />
        </div>
      </div>
    </section>
  )
}

export default Volunteer
