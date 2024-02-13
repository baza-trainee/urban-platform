import React, { useState } from 'react'
import s from './HeroNav.module.scss'
import Button from '../../../Button/Button'
import GridBlack from '../../../../assets/icons/hero/GridBlack'
import GridBlue from '../../../../assets/icons/hero/GridBlue'
import GridWhite from '../../../../assets/icons/hero/GridWhite'
import { navLinks } from './heroNavData'

interface HeroNavProps {
  documents?: boolean
  navClass?: string
  unListClass?: string
  onClick?: () => void
  startIcon?: React.ReactNode
}

const HeroNav: React.FC<HeroNavProps> = ({ unListClass, navClass, onClick }) => {
  const [buttonStates, setButtonStates] = useState<Array<'normal' | 'hover' | 'active'>>(
    Array(navLinks.length).fill('normal')
  )

  const handleMouseEnter = (index: number) => {
    const updatedStates = [...buttonStates]
    updatedStates[index] = 'hover'
    setButtonStates(updatedStates)
  }

  const handleMouseLeave = (index: number) => {
    const updatedStates = [...buttonStates]
    updatedStates[index] = 'normal'
    setButtonStates(updatedStates)
  }

  const handleClick = (index: number) => {
    const updatedStates = [...buttonStates]
    updatedStates[index] = 'active'
    setButtonStates(updatedStates)

    if (onClick) {
      onClick()

      updatedStates[index] = 'hover'
      setButtonStates(updatedStates)
    }
  }

  const getIcon = (index: number) => {
    switch (buttonStates[index]) {
      case 'hover':
        return <GridBlue width={24} height={24} fill="#0041A1" />
      case 'active':
        return <GridWhite width={24} height={24} fill="#F7F2ED" />
      default:
        return <GridBlack width={24} height={24} fill="#000710" />
    }
  }

  return (
    <nav className={[s.menu, navClass && s[navClass]].join(' ')}>
      <ul className={[s.list, unListClass && s[unListClass]].join(' ')}>
        {navLinks.map((link, index) => (
          <li className={s.item} key={link.name} onClick={(e) => e.stopPropagation()}>
            <Button
              buttonClasses={'heroNavGrid'}
              type={'button'}
              name={link.name}
              onClick={() => handleClick(index)}
              handleMouseEnter={() => handleMouseEnter(index)}
              handleMouseLeave={() => handleMouseLeave(index)}
              startIcon={getIcon(index)}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeroNav
