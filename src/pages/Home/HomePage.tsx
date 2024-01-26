import React from 'react'
import { Outlet } from 'react-router-dom'
import s from './Home.module.scss'

const HomePage: React.FC = () => {
  return (
    <>
      <h1>HomePage</h1>
      <div className={s.wrapper}>
        <Outlet />
      </div>
    </>
  )
}

export default HomePage
