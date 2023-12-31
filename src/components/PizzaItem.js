import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import PopUpSize from "./PopUpSize";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";
import { useNavigate } from "react-router-dom";

export default function PizzaItem(props) {
  // function to modify button text
  // function customButton(){
  //   if(props.obj.custom === true ){
  //     return <span>Customize</span>
  //   }else{
  //     return <span>Add to Cart</span>
  //   }
  // }
  const location = useLocation();
  const dispatch = useDispatch();
  const pizzaToCustomize = useSelector((state) => state.pizza.pizzaToCustomize);
  const navigate = useNavigate();

  function customButton() {
    if (location.pathname === "/custompizza") {
      console.log("location.pathname", location.pathname);
      return <span>Add to Cart</span>;
    }
    if (props.obj.custom === true) {
      return <span>Customize</span>;
    } else {
      return <span>Add to Cart</span>;
    }
  }

  const [showPopUpSize, setShowPopUpSize] = useState(false);

  const handleButtonClick = () => {
    // e.preventDefault();

    if (location.pathname === "/custompizza") {
      dispatch(PizzaSlice.actions.addPizzasInCart(pizzaToCustomize));
      navigate("/cart");
    } else {
      setShowPopUpSize((prevState) => !prevState);
    }
  };

  function displayIngredientsTop() {
    var pizzaItem = null;

    if (location.pathname === "/custompizza") pizzaItem = pizzaToCustomize;
    else if (location.pathname === "/cart") pizzaItem = props.obj; 
    else return;
    

    if (!("ingredient" in pizzaItem)) return;
    console.log("pizzaToCustomize222", pizzaItem.ingredient);
    var imagesReturn = [];
    for (let i = 0; i < pizzaItem.ingredient.length; i++) {
      if (pizzaItem._id === props.obj._id) {
      imagesReturn.push(<img src={pizzaItem.ingredient[i].imageCustomReact} />);
      // return  pizzaToCustomize.ingredient[i].imageReact;
      }
    } return imagesReturn;


}


  //  const onBtnClick = e => {
  //   console.log('ENTROU', location.pathname);
  //   e.preventDefault();

  //   if (location.pathname === '/custompizza') {
  //     console.log("A PIZZA QUE QUERO MANDAR", pizzaToCustomize);
  //     dispatch(PizzaSlice.actions.addPizzasInCart(pizzaToCustomize));
  //     navigate("/cart");

  //   } else {

  //     setShowPopUpSize(prevState => !prevState);
  //   }
  // }

  // const onBtnClick = e => {
  //   e.preventDefault()
  //   setShowPopUpSize(prevState => !prevState)
  // }

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={props.obj.imageReact} />
          <div className="image-top-pizzaCustom">
              {displayIngredientsTop()}
            </div>
          <Card.Body>
            <Card.Title>{props.obj.title}</Card.Title>
            <Card.Text>{props.obj.description}</Card.Text>
            <Button
              className="btn-add-chose-size"
              variant="danger"
              onClick={() => {
                handleButtonClick();
              }}
            >
              {customButton()}
            </Button>
          </Card.Body>
        </Card>
        {showPopUpSize && <PopUpSize obj={props.obj} />}
      </Col>
    </>
  );
}
