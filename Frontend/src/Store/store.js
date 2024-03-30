import {configureStore} from "@reduxjs/toolkit"
import ActiveUserSlice from "./userSlice";




const store=configureStore({
    reducer:{
      activeUser:ActiveUserSlice.reducer,
    }
});

export default store;