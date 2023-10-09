import React from 'react'
import founder from '../assets/founder.jpeg'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-zinc-400'>
        <div className='flex bg'>

            <div className=' m-5'> 
                <p className='font-bold text-xl font-serif'>PROPRIETOR</p>
                <p className='text-lg font-serif '>Vijay Shrinath Singh</p>
                <img src={founder} className='w-[100px] ml-3 mt-4'></img>
            </div>

            <div className=' mt-5 ml-36 font-serif flex'>

                <div>

                    <p className='font-bold text-xl'>CONTACT</p>
                    <p className='text-lg'>Office</p>
                    <p className='m-2 text-sky-700'>32 / Shiv Chambers, Gr.FLoor, Sector-11</p>
                    <p className='m-2 text-sky-700'>CBD Belapur, Navi Mumbai-400 614.</p>
                </div>

                <div className='mt-6 ml-20'>

                    <p className='text-lg'>Phone Number</p>
                    <p className='m-2 text-sky-700'>+91 996 903 6186</p>
                    <p className='m-2 text-sky-700'>+91 022 4974 3594</p>
                </div>

                <div className='mt-6 ml-20 '>

                    <p className='text-lg'>Email</p>
                    <p className='m-2 text-sky-700'>harmonyinfra09@gmail.com</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
