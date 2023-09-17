import { useState, useEffect } from "react";
// import PizzaItem from "./PizzaItem";

export default function MenuPizza() {
    const [pizzas, setPizzas] = useState([]);
    
    // const fetchPizzas = () => { 
    //     console.log("fetching pizzas");
    //     fetch(`https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/pizza`) 
    //       .then((response) => response.json()) 
    //       .then((jsonPizza) => setPizzas(jsonPizza)) 
    //       .catch((error) => console.log(error));
    //   }; 


    const fetchPizzas = () => {
        console.log("fetching pizzas");
        fetch('https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/pizza')
            .then((response) => response.json())
            .then((jsonPizza) => {
                if (Array.isArray(jsonPizza)) {
                    console.log(jsonPizza);
                    setPizzas(jsonPizza);

                } else {
                    console.error("JSON invalid.");
                }
            })
            
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchPizzas();
    }, []);
    
    return (

<>





        <ul>
            {pizzas.map((pizza) => (
            <li key={pizza.id}>{pizza.title}</li>
            // <li key={pizza.id}>{pizza.description}</li>
            ))}
        </ul>
</>
        // <>
        // {pizzas.title}
        // </>
    );
}

// export default MenuPizza;

