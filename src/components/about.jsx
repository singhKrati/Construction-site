import React from 'react'
import { RiTeamFill } from 'react-icons/ri';
import intro from '../assets/intro.jpeg'
import {SiGoogledocs} from 'react-icons/si'
import {TfiPencil} from 'react-icons/tfi'



const About = () => {
  return (
    <div >

      <div className='bg-slate-500 text-5xl mb-24'><center><h1 className='align-middle'>About Us</h1></center></div>

      <div className='flex bg-red-50 '>
          <div className=''>
              <div className='bg-yellow-300 w-4/5 ml-20'>
                
                Harmony Infra Realty is a proprietary concern and a sister
                company of Prathmesh Construction. We are having more than
                24 years experience in construction activity. We are also
                registered Govt. contractor and executed several projects for
                western and central Railways.
                
              </div>
              <div className='bg-red-600'>
                  <div className='flex'>
                    <div>
                        <RiTeamFill size={30} color='orange'/>
                    </div>
                    <div>
                        Professional Approach
                        <div className='w-60'>
                          Our approach to building sustainable facilities is based on high professionalism and delivering projects with fairness and excellence.</div>
                    </div>
                  </div>

                  <div className='flex'>
                    <div>
                        <SiGoogledocs size={30} color='orange'/>
                    </div>
                    <div>
                        Experienced Team 
                        <div className='w-60'>
                        We employ the best experts in construction that make our every project a reliable one. You can trust each member of Edifice team.
                        </div>
                    </div>
                  </div>

                  <div className='flex'>
                    <div>
                        <TfiPencil size={30} color='orange'/>
                    </div>
                    <div>
                        Best Solutions
                        <div className='w-60'>
                        Our company offers top-notch construction solutions to corporate and individual clients worldwide, while also covering their needs.
                        </div>
                    </div>
                  </div>
              </div>
          </div>

          <div className='h-full bg-green-400 w-full'>
              <img src={intro} className='w-full h'></img>
          </div>

      </div>
    </div>
  )
}

export default About
