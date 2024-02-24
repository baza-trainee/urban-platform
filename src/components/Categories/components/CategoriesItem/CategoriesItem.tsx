import React from 'react'
import s from './CategoriesItem.module.scss'

interface CardProps {
  title: string
  image: string
}

const CategoriesItem: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className={s.card}>
      <div className={s.cardComtent}>
        <img src={image} alt={title} />
        {/* <h3>{title}</h3> */}
      </div>
    </div>
  )
}

export default CategoriesItem
