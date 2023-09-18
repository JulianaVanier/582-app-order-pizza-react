import { useEffect } from "react";
import { useDispatch} from "react-redux";
// import { PizzaSlice, setPizzas } from '../features/PizzaStore';
import IngredientItem from "./IngredientItem";
import { useSelector } from 'react-redux'

export default function IngredientList() {
    // const pizza = useSelector((state) => state.pizza.pizzas)
    const ingredient = useSelector((state) => state.ingredient.ingredients)
    const dispatch = useDispatch();

    const fetchIngredients = () => {
        console.log("fetching Ingredients");
        fetch('https://bookish-rotary-phone-j6j6g76r445255vv-3000.app.github.dev/customizepizza')
            .then((response) => response.json())
            .then((jsonIngredients) => {
                if (Array.isArray(jsonIngredients)) {
                    console.log("JSON", jsonIngredients);
                    {dispatch(IngredientSlice.actions.setIngredient(jsonIngredients))}
                    console.log("dispatched",setIngredient(jsonIngredients) );

                } else {
                    console.error("JSON invalid.");
                }
            })
            
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchIngredients();
    }, []);
    
    return (

<>
 {/* <h1>Menu</h1>

 {pizza.map((pizza, index) => {
    console.log("pizza", pizza);
    return <PizzaItem key={index} obj={pizza} />;
})} */}

 <h1>Ingredients</h1>

 {ingredient.map((ingredient, index) => {
    console.log("ingredient", ingredient);
    return <IngredientItem key={index} obj={ingredient} />;
})}

</>
    );
}


