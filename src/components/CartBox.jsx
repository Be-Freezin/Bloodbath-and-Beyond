import React from 'react'
import { useCart } from '../context/CartContext'
import Coins from '../assets/icons/coin stack.png'
import { RiDeleteBin5Line } from 'react-icons/ri'
import BackArrow from '../assets/icons/Back Arrow.png'
import { Link } from 'react-router-dom'

const CartBox = () => {
	const { clearCart, cart, removeFromCart } = useCart()
	const total = cart.reduce((acc, item) => acc + item.price, 0)
	return (
		<div className='w-10/12 mx-auto bg-primary-white border-4 border-primary-black rounded-3xl p-4 font-inika'>
			{cart.length === 0 ? (
				<div>
					<h2 className='my-4'>
						Uh oh! It appears your cart is empty. Please{' '}
						<Link to='/' className='underline cursor-pointer'>
							go back
						</Link>{' '}
						select somethings to buy.
					</h2>
				</div>
			) : (
				cart.map((item) => (
					<div key={item.id} className='flex items-center justify-between my-2'>
						<div className='flex justify-between items-center'>
							<img
								className='w-[100px] border-4 border-primary-black rounded-xl'
								src={item.imagePath}
								alt=''
							/>
							<div className='text-left ml-10 w-full'>
								<h2 className='font-bold'>{item.name}</h2>
								<p className='w-2/3 my-2'>{item.description}</p>
							</div>
						</div>
						<div className='flex items-center justify-end w-1/4 '>
							<RiDeleteBin5Line
								size={22}
								className='cursor-pointer mr-4 text-primary-black '
								onClick={() => removeFromCart(item.id)}
							/>
							<img className='w-5 mr-2' src={Coins} alt='' />
							<h2 className='font-bold'>{item.price}</h2>
						</div>
					</div>
				))
			)}
			<hr className='border-primary-black border-2 rounded-full w-3/4 mx-auto my-4' />
			<div className='flex justify-end '>
				<div className='flex items-center font-bold'>
					<span>Total:</span>
					<div className='flex items-center'>
						<img className='w-5 mx-2' src={Coins} alt='' />
						<span> {total}</span>
					</div>
				</div>
			</div>

			<div className='flex flex-row justify-between items-center'>
				<Link to='/' className='flex items-center'>
					<img
						src={BackArrow}
						alt='AN arrow directing the user to go back to the main page'
						className='w-8 mr-2'
					/>
					<span>Back to store</span>
				</Link>
				<button className=' bg-primary-button text-primary-white px-4 py-1 md:py-2 md:px-8 mt-2 rounded-md border-2 border-primary-black shadow-button hover:cursor-pointer hover:bg-button-muted hover:text-primary-text'>
					Purchase
				</button>
				<button
					onClick={clearCart}
					className=' bg-primary-button text-primary-white px-4 py-1 md:py-2 md:px-8 mt-2 rounded-md border-2 border-primary-black shadow-button hover:cursor-pointer hover:bg-button-muted hover:text-primary-text'
				>
					CLEAR CART
				</button>
			</div>
		</div>
	)
}

export default CartBox
