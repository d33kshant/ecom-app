import { createContext } from "react";

export const CartContext = createContext({ cart: [], dispatch: (event)=>{}})
const CartProvider = CartContext.Provider
export default CartProvider