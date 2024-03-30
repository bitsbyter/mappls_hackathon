import { createSlice } from "@reduxjs/toolkit";

const UserAnswerSlice=createSlice({
    name:"userAnswerCoords",
    initialState:[],
    reducers:{
        setUserAnswers:(state,action)=>{
           const coords=action.payload;
           console.log(coords)
           return coords;
        }
    }
})
export const AnswerActions=UserAnswerSlice.actions;
export default UserAnswerSlice;

