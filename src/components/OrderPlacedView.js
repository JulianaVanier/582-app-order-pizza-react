import React from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function OrderPlacedView() {
    const location = useLocation();
    const orderNumber = new URLSearchParams(location.search).get('orderNumber');

  return (
    <Container>
        <h1>Order Placed</h1>
        <h2>Your order number is: {orderNumber}</h2>
        <img src="/assets/image/delivery.gif" alt="pizza gif" />
    </Container>
  )
}

export default OrderPlacedView