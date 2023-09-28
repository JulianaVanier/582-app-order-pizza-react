import React from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { PizzaSlice } from "../features/PizzaStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CustomPizza from "./CustomPizza";

import { useNavigation } from "react-router-dom";

export default function PopUpSize(props) {
  const dispatch = useDispatch();
  const sizeSelectedPrice = useSelector(
    (state) => state.pizza.sizeSelectedPrice
  );
  const sizeSelected = useSelector((state) => state.pizza.sizeSelected);
  const navigate = useNavigate();
  // const navigation = useNavigation();

  // const dataToPass = {
  //   pizzaId: props.obj._id,
  // };

  //function to clear size selected when close pop up
  const clearSizeSelected = () => {
    dispatch(PizzaSlice.actions.setSizeSelectedPrice(null));
    dispatch(PizzaSlice.actions.setSizeSelected(null));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePizzaToCart = () => {
    console.log("handlePizzaToCart", props.obj);
    console.log("sizeeeeeeeeee", sizeSelectedPrice);
    if (props.obj.custom === false) {
      const pizzaToCart = {
        _id: props.obj._id,
        title: props.obj.title,
        custom: props.obj.custom,
        description: props.obj.description,
        sizeSelected: sizeSelected,
        sizeSelectedPrice: sizeSelectedPrice,
        imageReact: props.obj.imageReact,
        ingredient: props.obj.ingredient,
        quantity: 1,
      };
      console.log("pizzaToCart", pizzaToCart);
      dispatch(PizzaSlice.actions.addPizzasInCart(pizzaToCart));
      navigate("/cart");
    } else {
      const pizzaToCustomize = {
        _id: props.obj._id,
        id: Date.now(),
        title: props.obj.title,
        custom: props.obj.custom,
        description: props.obj.description,
        sizeSelected: sizeSelected,
        sizeSelectedPrice: sizeSelectedPrice,
        imageReact: props.obj.imageReact,
        ingredient: props.obj.ingredient,
        quantity: 1,
      };
      console.log("pizzaToCustomize", pizzaToCustomize);
      dispatch(PizzaSlice.actions.addPizzaToCustomize(pizzaToCustomize));
      // navigation.navigate("/custompizza", { data: dataToPass });

      navigate("/custompizza");
    }
  };


  useEffect(() => {
    handleShow();
  }, []);

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        onHide={() => {
          handleClose();
          clearSizeSelected();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select a size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={2} md={3} className="text-center border rounded ">
              <Image src="/assets/image/pizza-icon.png" fluid />
              <p className="fw-bold">Small</p>
              <p className="fw-semibold fs-5">${props.obj.size.small}</p>
              <Button
                onClick={() => {
                  dispatch(
                    PizzaSlice.actions.setSizeSelectedPrice(
                      props.obj.size.small
                    )
                  );
                  dispatch(PizzaSlice.actions.setSizeSelected("small"));
                }}
              >
                Select
              </Button>
            </Col>
            <Col xs={6} md={3} className="text-center border rounded ">
              <Image src="/assets/image/pizza-icon.png" fluid />
              <p className="fw-bold">Medium</p>
              <p className="fw-semibold fs-5">${props.obj.size.medium}</p>
              <Button
                onClick={() => {
                  dispatch(
                    PizzaSlice.actions.setSizeSelectedPrice(
                      props.obj.size.medium
                    )
                  );
                  dispatch(PizzaSlice.actions.setSizeSelected("medium"));
                }}
              >
                Select
              </Button>
            </Col>
            <Col xs={6} md={3} className="text-center border rounded ">
              <Image src="/assets/image/pizza-icon.png" fluid />
              <p className="fw-bold">Large</p>
              <p className="fw-semibold fs-5">${props.obj.size.large}</p>
              <Button
                onClick={() => {
                  dispatch(
                    PizzaSlice.actions.setSizeSelectedPrice(
                      props.obj.size.large
                    )
                  );
                  dispatch(PizzaSlice.actions.setSizeSelected("large"));
                }}
              >
                Select
              </Button>
            </Col>
            <Col xs={6} md={3} className="text-center border rounded ">
              <Image src="/assets/image/pizza-icon.png" fluid />
              <p className="fw-bold">X-Large</p>
              <p className="fw-semibold fs-5">${props.obj.size.xlarge}</p>
              <Button
                onClick={() => {
                  dispatch(
                    PizzaSlice.actions.setSizeSelectedPrice(
                      props.obj.size.xlarge
                    )
                  );
                  dispatch(PizzaSlice.actions.setSizeSelected("xlarge"));
                }}
              >
                Select
              </Button>
            </Col>
          </Row>
          <Row>
            <p className="fw-semibold fs-4 text-center">${sizeSelectedPrice}</p>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              handlePizzaToCart(sizeSelectedPrice);
              clearSizeSelected();
            }}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
