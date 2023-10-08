import React from 'react'
import silver_park1 from '../assets/silver_park1.jpeg'
import silver_park2 from '../assets/silver_park2.jpeg'
import symphony1 from '../assets/symphony1.jpeg'
import symphony2 from '../assets/symphony2.jpeg'
import symphony3 from '../assets/symphony3.jpeg'
import nutan2 from '../assets/nutan2.jpeg'


const Upcoming = () => {
  return (
    <div>
       <div><center>UPCOMING PROJECTS</center></div>

       <div>
        <div className='flex'>
          <img src={silver_park1}></img>
          <div>
            <div>SILVER PARK CHS, MIRAROAD, MUMBAI</div>
            <div>
              <li> G+30 Story Complex cluster of 6 buildings</li>
              <li> 1BHK, 2BHK, 3BHK, Showrooms & Offices</li>
              <li> Construction Area : 14,00,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={nutan2}></img>
          <div>
            <div>NUTAN KALPANA CHS CHS, MULUND, MUMBAI</div>
            <div>
              <li> G+42 Story Complex</li>
              <li> 1BHK, 2BHK, 3BHK, Showrooms & Offices</li>
              <li> Construction Area : 2,08,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={symphony1}></img>
          <div>
            <div>PRATHMESH SYMPHONY, ULWE, MUMBAI</div>
            <div>
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
 