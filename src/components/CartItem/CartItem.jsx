import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Container } from 'react-bootstrap'

const CartItem = ({name, price, quantity, id}) => {

  const {removeItem} = useContext (CartContext)


  return (
    <Container>
      <section className='cartitem'>
        <h4>{name}</h4>
        <div>Precio: ${price}</div>
        <div>Cantidad: {quantity}</div>        
        <div>Subtotal: ${price*quantity}</div>    
        <button onClick={()=> removeItem(id)} className='boton'>X</button>
      </section>
    </Container>
  )
}

export default CartItem