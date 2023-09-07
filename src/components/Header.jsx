import Logo from '../assets/logo.png'
import Dwarf from '../assets/dwarf.png'

const Header = () => {
	return (
		<header className='my-10 flex flex-col justify-evenly items-center'>
			
			<div className='flex flex-col sm:flex-row justify-center items-center w-10/12'>
				<img
					className='md:w-1/2 sm:my-20 px-4'
					src={Dwarf}
					alt='Image of a dungeon door'
					
				/>
				<h1 className=' md:w-5/6 font-heroking md:text-4xl text-2xl my-20 text-primary-white  '>
					Greetings, valiant voyagers of the vast and varied realms! Welcome to
					Bloodbath and Beyond, the ultimate emporium for every
					adventurer&apos;s appetite.
				</h1>
			</div>
		</header>
	)
}

export default Header
