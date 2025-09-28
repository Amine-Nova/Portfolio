import React from 'react'
import { DragEndEvent } from '@dnd-kit/core';

const Terminal = () => {
  return (
    <div className='flex items-center justify-center p-2 relative min-h-96'>
        <div class="w-[600px] h-[200px] coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
      <div class="top mb-2 flex justify-start">
          <div class="h-3 w-3 bg-red-500 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div class="mt-4 flex">
          <span class="text-green-400">abenmous:~$</span>
          <p class="flex-1 typing items-center pl-2">
              apt-get hire me 
          </p>
      </div>
  </div>
  
    </div>
  )
}

export default Terminal