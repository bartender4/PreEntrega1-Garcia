import { Button, Card } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

const Item = ({id, name, img, price, stock}) => {
    return(
       <Row xs={1} md={2} className="g-4">
            <Col>
                <Card>
                    <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <pciture> <img src={img}  alt={name}/> </pciture>
                    <Card.Text>
                        <p> precio: ${price} </p>
                        <p> Stock disponible {stock} </p>
                    </Card.Text>
                    <footer className="card-footer">
                        <Button>Ver detalle</Button>
                    </footer>
                    </Card.Body>
                </Card>
            </Col>
       </Row>
    )
}

export default Item