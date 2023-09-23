import React from 'react'
import { useCart } from '../context/CartContext'
import Coins from '../assets/icons/coin stack.png'
import { RiDeleteBin5Line } from 'react-icons/ri'
import BackArrow from '../assets/icons/Back Arrow.png'
import { Link } from 'react-router-dom'

const CartBox = () => {
	const { clearCart, cart, removeFromCart, buy, setBuy } = useCart()
	const total = cart.reduce((acc, item) => acc + item.price, 0)
	const purchase = () => {
		clearCart()
		setBuy(false)
	}
	return (
		<div className='w-10/12 mx-auto bg-primary-white border-4 border-primary-black rounded-3xl p-4 my-4 font-inika  sm:min-h-fit'>
			{cart.length === 0 ? (
				<div>
					<h2 className='my-4'>
						Uh oh! It appears your cart is empty. Please{' '}
						<Link to='/' className='underline cursor-pointer'>
							go back
						</Link>{' '}
						and select somethings to buy.
					</h2>
				</div>
			) : (
				cart.map((item) => (
					<div
						key={item.id}
						className='sm:flex sm:flex-row flex-col items-end justify-between my-2'
					>
						<div className='flex-col sm:flex sm:flex-row justify-between items-center sm:w-full'>
							<img
								className='w-[100px] border-4 border-primary-black rounded-xl'
								src={item.imagePath}
								alt=''
							/>
							<div className='text-left my-2 sm:ml-10 w-full'>
								<h2 className='font-bold'>{item.name}</h2>
								<p className='sm:w-full my-2 '>{item.description}</p>
							</div>
						</div>
						<div className='flex items-center justify-end sm:w-1/4 my-4 '>
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

			<div className='flex flex-col-reverse sm:flex-row sm:flex  justify-between items-center'>
				<Link to='/' className='flex items-center mt-4'>
					<img
						src={BackArrow}
						alt='AN arrow directing the user to go back to the main page'
						className='w-8 mr-2'
					/>
					<span>Back to store</span>
				</Link>
				{cart.length <= 0 ? null : (
					<div className='flex flex-row-reverse sm:flex-row w-full sm:w-1/3 items-center justify-between sm:flex'>
						<button
							onClick={() => setBuy(true)}
							className=' bg-primary-button text-primary-white px-4 py-1 md:py-2 md:px-8 mt-2 rounded-md border-2 border-primary-black shadow-button hover:cursor-pointer hover:bg-button-muted hover:text-primary-text'
						>
							Purchase
						</button>
						<button
							onClick={clearCart}
							className=' bg-primary-button text-primary-white px-4 py-1 md:py-2 md:px-8 mt-2 rounded-md border-2 border-primary-black shadow-button hover:cursor-pointer hover:bg-button-muted hover:text-primary-text'
						>
							Clear Cart
						</button>
					</div>
				)}
			</div>
			{buy && (
				<div className='h-full backdrop-blur-md mx-auto fixed left-0 right-0 top-0  '>
					<div className='h-full flex items-center justify-center'>
						<div className='h-64 w-fit mx-auto p-8 bg-primary-background rounded-2xl border-8 border-primary-black'>
							<div className='h-full flex flex-col justify-around items-center'>
								<h1 className='font-inika text-5xl text-primary-white'>
									PURCHASE COMPLETE!
								</h1>
								<button
									onClick={purchase}
									className='bg-primary-white text-primary-text px-4 py-1 md:py-2 md:px-8 mt-2 rounded-md border-2 border-primary-black shadow-button hover:cursor-pointer hover:bg-primary-white-muted hover:text-primary-text'
								>
									CLOSE
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default CartBox
