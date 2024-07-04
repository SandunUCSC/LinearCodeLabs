import React from 'react'

function Hero() {
  return (
    <div className=' bg-[#02001A]'>
        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row'>
          <div className='sm:w-[40%] md:w-[40%] w-[96%] py-14 px-8'>
            <img className='rounded-3xl mx-auto' src=' https://images.stockcake.com/public/e/e/7/ee71e6ac-adfb-4187-aa68-5d592875bc1a/virtual-reality-experience-stockcake.jpg'/>
            </div>
            <div className='sm:px-5 lg:px-5 md:px-5 px-1 text-center sm:w-[60%] lg:w-[60%] md:w-[60%] w-[96%] mx-auto'>
                <h1 className='text-white font-extrabold md:font-bold text-[38px] px-3 lg:text-[50px] md:py-2 mt-0 md:mt-20' >Welcome to Linear CodeLabs</h1>
               <h2 className='text-[#A40C67] font-bold lg:text-[42px]  text-[22px] md:text-[42px] '>Elevate Your Digital Presence</h2>
               <p className='px-6 text-[12px] md:text-base py-6 mt-3 text-gray-400 rounded-md bg-slate-700'>Hi! Welcome to Linear CodeLabs, where brilliance meets code. We craft digital solutions that redefine possibilities. Let's innovate together</p>
                <button className='bg-[#A40C67] mb-7 mt-5 px-6 md:px-16 py-3 text-[16px] md:text-[26px] font-bold text-white rounded-lg'>Explore Our Services</button>            
            </div>
        </div>
      
    </div>
  )
}

export default Hero
