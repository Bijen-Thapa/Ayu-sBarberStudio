import React from 'react'
import Card from "../components/Card"
import {motion} from 'framer-motion'
const HeroSection = () => {
  return (
    <>
    <section className='h-screen hero-section relative'>
        <div className='text-center pt-48'>
            <h1 className='font-serif text-9xl'>Hair Studio</h1>
            <p className='font-serif'>Style Your Hair Is Style Your Life</p>
            <div className='m-10'>
                <button className='w-32 py-2 px-3 border mx-3 text-white'>Find Out</button>
                <button className='w-32 py-2 px-3 border mx-3 text-white'>Read More</button>
            </div>
        </div>
    </section>
    
</>
  )
}

export default HeroSection