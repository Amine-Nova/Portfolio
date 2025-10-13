import React from 'react'
import Boxes from '../Items/boxes'
import pongimg from "../../assets/abenmous.png";
import inceptionimg from "../../assets/abenmous1.png";
import cub3dimg from "../../assets/abenmous2.png";
import ftircimg from "../../assets/abenmous3.png";
import minishellimg from "../../assets/abenmous4.png";
import pushswapimg from "../../assets/abenmous5.png";


const container = () => {
  return (
    <div className='grid grid-cols-3 gap-20 px-4 py-20'>
      <Boxes name='Pong Arena' src={pongimg} title={''}/>
      <Boxes name='Inception' src={inceptionimg} title={''}/>
      <Boxes name='Cub3d' src={cub3dimg} title={''}/>
      <Boxes name='FT_IRC' src={ftircimg} title={''}/>
      <Boxes name='MiniShell' src={minishellimg} title={''}/>
      <Boxes name='Push_Swap' src={pushswapimg} title={''}/>
    </div>
  )
}

export default container


