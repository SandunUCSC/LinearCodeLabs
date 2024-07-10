import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className='bg-[#02001A]'>


        <div className='grid items-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>

<div className='px-6 pt-10 md:py-10'>
    <img className='h-6' src={logo}/>
    <p className='py-4 text-sm text-justify text-white md:text-base '>Linear CodeLabs  is a dynamic software development firm dedicated to crafting cutting-edge solutions that redefine industry standards. With a passion for innovation, we specialize in delivering tailored software and technology services to meet the unique needs of our clients. Elevate your digital presence with our expertise and commitment to excellence</p>
</div>
<div className='mx-6 text-white md:mx-auto md:py-4'>

    <h2 className='text-lg font-bold'>Company</h2>
<ul>
    <li>Home</li>
    <li>Why Us</li>
    <li>Services</li>
    <li>About Us</li>
    <li>Contact</li>
    <li>Blogs</li>
</ul>
</div>
<div></div>        
</div>
      
    </div>
  )
}

export default Footer
