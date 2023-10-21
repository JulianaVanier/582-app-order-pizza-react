import React, { useEffect } from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";
import { useNavigate } from "react-router-dom";
import { history } from "../App";
import TopBar from "./TopBar";


export default function CartComponent() {
  const pizzasInCart = useSelector((state) => state.pizza.pizzasInCart);
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate();
  const pizzaStore = useSelector((state) => state.pizza);


function calcTotalPrice(pizzaInCart) {
  let totalPrice = 0;
  totalPrice = pizzaInCart.sizeSelectedPrice * pizzaInCart.quantity;
  return totalPrice;
};

function calcTotalPriceAll() {
  let totalPriceAll = 0;
  for (let i = 0; i < pizzasInCart.length; i++) {
    totalPriceAll += pizzasInCart[i].sizeSelectedPrice * pizzasInCart[i].quantity;
  }
  return totalPriceAll;
};
function distributionPizzasInOrder() {
  let pizzasInOrder = [];
  for (let i = 0; i < pizzasInCart.length; i++) {
    pizzasInOrder.push(pizzasInCart[i]);
  }
  return pizzasInOrder;
};

function placeOrder() {

  var orderToDb ={
    _id: null,
    orderNumber: Math.floor(
      Math.pow(10, 3 - 1) +
        Math.random() * (Math.pow(10, 3) - Math.pow(10, 3 - 1) - 1)
    ),
    pizza: distributionPizzasInOrder(),
    date: new Date().toISOString(),
    totalprice: calcTotalPriceAll(),
  }

  // console.log("pizzasInOrder", pizzasInOrder);

  fetch(
    "http://localhost:3000/placeorder",
    {
      method: "POST",
      body: JSON.stringify(orderToDb),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((data) => {
          // this.pizzaStore.clearCart();
          // navigate("/orderplaced");
          dispatch(PizzaSlice.actions.clearCart());
          navigate(`/orderplaced?orderNumber=${orderToDb.orderNumber}`);
          // history.push("/orderplaced");
    });


}


  return (
    <>
    <TopBar></TopBar>
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
                        variant="danger"
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
                      variant="danger"
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
          <Col xs={6} md={10}>
            <p>Total Price: {calcTotalPriceAll()}</p>
          </Col>
          <Col xs={6} md={2}>
            <Button variant="danger" onClick={placeOrder}>Checkout</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
