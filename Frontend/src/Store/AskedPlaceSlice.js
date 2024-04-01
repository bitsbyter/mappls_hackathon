import { createSlice } from "@reduxjs/toolkit";


const AskedPlaceSlice=createSlice({
    name:"askedPlace",
    initialState:[],
    reducers:{
        setQuestionedPlace:(state,action)=>{
            const Qplace=action.payload
            console.log(Qplace)
            return Qplace
        }
    }
})
export const QuestionAction=AskedPlaceSlice.actions;
export default AskedPlaceSlice


/// Tasks to do
//add the street map with random famous coordinates and then store it while in geoGuesser file not ScoreCard One