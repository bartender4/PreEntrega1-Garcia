import { useContext } from "react"
import cart3 from "../CartWidget/assets/cart3.svg"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img src={cart3} alt="cart-widget" />
            { totalQuantity }
        </Link>
        
    )
}

export default CartWidget