import React from 'react';
import Footer from "./Footer";
import "../index.css";
import haircut1 from '../img/haircut1.jpg'
import haircut2 from '../img/haircut2.jpg'
const Gallery = () => {
  return (
    <>
    <section className='h-screen'>
        <div className='relative'>
            <div className="bg-white border rounded h-60 w-60 absolute top-10 right-[300px] rotate-12 flex justify-center">
                <div className='bg-white h-48 w-52'>
                    <img src={haircut2} alt="" />
                    <p>@instaAccount</p>
                </div>
            </div>
            <div className="bg-white border rounded h-60 w-60 absolute top-10 right-[600px] negative-rotate flex justify-center">
                <div className='bg-white h-48 w-52'>
                    <img src={haircut1} alt="" />
                    <p>@instaAccount</p>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Gallery