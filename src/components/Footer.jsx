import React from 'react'
import founder from '../assets/founder.jpeg'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row w-full text-white'>
      <div className='bg-black w-full flex-col'>
        <div className='flex flex-col md:flex-row justify-center items-center'>

            <div className=' m-5'> 
                <p className='font-bold text-xl font-serif'>PROPRIETOR</p>
                <p className='text-lg font-serif '>Vijay Shrinath Singh</p>
                <img src={founder} className='w-[100px] ml-3 mt-4'></img>
            </div>

            <div className=' lg:mt-5 lg:ml-36 font-serif flex flex-col md:flex-row justify-center items-center'>

                <div>

                    <p className='font-bold text-xl text-center'>CONTACT</p>
                    <p className='text-lg text-center'>Office</p>
                    <p className='m-2 text-sky-700'>32 / Shiv Chambers, Gr.FLoor, Sector-11</p>
                    <p className='m-2 text-sky-700'>CBD Belapur, Navi Mumbai-400 614.</p>
                </div>

                <div className='lg:mt-6 lg:ml-20'>

                    <p className='text-lg text-center'>Phone Number</p>
                    <p className='m-2 text-sky-700'>+91 996 903 6186</p>
                    <p className='m-2 text-sky-700'>+91 022 4974 3594</p>
                </div>

                <div className='lg:mt-6 lg:ml-20 '>

                    <p className='text-lg text-center'>Email</p>
                    <p className='m-2 text-sky-700'>harmonyinfra09@gmail.com</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
