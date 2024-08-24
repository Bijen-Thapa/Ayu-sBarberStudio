import React from 'react'

const Footer = () => {
  return (
<footer className='w-full bg-black text-gray-50'>
    <div className='flex flex-col md:flex-row justify-around py-10 px-5'>
        <div className='text-center md:text-left mb-6 md:mb-0'>
            <div className='my-5'>
                <p>Our salon is open from 6 AM to 7 PM all days.</p>
                <p>Please visit us during our business hours for all your beauty needs.</p>
            </div>
            <div className='w-full md:w-72'>
                <h3 className='uppercase'>Stay in Touch</h3>
                <div>
                    <p>Kaji-pokhari, Pokhara</p>
                    <p>159877485</p>
                    <p>ayubarberstudio@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='text-center md:text-left'>
            <ul className='space-y-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Courses</li>
                <li>Gallery</li>
            </ul>
        </div>
    </div>
    <div className='flex flex-col md:flex-row justify-between items-center border-t-2 py-4 px-5 md:px-10'>
        <p className='mb-3 md:mb-0'>Barber shop salon - &copy; 2024 All Rights reserved</p>
        <p>Designed and built by - Amrit Gurung and Bijen Thapa</p>
    </div>
</footer>
  )
}

export default Footer