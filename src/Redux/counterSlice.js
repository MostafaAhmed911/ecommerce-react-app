import { createSlice } from "@reduxjs/toolkit";

let x = {counter:0 , userName:'sss'};

let counterSlice = createSlice({
    name:'counter',
    initialState:x,
    reducers:{
        increase:(state , actions)=>{
            state.counter +=1;
        },
        decrease:(state , actions)=>{
            state.counter -=1;
        },
        increamentByAmount:(state , actions)=>
        {
            state.counter += actions.payload;
        }
    }
});

export let counterReducer = counterSlice.reducer;
export let {increase , decrease , increamentByAmount} = counterSlice.actions;