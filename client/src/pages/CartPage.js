import { useContext } from "react"
import AppBar from "../components/AppBar"
import CartItem from "../components/CartItem"
import { CartContext } from "../contexts/CartContext"
import '../styles/CartPage.css'

const CartPage = () => {

	const { cart } = useContext(CartContext)

	return (
		<>
			<AppBar />
			<div className=" cart-page-main">
				<div className="cart-page-container">
					<div className="cart-items-list" >
						{ cart.map(item => <CartItem key={item.id} productId={item.id} count={item.count} option={item.option} />) }
					</div>
					<div className="cart-items-info" >
						<p className="cart-info-title" >Your Cart</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartPage