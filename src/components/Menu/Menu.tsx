import React from 'react'
import s from './Menu.module.scss'
import { Link } from 'react-router-dom'
import { navLinks } from './menuData'

interface INavLink {
  name: string
  to: string
}

interface IMenuProps {
  documents?: boolean
  navClass?: string
  unListClass?: string
  onClick?: () => void
}

const Menu: React.FC<IMenuProps> = ({ unListClass, navClass, onClick }) => {
  return (
    <nav className={[s.menu, navClass && s[navClass]].join(' ')}>
      <ul className={[s.list, unListClass && s[unListClass]].join(' ')}>
        {navLinks.map((link: INavLink) => (
          <li className={s.item} key={link.name}>
            <Link onClick={onClick} to={link.to}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
