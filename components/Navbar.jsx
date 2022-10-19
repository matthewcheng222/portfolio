import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav= () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h2 classsName='w-full font-bold'>Matthew Cheng.</h2>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Skills</li>
            <li className='p-4'>Experience</li>
            <li className='p-4'>Projects</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-slate-400 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h2 classsName='w-full font-bold m-4'>Matthew Cheng.</h2>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Skills</li>
                <li className='p-4 border-b border-gray-600'>Experience</li>
                <li className='p-4 border-b border-gray-600'>Projects</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar