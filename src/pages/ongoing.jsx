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
    <div>
      <div><center>ONGOING PROJECTS</center></div>

        <div className='flex'>
          <img src={paradise}></img>
          <div>
            <div>PRATHMESH PARADISE, ULWE, NAVI MUMBAI</div>
            <div>
              <li> G+4 Story Complex</li>
              <li> 1BHK, 2BHK & Shops</li>
              <li> Construction Area : 11,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={ongoing_symphony2}></img>
          <div>
            <div>PRATHMESH SYMPHONY, ULWE, NAVI MUMBAI</div>
            <div>
              <li> G+13 Story Complex</li>
              <li> 1BHK, 2BHK & Showrooms</li>
              <li> Construction Area : 60,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={research_center}></img>
          <div>
            <div>MEDICAL INSTITUTE & RESEARCH CENTER, CHITRAKOOT, UTTAR PRADESH</div>
            <div>
              <li> Spread Across 108 Acre.</li>
              <li> Admin Block, Academic Block, Library Block</li>
              <li> Residents : Dean, Chancellor, Vice Chancellor, Teaching, Staff, Admin Staff, Supporting Staff, Dedicated Facility for Visiting Faculty and Parents, 1200 Students.</li>
              <li> Construction Area : 38,77,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={paradise}></img>
          <div>
            <div>STUDENT'S RESIDENCE MEDICAL INSTITUTE & RESEARCH CENTER, CHITRAKOOT, UTTAR PRADESH</div>
            
          </div>
        </div>




    </div>
  )
}

export default Ongoing
