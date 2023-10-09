import React from 'react'
import paradise from '../assets/paradise.jpeg'
import ongoing_symphony1 from '../assets/ongoing_symphony1.jpeg'
import ongoing_symphony2 from '../assets/ongoing_symphony2.jpeg'
import research_center from '../assets/research_center.jpeg'
import research_center2 from '../assets/research_center2.jpeg'
import research_center3 from '../assets/research_center3.jpeg'
import research_center4 from '../assets/research_center4.jpeg'
import residence1 from '../assets/residence1.jpeg'
import residence2 from '../assets/residence2.jpeg'
import residence4 from '../assets/residence4.jpeg'

const Ongoing = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <div className=' text-lg lg:text-5xl font-bold lg:p-7 p-3'><center>ONGOING PROJECTS</center></div>

        <div className='flex flex-col justify-center items-center md:flex-row md:gap-20'>
          <img src={paradise} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold' >PRATHMESH PARADISE, ULWE, NAVI MUMBAI</div>
            <div className='flex flex-col  gap-4 m-7'>
              <li> G+4 Story Complex</li>
              <li> 1BHK, 2BHK & Shops</li>
              <li> Construction Area : 11,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:flex-row md:gap-20'>
          <img src={ongoing_symphony2} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold'>PRATHMESH SYMPHONY, ULWE, NAVI MUMBAI</div>
            <div className='flex flex-col  gap-4 m-7'>
              <li> G+13 Story Complex</li>
              <li> 1BHK, 2BHK & Showrooms</li>
              <li> Construction Area : 60,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:flex-row md:gap-20'>
          <img src={research_center} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold md:w-[450px]'>MEDICAL INSTITUTE & RESEARCH CENTER, CHITRAKOOT, UTTAR PRADESH</div>
            <div className='flex flex-col  gap-4 m-7 md:w-[400px]'>
              <li> Spread Across 108 Acre.</li>
              <li> Admin Block, Academic Block, Library Block</li>
              <li> Residents : Dean, Chancellor, Vice Chancellor, Teaching, Staff, Admin Staff, Supporting Staff, Dedicated Facility for Visiting Faculty and Parents, 1200 Students.</li>
              <li> Construction Area : 38,77,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:flex-row md:gap-20'>
          <img src={paradise} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold md:w-[450px]'>STUDENT'S RESIDENCE MEDICAL INSTITUTE & RESEARCH CENTER, CHITRAKOOT, UTTAR PRADESH</div>
            
          </div>
        </div>




    </div>
  )
}

export default Ongoing
