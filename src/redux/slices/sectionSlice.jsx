import { createSlice } from "@reduxjs/toolkit";

const sectionSlice=createSlice({
    name:"presentsection",
    initialState:"",
    reducers:{
        updatePresentSection(state,action){
            // if(action.payload===undefined){
            //     return ""
            // }else{
            return action.payload
            // }
        }
    }
})

export const {updatePresentSection}=sectionSlice.actions
export default sectionSlice.reducer;