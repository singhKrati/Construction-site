import React from 'react'
import prathmesh_harmony from '../assets/prathmesh_harmony.jpeg'
import om_shakti from '../assets/om_shakti.jpeg'

const Completed = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 font-serif'>
      <div className=' text-lg lg:text-5xl font-bold lg:p-7 p-3'><center>COMPLETED PROJECTS</center></div>

      <div className='flex flex-col justify-center items-center md:flex-row md:gap-20'>
          <img src={prathmesh_harmony} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold'>PRATHMESH HARMONY, ULWE, NAVI MUMBAI</div>
            <div className='flex flex-col  gap-4 m-7'>
              <li> G+6 Story Complex</li>
              <li> 2BHK & Showrooms</li>
              <li> Construction Area : 40,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:flex-row md:gap-20'>
          <img src={om_shakti} className=" w-[200px] md:w-[300px] h-[280px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold'>OM SHAKTI HERITAGE, NERUL, NAVI MUMBAI</div>
            <div className='flex flex-col gap-4 m-7'>
              <li> G+7 Story Complex</li>
              <li> 1BHK, 2BHK & Showrooms</li>
              <li> Construction Area : 16,200. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Completed
