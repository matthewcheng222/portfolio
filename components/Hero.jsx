import React from 'react'
import Image from 'next/image'
import memoji_waving from '../public/assets/memoji_waving.png'
import Typewriter from 'typewriter-effect';



const Hero = () => {
  return (
    <div>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <div>
                <Image className='rounded-full'
                    src={memoji_waving} 
                    alt='/' 
                    height='300'
                    width='300'
                />
            </div>
            <p className='md:text-3xl sm:text-2xl text-lg font-bold p-2'>Hi, my name is</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Matthew</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>I am a</p>
                <div className='md:text-5xl sm:text-4xl text-xl font-bold pl-3 text-yellow-300'>
                    <Typewriter options={{
                        strings: ['Student', 'Software Developer', 'Creator'],
                        autoStart: true,
                        loop: true,
                    }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero