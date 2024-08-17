import React from 'react'

const NavBar = () => {
  return (
    <header className='bg-blue-300 w-full h-14 flex justify-between'>
        <div className='w-12 h-12 bg-white flex justify-center items-center rounded-lg font-medium'>
          LOGO
        </div>
        <div className='w-[330px] bg-gray-50 rounded'>
			<ul className='flex items-center h-full justify-around'>
				<li className=' rounded-3xl px-3 py-1'>
					About
				</li>
				<li className=' rounded-3xl px-3 py-1'>
					Services
				</li>
				<li className=' rounded-3xl px-3 py-1'>
					Courses
				</li>
			</ul>
        </div>
    </header>
  )
}

export default NavBar