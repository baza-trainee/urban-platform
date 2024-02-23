import React from 'react'
import { Outlet } from 'react-router'
import s from './MainLayout.module.scss'
import CookiesPanel from '../CookiesPanel/CookiesPanel'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const MainLayout: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <CookiesPanel />
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
