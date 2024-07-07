import { useState } from 'react'

import s from './CookiesPanel.module.scss'

import Button from '../Button/Button'
import useMediaQuery from '../../hooks/useMediaQuery'
import routs from '../../routes/NavLinks'

const CookiesPanel: React.FC = () => {
  const [isPanelShow, setIsPanelShow] = useState(false)
  const { isDesktop, isTablet } = useMediaQuery()

  const btnStyles = isDesktop
    ? { width: '135px', margin: '0 auto' }
    : isTablet
    ? { width: '112px', height: '48px', margin: '0 auto' }
    : { width: '288px', height: '56px', margin: '0 auto' }

  if (!isPanelShow) {
    return (
      <section className={s.cookies}>
        <h3>Використання Cookies 🍪</h3>
        <p>
          Ми використовуємо файли cookie для поліпшення вашого досвіду на нашому веб-сайті. Це
          допомагає нам аналізувати взаємодію з користувачами та надавати вам більш персоналізований
          контент.{' '}
        </p>
        <p>Натискаючи на ОК, ви даєте згоду на використання cookies.</p>
        <p>
          Якщо ви хочете дізнатися більше, перейдіть до{' '}
          <a href={routs.privacyPolicy} target="_blank">
            Політики конфіденційності.{' '}
          </a>{' '}
        </p>
        <Button
          name="OK"
          onClick={() => setIsPanelShow(!isPanelShow)}
          buttonClasses="filledBtn"
          styleBtn={btnStyles}
        />
      </section>
    )
  }
  return null
}
export default CookiesPanel
