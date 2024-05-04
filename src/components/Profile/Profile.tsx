import React, { useState } from 'react'

import s from './Profile.module.scss'
import useMediaQuery from '../../hooks/useMediaQuery'
import Slider from 'react-slick'
import IconLike from '../../assets/icons/IconLike'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { IProjectData } from '../../pages/Volunteer/volunteerData'

interface IProps {
  profileMap: IProjectData[]
  leftBtn: string
  rightBtn: string
  button: boolean
}

const Profile: React.FC<IProps> = ({ profileMap, leftBtn, rightBtn, button }) => {
  const [active, setActive] = useState('left')
  const { isDesktop, isTablet, isMobile } = useMediaQuery()

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1
  }

  const projectBtnStyle = isDesktop
    ? { width: '250px' }
    : isTablet
      ? { width: '164px', height: '48px' }
      : { width: '213px', height: '55px' }
  const likeBtnClass = isTablet
    ? 'outlineIconLike'
    : 'outlineIconLike outlineIconLike_project outlineIconLike_mobile'

  const handleCLickChoiceBtn = (value: string) => {
    setActive(value)
  }

  const mapProjects: React.ReactNode[] = profileMap.map((it) => {
    return (
      <div key={it.projectUrl} className={s['profile-block__container']}>
        <div className={s['profile-block__img-block']}>
          <img
            src="/images/default_project_img.png"
            alt="Project img"
            className={s['profile-block__img']}
          />
          <p className={s['profile-block__city-name']}>{it.city}</p>
        </div>
        <div className={s['profile-block__info-block']}>
          <div className={s['profile-block__title-block']}>
            <h2 className={s['profile-block__title']}>{it.title}</h2>
            <p className={s['profile-block__time']}>{`${it.timeFrom} - ${it.timeTo}`}</p>
          </div>
          <div className={s['profile-block__description-block']}>
            <p className={s['profile-block__description']}>{it.description}</p>
          </div>
          <div className={s['profile-block__btn-block']}>
            <div className={s['profile-block__org-container']}>
              <div className={s['profile-block__img-container']}>
                <img
                  src="/images/default_org_icon.svg"
                  alt="Organization img"
                  className={s['profile-block__img']}
                />
              </div>
              <Link className={s['profile-block__org']} to={it.orgUrl}>
                {it.org}
              </Link>
            </div>
            <div className={s['profile-block__btns']}>
              <Button name="Приєднатись" buttonClasses="filledBtn" styleBtn={projectBtnStyle} />
              <Button buttonClasses={likeBtnClass} name={it.likes} startIcon={<IconLike />} />
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className={s['profile-block']}>
      {button && (
        <div className={s['profile-block__button-block']}>
          <button
            className={`${s['profile-block__btn']} ${s['profile-block__btn_left']} ${
              active === 'left' && s['profile-block__btn_active']
            }`}
            onClick={() => handleCLickChoiceBtn('left')}
          >
            {leftBtn}
          </button>
          <button
            className={`${s['profile-block__btn']} ${s['profile-block__btn_right']} ${
              active === 'right' && s['profile-block__btn_active']
            }`}
            onClick={() => handleCLickChoiceBtn('right')}
          >
            {rightBtn}
          </button>
        </div>
      )}
      {isMobile ? <Slider {...settings}>{mapProjects}</Slider> : mapProjects}
    </div>
  )
}

export default Profile
