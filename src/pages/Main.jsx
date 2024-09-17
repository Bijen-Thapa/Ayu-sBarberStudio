import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import Card from "../components/Card"
import "../index.css";
import haircut1 from '../img/haircut1.jpg'
import haircut2 from '../img/haircut2.jpg'
const Main = () => {
  return (
    <>
	<NavBar />
    <main>
	<section className='min-h-screen hero-section relative flex flex-col justify-center items-center text-center w-full'>
    <div className='pt-32 sm:pt-48 md:pt-64'>
        <h1 className='font-serif text-5xl sm:text-7xl md:text-9xl text-white'>Hair Studio</h1>
        <p className='font-serif text-sm sm:text-lg md:text-xl text-white mt-4'>Style Your Hair Is Style Your Life</p>
        <div className=' mt-8 sm:mt-10'>
            <button className='w-32 py-2 px-3 border mx-2 sm:mx-3 text-white text-center'>Find Out</button>
            <button className='w-32 py-2 px-3 border mx-2 sm:mx-3 text-white text-center'>Read More</button>
        </div>
    </div>
	</section>

        <section className='min-h-screen bg-white px-4 py-8'>
		<h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8'>
			Our Services
		</h3>
		<div className='flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-4'>
			<Card description="Kid haircut & wash" />
			<Card description="Facial" />
			<Card description="Cleansing" />
			<Card description="Hair set" />
			<Card description="Hair Color" />
			<Card description="Threading" />
		</div>
		</section>

        <section className='min-h-screen bg-image'>

        </section>
    </main>
    <Footer />
    </>
  )
}

export default Main