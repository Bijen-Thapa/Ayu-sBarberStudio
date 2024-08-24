import React from 'react';
import Footer from "../components/Footer";
import NavBar from '../components/NavBar';
import "../index.css";
import haircut1 from '../img/haircut1.jpg'
import haircut2 from '../img/haircut2.jpg'
const Gallery = () => {
  return (
    <>
    <NavBar />
    <section className='h-screen'>
        <div className='h-screen bg-image'>
            <h3 className='text-center text-5xl font-semibold'>Gallery</h3>
            <div className='relative border-2 border-gray-100 h-3/4 w-1/2 mx-auto'>
                <div className="bg-white border rounded h-60 w-60 absolute top-10 left-[360px] rotate-12 flex justify-center">
                    <div className='bg-white h-48 w-52'>
                        <img src={haircut2} alt="" />
                        <p>@instaAccount</p>
                    </div>
                </div>
                <div className="bg-white border rounded h-60 w-60 absolute top-36 left-[100px] negative-rotate flex justify-center">
                    <div className='bg-white h-48 w-52'>
                        <img src={haircut1} alt="" />
                        <p>@instaAccount</p>
                    </div>
                </div>
                <div className="bg-white border rounded h-60 w-60 absolute bottom-10 right-[300px]  flex justify-center">
                    <div className='bg-white h-48 w-52'>
                        <img src={haircut1} alt="" />
                        <p>@instaAccount</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Gallery