import Logo from '../assets/logo.png'
import Door from '../assets/Door.png'

const Header = () => {
	return (
		<header className='my-10 flex flex-col justify-evenly items-center'>
			<img className='' src={Logo} alt='Bloodbath and beyond Logo' />
			<img className='w-1/2 my-20' src={Door} alt='Image of a dungeon door' />
			<h1 className=' w-5/6 font-heroking text-5xl my-20 text-primary-white font-outline-2 '>
				Greetings, valiant voyagers of the vast and varied realms! Welcome to
				Bloodbath and Beyond, the ultimate emporium for every adventurer&apos;s
				appetite.
			</h1>
		</header>
	)
}

export default Header
