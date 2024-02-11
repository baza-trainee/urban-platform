import React from 'react'
import { Outlet } from 'react-router'
import s from './MainLayout.module.scss'
import CookiesPanel from '../CookiesPanel/CookiesPanel'

const MainLayout: React.FC = () => {
  return (
    <div className={s.wrapper}>
        <CookiesPanel/>
      <h1>MainLayout</h1>
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
