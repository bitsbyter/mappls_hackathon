import { createSlice } from "@reduxjs/toolkit";


const UserCategoryDataSlice=createSlice({
    name:"userCategoryData",
    initialState:[],
    reducers:{
        setUserCategoryData:(state,action)=>{
              const pref=action.payload;
              console.log(pref)
              return pref
        }
    }
})

export const userCategoryActions=UserCategoryDataSlice.actions;
export default UserCategoryDataSlice;