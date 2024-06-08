import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom'

import s from './VolunteerOrgPage.module.scss'

import { dVolunteerData, mapVolunteerData, projectData, sVolunteerData } from './volunteerData'
import routs from '../../routes/NavLinks'
import useMediaQuery from '../../hooks/useMediaQuery'

import Button from '../../components/Button/Button'
import ProfileCards from '../../components/ProfileCards/ProfileCards'
import ProfileImg from '../../components/ProfileImg/ProfileImg'
import IconLike from '../../assets/icons/IconLike'
import { dOrgData, mapOrgData, sOrgData } from './orgData'

const VolunteerOrgPage = () => {
  const location = useLocation()
  const { isMobile } = useMediaQuery()

  const isVolunteerPage = location.pathname.split('/')[1] === routs.volunteerPage.split('/')[1]
  console.log(isVolunteerPage)

  const dData = isVolunteerPage ? dVolunteerData : dOrgData
  const sData = isVolunteerPage ? sVolunteerData : sOrgData
  const mapData = isVolunteerPage ? mapVolunteerData : mapOrgData

  const mapLi: React.ReactNode[] = Object.keys(mapData).map((it, indx) => {
    return (
      <li key={indx} className={s['content-block__info']}>
        <span className={s['content-block__info-keys']}>{mapData[it]}</span>
        <span className={s['content-block__info-value']}>{sData[it]}</span>
      </li>
    )
  })

  return (
    <section className={s.section}>
      <div className={s.container}>
        {isMobile && (
          <div className={s['content-block__title-block']}>
            <h1 className={s['content-block__title']}>
              {isVolunteerPage ? `${sData.firstName} ${sData.lastName}` : `${sData.orgTitle}`}
            </h1>
          </div>
        )}
        <ProfileImg
          sVolunteerData={sData}
          isVoluntProfile={isVolunteerPage}
          isMobile={isMobile}
          btnBlock={isVolunteerPage}
        />
        <div className={s['content-block']}>
          {!isMobile && (
            <div className={s['content-block__title-block']}>
              <h1 className={s['content-block__title']}>
                {isVolunteerPage ? `${sData.firstName} ${sData.lastName}` : `${sData.orgTitle}`}
              </h1>
              {isVolunteerPage && (
                <Button
                  buttonClasses="outlineIconLike outlineIconLike_mobile"
                  name={sData.likes}
                  startIcon={<IconLike />}
                />
              )}
            </div>
          )}
          <div className={!isVolunteerPage ? `${s.revers}` : `${s.revers} ${s.revers_none}`}>
            <div className={s['content-block__description']}>
              <ReactMarkdown className={s.text} children={sData.userDescription} />
            </div>
            <div className={s['content-block__info-block']}>
              <ul className={s['content-block__info-list']}>{mapLi}</ul>
            </div>
          </div>
          {!isVolunteerPage && (
            <div className={s['content-block__profile-title']}>
              <h2>{dData.interestingProject}</h2>
            </div>
          )}
          <ProfileCards
            profileMap={projectData}
            leftBtn={dData.firstBlueBtn}
            rightBtn={dData.secondBlueBtn}
            button={isVolunteerPage}
            buttonCheck
            checkBtnTitle="Приєднатись"
            type={'project'}
            infoMsgBtnL="На даний момент немає участі у проєктах."
            infoMsgBtnR="На даний момент проєктів не було організовано."
          />
        </div>
      </div>
    </section>
  )
}

export default VolunteerOrgPage
