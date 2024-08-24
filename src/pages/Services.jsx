import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
const Services = () => {
  return (
    <>
    <NavBar />
    <section className='min-h-screen bg-white '>
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
    <Footer />
    </>
    
  )
}

export default Services