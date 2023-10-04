import {createSlice} from '@reduxjs/toolkit';

export const OrderStore = createSlice({
    name: 'order',
    initialState: {
        previewOrders: [],
        // actual value of states
    },
    reducers: {
        // actions
        //two arguments state (inital state) and action (objetct with type and payload(same as paramater))
        setOrder: (state, action) => {
            //Pizzas will be all we get from the action.payload
            state.previewOrders = action.payload;
        },
    },
});
//export to have acess 
export const {setOrder} = OrderStore.actions;

export default OrderStore.reducer;
