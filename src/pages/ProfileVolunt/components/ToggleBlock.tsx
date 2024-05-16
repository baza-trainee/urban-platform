import s from '../ProfileVolunt.module.scss'

type Props = {
  isMobile: boolean
  toggle: string
  dVolunteerData: { [key: string]: string }
  handleSelect: (id: string) => void
}

const ToggleBlock: React.FC<Props> = ({ isMobile, toggle, dVolunteerData, handleSelect }) => {
  return (
    <>
      {!isMobile && (
        <div className={s['content-block__toggle-block']}>
          <button
            onClick={() => handleSelect('info')}
            className={
              toggle === 'info'
                ? `${s['content-block__toggle']} ${s['content-block__toggle_selected']}`
                : `${s['content-block__toggle']}`
            }
          >
            <h3>{dVolunteerData.defaultInfo}</h3>
          </button>
          <button
            onClick={() => handleSelect('project')}
            className={
              toggle === 'project'
                ? `${s['content-block__toggle']} ${s['content-block__toggle_selected']}`
                : `${s['content-block__toggle']}`
            }
          >
            <h3>{dVolunteerData.myProject}</h3>
          </button>
          <button
            onClick={() => handleSelect('vacancy')}
            className={
              toggle === 'vacancy'
                ? `${s['content-block__toggle']} ${s['content-block__toggle_selected']}`
                : `${s['content-block__toggle']}`
            }
          >
            <h3>{dVolunteerData.myVacancy}</h3>
          </button>
          <button
            onClick={() => handleSelect('grants')}
            className={
              toggle === 'grants'
                ? `${s['content-block__toggle']} ${s['content-block__toggle_selected']}`
                : `${s['content-block__toggle']}`
            }
          >
            <h3>{dVolunteerData.myGrants}</h3>
          </button>
        </div>
      )}
    </>
  )
}

export default ToggleBlock
