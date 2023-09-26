import React from 'react'
import { Card } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
// import logo from '../assests/images/broccoli-pizza.webp';
import Col from 'react-bootstrap/Col';



function IngredientItem(props) {
  console.log("AQUI Ingredients", props)

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
    <>
    <Col className='ingredients'>
      <Card style={{ width: '10rem' }} >
        <Card.Img variant="top" src={props.obj.imageReact} alt={props.obj.title} />
        <Card.Body>
          <Card.Title>{props.obj.title}</Card.Title>
            <Card.Text>
            {props.obj.description}
            {props.obj.price}
            </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default IngredientItem