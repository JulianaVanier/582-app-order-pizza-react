import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const PizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        pizzas: [],
        sizeSelectedPrice: null,
        sizeSelected: null,
        pizzasInCart: [],
        pizzaToCustomize: {},


        // actual value of states
    },
    reducers: {
        // actions
        //two arguments state (inital state) and action (objetct with type and payload(same as paramater))
        setPizzas: (state, action) => {
            //Pizzas will be all we get from the action.payload
            // state.pizzasInCart = action.payload;
            state.pizzas = action.payload;
            console.log("state PIZZA",  state.pizzas);
        },
        setSizeSelectedPrice: (state, action) => {
            state.sizeSelectedPrice = action.payload;
            state.sizeSelected = action.payload;
            console.log("state setSizeSelectedPrice", state.sizeSelectedPrice);
        },
        setSizeSelected: (state, action) => {
            state.sizeSelected = action.payload;
            console.log("state setSizeSelected", state.sizeSelected);
        },
        addPizzasInCart: (state, action) => {
            console.log("state CART BEFORE 1", action.payload);
            console.log("state CART BEFORE 2", state.pizzasInCart);

            // state.pizzasInCart.push(action.payload);
            state.pizzasInCart = [...state.pizzasInCart, action.payload];
            // state.pizzasInCart = action.payload;
            console.log("state CART AFTER", state.pizzasInCart);
        },
        addPizzaToCustomize: (state, action) => { 
            state.pizzaToCustomize = {...state.pizzaToCustomize, ...action.payload};
            console.log("addPizzaToCustomize", state.pizzaToCustomize);
        },
        removePizzasInCart: (state, action) => {
            state.pizzasInCart = state.pizzasInCart.filter((pizza) => pizza._id !== action.payload._id);
        },
        pizzaAddQuantityStore: (state, action) => {
            console.log("receiving in pizzaAddQuantityStore", state);
            for (let i = 0; i < state.pizzasInCart.length; i++) {
                if (state.pizzasInCart[i]._id === action.payload._id) {
                    state.pizzasInCart[i].quantity++;
                    console.log("pizzasInCart[i].quantity", state.pizzasInCart[i].quantity);
                    // state.totalPrice = state.pizzasInCart[i].sizeSelectedPrice * state.pizzasInCart[i].quantity;
                }
            }
        },
        pizzaRemoveQuantityStore: (state, action) => {
            console.log("receiving in pizzaRemoveQuantityStore", state);
            if (action.payload.quantity === 1) {
                state.pizzasInCart = state.pizzasInCart.filter((pizza) => pizza._id !== action.payload._id);
            }

            for (let i = 0; i < state.pizzasInCart.length; i++) {
                if (state.pizzasInCart[i]._id === action.payload._id) {
                    state.pizzasInCart[i].quantity--;
                    console.log("pizzasInCart[i].quantity", state.pizzasInCart[i].quantity);
                    // state.totalPrice = state.pizzasInCart[i].sizeSelectedPrice * state.pizzasInCart[i].quantity;
                }
            }
        },
        clearCart: (state) => {
            state.pizzasInCart = [];
        },

        // addIngredientPizzaToCustomize: (state, action) => {
        //     // console.log("receiving in addIngredientPizzaToCustomize", state);
        //     const { pizzaToCustomize, ingredient } = action.payload;

        //     console.log("Pizza ACTION", state.ingredient);
        //     console.log("INGREDIENTE ACTION", state.pizzaToCustomize);

        //     console.log("ACTION INGREDIENT", action.payload.ingredient);
        //     console.log("ACTION PIZZAAAA", action.payload.pizzaToCustomize);
        //     // console.log("RESULTADOOOO 1111111", state.pizzaToCustomize);
        //     // state.pizzaToCustomize.ingredients = action.payload.ingredient;
        //     // console.log("RESULTADOOOO 222222", state.pizzaToCustomize);
 


        //     // for (let i = 0; i < state.pizzaToCustomize.length; i++) {
        //     //     console.log("state.pizzaToCustomize[i]._id", state.pizzaToCustomize[i]._id);
        //     //     console.log("action.payload._id", action.payload._id);
        //     //     if (state.pizzaToCustomize[i]._id === action.payload._id) {
        //     //         console.log("state.pizzaToCustomize[i].ingredient", state.pizzaToCustomize[i].ingredient);
        //     //         state.pizzaToCustomize[i].ingredient.push(action.payload);
        //     //         console.log("AQUI ADDED INGREDIENT", state.pizzaToCustomize[i]);
        //     //         // state.totalPrice = state.pizzasInCart[i].sizeSelectedPrice * state.pizzasInCart[i].quantity;
        //     //     }
        //     // }
        // },
    },});
//export to have acess 
export const {setPizzas} = PizzaSlice.actions;
export const {setSizeSelectedPrice} = PizzaSlice.actions;
export const {setSizeSelected} = PizzaSlice.actions;
export const {addPizzasInCart} = PizzaSlice.actions;
export const {addPizzaToCustomize} = PizzaSlice.actions;
export const {pizzaAddQuantityStore} = PizzaSlice.actions;
export const {pizzaRemoveQuantityStore} = PizzaSlice.actions;
export const {removePizzasInCart} = PizzaSlice.actions;
export const {calcTotalPrice} = PizzaSlice.actions;
export const {clearCart} = PizzaSlice.actions;

export default PizzaSlice.reducer;
