import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-gray-50'>
        <div className='flex py-10'>
            <div>
                <div className='my-5'>
                    <p>Our salon is open from 6 AM to 7 PM all days.</p>
                    <p>Please visit us during our business hours for all your beauty needs.</p>
                </div>
                <div className='w-72'>
                    <div className='flex'>
                        <p className='mr-5'>Opens everyday</p>
                        <p>6:00 AM - 7:00 PM</p>
                    </div>
                    <hr />
                    <div className='flex'>
                        <p className='mr-14'>Contact us</p>
                        <p>123456789</p>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Courses</li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div className='flex justify-between border-t-2 py-4 px-10'>
            <p>Barber shop salon - &copy; 2024 All Rights reserved</p>
            <p>Designed and built by - Amrit Gurung and Bijen Thapa</p>
        </div>
        <div>

        </div>
    </footer>
  )
}

export default Footer