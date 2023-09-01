import ItemCard from "./ItemCard"
import ItemData from '../ItemData'

const ItemGrid = () => {
  return (
		<div id="store" className='grid grid-rows-4 grid-cols-4 gap-4 place-items-center'>
			{ItemData.items.map((item) => (
				<ItemCard key={item.id} {...item} />
			))}
		</div>
	)
}

export default ItemGrid