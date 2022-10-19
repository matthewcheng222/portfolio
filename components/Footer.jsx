import React from 'react'
import {
  FaGithub,
  FaLinkedinIn,
  FaAt,
  FaPhone,
  FaStackOverflow,
} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12'>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MATTHEW C.</h1>
        </div>
        <div className='flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8 text-white'>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">About</p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">Contact us</p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">Terms of Service</p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4">Privacy Policy</p>
        </div>
        <div className='flex items-center gap-x-8 mt-8'>
          <li><Link href="https://github.com/matthewcheng222" passHref={true}><FaGithub size={20}/></Link></li>
          <li><Link href="https://www.linkedin.com/in/matthew-c-131b32122/" passHref={true}><FaLinkedinIn size={20}/></Link></li>
          <li><Link href="#" passHref={true}><FaAt size={20}/></Link></li>
          <li><Link href="#"><FaPhone size={20}/></Link></li>
          <li><Link href="#"><FaStackOverflow size={20}/></Link></li>
        </div>
        <div className='flex items-center mt-6'>
          <p className='text-base leading-4 text-gray-200'>
            2022 <span className='font-semibold'>Matthew Cheng</span>
          </p>
          <div className='border-1 border-gray-800 pl-1 ml-1'>
            <p className='text-base leading-4 text-gray-200'>. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer