import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) =>{
  const storedCart = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(storedCart)

  const clearCart = () =>{
    const updatedCart = setCart([])
    localStorage.removeItem('cart')
    console.log(updatedCart)
    return updatedCart
  }

  const removeFromCart = (itemId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
		localStorage.setItem(
			'cart',
			JSON.stringify(cart.filter((item) => item.id !== itemId))
		)
	}

  const contextValue={
    cart, setCart, clearCart, removeFromCart
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}