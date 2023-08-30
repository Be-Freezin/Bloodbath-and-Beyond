import Nav from "./Nav"
import Header from "./Header"
import ItemGrid from "./ItemGrid"

const MenuContainer = () => {
  return (
		<div className='bg-primary-background rounded-3xl border-8 border-primary-black  mx-0 my-0'>
      <Nav />
			<Header />
			<ItemGrid />
		</div>
	)
}

export default MenuContainer