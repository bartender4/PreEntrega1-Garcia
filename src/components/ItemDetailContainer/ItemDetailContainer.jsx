
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() =>{
        getProductById((itemId))
        .then(response => {
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [itemId])
    
    return(
        <Container>
            <ItemDetail {...product} />
        </Container>
    )
}

export default ItemDetailContainer