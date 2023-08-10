const { createSlice } = require("@reduxjs/toolkit");

const sildeNavSlice=createSlice({
    name:'sidenavtoggle',
    initialState:false,
    reducers:{
        toggleSideNav(state,action){
            return action.payload
        }
    }
})

export const {toggleSideNav}=sildeNavSlice.actions;

export default sildeNavSlice.reducer;