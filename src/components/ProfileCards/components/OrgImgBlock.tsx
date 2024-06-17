import { Link } from 'react-router-dom'

import s from '../ProfileCards.module.scss'

interface IProps {
  toggle?: string
  orgUrl?: string
  org?: string
  orgImgUrl?: string
  mobile?: boolean
}

const OrgImgBlock: React.FC<IProps> = ({ toggle, mobile, orgUrl, org, orgImgUrl }) => {
  const orgImg = orgImgUrl || '/images/default_org_icon.svg'
  return (
    <>
      <div
        className={`${s['profile-block__org-container']} ${
          toggle && toggle !== 'project' && s['profile-block__org-container_vacancy-grant']
        } ${mobile && s['profile-block__org-container_mobile']}`}
      >
        <div className={s['profile-block__img-container']}>
          <img src={orgImg} alt="Organization img" className={s['profile-block__img']} />
        </div>
        <Link
          className={`${s['profile-block__org']} ${mobile && s['profile-block__org_mobile']}`}
          to={orgUrl || ''}
        >
          {org}
        </Link>
      </div>
    </>
  )
}

export default OrgImgBlock
