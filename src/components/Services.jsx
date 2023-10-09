import React from 'react'
import architectural_modelling from '../assets/architectural_modelling.jpg'
import construction_planning from '../assets/construction_planning.jpg'
import construction_management from '../assets/construction_management.jpeg'

const Services = () => {
  return (
    <div>
        <div className='text-4xl md:font-serif p-6'><center>OUR SERVICES</center></div>
        <div className='flex flex-col lg:flex-row gap-11 mt-14 justify-center items-center m-5'>


            <div className='w-[200px] md:w-[400px] p-3 flex flex-col m-4'>
                <div>
                    <img src={construction_planning} className='w-[400px]'></img>
                </div>
                <div>
                    <p className='text-lg font-bold text-center'>Preconstruction Planning</p>
                </div> 
                <div>
                    <p>Preconstruction planning is the backbone of our construction. Our team has been trained to plan meticulously and execute with precision to ensure that everything is perfectly done. We'll help you plan your project from start to finish, ensuring that milestones are met and that the project is completed with the highest quality possible.</p>
                </div>
            </div>

            <div className='w-[200px] md:w-[400px] p-3 flex flex-col m-4'>
                <div>
                    <img src={architectural_modelling} className='w-[400px]'></img>
                </div>
                <div>
                    <p className='text-lg font-bold text-center'>Architectural Modelling</p>
                </div> 
                <div>
                    <p>Architecture modelling plays a crucial role in every construction project. Our construction company offers a range of innovative and efficient architecture modelling services that will help you visualize your project before construction begins.</p>
                </div>
            </div>

            <div className='w-[200px] md:w-[400px] p-3 flex flex-col m-4'>
                <div>
                    <img src={construction_management} className='w-[400px]'></img>
                </div>
                <div>
                    <p className='text-lg font-bold text-center'>Construction Management</p>
                </div> 
                <div>
                    <p>We believe in delivering unparalleled construction management services that meet and exceed the goals of our clients. We employ a comprehensive approach to construction management that ensures effective planning, coordination, and supervision of every aspect of the project.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services
