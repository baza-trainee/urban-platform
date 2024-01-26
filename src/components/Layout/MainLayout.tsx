import React from 'react'
import s from './MainLayout.module.scss'
import { Outlet } from 'react-router'

const MainLayout: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <h1>MainLayout</h1>
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
