import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useLocation, useNavigate } from 'react-router-dom'

import s from './CheckGrant.module.scss'

import { dataDefault, dataFromServer } from './checkGrantData'
import routs from '../../routes/NavLinks'
import useMediaQuery from '../../hooks/useMediaQuery'

import Button from '../../components/Button/Button'
import Edit from '../../assets/icons/grant/Edit'

const CheckGrant: React.FC = () => {
  // const navigate = useNavigate()
  const [userType, setUserType] = useState(false)
  const { title, grantDescription } = dataFromServer
  const { isDesktop, isMobile } = useMediaQuery()

  const iconSize = isDesktop ? 24 : 20
  const stroke = isMobile ? '#0041a1' : '#000710'

  const handleSetUserType = () => {
    setUserType(!userType)
  }

  const keyForMap = Object.keys(dataDefault).filter((it) =>
    Object.prototype.hasOwnProperty.call(dataFromServer, it)
  )

  const dataList = keyForMap.map((it, ind) => {
    return (
      <>
        {it === 'grantor' ? (
          <li key={ind} className={s['content-block__grant-element']}>
            <span className={s['content-block__grant-element-title']}>{dataDefault[it]}</span>
            <Link to={routs.organizationPage} className={s['content-block__img-block']}>
              <img
                className={s['content-block__img']}
                src="/images/grant/checkGrant.png"
                alt="grantorImg"
              />
              <span className={s['content-block__grant-element-item_link']}>
                {dataFromServer[it]}
              </span>
            </Link>
          </li>
        ) : (
          <li key={ind} className={s['content-block__grant-element']}>
            <span className={s['content-block__grant-element-title']}>{dataDefault[it]}</span>
            <span className={s['content-block__grant-element-item']}>{dataFromServer[it]}</span>
          </li>
        )}
      </>
    )
  })

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s['title-block']}>
          <h1 className={s['title-block__title']}>{title}</h1>
          {userType && (
            <Link to={routs.editGrant} className={s['title-block__btn']}>
              <Edit width={iconSize} height={iconSize} stroke={stroke} />
              <span className={s['title-block__btn-title']}>{dataDefault.editBtnTitle}</span>
            </Link>
          )}
        </div>
        <button type="button" onClick={handleSetUserType}>
          setUserType
        </button>
        <div className={s['content-block']}>
          <div className={s['content-block__I-column']}>
            <p className={s['content-block__text']}>{grantDescription}</p>
          </div>
          <div className={s['content-block__line']} />
          <div className={s['content-block__II-column']}>
            <ul className={s['content-block__grant-data-list']}>{dataList}</ul>
          </div>
        </div>
        {!userType && (
          <Button name={dataDefault.btnTitle} buttonClasses="filledBtn grantPage fullСoverage" />
        )}
      </div>
    </section>
  )
}

export default CheckGrant
