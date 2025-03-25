import { CartProvider } from "./cartContext"
import ShoppingCart from "./ShoppingCart"

export default function CartDemo() { 
  return (
    <CartProvider>
      <ShoppingCart />
    </CartProvider>
  )
}