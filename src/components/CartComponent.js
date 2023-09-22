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

  // const removePizzaFromCart = () => {
  //   dispatch(PizzaSlice.actions.removePizzasInCart(pizzasInCart));
  // }

  return (
    <>
      <h1>Cart</h1>

      <div className="container text-center ">
        <div className="row gap-0 row-gap-3">
          {pizzasInCart.map((pizzasInCart, index) => {
            console.log("pizza OLHHAAAA", pizzasInCart);
            return (
              <Container className="cart">
                <Row>
                  <Col xs={6} md={8}>
                    <PizzaItem key={index} obj={pizzasInCart} />
                  </Col>
                  <Col xs={6} md={2}>
                    <div className="box-qt">
                      <Image className="btn-add" src="assets/image/add.png" />
                      <p>1</p>
                      <Image
                        className="btn-remove"
                        src="assets/image/remove.png"
                      />
                    </div>
                  </Col>
                  <Col xs={6} md={2}>
                    <div className="box-delete">
                      <Image
                        onClick={()=>{dispatch(PizzaSlice.actions.removePizzasInCart(pizzasInCart))}}
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
    </>
  );
}
