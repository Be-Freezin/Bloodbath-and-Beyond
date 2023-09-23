import { useCart } from '../context/CartContext'

const useAddToCart = () => {
	const { cart, setCart } = useCart()

	const addToCart = (item) => {
		setCart((prevCart) => {
			if (prevCart.some((cartItem) => cartItem.id === item.id)) {
				return prevCart
			}
			const updatedCart = [...prevCart, item]
			localStorage.setItem('cart', JSON.stringify(updatedCart))
			return updatedCart
		})
	}
	return addToCart
}

export default useAddToCart
