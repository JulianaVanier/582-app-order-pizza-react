import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
// import { useSelector } from 'react-redux'
// import logo from '../assests/images/broccoli-pizza.webp';
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";

function IngredientItem(props) {
  const pizzaToCustomize = useSelector((state) => state.pizza.pizzaToCustomize);
  // const dispatch = useDispatch();
  const ingredient = props.obj;
  const pizzaId = props.pizzaId;
  const [displayIngTop, setDisplayIngTop] = React.useState(false);
  const dispatch = useDispatch();
  const pizzaInCart = useSelector((state) => state.pizza.pizzasInCart);




  // const [showIngredientsTop, setShowIngredientsTop] = React.useState(false);
  // const displayIngredientsTop = () => setShowIngredientsTop(!showIngredientsTop)

  console.log("pizzaaaaaaaaa22222222222222222", pizzaId);

  function toggleIngredient(ingredient, pizzaId, pizzaToCustomize) {
    console.log("deuuuuuuuuuuuuu ing", ingredient);
    console.log("deuuuuuuuuuuuuu idp", pizzaId);
    console.log("deuuuuuuuuuuuuu cust", pizzaToCustomize);
    var pizzaCustomWithIngredient = null;


 

    // console.log("pizzaToCustomize", pizzaToCustomize);
    // console.log("pizzaId", pizzaId);
    // console.log("ingredient", ingredient);
    for (let i = 0; i < pizzaToCustomize.length; i++) {
      // console.log("pizzaToCustomize[i].id", pizzaToCustomize[i].id);
      if (pizzaToCustomize[i].id == pizzaId) {
        pizzaCustomWithIngredient = pizzaToCustomize[i];
      }
    }

    // condition if ingredient already exist in pizzaCustomWithIngredient
    for (let i = 0; i < pizzaCustomWithIngredient.ingredient.length; i++) {
      // console.log(
      //   "lengthhhhhhhhhhh",
      //   pizzaCustomWithIngredient.ingredient.length
      // );
      console.log("ID INGREDIENT", ingredient._id);
      console.log("ID INGREDIENT PIZZA CUSTOM", pizzaCustomWithIngredient);
      if (pizzaCustomWithIngredient.ingredient[i]._id === ingredient._id) {
        console.log("ingredient exist");
        const updatedPizza = { ...pizzaCustomWithIngredient };
        updatedPizza.ingredient = updatedPizza.ingredient.filter(
          (ing) => ing._id !== ingredient._id
        );
        updatedPizza.sizeSelectedPrice -= ingredient.price;
        pizzaCustomWithIngredient = updatedPizza;
        return;
      }
      console.log("Aqui a pizza antes de ir", pizzaToCustomize);
      
      // dispach(PizzaSlice.actions.addIngredientPizzaToCustomize(pizzaCustomWithIngredient));
      // dispach(PizzaSlice.actions.addIngredientPizzaToCustomize(ingredient));
      
      // var updatedPizzaCopy = {...pizzaCustomWithIngredient};
      // console.log("updatedPizzaCopy", updatedPizzaCopy);
      // console.log("NEW INGREDIENT", ingredient);
      // console.log("SEU ANTES", updatedPizzaCopy.ingredient);
      // updatedPizzaCopy.ingredient = [...updatedPizzaCopy.ingredient, ingredient];
      // console.log("SEU DEPOIS", updatedPizzaCopy.ingredient);


      // pizzaCustomWithIngredient = updatedPizzaCopy;    
      // console.log("NEWWWWWWWWWWWWWWWWWWWWW", pizzaCustomWithIngredient);  


      const updatedPizzaCustomWithIngredient = {
        ...pizzaCustomWithIngredient, ingredient: [...pizzaCustomWithIngredient.ingredient, ingredient],
      };
      
      console.log("Updated pizzaCustomWithIngredient", updatedPizzaCustomWithIngredient);

      // pizzaCustomWithIngredient.ingredient = [...pizzaCustomWithIngredient.ingredient, ingredient];
      // console.log ("pizzaCustomWithIngredient FINAL", pizzaCustomWithIngredient);
      // pizzaCustomWithIngredient = { ...pizzaCustomWithIngredient };
      dispatch(PizzaSlice.actions.addPizzasInCart(updatedPizzaCustomWithIngredient));
      // console.log("CARRINHO COM PIZZA CUSTOMIZED", pizzaInCart);
      setDisplayIngTop((prev) => !prev);
    }

    // toggle to display ingredient on top of pizza


    // for (let i = 0; i < pizzaCustomWithIngredient.ingredient.length; i++) {
    //   if(pizzaCustomWithIngredient.ingredient[i]._id == ingredient._id){
    //     return(
    //       <img src={ingredient.imageCustomReact} alt={ingredient.title} />
    //     )
    //   }
    // }

    // const updatedPizza = { ...pizzaCustomWithIngredient };
    // updatedPizza.ingredient = [...updatedPizza.ingredient, ingredient];
    // // updatedPizza.sizeSelectedPrice += ingredient.price;
    // pizzaCustomWithIngredient = updatedPizza;
    // console.log("pizzaCustomWithIngredient FINAL", pizzaCustomWithIngredient);

    // const updatedPizza = { ...pizzaCustomWithIngredient };
    // updatedPizza.ingredient = [...ingredient];
    // console.log("updatedPizza", updatedPizza);
    // updatedPizza.sizeSelectedPrice =
    //   pizzaCustomWithIngredient.sizeSelectedPrice;
    // pizzaCustomWithIngredient = updatedPizza;
    // // pizzaCustomWithIngredient.ingredient.push(ingredient);
    // console.log("pizzaCustomWithIngredient", pizzaCustomWithIngredient);
    //  pizzaCustomWithIngredient.sizeSelectedPrice += ingredient.price;
  }

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
    <>
      {/* <h1>{props}</h1> */}
      <Col className="ingredients">
        <Card
          style={{ width: "10rem" }}
          onClick={() =>
            toggleIngredient(ingredient, pizzaId, pizzaToCustomize)
          }
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
            <div className="image-top-pizzaCustom">
              {displayIngTop && (
                <img src={ingredient.imageCustomReact} alt={ingredient.title} />
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default IngredientItem;
