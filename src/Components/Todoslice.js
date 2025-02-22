import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'Todo',
    initialState: {
        items: [
            {
                title: "Set up a dedicated workspace.",
                completed: false
            },
            {
                title: "Establish a daily routine.",
                completed: false
            },
            {
                title: "Prioritize tasks based on goals.",
                completed: false    
            },
            {
                title: "Check and reply to emails.",
                completed: false    
            }
        ]
    },
    reducers:{
        addItem: (state,action)=>{            
           state.items.push({title: action.payload, completed: false}); 
        },
        removeItem: (state,action)=>{
            state.items[action.payload].completed = true;
        },
        incompleteItem: (state,action)=>{
            state.items[action.payload].completed = false;
        },
    }
});



export const {addItem, removeItem, incompleteItem } = todosSlice.actions;
export const reducer = todosSlice.reducer;