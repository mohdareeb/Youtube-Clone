// import {  createSlice } from "@reduxjs/toolkit";

// const chatSlice = createSlice({
//     name:"chat",
//     initialState:{
//         messages:[],
//     },
//     reducers:{
//         addMessages:(state,action)=>{
//             state.messages.push(action.payload);
//         },
//     },
// })

// export const { addMessages } = chatSlice.actions;
// export default chatSlice.reducer; 


import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessages: (state, action) => {  // Corrected spelling here
            state.messages.push(action.payload);
            
        },
    },
})

// Correct export with matching name
export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;