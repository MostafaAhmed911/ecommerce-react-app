import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./ProductsSlice";
import { counterReducer } from "./counterSlice";

export let store = configureStore({
    reducer:{
        counter:counterReducer,
        products:productsReducer
    }
})