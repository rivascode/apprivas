import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { LinkContainer } from 'react-router-bootstrap'

const Item = ({ product }) => {
   
    function getBadge(stock){
        if(stock > 0){
            return (
                <Badge bg="success">EN STOCK</Badge>)
        }else{
            return (
                <Badge bg="danger">SIN STOCK</Badge>)
        }
       }

    return (
        <>
            <Col md= "4">
                <Card  className="text-center mt-3">
                    <Card.Img id="imgSize" variant="top" src={product.pictureUrl} />
                    <Card.Body>
                        <Card.Title className="fs-2">{product.Title}{getBadge(product.Stock)}</Card.Title>
                        <Card.Text className="cardText" >
                            {product.Description}
                        </Card.Text>
                        <Card.Text className="cardTextPrice">$ {product.Price}
                        </Card.Text>
                        <LinkContainer to={`/item/${product.id}`}><Button variant="primary">Ver Detalle</Button></LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Item

