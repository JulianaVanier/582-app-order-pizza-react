import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
// import { useSelector } from 'react-redux'
// import logo from '../assests/images/broccoli-pizza.webp';
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";
import { Row } from "react-bootstrap";

function IngredientItem(props) {
  const pizzaToCustomize = useSelector((state) => state.pizza.pizzaToCustomize);
  // const dispatch = useDispatch();
  const ingredient = props.obj;
  const [displayIngTop, setDisplayIngTop] = React.useState(false);
  const dispatch = useDispatch();
  const pizzaInCart = useSelector((state) => state.pizza.pizzasInCart);

  // const [showIngredientsTop, setShowIngredientsTop] = React.useState(false);
  // const displayIngredientsTop = () => setShowIngredientsTop(!showIngredientsTop)

  function toggleIngredient(ingredient, pizzaToCustomize) {
    var pizzaCustomWithIngredient = { ...pizzaToCustomize };
    var sizeSelectedPrice = sizeSelectedPrice;
    console.log("sizeSelectedPrice",sizeSelectedPrice);
    // Check if ingredient already exist and remove it
    for (let i = 0; i < pizzaCustomWithIngredient.ingredient.length; i++) {
      if (pizzaCustomWithIngredient.ingredient[i]._id !== ingredient._id)
        continue;
      pizzaCustomWithIngredient.ingredient =
        pizzaCustomWithIngredient.ingredient.filter(
          (ing) => ing._id !== ingredient._id
        );

      pizzaCustomWithIngredient.sizeSelectedPrice -= ingredient.price;
      pizzaCustomWithIngredient.sizeSelectedPrice = parseFloat(pizzaCustomWithIngredient.sizeSelectedPrice.toFixed(2));
      
      dispatch(
        PizzaSlice.actions.addPizzaToCustomize(pizzaCustomWithIngredient)
      );
      setDisplayIngTop((prev) => !prev);
      return;
    }

    // add ingredient to pizzaToCustomize
    pizzaCustomWithIngredient.ingredient = [
      ...pizzaCustomWithIngredient.ingredient,
      ingredient,
    ];
    pizzaCustomWithIngredient.sizeSelectedPrice += ingredient.price;
    pizzaCustomWithIngredient.sizeSelectedPrice = parseFloat(pizzaCustomWithIngredient.sizeSelectedPrice.toFixed(2));


    dispatch(PizzaSlice.actions.addPizzaToCustomize(pizzaCustomWithIngredient));


    setDisplayIngTop((prev) => !prev);
  }

  return (
    <>
      {/* <h1>{props}</h1> */}
      <Col className="ingredients" xs={6} md={2}>
        <Card
          style={{ width: "10rem" }}
          onClick={() => toggleIngredient(ingredient, pizzaToCustomize)}
        >
          <Card.Title>{ingredient.title}</Card.Title>
          <Card.Img
            variant="top"
            src={ingredient.imageReact}
            alt={ingredient.title}
          />
          <Card.Body>
            <Card.Text>
              {ingredient.description}
              {ingredient.price}
            </Card.Text>
            {/* <Button className='btn-add-chose-size' variant="danger" onClick={() => toggleIngredient(ingredient, pizzaId, pizzaToCustomize)}>
            Add
            </Button> */}
            {/* <div className="image-top-pizzaCustom">
              {displayIngTop && (
                <img src={ingredient.imageCustomReact} alt={ingredient.title} />
              )}
            </div> */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default IngredientItem;
