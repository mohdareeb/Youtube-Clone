import { createSlice } from "@reduxjs/toolkit";

const keywordSlice = createSlice({
    name:"keyword",
    initialState:{
        keyword:""
    },
    reducers:{
        setKeyword:(state,action)=>{
            state.keyword=action;
        }
    }
})


export const {setKeyword} = keywordSlice.actions;
export default keywordSlice.reducer;