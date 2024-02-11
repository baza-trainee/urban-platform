import { useState } from 'react'
import s from './CookiesPanel.module.scss'

const CookiesPanel: React.FC = () => {
  const [isPanelShow, setIsPanelShow] = useState(false)

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
          <a href="/pdf/privacy-policy.pdf" target="_blank">
            Політики конфіденційності.{' '}
          </a>{' '}
        </p>
        <button onClick={() => setIsPanelShow(!isPanelShow)}>OK</button>
      </section>
    )
  }
  return null
}
export default CookiesPanel
