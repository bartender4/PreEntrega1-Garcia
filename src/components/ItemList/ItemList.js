import { Container } from 'react-bootstrap'
import Item from '../Item/Item'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemList = ({products }) => {
    return(
        <Container fluid>
            <Row>
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}

export default ItemList