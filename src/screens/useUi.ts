'use client'
import { useState } from 'react'


export const useUi = (state: boolean) => {
  const [isHide, setIsHide] = useState(state)

  const toggleMenu = () => {
    setIsHide(!isHide)
    // console.log('ey Toggle!')
   
  }


  return {
    toggleMenu,
    isHide,
  }
}

