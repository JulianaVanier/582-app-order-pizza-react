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
import { useDispatch } from 'react-redux';
import { PizzaSlice, setSizeSelected } from '../features/PizzaStore';
import { useSelector } from 'react-redux'



function PizzaItem(props) {
  console.log("AQUI props", props)
  const dispatch = useDispatch();
  const sizeSelected = useSelector((state) => state.pizza.sizeSelected)

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
      <Modal.Body>
        <Row>
          <Col xs={2} md={3} className="text-center border rounded " >
            <Image src="/assets/image/pizza-icon.png" fluid/>
            <p className="fw-bold">Small</p>
            <p className="fw-semibold fs-5">${props.obj.size.small}</p>
            <Button onClick={() => dispatch(PizzaSlice.actions.setSizeSelected(props.obj.size.small))}>Click</Button>
          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid />
            <p className="fw-bold">Medium</p>
            <p className="fw-semibold fs-5">${props.obj.size.medium}</p>
            <Button onClick={() => dispatch(PizzaSlice.actions.setSizeSelected(props.obj.size.medium))}>Click</Button>

          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid />
            <p className="fw-bold">Large</p>
            <p className="fw-semibold fs-5">${props.obj.size.large}</p>
            <Button onClick={() => dispatch(PizzaSlice.actions.setSizeSelected(props.obj.size.large))}>Click</Button>

          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid/>
            <p className="fw-bold">X-Large</p>
            <p className="fw-semibold fs-5">${props.obj.size.xlarge}</p>
            <Button onClick={() => dispatch(PizzaSlice.actions.setSizeSelected(props.obj.size.xlarge))}>Click</Button>

          </Col>
        </Row>
        <Row>
           <p className="fw-semibold fs-4 text-center">
            ${sizeSelected}
           </p>
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