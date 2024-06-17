import s from '../ProfileCards.module.scss'

interface IProps {
  type: string
  mobile?: boolean
  city?: string
  imgUrl?: string
}

const ImgBlock: React.FC<IProps> = ({ type, mobile, city, imgUrl }) => {
  const imgProject = imgUrl || '/images/default_project_img.png'
  const imgUser = imgUrl || '/images/default_user_icon.svg'
  const isProject = type === 'project'
  const isUser = type === 'user'
  return (
    <>
      {(isProject || isUser) && (
        <div
          className={`${s['profile-block__img-block']} ${
            mobile && s['profile-block__img-block_mobile']
          } ${isUser && s['profile-block__img-block_user']} ${
            isUser && mobile && s['profile-block__img-block_user_mobile']
          }`}
        >
          <img
            src={isProject ? imgProject : imgUser}
            alt="Project img"
            className={s['profile-block__img']}
          />
          {isProject && <p className={s['profile-block__city-name']}>{city}</p>}
        </div>
      )}
    </>
  )
}

export default ImgBlock
