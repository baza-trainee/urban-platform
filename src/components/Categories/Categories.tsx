import React, { useEffect, useRef, useState } from 'react'
import s from './Categories.module.scss'
import { cardsData } from './CategoriesItem/categoriesData.ts'
import CategoriesItem from './CategoriesItem/CategoriesItem.tsx'
import Button from '../Button/Button'
import GridBlue from '../../assets/icons/hero/GridBlue'
import GridWhite from '../../assets/icons/hero/GridWhite'
import GridBlack from '../../assets/icons/hero/GridBlack'
import useMediaQuery from '../../hooks/useMediaQuery.tsx'
import { useScroll } from '../../hooks/useScroll.ts'

interface CategoriesProps {
  documents?: boolean
  navClass?: string
  unListClass?: string
  onClick?: () => void
}

const Categories: React.FC<CategoriesProps> = ({ onClick }) => {
  const [buttonState, setButtonState] = useState<'normal' | 'hover' | 'active'>('normal')
  const [showAllItems, setShowAllItems] = useState<boolean>(false)
  const { isDesktop, isMobile } = useMediaQuery()
  const { executeScroll, registerRef } = useScroll()
  const categoriesRef = useRef(null)

  const initialItemsCount = isMobile ? 6 : isDesktop ? 9 : 8

  useEffect(() => {
    registerRef('categoriesSection', categoriesRef)
  }, [registerRef])

  const handleMouseEnter = () => {
    setButtonState('hover')
  }

  const handleMouseLeave = () => {
    setButtonState('normal')
  }

  const handleClick = () => {
    setButtonState('active')

    if (onClick) {
      onClick()
      setButtonState('hover')
    }
    setShowAllItems((prev) => !prev)
    if (showAllItems) {
      executeScroll('categoriesSection', -100)
    }
  }

  const getIcon = () => {
    switch (buttonState) {
      case 'hover':
        return <GridBlue width={24} height={24} fill="#0041A1" />
      case 'active':
        return <GridWhite width={24} height={24} fill="#F7F2ED" />
      default:
        return <GridBlack width={24} height={24} fill="#000710" />
    }
  }

  const displayedCards = showAllItems ? cardsData : cardsData.slice(0, initialItemsCount)

  const sectionClass = showAllItems ? `${s.categoriesFull}` : `${s.categoriesBrief}`

  return (
    <section className={sectionClass} id="categoriesSection" ref={categoriesRef}>
      <div className={s.content}>
        <h2 className={s.contentTitle}>Категорії проєктів</h2>
        <ul className={s.cards}>
          {displayedCards.map((card, index) => (
            <li key={index}>
              <CategoriesItem title={card.title} image={card.image} />
            </li>
          ))}
        </ul>
        <div className={s.btnWrap}>
          <Button
            buttonClasses={'heroNavGrid'}
            type={'button'}
            name={showAllItems ? 'Згорнути' : 'Показати усі категорії'}
            onClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            startIcon={getIcon()}
          />
        </div>
      </div>
    </section>
  )
}

export default Categories
