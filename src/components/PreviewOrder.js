import React from 'react'
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


function PreviewOrder() {

    const [orderNumber, setOrderNumber] = useState("");
    // const orderStore = useSelector((state) => state.order.setOrder);
    // const previewOrders = orderStore.previewOrders;
    // const clearCart = usePizzaStore((state) => state.clearCart);
    // const pizzaStore = useSelector((state) => state.pizza.pizzasInCart);
    const dispach = useDispatch();
    const pizzaStore = useSelector((state) => state.pizza.pizzasInCart);
    const navigate = useNavigate();

    // const history = useHistory();
  
    const findOrderNumber = () => {
      console.log("findOrderNumber", orderNumber);
      fetch(
        "http://localhost:3000/previeworder/" +
        orderNumber
      )
      .then((response) => response.json())
      .then((json) => {
        console.log("Inside Fetch", json);
        // clearCart();
        
  
        for (let pizza of json.pizza) {
          console.log("Aqui entrou", pizza);
          if (pizza.custom === true) {
            console.log("ENTROU CUSTOM", pizza);
            dispach(PizzaSlice.actions.addPizzasInCart(pizza)
            );
            navigate("/cart");
            // pizzaStore.addCustomToCart(pizza);
          } else {
            console.log("ENTROU NORMAL", pizza);
            dispach(PizzaSlice.actions.addPizzasInCart(pizza)
            );
            console.log("pizza no carrinhooooooo", pizzaStore);
            navigate("/cart");
            // pizzaStore.addPizzaToCart(
            //   pizza,
            //   pizza.priceSelected,
            //   pizza.sizeSelected
            // );
          }
          // history.push("/cart/" + pizza.id);
        }
      });
    };

  return (
    <>
    
    <h4>PreviewOrder</h4>
    <div className="container">
      <div className="box-input">
        <div className="input-order-number">
        <InputGroup size="lg" className="mb-3"
        type="text"
        id="orderNumber"
        value={orderNumber}
        onChange={(e) => setOrderNumber(e.target.value)}
        required
        >
        <InputGroup.Text id="inputGroup-sizing-sm">Order Number:</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
          </InputGroup>
          <Button variant="danger" onClick={findOrderNumber}>Search</Button>
          {/* <label htmlFor="orderNumber">Order Number:</label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
          <Button variant="danger" onClick={findOrderNumber}>Search</Button> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default PreviewOrder