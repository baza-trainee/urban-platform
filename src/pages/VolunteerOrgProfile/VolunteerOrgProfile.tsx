import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import s from './VolunteerOrgProfile.module.scss'

import Button from '../../components/Button/Button'
import EditIcon from '../../../public/images/icons/EditIcon'

import {
  dVolunteerData,
  grantData,
  mapVolunteerProfData,
  sVolunteerData,
  vacancyData
} from './profileVoluntData'
import useMediaQuery from '../../hooks/useMediaQuery'
import ProfileCards from '../../components/ProfileCards/ProfileCards'
import { projectData } from '../VolunteerOrgPage/volunteerData'
import ToggleBlock from './components/ToggleBlock'
import InfoImgBlock from './components/InfoImgBlock'
import routs from '../../routes/NavLinks'
import { useLocation, useParams } from 'react-router-dom'
import { dOrgData, mapOrgProfData, sOrgData } from './ProfileOrgData'

const VolunteerOrgProfile = () => {
  const [toggle, setToggle] = useState('info')
  const [isVisible, setIsVisible] = useState(false)
  const [isChecked, setIsChecked] = useState(true)
  const { id } = useParams()
  const location = useLocation()

  const { isMobile } = useMediaQuery()
  const isVoluntProfile = location.pathname.split('/')[1] === routs.volunteerProfile.split('/')[1]

  const dData = isVoluntProfile ? dVolunteerData : dOrgData
  const sData = isVoluntProfile ? sVolunteerData : sOrgData
  const mapData = isVoluntProfile ? mapVolunteerProfData : mapOrgProfData

  const link = isVoluntProfile ? routs.volunteerProfileEdit : routs.orgProfileEdit
  const navLink = link.split(':')[0] + id

  const handleSelect = (id: string): void => {
    setToggle(id)
    setIsVisible(false)
  }

  const handleClickCheckbox = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [toggle])

  const mapLi: React.ReactNode[] = Object.keys(mapData).map((it, indx) => {
    return it === 'phone' ? (
      <li key={indx} className={s['content-block__info']}>
        <span className={s['content-block__info-keys']}>{mapData[it]}</span>
        <div className={s['content-block__checkbox-info']}>
          <span className={s['content-block__info-value']}>{sData[it]}</span>
          <div className={`${s['content-block__checkbox-block']}`}>
            <input
              type="checkbox"
              className={`${s['content-block__checkbox']} ${s['align-start']}`}
              checked={isChecked}
              onChange={() => handleClickCheckbox()}
            />
            <span className={s['content-block__checkbox-text']}>{dData.checkboxTitle}</span>
          </div>
        </div>
      </li>
    ) : (
      <li key={indx} className={s['content-block__info']}>
        <span className={s['content-block__info-keys']}>{mapData[it]}</span>
        <span className={s['content-block__info-value']}>{sData[it]}</span>
      </li>
    )
  })
  return (
    <section className={s.section}>
      <div className={s.container}>
        {!isMobile && (
          <div className={s['title-block']}>
            <div className={s['title-block__title']}>
              <h1>
                {isVoluntProfile ? `${sData.firstName} ${sData.lastName}` : `${sData.orgTitle}`}
              </h1>
            </div>
            <Button
              component="link"
              to={navLink}
              handleMouseEnter={() => null}
              handleMouseLeave={() => null}
              name={dData.btnTitle}
              startIcon={<EditIcon />}
              buttonClasses="editBtn"
            />
          </div>
        )}
        <div className={s['content-block']}>
          {!isVoluntProfile && isMobile && (
            <div className={`${s['title-block__title']} ${s['title-block__title_mobile']}`}>
              <h1>{sData.orgTitle}</h1>
            </div>
          )}
          <div className={s['content-block__user-info']}>
            <ToggleBlock
              isMobile={isMobile}
              toggle={toggle}
              dVolunteerData={dData}
              handleSelect={handleSelect}
            />
            {toggle === 'info' ? (
              <InfoImgBlock
                isMobile={isMobile}
                mapLi={mapLi}
                sVolunteerData={sData}
                btnTitle={dData.btnTitle}
                navLink={navLink}
                isVisible={isVisible}
                isVoluntProfile={isVoluntProfile}
              />
            ) : toggle === 'project' ? (
              <div className={`${s.column}  ${isVisible && s.animation}`}>
                <ProfileCards
                  type="project"
                  button
                  centralBtn={isVoluntProfile}
                  leftBtn={dData.participationInProject}
                  centralBtnTitle={dData.myProject}
                  rightBtn={dData.btnDrafts}
                  profileMap={projectData}
                  infoMsgBtnL={dData.pMsgBtnL}
                  infoMsgBtnC={dData.pMsgBtnC}
                  infoMsgBtnR={isMobile ? dData.pMsgBtnRM : dData.pMsgBtnR}
                  createBtn={!isVoluntProfile}
                  createBtnTitle={dData.btnCreateProject}
                />
                {isVoluntProfile && (
                  <>
                    <div className={s['content-block__description-title']}>
                      <h2 className={s['text-center']}>{dData.reqProjects}</h2>
                    </div>
                    <ProfileCards
                      type="project"
                      profileMap={projectData}
                      buttonCheck
                      checkBtnTitle={dData.btnJoin}
                      infoMsg={dData.invitedMsgNon}
                    />
                  </>
                )}
              </div>
            ) : toggle === 'vacancy' ? (
              <div className={s.column}>
                <div className={`${s.vacancy} ${isVisible && s.animation}`}>
                  <ProfileCards
                    type="vacancy"
                    button
                    leftBtn={dData.myVacancy}
                    rightBtn={dData.btnDrafts}
                    profileMap={vacancyData}
                    toggle={toggle}
                    createBtnLink={routs.createVacancy}
                    createBtnTitle={dData.btnCreateVacancy}
                    createBtn={vacancyData.length <= 0 || !isVoluntProfile}
                    infoMsgBtnL={dData.vMsgBtnL}
                    infoMsgBtnR={dData.vMsgBtnR}
                  />
                </div>
              </div>
            ) : (
              <div className={s.column}>
                <div className={`${s.vacancy}  ${isVisible && s.animation}`}>
                  <ProfileCards
                    type="grant"
                    button
                    leftBtn={dData.myGrants}
                    rightBtn={dData.btnDrafts}
                    profileMap={grantData}
                    toggle={toggle}
                    createBtnLink={routs.createGrant}
                    createBtnTitle={dData.btnCreateGrant}
                    createBtn={grantData.length <= 0 || !isVoluntProfile}
                    infoMsgBtnL={dData.gMsgBtnL}
                    infoMsgBtnR={dData.gMsgBtnR}
                  />
                </div>
              </div>
            )}
          </div>
          {(isMobile || toggle === 'info') && (
            <div className={s['content-block__description-block']}>
              <div className={s['content-block__description-title']}>
                <h2>{dData.aboutTitle}</h2>
              </div>
              <div className={s['content-block__description']}>
                <ReactMarkdown className={s.text} children={sData.userDescription} />
              </div>
            </div>
          )}
          {isMobile && (
            <>
              <ProfileCards
                type="project"
                button
                leftBtn={dData.myProject}
                rightBtn={dData.btnDrafts}
                profileMap={projectData}
                buttonCheck
                checkBtnTitle={dData.btnCheck}
                infoMsgBtnL={dData.pMsgBtnLM}
                infoMsgBtnR={dData.pMsgBtnR}
                createBtn={!isVoluntProfile}
                createBtnNon={projectData.length <= 0 || isVoluntProfile}
                createBtnTitle={dData.btnCreateProject}
              />
              {isVoluntProfile && (
                <ProfileCards
                  type="project"
                  button
                  leftBtn={dData.participationInProject}
                  rightBtn={dData.btnReqInProject}
                  profileMap={projectData}
                  buttonCheck
                  checkBtnTitle={dData.btnCheck}
                  infoMsgBtnL={dData.pMsgBtnL}
                  infoMsgBtnR={dData.pMsgBtnRM}
                />
              )}
              <ProfileCards
                type="vacancy"
                button
                leftBtn={dData.myVacancy}
                rightBtn={dData.btnDrafts}
                profileMap={vacancyData}
                infoMsgBtnL={dData.vMsgBtnL}
                infoMsgBtnR={dData.vMsgBtnR}
                createBtn
                createBtnTitle={dData.btnCreateVacancy}
              />
              <ProfileCards
                type="grant"
                button
                leftBtn={dData.myGrants}
                rightBtn={dData.btnDrafts}
                profileMap={grantData}
                infoMsgBtnL={dData.gMsgBtnL}
                infoMsgBtnR={dData.gMsgBtnR}
                createBtn
                createBtnTitle={dData.btnCreateGrant}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default VolunteerOrgProfile
