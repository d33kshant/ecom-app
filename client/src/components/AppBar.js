import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { CartContext } from '../contexts/CartContext'
import '../styles/AppBar.css'

const AppBar = () => {

	const [search, setSearch] = useState('')
	const [count, setCount] = useState(0)
	const { user, setUser } = useContext(AuthContext)
	const { cart } = useContext(CartContext)

	const onInputChange = (event) => setSearch(event.target.value)

	const onFormSubmit = (event) => {	
		window.location = `/search?query=${search}`
		event.preventDefault()
	}

	const onSignOutClicked = () => {
		setUser(null)
		localStorage.removeItem('user')
	}

	useEffect(() => {
		const url = new URLSearchParams(window.location.search)
		const query = url.get('query')
		if(query) {
			setSearch(query)
		}
		let _count = 0
		for (let i = 0; i <cart.length; i++){
			_count += cart[i].count
		}
		setCount(_count)
	}, [cart])

	return (
		<div className="appbar-main" >
			<div className="appbar-container" >
				<a href="/" className="appbar-title" >
					<img height="28px" src="/icon.png" />
				</a>
				<form onSubmit={onFormSubmit} className='appbar-search-field'>
					<input onChange={onInputChange} type="text" value={search} className="appbar-search-input" />
					<button type="submit" className="appbar-search-button">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
						</svg>
					</button>
				</form>
				<div className="appbar-actions" >
					<a className="appbar-action" href="/cart" title="Open Cart" >
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
							<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
						</svg>
						{ count > 0 && <div className="appbar-cart-badge">{count}</div>}
					</a>
					{ user && <a className="appbar-action" onClick={onSignOutClicked} title="Sign Out" href="/" >
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
							<path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
						</svg>
					</a>}
				</div>
			</div>
		</div>
	)
}

export default AppBar