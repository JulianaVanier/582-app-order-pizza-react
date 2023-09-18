import React from 'react'
// import { useSelector } from 'react-redux'


function IngredientItem(props) {
  console.log("AQUI Ingredients", props)

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
    <>
      <div className="box-menu-ingredients">

             {/* <h2>{pizza.title}</h2> */}
             <h2>{props.obj.title}</h2>
             <p>{props.obj.price}</p>
             <img src="/src/assests/images/broccoli-pizza.webp" alt="Pizza image" className="img-pizza-main" />
    </div>
    </>
  )
}

export default IngredientItem