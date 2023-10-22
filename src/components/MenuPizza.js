import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { PizzaSlice, setPizzas } from '../features/PizzaStore';
import PizzaItem from "./PizzaItem";
import { useSelector } from 'react-redux'


export default function MenuPizza() {
    const pizza = useSelector((state) => state.pizza.pizzas)
    const dispatch = useDispatch();

    const fetchPizzas = () => {
        console.log("fetching pizzas");
        // fetch('https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/pizza')
        fetch('http://localhost:3000/pizza')
            .then((response) => response.json())
            .then((jsonPizza) => {
                if (Array.isArray(jsonPizza)) {
                    console.log("JSON", jsonPizza);
                    {dispatch(PizzaSlice.actions.setPizzas(jsonPizza))}
                    console.log("dispatched",setPizzas(jsonPizza) );

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
    <div className="title-menu"><h1>Menu</h1></div>
    
    <div className="container text-center menu">
        <div className="row gap-0 row-gap-3">
            {pizza.map((pizza, index) => {
            // console.log("pizza", pizza);
            return <PizzaItem key={index} obj={pizza} />;
            })}
        </div>
    </div>
</>
    );
}


