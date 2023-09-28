import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { PizzaSlice, setPizzas } from '../features/PizzaStore';
import { IngredientSlice, setIngredient } from "../features/IngredientStore";
import IngredientItem from "./IngredientItem";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function IngredientList(props) {
  // const pizza = useSelector((state) => state.pizza.pizzas)
  const ingredient = useSelector((state) => state.ingredient.ingredients);
  const dispatch = useDispatch();
  const pizzaId = props.obj;

  const fetchIngredients = () => {
    console.log("fetching Ingredients");
    fetch("http://localhost:3000/customizepizza")
      .then((response) => response.json())
      .then((jsonIngredients) => {
        if (Array.isArray(jsonIngredients)) {
          console.log("JSON", jsonIngredients);
          {
            dispatch(IngredientSlice.actions.setIngredient(jsonIngredients));
          }
          console.log("dispatched", setIngredient(jsonIngredients));
        } else {
          console.error("JSON invalid.");
        }
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <>

      <h1>AQUIIIIIIIIIIIIIIII{pizzaId.id}</h1>

      <Container>
        <Row>
          {ingredient.map((ingredient, index) => {
            console.log("ingredient", ingredient);
            return <IngredientItem key={index} obj={ingredient} pizzaId={pizzaId.id} />;
          })}
        </Row>
      </Container>
    </>
  );
}
