import React from 'react'
import symphony2 from '../assets/symphony2.jpeg'
import prathmesh_harmony from '../assets/prathmesh_harmony.jpeg'
import residence4 from '../assets/residence4.jpeg'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
      <div className='text-4xl md:font-serif'><center>OUR PROJECTS</center></div>  
      <div className='flex'>
        <Link to={'/completed'}>
        <div> 
            <div className='h-full '>
            <img src={prathmesh_harmony} className='h-full'></img>
            
            </div>
        </div>
        </Link>

        <Link to={'/ongoing'}>
        <div >
            <div className='h-full'>
            <img src={residence4} className='h-full'></img>
            
            </div>
        </div>
        </Link>

        <Link to={'/upcoming'}>
        <div>
            <div className='h-full'>
                
            <img src={symphony2} className='h-full'></img>
            </div>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Projects
