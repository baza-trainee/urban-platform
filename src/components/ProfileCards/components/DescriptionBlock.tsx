import s from '../ProfileCards.module.scss'

interface IProps {
  toggle?: string
  mobile?: boolean
  description?: string
}

const DescriptionBlock: React.FC<IProps> = ({ toggle, mobile, description }) => {
  return (
    <>
      <div
        className={`${s['profile-block__description-block']} ${
          toggle && toggle !== 'project' && s['profile-block__description-block_vacancy-grant']
        } ${mobile && s['profile-block__description-block_mobile']}`}
      >
        <p
          className={`${s['profile-block__description']}${
            mobile && s['profile-block__description_mobile']
          }`}
        >
          {description}
        </p>
      </div>
      <div
        className={`${s['profile-block__btn-block']} ${
          toggle && toggle !== 'project' && s['profile-block__btn-block_vacancy-grant']
        } ${mobile && s['profile-block__btn-block_mobile']}`}
      ></div>
    </>
  )
}

export default DescriptionBlock
