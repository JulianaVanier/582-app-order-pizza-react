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
  // const pizzaArray = pizzaToCustomize.map((pizza) => {
  //   return pizza;
  // });
  // const pizza = pizzaArray[0];

  return (
    <>
      <div className="box-custom-pizza">
        <PizzaItem obj={pizzaToCustomize} />
      </div>
      <div className="total-price">
      <p>Item Total: {pizzaToCustomize.sizeSelectedPrice}</p>
      </div>
      <IngredientList obj={pizzaToCustomize} />
    </>
  );
}
