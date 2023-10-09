import React from 'react'
import symphony2 from '../assets/symphony2.jpeg'
import prathmesh_harmony from '../assets/prathmesh_harmony.jpeg'
import residence4 from '../assets/residence4.jpeg'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div  id='Projects'>
      <div className='text-4xl font-serif md:font-serif p-6 '><center>OUR PROJECTS</center></div>  
      <div className='flex flex-col lg:flex-row gap-11 mt-14 justify-center items-center '>
        <Link to={'/completed'}>
        <div className='w-[200px] md:w-[400px] flex flex-col m-4'> 
            <div className=''>
            <img src={prathmesh_harmony} className=''></img>
            
            </div>
            <button className='mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Completed</button>
        </div>
        </Link>

        <Link to={'/ongoing'}>
        <div className='w-[200px] md:w-[400px] p-3 flex flex-col m-4'>
            <div className=''>
            <img src={residence4} className=''></img>
            
            </div>
            <button className='mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Ongoing</button>
        </div>
        </Link>

        <Link to={'/upcoming'}>
        <div className='w-[200px] md:w-[400px] p-3 flex flex-col m-4'>
            <div className=''>
                
            <img src={symphony2} className=''></img>
            </div>
            <button className='mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Upcoming</button>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default Projects
