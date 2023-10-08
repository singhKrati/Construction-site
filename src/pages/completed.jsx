import React from 'react'
import prathmesh_harmony from '../assets/prathmesh_harmony.jpeg'
import om_shakti from '../assets/om_shakti.jpeg'

const Completed = () => {
  return (
    <div>
      <div><center>COMPLETED PROJECTS</center></div>

      <div className='flex'>
          <img src={prathmesh_harmony}></img>
          <div>
            <div>PRATHMESH HARMONY, ULWE, NAVI MUMBAI</div>
            <div>
              <li> G+6 Story Complex</li>
              <li> 2BHK & Showrooms</li>
              <li> Construction Area : 40,000. Sq.Ft(Approx)</li>
            </div>
          </div>
        </div>

        <div className='flex'>
          <img src={om_shakti}></img>
          <div>
            <div>OM SHAKTI HERITAGE, NERUL, NAVI MUMBAI</div>
            <div>
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
