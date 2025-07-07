import React from 'react'
import spoon from '../assets/spoon.png'

const Title = ({title,isRight,isSmall}: {title: string, isRight?: boolean, isSmall: boolean}) => {
  return (
    <div>
      <h1 className={`capitalize text-main font-base ${isSmall ? 'text-[35px]' : 'text-[40px] sm:text-[70px]'}`}>{title}</h1>
      <img className={`w-[60px]' ${isRight ? 'ml-auto' : ''}`} src={spoon} alt='Spoon' />
    </div>
  )
}

export default Title