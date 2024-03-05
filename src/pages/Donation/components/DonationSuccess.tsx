import React from 'react'
import { Link } from 'react-router-dom'

import s from '../Donation.module.scss'

import LinkedIn from '../../../assets/icons/donation/LinkedIn'
import Facebook from '../../../assets/icons/donation/Facebook'
import { IDonationData } from '../donatioData'

interface IDonationSuccessProps {
  donationData: IDonationData
  routs: { [key: string]: string }
}

const DonationSuccess: React.FC<IDonationSuccessProps> = ({ donationData, routs }) => {
  return (
    <>
      <div
        className={`${s['donation__text']} ${s.submit} ${s['margin-bottom']}`}
        dangerouslySetInnerHTML={{ __html: donationData.submitText }}
      />
      <div className={`${s['donation__media-container']} ${s['margin-bottom']}`}>
        <span className={`${s['donation__text']} ${s['media-title']}`}>
          {donationData.mediaTitle}
        </span>
        <Link to={routs.facebook} className={s.iconMargin}>
          <Facebook />
        </Link>
        <Link to={routs.linkedIn}>
          <LinkedIn />
        </Link>
      </div>
      <div className={`${s['donation__text']} ${s.thanks}`}>
        <span>{donationData.thanksText}</span>
      </div>
    </>
  )
}

export default DonationSuccess
