import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const LeaderBoardSlice=createSlice({
    name:"scoreBoard",
    initialState:[],
    reducers:{
        setLeaderBoardData:(state,action)=>{
            const data=action.payload;
            console.log(data)
            return data;
        }
    }
})

export const leaderActions=LeaderBoardSlice.actions;
export default LeaderBoardSlice