import React, { useEffect } from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";
import { useState } from "react";


export default function CartComponent() {
  const pizzasInCart = useSelector((state) => state.pizza.pizzasInCart);
  const pizzaInCart = pizzasInCart.map((pizza) => pizza);
  console.log("pizzasInCart no carrinho", pizzasInCart);
  const dispatch = useDispatch();
  // const totalPrice = useSelector((state) => state.pizza.totalPrice);


// const getTotalPrice = () => {
//     let totalPrice = 0;
//     for (let i = 0; i < pizzasInCart.length; i++) {

//       totalPrice = pizzasInCart[i].sizeSelectedPrice * pizzasInCart[i].quantity;
//       console.log("AQUI TOTAL PRICE", totalPrice);
//     }
//     return totalPrice;
//   };
function calcTotalPrice(pizzaInCart) {
  let totalPrice = 0;
  totalPrice = pizzaInCart.sizeSelectedPrice * pizzaInCart.quantity;
  return totalPrice;
};

  // const calcTotalPrice = (pizzaInCart) => {
  //   pizzaInCart.totalPrice = pizzaInCart.sizeSelectedPrice * pizzaInCart.quantity;
  // };


  // const removePizzaFromCart = () => {
  //   dispatch(PizzaSlice.actions.removePizzasInCart(pizzasInCart));
  // }




  return (
    <>
      <h1>Cart</h1>

      <div className="container text-center ">
        <div className="row gap-0 row-gap-3">
          {pizzasInCart.map((pizzaInCart) => {
            console.log("pizza OLHHAAAA", pizzaInCart);
            return (
              <Container className="cart" key={pizzaInCart._id}>
                <Row>
                  <Col xs={6} md={6}>
                    <PizzaItem obj={pizzaInCart} />
                  </Col>
                  <Col xs={6} md={2}>
                    <div className="box-price">
                      <p> ${calcTotalPrice(pizzaInCart)}</p>
                    </div>
                  </Col>
                  <Col xs={6} md={2}>
                    <div className="box-qt">
                      <Button
                        onClick={() => {
                          dispatch(
                            PizzaSlice.actions.pizzaAddQuantityStore(
                              pizzaInCart
                            )
                          );
                        }}
                      >
                        +
                      </Button>
                      <p>{pizzaInCart.quantity}</p>
                      <Button
                      onClick={() => {
                        dispatch(
                          PizzaSlice.actions.pizzaRemoveQuantityStore(
                            pizzaInCart
                          )
                        );
                      }}
                      >-</Button>
                    </div>
                  </Col>
                  <Col xs={6} md={2}>
                    <div className="box-delete">
                      <Image
                        onClick={() => {
                          dispatch(
                            PizzaSlice.actions.removePizzasInCart(pizzaInCart)
                          );
                        }}
                        className="btn-delete"
                        src="assets/image/delete-icon.png"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </div>
      </div>
      <Container>
        <Row>
          <Col xs={6} md={12}>
            <p>Total Price: </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
