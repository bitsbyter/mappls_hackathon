import { createSlice } from "@reduxjs/toolkit";


const ActiveUserSlice=createSlice({
    name:"activeUserSlice",
    initialState:[],
    reducers:{
        setActiveUser:(state,action)=>{
            const user=action.payload;
            console.log(user)
            return user;
        },
    }
});
export const UserActions=ActiveUserSlice.actions;
export default ActiveUserSlice;


