import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import s from './ProfileVolunt.module.scss'

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
import Profile from '../../components/Profile/Profile'
import { projectData } from '../Volunteer/volunteerData'
import ToggleBlock from './components/ToggleBlock'
import InfoImgBlock from './components/InfoImgBlock'
import routs from '../../routes/NavLinks'
import { useParams } from 'react-router-dom'

const ProfileVolunt = () => {
  const [toggle, setToggle] = useState('info')
  const [isVisible, setIsVisible] = useState(false)
  const [isChecked, setIsChecked] = useState(true)
  const { id } = useParams()
  const { isMobile } = useMediaQuery()

  const navLink = routs.volunteerProfileEdit.split(':')[0] + id

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

  const mapLi: React.ReactNode[] = Object.keys(mapVolunteerProfData).map((it, indx) => {
    return it === 'phone' ? (
      <li key={indx} className={s['content-block__info']}>
        <span className={s['content-block__info-keys']}>{mapVolunteerProfData[it]}</span>
        <div className={s['content-block__checkbox-info']}>
          <span className={s['content-block__info-value']}>{sVolunteerData[it]}</span>
          <div className={`${s['content-block__checkbox-block']}`}>
            <input
              type="checkbox"
              className={`${s['content-block__checkbox']} ${s['align-start']}`}
              checked={isChecked}
              onChange={() => handleClickCheckbox()}
            />
            <span className={s['content-block__checkbox-text']}>
              {dVolunteerData.checkboxTitle}
            </span>
          </div>
        </div>
      </li>
    ) : (
      <li key={indx} className={s['content-block__info']}>
        <span className={s['content-block__info-keys']}>{mapVolunteerProfData[it]}</span>
        <span className={s['content-block__info-value']}>{sVolunteerData[it]}</span>
      </li>
    )
  })
  return (
    <section className={s.section}>
      <div className={s.container}>
        {!isMobile && (
          <div className={s['title-block']}>
            <div className={s['title-block__title']}>
              <h1>{`${sVolunteerData.firstName} ${sVolunteerData.lastName}`}</h1>
            </div>
            <Button
              component="link"
              to={navLink}
              handleMouseEnter={() => null}
              handleMouseLeave={() => null}
              name={dVolunteerData.btnTitle}
              startIcon={<EditIcon />}
              buttonClasses="editBtn"
            />
          </div>
        )}
        <div className={s['content-block']}>
          <div className={s['content-block__user-info']}>
            <ToggleBlock
              isMobile={isMobile}
              toggle={toggle}
              dVolunteerData={dVolunteerData}
              handleSelect={handleSelect}
            />
            {toggle === 'info' ? (
              <InfoImgBlock
                isMobile={isMobile}
                mapLi={mapLi}
                sVolunteerData={sVolunteerData}
                btnTitle={dVolunteerData.btnTitle}
                navLink={navLink}
                isVisible={isVisible}
              />
            ) : toggle === 'project' ? (
              <div className={`${s.column}  ${isVisible && s.animation}`}>
                <Profile
                  type="project"
                  button
                  centralBtn
                  leftBtn={dVolunteerData.participationInProject}
                  centralBtnTitle={dVolunteerData.myProject}
                  rightBtn={dVolunteerData.btnDrafts}
                  profileMap={projectData}
                />
                <div className={s['content-block__description-title']}>
                  <h2 className={s['text-center']}>{dVolunteerData.reqProjects}</h2>
                </div>
                <Profile type="project" profileMap={projectData} />
              </div>
            ) : toggle === 'vacancy' ? (
              <div className={`${s.vacancy} ${isVisible && s.animation}`}>
                <Profile
                  type="vacancy"
                  button
                  leftBtn={dVolunteerData.myVacancy}
                  rightBtn={dVolunteerData.btnDrafts}
                  profileMap={vacancyData}
                  toggle={toggle}
                />
              </div>
            ) : (
              <div className={`${s.vacancy}  ${isVisible && s.animation}`}>
                <Profile
                  type="grant"
                  button
                  leftBtn={dVolunteerData.myGrants}
                  rightBtn={dVolunteerData.btnDrafts}
                  profileMap={grantData}
                  toggle={toggle}
                />
              </div>
            )}
          </div>
          {!isMobile && toggle === 'info' && (
            <div className={s['content-block__description-block']}>
              <div className={s['content-block__description-title']}>
                <h2>{dVolunteerData.aboutTitle}</h2>
              </div>
              <div className={s['content-block__description']}>
                <ReactMarkdown className={s.text} children={sVolunteerData.userDescription} />
              </div>
            </div>
          )}
          {isMobile && (
            <>
              <Profile
                type="project"
                button
                leftBtn={dVolunteerData.myProject}
                rightBtn={dVolunteerData.btnDrafts}
                profileMap={projectData}
              />
              <Profile
                type="project"
                button
                leftBtn={dVolunteerData.participationInProject}
                rightBtn={dVolunteerData.btnReqInProject}
                profileMap={projectData}
              />
              <Profile
                type="vacancy"
                button
                leftBtn={dVolunteerData.myVacancy}
                rightBtn={dVolunteerData.btnDrafts}
                profileMap={vacancyData}
              />
              <Button
                name={dVolunteerData.btnCreateVacancy}
                buttonClasses="filledBtn"
                styleBtn={{ width: '100%' }}
              />
              <Profile
                type="grant"
                button
                leftBtn={dVolunteerData.myGrants}
                rightBtn={dVolunteerData.btnDrafts}
                profileMap={grantData}
              />
              <Button
                name={dVolunteerData.btnCreateGrant}
                buttonClasses="filledBtn"
                styleBtn={{ width: '100%' }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProfileVolunt
