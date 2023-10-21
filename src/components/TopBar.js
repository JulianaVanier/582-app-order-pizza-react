import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




function TopBar() {
    const pizzaCart = useSelector((state) => state.pizza.pizzasInCart);
    const itensPizzaCart = pizzaCart.length;
    const navigate = useNavigate();

    function backMenu() {
        // window.location.href = "/";
        navigate(-1);
    }

  return (
    <>
    <Container>
      <Row>
        <Col md={4}><img src="/assets/image/back-icon.png" className='back-icon' alt='button back' onClick={ () => {backMenu()}} /></Col>
        <Col md={{  offset: 6 }}><img src="/assets/image/cart-icon.png" className='cart-icon' alt='button back' /><div class="qt-cart">{ itensPizzaCart }</div></Col>
      </Row>
      </Container>
    </>
  )
}

export default TopBar