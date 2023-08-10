import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from "./slices/sectionSlice";
import sideNavSlice from "./slices/sideNavSlice";

const store=configureStore({
    reducer:{
        section:sectionSlice,
        sidenav:sideNavSlice
    }
})


export default store;