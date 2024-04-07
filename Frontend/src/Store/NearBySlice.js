import { createSlice } from "@reduxjs/toolkit";

const NearbyPlaceSlice=createSlice({
    name:"nearbyPlace",
    initialState:[],
    reducers:{
        setNearByPlace:(state,action)=>{
           const place=action.payload;
           return place
        }
    }
})

export const NearByActions=NearbyPlaceSlice.actions;
export default NearbyPlaceSlice