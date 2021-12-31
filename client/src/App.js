import { useEffect, useReducer, useState } from 'react'
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

const save = state => {
	window.localStorage.setItem('cart', JSON.stringify(state))
	return state
}

const reducer = (state=[], action) => {
	switch(action.type) {
		case 'ADD_ITEM':
			const item = action.payload
			const _state = state
			for (let i = 0; i < state.length; i++){
				if(_state[i].id === item.id && _state[i].option === item.option){
					_state[i].count++
					return save(_state)
				}
			}
			_state.push({...item, count: 1})
			return _state
		case 'REMOVE_ITEM':
			const { id, option } = action.payload
			const state_ = state
			for (let i = 0; i<state_.length; i++){
				if(state_[i].id === id && state_[i].option === option){
					if(state_[i].count === 1){
						return save([...state_.slice(0, i), ...state_.slice(i+1, state_.length)])
					}else{
						state_[i].count--
						return save(state_)
					}
				}
			}
			return save(state)
		case 'CLEAR':
			return save([])
		case 'RESTORE':
			return save(action.payload)
		default:
			return save(state)
	}
}

const App = () => {

	const [user, setUser] = useState(null)
	const [cart, dispatch] = useReducer(reducer, [])

	useEffect(() => {
		const _user = JSON.parse(localStorage.getItem('user'))
		const _cart = JSON.parse(localStorage.getItem('cart'))
		if(_user) {
			setUser(_user)
		}
		if(Array.isArray(_cart)) {
			dispatch({ type: 'RESTORE', payload: _cart })
		}
	}, [])

	return (
		<AuthProvider value={{ user, setUser }} >
			<CartProvider value={{cart, dispatch}} >
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