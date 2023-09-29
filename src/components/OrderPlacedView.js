import React from 'react'
import { Container } from 'react-bootstrap';

function OrderPlacedView() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderNumber = urlParams.get('orderNumber');
    console.log('Order Number:', orderNumber);
  return (
    <Container>
        <h1>Order Placed</h1>
        <h2>Your order number is: {orderNumber}</h2>
        <img src="/assets/image/delivery.gif" alt="pizza gif" />
    </Container>
  )
}

export default OrderPlacedView