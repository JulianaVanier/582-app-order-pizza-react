import {createSlice} from '@reduxjs/toolkit';

export const PizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        pizzas: [],
        sizeSelected: null,
        // actual value of states
    },
    reducers: {
        // actions
        //two arguments state (inital state) and action (objetct with type and payload(same as paramater))
        setPizzas: (state, action) => {
            //Pizzas will be all we get from the action.payload
            state.pizzas = action.payload;
        },
        setSizeSelected: (state, action) => {
            state.sizeSelected = action.payload;
            console.log("state", state.sizeSelected);
        }
    },
});
//export to have acess 
export const {setPizzas} = PizzaSlice.actions;
export const {setSizeSelected} = PizzaSlice.actions;

export default PizzaSlice.reducer;
