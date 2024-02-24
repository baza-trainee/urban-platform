import { useState } from 'react'
import { navLinks } from '../Hero/components/HeroNav/heroNavData'

type ButtonState = 'normal' | 'hover' | 'active'

interface HeroNavState {
  buttonStates: ButtonState[]
  handleMouseEnter: (index: number) => void
  handleMouseLeave: (index: number) => void
  handleClick: (index: number) => void
  // onClick: () => void
  // getIcon: (index: number) => JSX.Element;
  // 	HeroNavProps: HeroNavProps;
}

const useNavState = (): HeroNavState => {
  const [buttonStates, setButtonStates] = useState<Array<ButtonState>>(
    Array(navLinks.length).fill('normal')
  )

  const handleMouseEnter = (index: number) => {
    const updatedStates = [...buttonStates]
    updatedStates[index] = 'hover'
    setButtonStates(updatedStates)
  }

  const handleMouseLeave = (index: number) => {
    const updatedStates = [...buttonStates]
    updatedStates[index] = 'normal'
    setButtonStates(updatedStates)
  }

  const handleClick = (index: number) => {
    const updatedStates = [...buttonStates]
    updatedStates[index] = 'active'
    setButtonStates(updatedStates)

    // You may want to modify this part based on your specific requirements
    // For now, it calls the onClick function if provided and sets the state back to 'hover'
    // if (onClick) {
    //   onClick();
    //   updatedStates[index] = 'hover';
    //   setButtonStates(updatedStates);
    // }
  }

  //   const getIcon = (index: number) => {
  //   switch (buttonStates[index]) {
  //     case 'hover':
  //       return <GridBlue width={24} height={24} fill="#0041A1" />;
  //     case 'active':
  //       return <GridWhite width={24} height={24} fill="#F7F2ED" />;
  //     default:
  //       return <GridBlack width={24} height={24} fill="#000710" />;
  //   }
  // };

  return {
    buttonStates,
    handleMouseEnter,
    handleMouseLeave,
    handleClick
    // getIcon,
  }
}

export default useNavState
