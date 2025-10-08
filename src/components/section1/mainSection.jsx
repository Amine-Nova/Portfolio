import React from 'react'
import Header from '../header/header'
import Content from '../Content/content'

const mainSection = () => {
  return (
    <div className='bg w-full h-[35vh] 2xl:h-[90vh] lg:h-[88vh] md:h-[80vh] sm:h-[48vh] h-[38vh] flex flex-col items-center relative'>    
      <Header />
      <Content />
    </div>
  )
}

export default mainSection