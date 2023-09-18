import React from 'react'
// import { useSelector } from 'react-redux'
// import logo from '../logo.svg';
// import img from {props.obj.image}



function PizzaItem(props) {
  console.log("AQUI props", props)

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
  <>

        <div className='col-md-3'>
          <div className="card">
            <img className="card-img-top" src={props.obj.imageReact} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{props.obj.title}</h5>
              <p className="card-text">{props.obj.description}</p>
              <a href="#" className="btn btn-danger">Add to Cart</a>
            </div>
          </div>
        </div>
  </>
  )
}

export default PizzaItem