
import Map from '../assets/map.png'

const Location = () => {
	return (
		<div id='location' className='mt-20 flex flex-col items-center px-2'>
			<h2 className='font-heroking md:text-7xl text-3xl text-primary-white '>
				Coordinates
			</h2>
			<img className='my-20' src={Map} alt='Map with a marker of our location' />
		</div>
	)
}

export default Location
