import { createContext } from "react";

export const CartContext = createContext({ cart: [], addItem: item=>{}, removeItem: id=>{}, deleteItem: id=>{}, clearCart: ()=>{} })

const CartProvider = ({children, ...props}) => {
	return (
		<CartContext.Provider {...props} >
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider