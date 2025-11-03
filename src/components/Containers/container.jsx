import React, { useState } from 'react'
import Boxes from '../Items/boxes'
import images from "../../assets";


const data = [
  {
    name: 'Pong Arena',
    src: images[0],
    title: '1337 Cursus',
    carimages : [images[6], images[7], images[8], images[9], images[10]]
  },
  {
    name: 'Inception',
    src: images[1],
    title: '1337 Cursus',
    carimages : []
    
  },
  {
    name: 'Cub3d',
    src: images[2],
    title: '1337 Cursus',
    carimages : []
  },
  {
    name: 'FT_IRC',
    src: images[3],
    title: '1337 Cursus',
    carimages : []
  },
  {
    name: 'MiniShell',
    src: images[4],
    title: '1337 Cursus',
    carimages : []
  },
  {
    name: 'Push_Swap',
    src: images[5],
    title: '1337 Cursus',
    carimages : []
  },
]

const Container = () => {
  const [limit, setLimit] = useState(3);
  function addItems() {
      setLimit(prev => Math.min(prev + 3, data.length));
  }
  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 px-4 py-20'>
      {data && data.slice(0, limit).map((item, index) => (
        <Boxes key={index} name={item.name} src={item.src} title={item.title} carimage={item.carimages}/>
      ))}
    </div>
      <div className='w-full flex justify-center'>
        {limit < data.length ? (
            <button onClick={addItems} className='uiverse w-32 rounded-full text-[#111928]  h-[40px] bg-blue-200 z-20'>Load More</button>
        ) : (<p className='capitalize text-blue-200'>Go to my Git Profile</p>)}
      </div>
    </div>
  )
}

export default Container


