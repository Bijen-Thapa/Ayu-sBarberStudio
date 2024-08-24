import React from 'react'

const Card = ({description} ) => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-[500px] h-auto sm:h-[300px] border-2 rounded-lg p-4'>
		<div className='flex-shrink-0 rounded-full w-24 h-24 bg-black flex items-center justify-center'>
			<img src="" alt="Service image" className='w-full h-full object-cover rounded-full' />
		</div>
		<div className='text-center sm:text-left'>
			<p>{description}</p>
		</div>
</div>
  )
}

export default Card