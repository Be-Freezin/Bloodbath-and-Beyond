import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Bag from '../assets/icons/Bag.png'
import Coins from '../assets/icons/coin stack.png'
import Close from '../assets/icons/sword x.svg'
import Hamburger from '../assets/icons/sword hamburger.svg'

const Nav = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const menuClosedHandler = () => {
		setToggleMenu(false)

		document.body.style.overflow = 'unset'
	}
	const menuOpenHandler = () => {
		setToggleMenu(true)
		if (typeof window != 'undefined' && window.document) {
			document.body.style.overflow = 'hidden'
		}
	}

	return (
		<div className='relative'>
			<nav className='w-full py-4 sm:px-16 px-4 flex flex-row justify-between items-center font-inika'>
				<img
					className='sm:w-32 w-20 hover:cursor-pointer'
					src={Logo}
					alt='Bloodbath and Beyond logo'
				/>

				<ul className='hidden sm:flex w-1/2 justify-evenly font-bold'>
					<li className='cursor-pointer'>
						<ScrollLink activeClass='active' to='store' smooth={true} duration={500}>
							Store
						</ScrollLink>
					</li>
					<li className='cursor-pointer'>
						<ScrollLink activeClass='active' to='about' smooth={true} duration={500}>
							About
						</ScrollLink>
					</li>
					<li className='cursor-pointer'>
						<ScrollLink
							activeClass='active'
							to='location'
							smooth={true}
							duration={500}
						>
							Find Us
						</ScrollLink>
					</li>
				</ul>
				<img
					onClick={menuOpenHandler}
					className='w-8 sm:hidden'
					src={Hamburger}
					alt=''
				/>

				<div className='sm:flex flex-row justify-between items-center hidden '>
					<div className='flex flex-row justify-center items-center w-full'>
						<Link to={'wallet'} className='flex items-center'>
						<img className='w-5 mr-2 hover:cursor-pointer' src={Coins} alt='' />
						<span className='text-xl mr-4'>1,200</span>
						</Link>
					</div>
					<Link to={`cart`}>

					<img
						className='w-[33px] h-[27px] hover:cursor-pointer'
						src={Bag}
						alt=''
					/>
					</Link>
				</div>
			</nav>
			{toggleMenu && (
				<div className='fixed z-50 top-0 left-0 rounded-2xl h-screen w-full bg-primary-white'>
					<div className='bg-primary-background flex flex-col h-1/2 w-10/12 mx-auto my-7 rounded-3xl border-8 border-primary-black'>
						<div className='flex flex-row-reverse p-4'>
							<img onClick={menuClosedHandler} src={Close} alt='' />
						</div>
						<div className='flex flex-row justify-center h-full  items-center'>
							<ul className='h-1/2  w-1/2 flex flex-col justify-evenly font-bold text-2xl text-primary-white'>
								<li className='cursor-pointer'>
									<Link
										activeClass='active'
										to='store'
										smooth={true}
										duration={500}
										onClick={menuClosedHandler}
									>
										Store
									</Link>
								</li>
								<li className='cursor-pointer'>
									<Link
										activeClass='active'
										to='about'
										smooth={true}
										duration={500}
										onClick={menuClosedHandler}
									>
										About
									</Link>
								</li>
								<li className='cursor-pointer'>
									<Link
										activeClass='active'
										to='location'
										smooth={true}
										duration={500}
										onClick={menuClosedHandler}
									>
										Find Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Nav
