import { useContext, useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import CartItem from "../components/CartItem"
import { CartContext } from "../contexts/CartContext"
import '../styles/CartPage.css'

const CartPage = () => {

	const { cart } = useContext(CartContext)
	const [price, setPrice] = useState(0)
	const [original, setOriginal] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		for(let i = 0; i<cart.length; i++) {
			setCount(prev => prev + cart[i].count)
		}
		return ()=>setCount(0)
	}, [cart])

	const addPrice = (_price, _original) => {
		setPrice(prev => prev + _price)
		setOriginal(prev => prev + _original)
	}

	return (
		<>
			<AppBar />
			<div className="cart-page-main">
				<div className="cart-page-container">
					<div className="cart-items-list" >
						{ cart.map(item => <CartItem callback={addPrice} key={item.id} productId={item.id} count={item.count} option={item.option} />) }
					</div>
					<div className="cart-items-info" >
						<p className="cart-info-title" >Your Cart</p>
						<span className="cart-info-row" >
							<p className="cart-info-row-title">Total Items:</p>
							<p className="cart-item-count-info" >{count}</p>
						</span>
						<span className="cart-info-row">
							<p className="cart-info-row-title">Total Price:</p>
							<p className="cart-item-price-info" >{price}</p>
						</span>
						<span className="cart-info-row">
							<p className="cart-info-row-title">Total Savings:</p>
							<p className="cart-info-total-savings">{Math.trunc(((original-price)/original)*100) || 0}%</p>
						</span>
						<button className="cart-checkout-button" >Proceed to checkout</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartPage