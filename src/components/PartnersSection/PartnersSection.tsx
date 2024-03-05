import React from 'react'
import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'
import s from './PartnersSection.module.scss'
import { partnersData } from './PartnersData'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  cssEase: 'linear',
  swipeToSlide: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        dots: false
      }
    },
    {
      breakpoint: 744,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    },
    {
      breakpoint: 280,
      settings: {
        slidesToShow: 2,
        dots: false
      }
    }
  ]
}

const PartnersSection: React.FC = () => {
  return (
    <section className={s.partnersSection} id="partnerssection">
      <Slider {...settings}>
        {partnersData.map((card) => (
          <div className={s.card}>
            <div className={s.cardWrap}>
              <div className={s.cardImage}>
                <img
                  src={`/src/assets/icons/partners/${card.image}`}
                  alt={card.title}
                  className={s.image}
                />
              </div>
              <div className={s.cardTitle}>{card.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default PartnersSection
