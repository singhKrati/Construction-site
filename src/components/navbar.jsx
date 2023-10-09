import logo from '../assets/logo.jpg';
import { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci';
import {HashLink as Link} from 'react-router-hash-link';


const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click)
    }
    const content=
    <>
    <div className='lg:hidden block absolute top-10 w-full left-0 right-0 bg-white transition z-10 '>
    <ul className=' text-center text-xl p-10'>
                    <Link smooth to="#About">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-sm'>About </li>
                    </Link>
                    <Link smooth to="#Projects">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-sm'>Projects</li>
                    </Link>
                    <Link smooth to="#Footer">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-sm'>Contact</li>
                    </Link>
                    
                </ul>

    </div>
    </>
  return (
    <>
    <div className='h-10vh flex justify-between z-50 px-10 lg:py-5 xl:px-40  py-2 flex-1 pb-0 mb-0 lg:md-0 bg-white'>
        <Link to="/"><div className='w-20 md:w-36 mt-2 '>
           <img src={logo} className='w-full'></img>
        </div>
        </Link>
        <div className='lg:flex  lg:flex-1 items-center justify-end hidden'>
            <div className=' flex-10 justify-center items-center p-2 '>
                <ul className='flex gap-8 '>
                    <Link smooth to="#About">
                        <li className='text-xl font-bold text-blue-700'>About</li>
                    </Link>
                    <Link smooth to="#Projects">
                        <li className='text-xl font-bold text-blue-700'>Projects</li>
                    </Link>
                    <Link smooth to="#Footer">
                        <li className='text-xl font-bold text-blue-700'>Contact</li>
                    </Link>
                    
                </ul>
            </div>
        </div>
        <div>
            {click &&content}
        </div>
        <button className='block lg:hidden transition ' onClick={handleClick}>
            {click ? <FaTimes size="2em"/> : <CiMenuFries size="2em"/>}
        </button>

    </div>
    </>
  )
}

export default Navbar
