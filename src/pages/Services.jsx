import React from 'react';
import Card from '../components/Card';
const Services = () => {
  return (
    <>
    <section className='min-h-screen hero-section relative flex flex-col justify-center items-center text-center w-full'>
		<div className='pt-24 sm:pt-36 md:pt-48'>
			<h1 className='font-serif text-4xl sm:text-6xl md:text-8xl text-white'>
			Our services
			</h1>
		</div>
	</section>	
    <section className='min-h-screen'>
        <h3 className='text-5xl font-semibold text-center my-4'>Our Services</h3>
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

export default Services