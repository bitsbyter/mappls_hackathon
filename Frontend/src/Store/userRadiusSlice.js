import { createSlice } from "@reduxjs/toolkit";

const userRadiusSlice=createSlice({
    name:"userRadius",
    initialState:[],
    reducers:{
        setRadius:(state,action)=>{
            const radius=action.payload;
            console.log(radius)
            return radius
        }
    }
})

export const radiusActions=userRadiusSlice.actions;
export default userRadiusSlice;