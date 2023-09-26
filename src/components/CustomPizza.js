import React from 'react'
import IngredientList from './IngredientList'
import PizzaItem from './PizzaItem'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export default function CustomPizzaView() {
  const pizzaToCustomize = useSelector((state) => state.pizza.pizzaToCustomize);
  // const pizza = pizzasToCustomize.map((pizza) => {
  //   return pizza;
  // })
  // console.log("pizzaaaaaaaaa", pizza)
  return (
    <>
    <div className='box-custom-pizza'>
    {pizzaToCustomize.map((pizza) => {
          console.log("pizzaaaaaaaaa", pizza)
      return (
        <PizzaItem obj={pizza} />
    )
    }
    )}
    </div>
    <IngredientList/>
    </>
  )
}