import Nav from "./Nav"
import Header from "./Header"
import ItemGrid from "./ItemGrid"
import About from "./About"
import Location from "./Location"

const MenuContainer = () => {
  return (
		<div className='bg-primary-background rounded-3xl border-8 border-primary-black  mx-0 my-0'>
      <Nav />
			<Header />
			<ItemGrid />
			<About />
			<Location />
		</div>
	)
}

export default MenuContainer