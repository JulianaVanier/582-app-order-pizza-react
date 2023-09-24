import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PizzaSlice } from '../features/PizzaStore';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PopUpSize from './PopUpSize';



export default function PizzaItem(props) {


  //function to modify button text
  function customButton(){
    if(props.obj.custom === true){
      return <span>Customize</span>
    }else{
      return <span>Add to Cart</span>
    }
  }

  const [showPopUpSize, setShowPopUpSize] = useState(false);

  const onBtnClick = e => {
    e.preventDefault()
    setShowPopUpSize(prevState => !prevState)
  }

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
  <>
    <Col>
      <Card >
        <Card.Img variant="top" src={props.obj.imageReact} />
        <Card.Body>
          <Card.Title>{props.obj.title}</Card.Title>
            <Card.Text>
            {props.obj.description}
            </Card.Text>
            <Button className='btn-add-chose-size' variant="danger" onClick={onBtnClick}>
            {customButton()} 
            </Button>
        </Card.Body>
      </Card>
      {showPopUpSize && <PopUpSize obj={props.obj} />}
    </Col>

  </>
    );
  }


