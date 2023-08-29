import React from 'react'
import Logo from '../assets/logo.png'
import Bag from '../assets/icons/Bag.png'
import Coins from '../assets/icons/coin stack.png'

const Nav = () => {
	return (
		<>
			<nav className='w-full py-4 px-16 flex flex-row justify-between items-center font-inika'>
				<img className='w-32' src={Logo} alt='Bloodbath and Beyond logo' />
				<div className='flex flex-row justify-between items-center w-2/12'>
					<div className='flex flex-row justify-center items-center w-full'>
						<img className='w-5 mr-2' src={Coins} alt='' />
						<span className='text-xl'>1,200</span>
					</div>
					<img className='w-[30px] h-[30px]' src={Bag} alt='' />
				</div>
			</nav>
		</>
	)
}

export default Nav
