import {createSlice} from '@reduxjs/toolkit';

export const PizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        pizzas: [],
        sizeSelectedPrice: null,
        sizeSelected: null,
        pizzasInCart: [],
        pizzaToCustomize: [],

        // actual value of states
    },
    reducers: {
        // actions
        //two arguments state (inital state) and action (objetct with type and payload(same as paramater))
        setPizzas: (state, action) => {
            //Pizzas will be all we get from the action.payload
            state.pizzas = action.payload;
        },
        setSizeSelectedPrice: (state, action) => {
            state.sizeSelectedPrice = action.payload;
            state.sizeSelected = action.payload;
            console.log("state", state.sizeSelectedPrice);
        },
        setSizeSelected: (state, action) => {
            state.sizeSelected = action.payload;
            console.log("state", state.sizeSelected);
        },
        addPizzasInCart: (state, action) => {
            
            state.pizzasInCart = action.payload;
            console.log("state CART", state.pizzasInCart);
        },
        addPizzaToCustomize: (state, action) => { 
            state.pizzaToCustomize = action.payload;
            console.log("state CUSTOMIZE", state.pizzaToCustomize);
        },

    },
});
//export to have acess 
export const {setPizzas} = PizzaSlice.actions;
export const {setSizeSelectedPrice} = PizzaSlice.actions;
export const {setSizeSelected} = PizzaSlice.actions;
export const {addPizzasInCart} = PizzaSlice.actions;
export const {addPizzaToCustomize} = PizzaSlice.actions;

export default PizzaSlice.reducer;
