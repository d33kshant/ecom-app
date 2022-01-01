import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import "../styles/CartItem.css"

const CartItem = ({productId, count, option, callback}) => {
	
	const [product, setProduct] = useState(null)
	const { dispatch } = useContext(CartContext)

	useEffect(() => {
		axios.get(`/api/v1/product/${productId}`).then(res =>{ callback(res.data.rate*count, res.data.price*count);setProduct(res.data)})
		return ()=>setProduct(null)
	}, [productId])


	return (
		<div className="cart-item-container" >
			{ 
				product && 
				<>
					<img className="cart-item-image" src={product.thumbs[0]} />
					<div className="cart-item-info" >
						<a href={`/product/${productId}`} className="cart-item-name" >{product.name}</a>
						<p className="cart-item-brand">{product.brand}</p>
						<span className="cart-item-price-info">
							<span className="cart-item-mrp">{product.rate}₹</span>
							{product.price !== product.rate && 
							<>
							• <span className="cart-item-offer">{Math.trunc((product.rate / product.price) * 100)}% off</span> •
							<span className="cart-item-original">{product.price}₹</span>
							</>}
						</span>
						<p className="cart-item-option" >Option: {option}</p>
						<div className="cart-item-actions" >
							<button className="cart-item-incr" onClick={()=>{dispatch({ type: 'ADD_ITEM', payload: { id: productId, option } })}} >+</button>
							<p className="cart-item-count">{count}</p>
							<button className="cart-item-decr" onClick={()=>{dispatch({type: 'REMOVE_ITEM', payload: { id: productId, option }})}} >-</button>
							<button className="cart-item-remove" onClick={()=>{dispatch({type: 'DELETE_ITEM', payload: { id: productId, option }})}} >Remove</button>
						</div>
					</div>
				</>
			}
		</div>
	)
}

export default CartItem