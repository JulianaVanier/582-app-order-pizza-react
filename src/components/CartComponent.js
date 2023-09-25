import React from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";

export default function CartComponent() {
  const pizzasInCart = useSelector((state) => state.pizza.pizzasInCart);
  console.log("pizzasInCart no carrinho", pizzasInCart);
  const dispatch = useDispatch();

  // const pizzaAddQuantity = () => {
  //   console.log("Here btn add inside func", pizzasInCart);
  //   dispatch(PizzaSlice.actions.pizzaAddQuantityStore(pizzasInCart));
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
                      <p> ${pizzaInCart.sizeSelectedPrice}</p>
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
            Total Price: $
          </Col>
        </Row>
      </Container>
    </>
  );
}
