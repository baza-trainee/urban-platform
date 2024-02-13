import React from 'react'
import clsx from 'clsx'
import s from './Button.module.scss'

interface IButtonProps {
  name?: string
  buttonClasses?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  selected?: boolean
  startIcon?: React.ReactNode
  styleBtn?: React.CSSProperties
  children?: React.ReactNode
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

const Button: React.FC<IButtonProps> = ({
  name,
  buttonClasses,
  onClick,
  type,
  disabled,
  styleBtn,
  children,
  startIcon,
  handleMouseEnter,
  handleMouseLeave
}) => {
  const btnClasses = buttonClasses
    ? clsx(s.button, buttonClasses?.split(' ').map((item) => s[item]))
    : s.button

  const renderButtonContent = () => (
    <>
      {startIcon && <div className={s.buttonIcon}>{startIcon}</div>}
      {children}
    </>
  )

  return (
    <button
      className={btnClasses}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={styleBtn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderButtonContent()}
      {children}
      {name}
    </button>
  )
}

export default Button
