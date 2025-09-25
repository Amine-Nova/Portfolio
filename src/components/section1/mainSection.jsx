import React from 'react'
import Header from '../header/header'
import Content from '../Content/content'

const mainSection = () => {
  return (
    <div className='bg w-full flex flex-col items-center relative'>    
      <Header />
      <Content />
    </div>
  )
}

export default mainSection