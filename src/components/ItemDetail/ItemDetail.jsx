import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Text>
                    <p>Categoria: {category}</p>
                    <p>Descripcion: {description} </p>
                    <p>precio: ${price} </p>
                </Card.Text>
                <footer className="card-footer">
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')} />
                </footer>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail