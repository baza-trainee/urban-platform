import s from '../VolunteerOrgProfileEdit.module.scss'

interface IProps {
  isShowMoreBtn: boolean
  isMobile: boolean
  handleShowMore: () => void
  btnShowMore: string
}

const BtnShowCards: React.FC<IProps> = ({
  isShowMoreBtn,
  isMobile,
  handleShowMore,
  btnShowMore
}) => {
  return (
    <>
      {isShowMoreBtn && !isMobile && (
        <div className={s['profile-block__btn']} onClick={handleShowMore}>
          <p className={s['profile-block__btn-title']}>{btnShowMore}</p>
        </div>
      )}
    </>
  )
}

export default BtnShowCards
