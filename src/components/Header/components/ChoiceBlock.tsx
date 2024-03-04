import { Link } from 'react-router-dom'

import s from '../Header.module.scss'

import routes from '../../../routes/NavLinks'

import { navLinks } from '../../Menu/menuData'

interface ChoiceBlockProps {
  isActive?: boolean
}

interface INavLink {
  name: string
  to: string
}

const ChoiceBlock: React.FC<ChoiceBlockProps> = ({ isActive }) => {
  const choiceLink = navLinks.map((it: INavLink) => {
    return (
      <li className={s.choiceItem}>
        <Link to={it.to}>{it.name}</Link>
      </li>
    )
  })

  return (
    <div className={`${s.choiceBlock} ${isActive && s.active}`}>
      <ul className={s.choice}>{choiceLink}</ul>
      <Link to={routes.createProject} className={s.createButton}>
        Створити проєкт
      </Link>
    </div>
  )
}

export default ChoiceBlock
