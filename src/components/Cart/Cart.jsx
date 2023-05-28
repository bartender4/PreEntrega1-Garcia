import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <Container>
                <h1>No hay items en el carrito</h1>
                <Link to='/' >Productos</Link>
            </Container>
        )
    }

    return (
        <Container>
            { cart.map(p => <CartItem key={p.id} {...p} /> ) }
            <h3>Total: ${total}</h3>
            <Button onClick={() => clearCart()} >Limpiar Carrito</Button>
            <Link to='/checkout' >Checkout</Link>
        </Container>
    )


}

export default Cart