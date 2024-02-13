import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import s from './Home.module.scss'
import { scrollToSection, scrollOnTop } from '../../utils/scrollToSection'
import Hero from '../../components/Hero/Hero'

const HomePage: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    location.hash && scrollToSection(location.hash.slice(1))
    location.pathname === '/' && !location.hash ? scrollOnTop() : null
  }, [location])

  return (
    <div className={s.wrapper}>
      <Hero />
      {/* <Categories /> */}
      {/* <MakeGrant /> */}
      {/* <Counts /> */}
      {/* <Faq /> */}
      {/* <MakeVacancy /> */}
      {/* <Partners /> */}
      <Outlet />
    </div>
  )
}

export default HomePage
