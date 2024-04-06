import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const LeaderBoardSlice=createSlice({
    name:"scoreBoard",
    initialState:[],
    reducers:{
    
    }
})

export const leaderActions=LeaderBoardSlice.actions;
export default LeaderBoardSlice