import React from "react";
import IngredientList from "./IngredientList";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useRoute } from "react-router-dom";

export default function CustomPizzaView() {
  const pizzaToCustomize = useSelector((state) => state.pizza.pizzaToCustomize);
  // const ingredient = useSelector((state) => state.pizza.ingredient);
  // const pizzaId = pizzaToCustomize.id;
  const pizzaArray = pizzaToCustomize.map((pizza) => {
    return pizza;
  });
  const pizza = pizzaArray[0];
  // console.log("testttttttttttt", test);

  // function displayIngredient  (ingredientId) {
  //   for (let i=0; i<ingredient.length; i++) {
  //     if (ingredient[i].id == ingredientId) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // const pizza = pizzasToCustomize.map((pizza) => {
  //   return pizza;
  // })
  // console.log("pizzaaaaaaaaa", pizza)
  //   const route = useRoute();
  //   const {data} = route.params;

  //   console.log("dataaaaaaaaa", data)
  return (
    <>
      <div className="box-custom-pizza">
        <PizzaItem obj={pizza} />
        <p>Item Total: {pizza.sizeSelectedPrice}</p>
      </div>
      <IngredientList obj={pizza} />
    </>
  );
}
