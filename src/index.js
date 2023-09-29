import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import { PizzaSlice } from './features/PizzaStore'; 
import { IngredientSlice } from './features/IngredientStore';
import "bootstrap/dist/css/bootstrap.min.css";
import CartView from './components/CartView';
import CustomPizzaView from './components/CustomPizzaView';
import MenuPizza from './components/MenuPizza';
import OrderPlacedView from './components/OrderPlacedView';

const store = configureStore({
  reducer: {
    pizza: PizzaSlice.reducer,
    ingredient: IngredientSlice.reducer,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <App />
    </div>,
  },
  {
    path: "/cart",
    element: (
      <div>
        <CartView />
      </div>
    ),
  },
  {
    path: "/custompizza",
    element: (
      <div>
        <CustomPizzaView />
      </div>
    ),
  },
  {
    path: "/orderplaced",
    element: (
      <div>
        <OrderPlacedView />
      </div>
    ),
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
