import React from 'react'
import { Link } from 'react-router-dom'
import s from '../HowItWorks.module.scss'

interface Block {
  id: number
  imgSrc?: string
  title: string
  text: string
  link?: string
}

interface BlockListProps {
  blocks: Block[]
}

const BlockList: React.FC<BlockListProps> = ({ blocks }) => (
  <ul className={s.blockList}>
    {blocks.map((block) => (
      <li key={block.id} className={s.blockListItem}>
        <img className={s.blockList__img} src={block.imgSrc} alt="" />
        <h3 className={s.blockList__title}>{block.title}</h3>
        <p className={s.blockList__text}>{block.text}</p>
        {block.link && (
          <Link to={block.link} className={s.blockList__link}>
            Read more
          </Link>
        )}
      </li>
    ))}
  </ul>
)

export default BlockList
