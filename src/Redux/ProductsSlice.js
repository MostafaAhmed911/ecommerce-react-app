import { createSlice } from "@reduxjs/toolkit";

let x = {products:[] , isLoading : false};

let productsSlice = createSlice({
    name : 'products',
    initialState: x, 
    reducers:{
        printProducts : (state )=>{
            console.log(state.products);
        }
    }
});
export let productsReducer = productsSlice.reducer;
export let {printProducts} = productsSlice.actions;