import React from 'react'
import silver_park1 from '../assets/silver_park1.jpeg'
import silver_park2 from '../assets/silver_park2.jpeg'
import symphony1 from '../assets/symphony1.jpeg'
import symphony2 from '../assets/symphony2.jpeg'
import symphony3 from '../assets/symphony3.jpeg'
import nutan2 from '../assets/nutan2.jpeg'


const Upcoming = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
       <div className=' text-lg lg:text-5xl font-bold lg:p-7 p-3'><center>UPCOMING PROJECTS</center></div>

       <div className='flex flex-col justify-center items-center  md:gap-20'>
        <div className='flex'>
          <img src={silver_park1} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold'>SILVER PARK CHS, MIRAROAD, MUMBAI</div>
            <div className='flex flex-col  gap-4 m-7'>
              <li> G+30 Story Complex cluster of 6 buildings</li>
              <li> 1BHK, 2BHK, 3BHK, Showrooms & Offices</li>
              <li> Construction Area : 14,00,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={nutan2} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold w-[300px]'>NUTAN KALPANA CHS CHS, MULUND, MUMBAI</div>
            <div className='flex flex-col  gap-4 m-7'>
              <li> G+42 Story Complex</li>
              <li> 1BHK, 2BHK, 3BHK, Showrooms & Offices</li>
              <li> Construction Area : 2,08,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={symphony1} className=" w-[200px] md:w-[300px] "></img>
          <div className='m-5'>
            <div className='text-sm md:text-xl font-bold'> PRATHMESH SYMPHONY, ULWE, MUMBAI</div>
            <div className='flex flex-col  gap-4 m-7'>
              <li> G+13 Story Complex</li>
              <li> 1BHK, 2BHK & Showrooms</li>
              <li> Construction Area : 44,500. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

       </div>
    </div>
  )
}

export default Upcoming
 