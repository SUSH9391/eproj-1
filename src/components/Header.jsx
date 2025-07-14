import React from 'react'
import { motion } from "motion/react"
import Navbar from './Navbar.jsx'
const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img1.png')" }} id='Header'>
      <Navbar />
      <motion.div 
      initial={{ opacity: 0,y:100 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-3xl sm:text-6xl md:text-[75px] inline-block max-w-3xl font-semibold pt-20'>Automating Comfort, Powering Reliability</h2>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            <a href ="#About" className='border border-white hover:bg-grey-700 px-8 py-3 rounded'>Learn More</a>
            <a href ="#Contact" className='bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded'>Request a Quote</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
