import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Categories.module.scss'
import { cardsData } from './categoriesData.ts'
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
              <Link onClick={onClick} to={card.url}>
                <div className={s.card}>
                  <div className={s.cardContent}>
                    <img src={`/src/assets/icons/categories/${card.image}`} alt={card.title} />
                    <h3 className={s.cardTitle}>{card.title}</h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className={s.btnWrap}>
          <button
            className={s.button}
            type="button"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {getIcon()}
            {showAllItems ? ' Згорнути' : ' Показати усі категорії'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories
