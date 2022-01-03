import { useContext, useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import CartItem from "../components/CartItem"
import { CartContext } from "../contexts/CartContext"
import '../styles/CartPage.css'

const CartPage = () => {

	const { cart, dispatch } = useContext(CartContext)
	const [price, setPrice] = useState(0)
	const [original, setOriginal] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		for(let i = 0; i<cart.length; i++) {
			setCount(prev => prev + cart[i].count)
			setPrice(prev => prev + cart[i].price*cart[i].count)
			setOriginal(prev => prev + cart[i].original*cart[i].count)
		}
		return ()=>{setCount(0); setOriginal(0); setPrice(0)}
	}, [cart])

	const checkOut = () => {
		if(count <= 0){
			return alert('Add some item first.')
		}
		alert(`Total ${count} items of price ${price} are checked out.`)
		dispatch({type: 'CLEAR'})
	}

	return (
		<>
			<AppBar />
			<div className="cart-page-main">
				<div className="cart-page-container">
					<div className="cart-items-list" >
						{ cart.length > 0 ? cart.map(item => <CartItem key={item.id} productId={item.id} count={item.count} option={item.option} />) : <p className="empty-cart-placeholder" >Your cart is empty.</p> }
					</div>
					<div className="cart-items-info" >
						<p className="cart-info-title" >Your Cart</p>
						<span className="cart-info-row" >
							<p className="cart-info-row-title">Total Items:</p>
							<p className="cart-item-count-info" >{count}</p>
						</span>
						<span className="cart-info-row">
							<p className="cart-info-row-title">Total Price:</p>
							<p className="cart-item-price-info" >{price} ₹</p>
						</span>
						<span className="cart-info-row">
							<p className="cart-info-row-title">Original Price:</p>
							<p className="cart-item-original-price-info">{original} ₹</p>
						</span>
						<span className="cart-info-row">
							<p className="cart-info-row-title">Total Savings:</p>
							<p className="cart-info-total-savings">{Math.trunc(((original-price)/original)*100) || 0}% saved</p>
						</span>
						<button className="cart-checkout-button" onClick={checkOut} >Proceed to checkout</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartPage