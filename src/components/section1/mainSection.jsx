import React from 'react'
import Header from '../header/header'
import Content from '../Content/content'

const mainSection = () => {
  return (
    <div className='bg w-full h-[30em] 2xl:h-[75em] lg:h-[70em] md:h-[60em] sm:h-[35em] flex flex-col items-center relative'>    
      <Header />
      <Content />
    </div>
  )
}

export default mainSection