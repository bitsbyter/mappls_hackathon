import { createSlice } from "@reduxjs/toolkit";

const UserCoordsSlice=createSlice({
    name:"userCoords",
    initialState:[],
    reducers:{
        setUserCoords:(state,action)=>{
           const coords=action.payload;
           console.log(coords)
           return coords;
        }
    }
})
export const CoordActions=UserCoordsSlice.actions;
export default UserCoordsSlice;