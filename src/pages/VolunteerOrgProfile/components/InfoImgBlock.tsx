import ReactMarkdown from 'react-markdown'

import s from '../VolunteerOrgProfile.module.scss'

import ProfileImg from '../../../components/ProfileImg/ProfileImg'

type Props = {
  isMobile: boolean
  mapLi: React.ReactNode[]
  sVolunteerData: { [key: string]: string }
  btnTitle: string
  navLink: string
  isVisible: boolean
  isVoluntProfile: boolean
}

const InfoImgBlock: React.FC<Props> = ({
  isMobile,
  mapLi,
  sVolunteerData,
  btnTitle,
  navLink,
  isVisible,
  isVoluntProfile
}) => {
  return (
    <div className={`${s['content-block__top']} ${isVisible && s.animation}`}>
      <ul
        className={s['content-block__info-block']}
        style={!isVoluntProfile ? { border: 'none' } : {}}
      >
        {mapLi}
      </ul>
      {isMobile && isVoluntProfile && (
        <div className={s['content-block__description']}>
          <ReactMarkdown className={s.text} children={sVolunteerData.userDescription} />
        </div>
      )}
      <ProfileImg
        sVolunteerData={sVolunteerData}
        isVoluntProfile={isVoluntProfile}
        isMobile={isMobile}
        navLink={navLink}
        btnTitle={btnTitle}
        editBtn
      />
    </div>
  )
}

export default InfoImgBlock
