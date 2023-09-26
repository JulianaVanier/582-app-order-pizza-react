import React from 'react'
import CustomPizza from './CustomPizza'
import { Container } from 'react-bootstrap';

function CustomPizzaView() {
  return (
    <>
    <Container >
    <h1>Custom Pizza</h1>
    <CustomPizza/>
    </Container>
    </>
  )
}

export default CustomPizzaView