
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
        
    }

    return(
        <Container >
            <Row>
                <Col>
            <button  className='btn btn-danger'  onClick={decrement}>-</button>
            </Col>
            <Col>
            <h4 >{quantity}</h4>
            </Col>
            <Col>
            <button className='btn btn-success'  onClick={increment}>+</button>
            </Col>  
            </Row>
            <Container>
                <button className='btn btn-info' onClick={() => onAdd(quantity)} disabled={!stock} >Agregar al carrito</button>
            </Container>
        </Container>
       
    )
}

export default ItemCount;


