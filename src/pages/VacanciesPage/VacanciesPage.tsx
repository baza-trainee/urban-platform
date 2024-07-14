import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './VacanciesPage.module.scss'
import { vacancies } from './vacancies.ts'
import GridBlue from '../../assets/icons/hero/GridBlue'
import GridWhite from '../../assets/icons/hero/GridWhite'
import GridBlack from '../../assets/icons/hero/GridBlack'
import useMediaQuery from '../../hooks/useMediaQuery.tsx'
import { useScroll } from '../../hooks/useScroll.ts'
import Button from '../../components/Button/Button.tsx'

interface VacanciesProps {
  documents?: boolean
  navClass?: string
  unListClass?: string
  onClick?: () => void
}

const Vacancies: React.FC<VacanciesProps> = ({ onClick }) => {
  const [buttonState, setButtonState] = useState<'normal' | 'hover' | 'active'>('normal')
  const [showAllItems, setShowAllItems] = useState<boolean>(false)
  const { isDesktop, isMobile } = useMediaQuery()
  const { executeScroll, registerRef } = useScroll()
  const vacanciesRef = useRef(null)

  const initialItemsCount = isMobile ? 6 : isDesktop ? 9 : 8

  useEffect(() => {
    registerRef('categoriesSection', vacanciesRef)
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

  const displayedCards = showAllItems ? vacancies : vacancies.slice(0, initialItemsCount)

  // const sectionClass = showAllItems ? `${s.vacanciesFull}` : `${s.vacanciesBrief}`

  return (
    <div className={s.wrapper}>
      <div className={s.pageTitle}>
        <span className={s.titleLeft}>Головна</span>
        <span className={s.titleDot}>&#183;</span>
        <span className={s.titleRight}>Вакансії</span>
        {/* <span className={s.actionHidden}>{action}</span> */}
      </div>

      <div className={s.mainTitle}>
        <h2>Вакансії у громадському секторі</h2>
      </div>
      <p className={s.subtitle}>
        На цій сторінці Ви можете знайти для себе або запропонувати вакансію в громадському секторі
      </p>

      <div className={s.inter}>
        <div className={s.btnWrap}>
          <Button
            component="link"
            type="button"
            buttonClasses={'filledBtn'}
            to={''}
            name="Додати вакансію"
            onClick={() => (window.location.href = '/createVacancy')}
            handleMouseEnter={() => {}}
            handleMouseLeave={() => {}}
            styleBtn={{ width: '100%' }}
          />
        </div>
        <div className={s.sorthWrap}>Сортувати за:</div>
      </div>

      <main className={s.main}>
        {/* <div className={s.switchWrap}>
          <div
            className={action === 'Фізична особа' ? `${s.activeSwitch} ${s.blue}` : s.activeSwitch}
            onClick={() => {
              setAction('Фізична особа')
            }}
          >
            Фізична особа
          </div>
          <div
            className={action === 'Організація' ? `${s.activeSwitch} ${s.blue}` : s.activeSwitch}
            onClick={() => {
              setAction('Організація')
            }}
          >
            Організація
          </div>
        </div> */}
        <div className={s.pageContent}>
          <aside className={s.filters}>
            <section className={s.filtersSection}></section>
            <div className={s.filteredItems}></div>
            <div className={s.btnWrap}>
              <Button
                type="reset"
                buttonClasses={'outlineBtn header_tablet'}
                name="Скинути всі фільтри"
                // onClick={() => ()}
                handleMouseEnter={() => {}}
                handleMouseLeave={() => {}}
                styleBtn={{ width: '100%' }}
              />
            </div>
          </aside>

          <section className={s.vacanciesSection} id="vacanciesSection" ref={vacanciesRef}>
            <div className={s.content}>
              <ul className={s.cards}>
                {displayedCards.map((card, index) => (
                  <li key={index}>
                    <Link onClick={onClick} to={card.url}>
                      <div className={s.card}>
                        <div className={s.cardContent}>
                          {/* <img src={card.image} alt={card.title} /> */}
                          <h3 className={s.cardTitle}>{card.title}</h3>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.btnWrap}>
              <button
                className={s.button}
                type="button"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {getIcon()}
                Показати більше вакансій
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Vacancies
