import React from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';

function OrderPlacedView() {
    const location = useLocation();
    const orderNumber = new URLSearchParams(location.search).get('orderNumber');

  return (

    <Container>
      <TopBar />
        <h1>Order Placed</h1>
        <h2>Your order number is: {orderNumber}</h2>
        <div className='img-order'>
        <img src="/assets/image/delivery.gif" alt="pizza gif" />
        </div>
    </Container>
  )
}

export default OrderPlacedView