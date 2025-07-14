import React from 'react'
import Navbar from './Navbar.jsx'
const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img1.png')" }} id='Header'>
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[75px] inline-block max-w-3xl font-semibold pt-20'>Automating Comfort, Powering Reliability</h2>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            <a href ="#about-us" className='border border-white hover:bg-grey-700 px-8 py-3 rounded'>Learn More</a>
            <a href ="#contact-us" className='bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded'>Request a Quote</a>
        </div>
      </div>
    </div>
  )
}

export default Header
