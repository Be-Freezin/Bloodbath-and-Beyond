import React from 'react'
import Map from '../assets/map.png'

const Location = () => {
	return (
		<div id='location' className='mt-20 flex flex-col items-center'>
			<h2 className='font-heroking text-7xl text-primary-white font-outline-2'>
				Coordinates
			</h2>
			<img className='my-20' src={Map} alt='' />
		</div>
	)
}

export default Location
