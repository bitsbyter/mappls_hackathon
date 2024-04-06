import { createSlice } from "@reduxjs/toolkit";



const RoutingPlace=createSlice({
    name:"routingPlace",
    initialState:[],
    reducers:{
        setRoutingPlace:(state,action)=>{
            const routingPlace=action.payload;
            console.log(action.payload);
            return routingPlace;
        }
    }
})

export const routingActions=RoutingPlace.actions;
export default RoutingPlace;