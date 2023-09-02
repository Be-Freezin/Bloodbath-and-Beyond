import React, { useState } from 'react'
import Gold from '../assets/icons/coin stack.png'

const ItemCard = ({ id, name, type, price, description, imagePath }) => {
	const [toggleDescription, setToggleDescription] = useState(false)

	return (
		<div className='relative flex flex-col justify-evenly items-center bg-primary-white w-4/5  font-inika p-8 rounded-2xl border-4 border-primary-black shadow-3xl '>
			<img
				className='w-[100px] border-4 border-primary-black rounded-xl'
				src={imagePath}
				alt='Item Image'
			/>
			<h2 className=' mt-4 font-bold'>{name}</h2>
			<p className='text-sm'>Type: {type}</p>
			{toggleDescription ? (
				<div
					className={`absolute md:rounded-2xl md:h-[335px] h-full w-full bg-primary-black flex flex-col justify-between  transform ${
						toggleDescription ? 'translate-y-0 ' : 'translate-y-full'
					} transition-transform duration-500 ease-in-out`}
				>
					{/* WORK ON A TRANSITION FOR THE CARD. */}
					<p className='w-10/12 text-left flex justify-center items-center mx-auto md:my-8 text-sm text-primary-white '>
						{description}
					</p>
					<button
						className='underline text-primary-background hover:text-primary-white mb-4'
						onClick={() => setToggleDescription(!toggleDescription)}
					>
						Close
					</button>
				</div>
			) : null}

			<button
				className='underline text-primary-text hover:text-primary-text-muted'
				onClick={() => setToggleDescription(!toggleDescription)}
			>
				{toggleDescription ? 'Close' : 'Item Info'}
			</button>
			<div className='flex justify-evenly items-center sm:w-1/4 w-full'>
				<img className='w-5' src={Gold} alt='' />
				<p>{price}</p>
			</div>
			<button className=' bg-primary-button text-primary-white px-4 py-1 md:py-2 md:px-8 mt-2 rounded-md border-2 border-primary-black shadow-button hover:cursor-pointer hover:bg-button-muted hover:text-primary-text'>
				Purchase
			</button>
		</div>
	)
}

export default ItemCard
