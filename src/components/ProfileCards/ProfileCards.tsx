import React, { useEffect, useState } from 'react'

import s from './ProfileCards.module.scss'
import useMediaQuery from '../../hooks/useMediaQuery'
import Slider from 'react-slick'
import IconLike from '../../assets/icons/IconLike'
import Button from '../Button/Button'
import { IProjectData } from '../../pages/VolunteerOrgPage/volunteerData'
import routs from '../../routes/NavLinks'
import ImgBlock from './components/ImgBlock'
import OrgImgBlock from './components/OrgImgBlock'
import TitleBlock from './components/TitleBlock'
import DescriptionBlock from './components/DescriptionBlock'
import UserButtonBlock from './components/UserButtonBlock'

interface IProps {
  profileMap: IProjectData[]
  leftBtn?: string
  rightBtn?: string
  centralBtnTitle?: string
  button?: boolean
  centralBtn?: boolean
  buttonCheck?: boolean
  toggle?: string
  type: 'project' | 'vacancy' | 'grant' | 'user'
  checkBtnTitle?: string
  infoMsg?: string
  infoMsgBtnL?: string
  infoMsgBtnC?: string
  infoMsgBtnR?: string
  createBtnTitle?: string
  createBtnLink?: string
  createBtn?: boolean
  createBtnNon?: boolean
  mobile?: boolean
}

const ProfileCards: React.FC<IProps> = ({
  type,
  profileMap,
  leftBtn,
  rightBtn,
  centralBtnTitle,
  button,
  centralBtn,
  toggle,
  buttonCheck,
  checkBtnTitle,
  infoMsg,
  infoMsgBtnL,
  infoMsgBtnC,
  infoMsgBtnR,
  createBtnTitle,
  createBtnLink,
  createBtn,
  createBtnNon,
  mobile
}) => {
  const [active, setActive] = useState(leftBtn)

  const { isDesktop, isTablet, isMobile } = useMediaQuery()

  const navLink = (link: string, id: string): string => {
    return link.split(':')[0] + id
  }
  const isUser = type === 'user'

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1
  }

  const projectBtnStyleMobile = isDesktop
    ? { width: '100%' }
    : isTablet
    ? { width: '100%', height: '48px' }
    : { width: '100%', height: '55px', 'line-height': '1.3' }

  const projectBtnStyle = mobile
    ? { width: '100%' }
    : isDesktop
    ? { width: '250px' }
    : isTablet
    ? { width: '164px', height: '48px' }
    : { width: '213px', height: '55px', 'line-height': '1.3' }
  const styleBtn =
    (toggle && isTablet) || mobile
      ? { width: '100%', height: '40px' }
      : toggle
      ? { width: '100%' }
      : {}
  const likeBtnClass = isTablet
    ? 'outlineIconLike'
    : 'outlineIconLike outlineIconLike_project outlineIconLike_mobile'
  const handleCLickChoiceBtn = (value: string) => {
    setActive(value)
  }

  useEffect(() => {
    setActive(leftBtn)
  }, [toggle])

  const mapLi = (keys: IProjectData) => {
    if ('keys' in keys && Array.isArray(keys.keys)) {
      const keysArray = keys.keys[0]
      const valuesArray = keys.keys[1]
      const mapArr = Object.keys(keysArray)
      return mapArr.map((key, index) => (
        <li
          key={index}
          className={`${s['profile-block__info']} ${isUser && s['profile-block__info_user']} ${
            mobile && s['profile-block__info_mobile']
          }`}
        >
          <span
            className={`${s['profile-block__info-keys']} ${
              isUser && s['profile-block__info-keys_user']
            } ${mobile && s['profile-block__info-keys_mobile']}`}
          >
            {keysArray[key]}
          </span>
          <span
            className={`${s['profile-block__info-value']} ${
              isUser && s['profile-block__info-value_user']
            } ${isUser && mobile && s['profile-block__info-value_mobile']}`}
          >
            {valuesArray[key]}
          </span>
        </li>
      ))
    }
    return null
  }

  const mapProjects: React.ReactNode[] = profileMap.map((it) => {
    return (
      <div
        key={it.titleUrl}
        className={`${s['profile-block__container']} ${
          toggle && toggle !== 'project' && s['profile-block__container_vacancy-grant']
        } ${mobile && s['profile-block__container_mobile']} ${
          isUser && s['profile-block__container_user']
        }`}
      >
        {isUser ? (
          <div
            className={`${isUser && s['profile-block__user-container']} ${
              isUser && mobile && s['profile-block__user-container_mobile']
            }`}
          >
            <div>
              <ImgBlock type={type} mobile={mobile} city={it.city} imgUrl={it.imgUrl} />
              {isUser && (
                <TitleBlock
                  active={active}
                  type={type}
                  navLink={navLink}
                  id={it.id}
                  titleUrl={it.titleUrl}
                  mobile={mobile}
                  joinAt={it.joinAt}
                  timeFrom={it.timeFrom}
                  timeTo={it.timeTo}
                  title={isMobile ? `${it.title} ${it.lastName}` : it.title}
                />
              )}
            </div>
          </div>
        ) : (
          <div>
            <ImgBlock type={type} mobile={mobile} city={it.city} imgUrl={it.imgUrl} />
          </div>
        )}
        {!isUser ? (
          <div
            className={`${s['profile-block__info-block']} ${
              toggle && toggle !== 'project' && s['profile-block__info-block_vacancy-grant']
            } ${mobile && s['profile-block__info-block_mobile']}`}
          >
            <TitleBlock
              active={active}
              type={type}
              navLink={navLink}
              id={it.id}
              titleUrl={it.titleUrl}
              mobile={mobile}
              joinAt={it.joinAt}
              timeFrom={it.timeFrom}
              timeTo={it.timeTo}
              title={it.title}
            />
            {type !== 'project' && <ul className={s['profile-block__info-list']}>{mapLi(it)}</ul>}
            <DescriptionBlock toggle={toggle} mobile={mobile} description={it.description} />
            <div
              className={`${s['profile-block__btn-block']} ${
                toggle && toggle !== 'project' && s['profile-block__btn-block_vacancy-grant']
              } ${mobile && s['profile-block__btn-block_mobile']}`}
            >
              <OrgImgBlock
                toggle={toggle}
                mobile={mobile}
                orgUrl={it.orgUrl}
                org={it.org}
                orgImgUrl={it.orgImgUrl}
              />
              <div
                className={`${s['profile-block__btns']} ${
                  mobile && s['profile-block__btns_mobile']
                }`}
                style={toggle ? { width: '100%' } : {}}
              >
                {type === 'project' && buttonCheck && active !== 'Чернетки' ? (
                  <Button
                    name={checkBtnTitle}
                    buttonClasses="filledBtn"
                    styleBtn={mobile ? projectBtnStyleMobile : projectBtnStyle}
                  />
                ) : (type === 'vacancy' || type === 'grant') && active === 'Чернетки' ? (
                  <Button
                    component="link"
                    to={navLink(type === 'vacancy' ? routs.editVacancy : routs.editGrant, it.id)}
                    handleMouseEnter={() => null}
                    handleMouseLeave={() => null}
                    name="Редагувати"
                    buttonClasses="filledBtn"
                    styleBtn={{ width: '100%' }}
                  />
                ) : (
                  false
                )}
                {(!button || active !== rightBtn) && (
                  <Button
                    buttonClasses={likeBtnClass}
                    name={it.likes}
                    startIcon={<IconLike />}
                    styleBtn={styleBtn}
                  />
                )}
              </div>
            </div>
          </div>
        ) : (
          <ul
            className={`${s['profile-block__info-list']} ${s['profile-block__info-list_user']} ${
              mobile && s['profile-block__info-list_user_mobile']
            }`}
          >
            {mapLi(it)}
          </ul>
        )}
        <UserButtonBlock
          isUser={isUser}
          mobile={mobile}
          likeBtnClass={likeBtnClass}
          checkBtnTitle={checkBtnTitle}
          likes={it.likes}
        />
      </div>
    )
  })

  return (
    <div className={s['profile-block']}>
      {button && (
        <div className={s['profile-block__button-block']}>
          <button
            className={`${s['profile-block__btn']} ${s['profile-block__btn_left']} ${
              active === leftBtn && s['profile-block__btn_active']
            } ${centralBtn && s['profile-block__btn_size']}`}
            onClick={() => handleCLickChoiceBtn(leftBtn!)}
          >
            {leftBtn}
          </button>
          {centralBtn && (
            <button
              className={`${s['profile-block__btn']} ${s['profile-block__btn_central']} ${
                active === centralBtnTitle && s['profile-block__btn_active']
              } ${centralBtn && s['profile-block__btn_size']}`}
              onClick={() => handleCLickChoiceBtn(centralBtnTitle!)}
            >
              {centralBtnTitle}
            </button>
          )}
          <button
            className={`${s['profile-block__btn']} ${s['profile-block__btn_right']} ${
              active === rightBtn && s['profile-block__btn_active']
            } ${centralBtn && s['profile-block__btn_size']}`}
            onClick={() => handleCLickChoiceBtn(rightBtn!)}
          >
            {rightBtn}
          </button>
        </div>
      )}

      {profileMap.length > 0 ? (
        isMobile ? (
          <>
            <Slider {...settings}>{mapProjects}</Slider>
            {createBtn && (
              <Button
                component="link"
                to={createBtnLink!}
                handleMouseEnter={() => null}
                handleMouseLeave={() => null}
                name={createBtnTitle}
                buttonClasses="filledBtn"
                styleBtn={isMobile ? { width: '100%' } : {}}
              />
            )}
          </>
        ) : toggle && toggle !== 'project' ? (
          <>
            <div className={s['profile-block_container']}>{mapProjects}</div>
            {createBtn && (
              <Button
                component="link"
                to={createBtnLink!}
                handleMouseEnter={() => null}
                handleMouseLeave={() => null}
                name={createBtnTitle}
                buttonClasses="filledBtn"
                styleBtn={isMobile ? { width: '100%' } : {}}
              />
            )}
          </>
        ) : (
          <>
            {mapProjects}
            {createBtn && (
              <Button
                component="link"
                to={createBtnLink!}
                handleMouseEnter={() => null}
                handleMouseLeave={() => null}
                name={createBtnTitle}
                buttonClasses="filledBtn"
                styleBtn={isMobile ? { width: '100%' } : {}}
              />
            )}
          </>
        )
      ) : (
        <>
          <div className={s['profile-block__info-msg']}>
            {infoMsg && <h3>{infoMsg}</h3>}
            {active === leftBtn && <h3>{infoMsgBtnL}</h3>}
            {active === rightBtn && <h3>{infoMsgBtnR}</h3>}
            {active === centralBtnTitle && <h3>{infoMsgBtnC}</h3>}
          </div>
          {(createBtn || createBtnNon) && (
            <Button
              component="link"
              to={createBtnLink!}
              handleMouseEnter={() => null}
              handleMouseLeave={() => null}
              name={createBtnTitle}
              buttonClasses="filledBtn"
              styleBtn={isMobile ? { width: '100%' } : {}}
            />
          )}
          {centralBtn && (active === rightBtn || active === centralBtnTitle)}
        </>
      )}
    </div>
  )
}

export default ProfileCards
