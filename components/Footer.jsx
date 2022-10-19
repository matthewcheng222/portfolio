import React from 'react'
import {
    FaBriefcase,
    FaPhoneSquare,
    FaGithubSquare,
    FaLinkedin,
    FaStackOverflow,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 gap-8 justify-between text-center text-gray-300'>
        <div>
            <h2 classsName='w-full font-bold'>Matthew Cheng.</h2>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quae cum architecto asperiores reprehenderit assumenda culpa, eligendi consequuntur expedita at! Exercitationem excepturi illum cupiditate molestiae architecto in quisquam praesentium minima.</p>
            <div className='flex justify-between items-center text-center md:w-[75%] my-6'>
                <FaBriefcase size={30}/>
                <FaPhoneSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaLinkedin size={30}/>
                <FaStackOverflow size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer