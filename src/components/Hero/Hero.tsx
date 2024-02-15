import React from 'react'
import { useForm } from 'react-hook-form'
import s from './Hero.module.scss'
import Menu from '../../components/Menu/Menu'
import GlobalSearch from '../ToolsPanel/Search/GlobalSearch'
import HeroNav from './components/HeroNav/HeroNav'
import Button from '../Button/Button'
import useMediaQuery from '../../hooks/useMediaQuery'
import heroTextData from './heroTextData.json'
import routs from '../../routes/NavLinks'

interface HeroProps {
  setSearchWord?: React.Dispatch<React.SetStateAction<string | null>>
  href?: string
}

const Hero = ({ setSearchWord }: HeroProps) => {
  const { isMobile } = useMediaQuery()
  const { control, setValue, watch } = useForm({
    defaultValues: {
      search: ''
    }
  })
  const resetField = () => {
    setValue('search', '')
    if (setSearchWord) {
      setSearchWord('')
    }
  }
  const searchValue = watch('search')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && setSearchWord) {
      setSearchWord(searchValue)
    }
  }

  const handleClick = () => {
    window.location.href = `${routs.createProject}`
  }

  return (
    <section id="heroSection" className={s.hero}>
      <div className={s.content}>
        <Menu navClass="heroMenu" />
        <h1 className={s.contentTitle}>{heroTextData[0]}</h1>
        <span className={s.contentText}>{heroTextData[1]}</span>
        <form action="*" className={s.searchForm}>
          <div className={s.search}>
            <GlobalSearch
              name="search"
              control={control}
              resetField={resetField}
              placeholder={heroTextData[2]}
              handleKeyDown={handleKeyDown}
            />
          </div>
          <div className={s.btnWrap}>
            <button
              type="button"
              className={s.searchBtn}
              onClick={() => {
                window.location.href = '/'
              }}
            >
              Знайти
            </button>
          </div>
        </form>
        {isMobile && (
          <Button
            buttonClasses={'outlineBtn'}
            type={'button'}
            name={'Створити проєкт'}
            onClick={handleClick}
            styleBtn={{ width: '100%' }}
            handleMouseEnter={() => {}}
            handleMouseLeave={() => {}}
          />
        )}

        <HeroNav />
      </div>
    </section>
  )
}

export default Hero
