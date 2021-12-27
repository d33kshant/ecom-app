import { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import CartProvider from './contexts/CartContext'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import SearchPage from './pages/SearchPage'

const App = () => {

	const [user, setUser] = useState(null)
	const [cart, setCart] = useState([])

	useEffect(() => {
		const _user = JSON.parse(localStorage.getItem('user'))
		const _cart = JSON.parse(localStorage.getItem('cart'))
		if(_user) {
			setUser(_user)
		}
		if(Array.isArray(_cart)) {
			setCart(_cart)
		}
	}, [])

	const addItem = item => {
		const _cart = cart
		const { id, option } = item
		
		for(let i=0; i<_cart.length; i++){
			if (_cart[i].id === id && _cart[i].option === option){
				_cart[i].count++
				window.localStorage.setItem('cart', JSON.stringify(_cart))
				setCart(_cart)
				return
			}
		}
		_cart.push({ ...item, count: 1 })
		window.localStorage.setItem('cart', JSON.stringify(_cart))
		setCart(_cart)
	}

	const removeItem = id => {
		console.log(id)
	}

	const deleteItem = id => {
		setCart(cart.filter(item => item.id!=id))
	}

	const clearCart = _ => {
		setCart([])
	}

	return (
		<AuthProvider value={{ user, setUser }} >
			<CartProvider value={{cart, addItem, removeItem, deleteItem, clearCart}} >
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/search" element={<SearchPage />} />
						<Route path="/product/:id" element={<ProductPage />} />
					</Routes>
				</Router>
			</CartProvider>
		</AuthProvider>
	)
}

export default App