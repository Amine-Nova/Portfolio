import React from 'react'
import Text from '../HeyText/text'
import LightRays from "../Backgrounds/lightup";

const second = () => {
  return (
    <div className='flex w-full justify-center relative max-w-full'>
        <Text />
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
    </div>
  )
}

export default second