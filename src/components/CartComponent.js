import React from 'react'
import PizzaItem from './PizzaItem';
import { useSelector } from 'react-redux'

export default function CartComponent() {
    const pizzasInCart = useSelector((state) => state.pizza.pizzasInCart)
    console.log("pizzasInCart no carrinho", pizzasInCart)
  return (
<>
    <h1>Cart</h1>
    <div className="container text-center">
        <div className="row gap-0 row-gap-3">
            {pizzasInCart.map((pizzasInCart, index) => {
            console.log("pizza OLHHAAAA", pizzasInCart);
            return <PizzaItem key={index} obj={pizzasInCart} />;
            })}
        </div>
    </div>
</>
  )
}

