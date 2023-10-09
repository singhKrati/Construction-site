

import React from 'react'
import hero_api from '../Api/hero_api'
import hero_image from '../assets/hero_image.jpg'
import './hero.css'


const Hero = () => {
  return (
   
    <div
      className="relative bg-cover bg-center h-screen flex items-center text-white"
      style={{
        backgroundImage: `url('../public/hero_image.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 font-serif">
            Building Future with Harmony Infra Reality
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8">
            Honest and Reliable since 1995
          </p>
        
        </div>
      </div>
    </div>
    
  )
}

export default Hero
