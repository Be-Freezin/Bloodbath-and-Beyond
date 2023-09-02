import Logo from '../assets/logo.png'
import Door from '../assets/Door.png'

const Header = () => {
	return (
		<header className='my-10 flex flex-col justify-evenly items-center'>
			<img className='px-4' src={Logo} alt='Bloodbath and beyond Logo' />
			<img className='md:w-1/2 my-20 px-4' src={Door} alt='Image of a dungeon door' />
			<h1 className=' md:w-5/6 font-heroking md:text-5xl text-xl my-20 text-primary-white md:font-outline-2 '>
				Greetings, valiant voyagers of the vast and varied realms! Welcome to
				Bloodbath and Beyond, the ultimate emporium for every adventurer&apos;s
				appetite.
			</h1>
		</header>
	)
}

export default Header
