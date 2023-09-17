// // import React from "react";
// // import { useState } from "react";

// function PizzaItem(props) {
//   const { pizza } = props;

//   // const [pizzas, setPizzas] = useState([]);

//   return (
//         <div>

//         <ul>
//             {pizza.map((pizza) => (
//             <li key={pizza.id}>{pizza.title}</li>
//             ))}
//         </ul>
//         </div>


//     // <div className="pizza-item">
//     //   <h3>{pizza.title}</h3>
//     //   <p>{pizza.description}</p>
//     //   {/* <p>{pizza.price}</p> */}
//     // </div>
//   );
// }

// export default PizzaItem;

import React from 'react'
import { useSelector } from 'react-redux'

function PizzaItem() {
  const pizza = useSelector((state) => state.pizza.pizzas)
  return (
    <>
    <h2>BOLA</h2>
      <div className="pizza-item">

          {pizza.map((pizza) => (
            <div key={pizza.id}>
             <p>{pizza.title}</p>
             <p>{pizza.description}</p>
             <p>{pizza.size.small}</p>
            </div>


          ))}

    </div>
    </>
  )
}

export default PizzaItem