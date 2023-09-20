import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PizzaSlice } from '../features/PizzaStore';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function PizzaItem(props) {
  console.log("AQUI props", props)
  const dispatch = useDispatch();
  const sizeSelectedPrice = useSelector((state) => state.pizza.sizeSelectedPrice);
  const navigate = useNavigate();

  //function to modify button text
  function customButton(){
    if(props.obj.custom === true){
      return <span>Customize</span>
    }else{
      return <span>Add to Cart</span>
    }
  }

  //function to clear size selected when close pop up
  const clearSizeSelected = () => {
    dispatch(PizzaSlice.actions.setSizeSelectedPrice(null));
    dispatch(PizzaSlice.actions.setSizeSelected(null));
  }

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePizzaToCart = () => {
    console.log("handlePizzaToCart", props.obj);
    console.log("sizeeeeeeeeee", sizeSelectedPrice)
    if (props.obj.custom === false) {
      const pizzaToCart = {
        _id: props.obj._id,
        title: props.obj.title,
        custom: props.obj.custom,
        description: props.obj.description,
        sizeSelected: sizeSelectedPrice,
        sizeSelectedPrice: sizeSelectedPrice,
        imageReact: props.obj.imageReact,
        ingredient: props.obj.ingredient,
        quantity: 1,
      };
      console.log("pizzaToCart", pizzaToCart);
      dispatch(PizzaSlice.actions.addPizzasInCart(pizzaToCart));
      navigate ("/cart");

    } else {
      const pizzaToCustomize = {
        _id: props.obj._id,
        id: Date.now(),
        title: props.obj.title,
        custom: props.obj.custom,
        description: props.obj.description,
        sizeSelected: sizeSelectedPrice,
        sizeSelectedPrice: sizeSelectedPrice,
        imageReact: props.obj.imageReact,
        ingredient: props.obj.ingredient,
        quantity: 1,
      };
      console.log("pizzaToCustomize", pizzaToCustomize);
      dispatch(PizzaSlice.actions.addPizzaToCustomize(pizzaToCustomize));
      navigate ("/custompizza");
    }

  };

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
    <Modal show={show} onHide={() => { handleClose(); clearSizeSelected(); }}>
      <Modal.Header closeButton >
        <Modal.Title>Select a size</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={2} md={3} className="text-center border rounded " >
            <Image src="/assets/image/pizza-icon.png" fluid/>
            <p className="fw-bold">Small</p>
            <p className="fw-semibold fs-5">${props.obj.size.small}</p>
            <Button onClick={()=>{dispatch(PizzaSlice.actions.setSizeSelectedPrice(props.obj.size.small));dispatch(PizzaSlice.actions.setSizeSelected('small'))}}>Select</Button>
          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid />
            <p className="fw-bold">Medium</p>
            <p className="fw-semibold fs-5">${props.obj.size.medium}</p>
            <Button onClick={()=>{dispatch(PizzaSlice.actions.setSizeSelectedPrice(props.obj.size.medium));dispatch(PizzaSlice.actions.setSizeSelected('medium'))}}>Select</Button>
          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid />
            <p className="fw-bold">Large</p>
            <p className="fw-semibold fs-5">${props.obj.size.large}</p>
            <Button onClick={()=>{dispatch(PizzaSlice.actions.setSizeSelectedPrice(props.obj.size.large));dispatch(PizzaSlice.actions.setSizeSelected('large'))}}>Select</Button>
          </Col>
          <Col xs={6} md={3} className="text-center border rounded ">
            <Image src="/assets/image/pizza-icon.png" fluid/>
            <p className="fw-bold">X-Large</p>
            <p className="fw-semibold fs-5">${props.obj.size.xlarge}</p>
            <Button onClick={()=>{dispatch(PizzaSlice.actions.setSizeSelectedPrice(props.obj.size.xlarge));dispatch(PizzaSlice.actions.setSizeSelected('xlarge'))}}>Select</Button>
          </Col>
        </Row>
        <Row>
           <p className="fw-semibold fs-4 text-center">
            ${sizeSelectedPrice}
           </p>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => {handleClose(); handlePizzaToCart(props.obj, sizeSelectedPrice);}}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>




  </>
  )
}

export default PizzaItem