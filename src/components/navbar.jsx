import logo from '../assets/logo.jpg';
import { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci';
import {NavHashLink as Link} from 'react-router-hash-link';


const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click)
    }
    const content=
    <>
    <div className='lg:hidden block absolute top-20 w-full left-0 right-0 bg-white transition '>
    <ul className=' text-center text-xl p-10'>
                    <Link to="#About">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-sm'>About </li>
                    </Link>
                    <Link to="#Projects">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-sm'>Projects</li>
                    </Link>
                    <Link to="#Contact">
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded-sm'>Contact</li>
                    </Link>
                    
                </ul>

    </div>
    </>
  return (
    <>
    <div className='h-10vh flex justify-between z-50 px-10 lg:py-5 xl:px-40  py-2 flex-1 pb-0  '>
        <Link to="/"><div className='w-20 md:w-56 '>
           <img src={logo} className=''></img>
        </div>
        </Link>
        <div className='lg:flex  lg:flex-1 items-center justify-end hidden'>
            <div className=' flex-10 justify-center items-center p-2 '>
                <ul className='flex gap-8 '>
                    <Link to="#About">
                        <li className='text-xl font-bold text-blue-700'>About</li>
                    </Link>
                    <Link to="#Projects">
                        <li className='text-xl font-bold text-blue-700'>Projects</li>
                    </Link>
                    <Link to="#Contact">
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
