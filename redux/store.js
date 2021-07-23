import { configureStore } from "@reduxjs/toolkit";
import IndexedData from "../repository/indexedData";
import { cartReducer } from "./cart.slice";

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

// create indexed product data
IndexedData.startIndexing();

export default store;
