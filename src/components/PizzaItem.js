import React from 'react'
// import { useSelector } from 'react-redux'
// import logo from '../logo.svg';
// import img from {props.obj.image}
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';



function PizzaItem(props) {
  console.log("AQUI props", props)

  //function to modify button text
  function customButton(){
    if(props.obj.custom === true){
      return <span>Customize</span>
    }else{
      return <span>Add to Cart</span>
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
  <>
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.obj.imageReact} />
        <Card.Body>
          <Card.Title>{props.obj.title}</Card.Title>
            <Card.Text>
            {props.obj.description}
            </Card.Text>
            <Button variant="danger" onClick={handleShow}>
            {customButton()}
            </Button>
        </Card.Body>
      </Card>
    </Col>

    {/* Pop Up select size */}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select a size</Modal.Title>
      </Modal.Header>
      <Modal.Body bg-light >
        <Row>
          <Col xs={2} md={3} className="text-center border rounded " >
            <Image src="/assets/image/pizza-icon.png" fluid/>
            <p class="fw-bold">Small</p>
            <p class="fw-semibold fs-5">${props.obj.size.small}</p>
          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid />
            <p class="fw-bold">Medium</p>
            <p class="fw-semibold fs-5">${props.obj.size.medium}</p>
          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid />
            <p class="fw-bold">Large</p>
            <p class="fw-semibold fs-5">${props.obj.size.large}</p>
          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid/>
            <p class="fw-bold">X-Large</p>
            <p class="fw-semibold fs-5">${props.obj.size.xlarge}</p>
          </Col>
        </Row>
        <Row>
           <p>#asfas</p>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>

  </>
  )
}

export default PizzaItem