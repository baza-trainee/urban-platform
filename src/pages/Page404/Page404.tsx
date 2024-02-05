import { Link } from 'react-router-dom'
import s from './Page404.module.scss'

const Page404: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.title}>Вибачте, сталася помилка!</h1>
        <p className={s.subtitle}>Не вдається знайти сторінку, яку Ви шукали.</p>
        <div className={s.errorWrapper}>
          <h3 className={s.error}>404</h3>
        </div>
        <div className={s.errorBtn}>
          <Link className={s.link} to="/">
            Повернутись на головну
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Page404
