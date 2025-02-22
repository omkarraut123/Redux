import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./Todoslice";

const store = configureStore({
    reducer:{
        Todo: reducer
    }
});

export default store;
