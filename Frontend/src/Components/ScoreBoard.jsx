import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { leaderActions } from "../Store/LeaderBoard";
const ScoreBoard=async=()=>{
    const dispatch=useDispatch();
   useEffect(()=>{
     const getScoreBoardData=async()=>{
        try{
          const result=await axios.get("http://localhost:3000/fetchData")
           dispatch(leaderActions.setLeaderBoardData(result.data))
        }catch(err){
          console.log(err)
        }
     }

     getScoreBoardData();
   },[])
}

export default ScoreBoard;