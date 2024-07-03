import { Link } from 'react-router-dom'
import s from '../ProfileCards.module.scss'
import routs from '../../../routes/NavLinks'

interface IProps {
  active?: string
  type?: string
  navLink: (link: string, id: string) => string
  id: string
  titleUrl: string
  mobile?: boolean
  joinAt?: string
  timeFrom?: string
  timeTo?: string
  title?: string
}

const TitleBlock: React.FC<IProps> = ({
  active,
  type,
  navLink,
  id,
  titleUrl,
  mobile,
  joinAt,
  timeFrom,
  timeTo,
  title
}) => {
  const isUser = type === 'user'
  return (
    <div
      className={`${s['profile-block__title-block']} ${
        isUser && s['profile-block__title-block_user']
      }`}
    >
      <Link
        to={
          active === 'Чернетки'
            ? navLink(
                type === 'vacancy'
                  ? routs.editVacancy
                  : type === 'grant'
                  ? routs.editGrant
                  : routs.editProject,
                id
              )
            : titleUrl
        }
        className={`${s['profile-block__title']} ${mobile && s['profile-block__title_mobile']} ${
          mobile && isUser && s['profile-block__title_mobile-user']
        }`}
      >
        {title}
      </Link>
      {type !== 'vacancy' && (
        <p
          className={`${s['profile-block__time']} ${mobile && s['profile-block__time_mobile']} ${
            isUser && s['profile-block__time_user']
          } ${mobile && isUser && s['profile-block__time_mobile_user']}`}
        >
          {type === 'user' ? `На платформі з ${joinAt}` : `${timeFrom} - ${timeTo}`}
        </p>
      )}
    </div>
  )
}

export default TitleBlock
