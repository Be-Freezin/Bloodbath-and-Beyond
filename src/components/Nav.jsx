import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'
import Bag from '../assets/icons/Bag.png'
import Coins from '../assets/icons/coin stack.png'

const Nav = () => {
	return (
		<>
			<nav className='w-full py-4 px-16 flex flex-row justify-between items-center font-inika'>
				<img
					className='w-32 hover:cursor-pointer'
					src={Logo}
					alt='Bloodbath and Beyond logo'
				/>
				<ul className='flex w-1/2 justify-evenly font-bold '>
					<li className='cursor-pointer'>
						<Link
							activeClass='active'
							to='store'
							spy={true}
							smooth={true}
							duration={500}
						>
							Store
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							duration={500}
						>
							About
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							activeClass='active'
							to='location'
							spy={true}
							smooth={true}
							duration={500}
						>
							Find Us
						</Link>
					</li>
				</ul>

				<div className='flex flex-row justify-between items-center w-2/12'>
					<div className='flex flex-row justify-center items-center w-full'>
						<img className='w-5 mr-2 hover:cursor-pointer' src={Coins} alt='' />
						<span className='text-xl'>1,200</span>
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
