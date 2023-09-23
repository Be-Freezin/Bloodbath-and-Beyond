import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Cart from './routes/Cart.jsx'

import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'cart',
		element: <Cart />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</React.StrictMode>
)
