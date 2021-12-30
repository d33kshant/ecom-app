import { createContext } from "react";

export const CartContext = createContext({ cart: [], dispatch: (event)=>{}})

const CartProvider = ({children, ...props}) => {
	return (
		<CartContext.Provider {...props} >
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider