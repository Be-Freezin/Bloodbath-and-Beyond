import { useCart } from "../context/CartContext";

const useAddToCart = () => {

  const { cart, setCart } = useCart()

  const addToCart = (item) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart, item]
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      console.log(updatedCart)
      return updatedCart
    })
    console.log(cart)
    
  }

  return addToCart
}

export default useAddToCart