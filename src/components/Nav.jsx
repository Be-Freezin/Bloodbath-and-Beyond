import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'
import Bag from '../assets/icons/Bag.png'
import Coins from '../assets/icons/coin stack.png'

const Nav = () => {
	return (
		<>
			<nav className='w-full py-4 sm:px-16 px-2 flex flex-row justify-between items-center font-inika'>
				<img
					className='sm:w-32 w-20 hover:cursor-pointer'
					src={Logo}
					alt='Bloodbath and Beyond logo'
				/>

				<ul className='hidden sm:flex w-1/2 justify-evenly font-bold'>
					<li className='cursor-pointer'>
						<Link activeClass='active' to='store' smooth={true} duration={500}>
							Store
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link activeClass='active' to='about' smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							activeClass='active'
							to='location'
							smooth={true}
							duration={500}
						>
							Find Us
						</Link>
					</li>
				</ul>

				<div className='sm:flex flex-row justify-between items-center hidden '>
					<div className='flex flex-row justify-center items-center w-full'>
						<img className='w-5 mr-2 hover:cursor-pointer' src={Coins} alt='' />
						<span className='text-xl mr-4'>1,200</span>
					</div>
					<img
						className='w-[30px] h-[30px] hover:cursor-pointer'
						src={Bag}
						alt=''
					/>
				</div>
			</nav>
		</>
	)
}

export default Nav
