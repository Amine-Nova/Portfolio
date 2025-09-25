import React from 'react'
import Welcome from '../welcome/welcome'
import SocialxTime from '../socialxtime/socialxtime'

const header = () => {
  return (
    <nav className='flex justify-between p-4 item-baseline w-full sm:px-16 sm:py-12'>
      <Welcome />
      <SocialxTime />
    </nav>
  )
}

export default header
