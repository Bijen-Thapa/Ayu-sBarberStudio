import React from 'react'
import Card from "../components/Card"
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
    <section className='h-screen bg-white '>
        <h3 className='text-5xl font-semibold text-center'>Our Services</h3>
        <div className='flex justify-center flex-wrap content-center gap-3 h-full py-5'>
            <Card description="Kid haircut & wash"/>
            <Card description="Facial"/>
            <Card description="Cleansing"/>
            <Card description="Hair set"/>
            <Card description="Hair Color"/>
            <Card description="Threading"/>
        </div>
    </section>
</>
  )
}

export default HeroSection