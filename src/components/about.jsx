import React from 'react'
import { RiTeamFill } from 'react-icons/ri';
import intro from '../assets/intro.jpeg'
import {SiGoogledocs} from 'react-icons/si'
import {TfiPencil} from 'react-icons/tfi'



const About = () => {
  return (
    <div  className='w-full h-full mt-10' id='About'>

      <div className=' text-5xl mb-24'><center><h1 className='align-middle font-serif'>About Us</h1></center></div>
  

      <div className='flex  flex-col-reverse justify-center items-center lg:flex-row gap-3  lg:m-12'>
          <div className='w-1/2'>
              <div className='lg:m-6 pb-8 lg:pl-3 text-sm lg:text-xl'>
                
                Harmony Infra Realty is a proprietary concern and a sister
                company of Prathmesh Construction. We are having more than
                24 years experience in construction activity. We are also
                registered Govt. contractor and executed several projects for
                western and central Railways.
                
              </div>
              <div className='lg:pl-20 flex flex-col gap-8'>
                  <div className='flex gap-4'>
                    <div>
                        <RiTeamFill size={30} color='orange'/>
                    </div>
                    <div>
                        <p className='text-lg font-bold'>Professional Approach</p>
                        <div className='w-full'>
                          Our approach to building sustainable facilities is based on high professionalism and delivering projects with fairness and excellence.</div>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <div>
                        <SiGoogledocs size={30} color='orange'/>
                    </div>
                    <div>
                    <p className='text-lg font-bold'>Experienced Team </p>
                        <div className='w-full'>
                        We employ the best experts in construction that make our every project a reliable one. You can trust each member of Edifice team.
                        </div>
                    </div>
                  </div>

                  <div className='flex gap-4'>
                    <div>
                        <TfiPencil size={30} color='orange'/>
                    </div>
                    <div>
                    <p className='text-lg font-bold'>Best Solutions</p>
                        <div className='w-full'>
                        Our company offers top-notch construction solutions to corporate and individual clients worldwide, while also covering their needs.
                        </div>
                    </div>
                  </div>
              </div>
          </div>

          <div className=' w-1/2'>
              <img src={intro} className='w-[450px] m-auto'></img>
          </div>

      </div>
    </div>
  )
}

export default About
