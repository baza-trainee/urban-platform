import React from 'react'
import { Outlet } from 'react-router'
import s from './MainLayout.module.scss'
import CookiesPanel from '../CookiesPanel/CookiesPanel'
import Header from '../Header/Header'

const MainLayout: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <CookiesPanel />
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
