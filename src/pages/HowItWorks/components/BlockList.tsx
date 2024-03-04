import React from 'react'
import { Link } from 'react-router-dom'
import s from '../HowItWorks.module.scss'

interface Block {
  id: number
  imgSrc?: string
  title: string
  text: string
  link?: string
  linkText?: string
}

interface BlockListProps {
  blocks: Block[]
}

const BlockList: React.FC<BlockListProps> = ({ blocks }) => (
  <ul className={s.blockList}>
    {blocks.map((block) => (
      <li key={block.id} className={s.blockList__item}>
        <div className={s.blockList__content}>
          <img className={s.blockList__img} src={block.imgSrc} alt="" />
          <h3 className={s.blockList__title}>{block.title}</h3>
        </div>
        <p className={s.blockList__text}>
          {block.text} <br />
          {block.link && (
            <>
              <Link to={block.link} className={s.blockList__link}>
                {block.linkText}
              </Link>{' '}
              <br />
              {block.linkText === 'сторінку реєстрації' && ' та заповни необхідні поля'}
            </>
          )}
        </p>
      </li>
    ))}
  </ul>
)
export default BlockList
