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
		console.log(item)
	}

	const removeItem = id => {
		console.log(id)
	}

	return (
		<AuthProvider value={{ user, setUser }} >
			<CartProvider value={{cart, addItem, removeItem}} >
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/search" element={<SearchPage />} />
					</Routes>
				</Router>
			</CartProvider>
		</AuthProvider>
	)
}

export default App