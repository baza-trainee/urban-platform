import { Link } from 'react-router-dom'
import s from './About.module.scss'
import icon from '../../assets/images/about/bulb.svg'
import btn from '../../assets/images/about/btn.svg'

const About: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h1 className={s.title}>Місто активних людей це</h1>
        <p className={s.subtitle}>
          На платформі Ви можете сформувати команду та виконати спільний проєкт, знайти однодумців,
          інвесторів, долучитись до існуючого проєкту.
        </p>
        <p className={s.subtitle}>
          На платформі “Місто активних людей” Ви можете сформувати команду та виконати спільний
          проєкт, знайти однодумців, інвесторів, долучитись до існуючого проєкту.
        </p>

        <div className={s.howItWorksBtn}>
          <img src={btn} alt="buttonIcon" />
          <Link className={s.link} to="/howitworks">
            Як це пряцює?
          </Link>
        </div>
      </div>
      <div className={s.iconWrapper}>
        <img className={s.icon} src={icon} alt="icon" />
      </div>
    </section>
  )
}

export default About
