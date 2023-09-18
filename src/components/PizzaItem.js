import React from 'react'
// import { useSelector } from 'react-redux'


function PizzaItem(props) {
  console.log("AQUI props", props)

  // const pizza = useSelector((state) => state.pizza.pizzas)
  return (
    <>
      <div className="box-menu-pizza">

             {/* <h2>{pizza.title}</h2> */}
             <h2>{props.obj.title}</h2>
             <p className="description">{props.obj.description}</p>
             <p>{props.obj.size.small}</p>
             <img src="/src/assests/images/broccoli-pizza.webp" alt="Pizza image" className="img-pizza-main" />
    </div>
    </>
  )
}

export default PizzaItem