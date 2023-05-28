import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setquantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdded = (quantity) => {
        setquantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }


    return(
        <Container>
        <Card style={{ width: '18rem' }} >
           <Card.Img variant="top" src={img} />
            <Card.Body>
                 
                <Card.Title> {name} </Card.Title>
                <Card.Text>
                    <p>Categoria: {category}</p>
                    <p>Descripcion: {description} </p>
                    <p>precio: ${price} </p>
                </Card.Text>
                <footer className="card-footer">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart'  > Terminar compra </Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdded} />
                        )
                    }
                </footer>
            </Card.Body>
        </Card>
        </Container>
        
    )
}

export default ItemDetail