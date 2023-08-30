import React from 'react'
import Gold from '../assets/icons/coin stack.png'

const ItemCard = ({ id, name, type, price, description, imagePath }) => {
	return (
		<div className='flex flex-col justify-evenly items-center bg-primary-white w-10/12 font-inika p-8 rounded-2xl border-4 border-primary-black shadow-3xl '>
			<img
				className='w-[100px] border-4 border-primary-black rounded-xl'
				src={imagePath}
				alt=''
			/>
			<h2 className='mt-4 font-bold'>{name}</h2>
			{/* <p className='text-left my-4'>{description}</p> */}
			<div className='flex justify-evenly items-center w-1/2'>
				<img className='w-5' src={Gold} alt='' />
				<p>{price}</p>
			</div>
      <button className=' bg-primary-button text-primary-white py-2 px-8 mt-2 rounded-md border-2 border-primary-black shadow-button hover:cursor-pointer hover:bg-button-muted hover:text-primary-text'>Purchase</button>
		</div>
	)
}

export default ItemCard
