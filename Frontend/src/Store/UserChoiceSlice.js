import { createSlice } from "@reduxjs/toolkit";


const NearByChoice=createSlice({
    name:"nearbyChoice",
    initialState:[],
    reducers:{
        setChoice:(state,action)=>{
            const choice=action.payload
            console.log(action.payload)
            return choice
        }
    }
})
export const choiceActions=NearByChoice.actions
export default NearByChoice