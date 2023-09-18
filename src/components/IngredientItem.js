import React from 'react'
// import { useSelector } from 'react-redux'
// import logo from '../assests/images/broccoli-pizza.webp';



function IngredientItem(props) {
  console.log("AQUI Ingredients", props)

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
    <>
      <div className="box-menu-ingredients">

             {/* <h2>{pizza.title}</h2> */}
             <h2>{props.obj.title}</h2>
             <p>{props.obj.price}</p>
             <img src={props.obj.image} alt={props.obj.title} className="img-pizza-main" />
    </div>
    </>
  )
}

export default IngredientItem