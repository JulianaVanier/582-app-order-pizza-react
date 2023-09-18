import {createSlice} from '@reduxjs/toolkit';

export const IngredientSlice = createSlice({
    name: 'ingredient',
    initialState: {
        ingredients: [],
        // actual value of states
    },
    reducers: {
        // actions
        //two arguments state (inital state) and action (objetct with type and payload(same as paramater))
        setIngredient: (state, action) => {
            //Pizzas will be all we get from the action.payload
            state.ingredients = action.payload;
        },
    },
});
//export to have acess 
export const {setIngredient} = IngredientSlice.actions;

export default IngredientSlice.reducer;
