import { useEffect } from "react";
import { useState } from "react";
import { useSelector} from "react-redux";

import axios from "axios";

const ScoreCard=()=>{
    const questionObject=useSelector((store)=>store.askedPlace)
    const userAnswer=useSelector((store)=>store.userAnswerCoords);
    console.log(userAnswer)
    const userLat=userAnswer.answerCoords.lat;
    const userLong=userAnswer.answerCoords.lng;
   const [totalDistance,setDistance]=useState("");
  const [points,setPoints]=useState(0);
   useEffect(() => {
    const fetchData = async () => {
        const long=questionObject.longitude;
        const lat=questionObject.latitude;        
        const baseUrl = "http://apis.mappls.com/advancedmaps/v1";
        const MapplsApiKEy = "b977a114567d823ff35753212dec68cb";

        try {
            const response = await axios.get(`${baseUrl}/${MapplsApiKEy}/distance_matrix/walking/${long},${lat};${userLong},${userLat}`);
            const distance = response.data.results.distances[0][1]/1000;
            setDistance(distance);
            console.log(questionObject)
            console.log(distance)
            if(totalDistance<11){
                setPoints(1000);
              }else if(totalDistance>=11 && totalDistance<100){
                  setPoints(500);
              }else if(totalDistance>=100 && totalDistance<400){
                  setPoints(250)
              }else{
                  setPoints(100);
              }
              console.log(points)
        } catch (err) {
            console.log(err);
        }
    };

    // Call fetchData only when userLat or userLong changes
    if (userLat !== "" && userLong !== "") {
        fetchData();
    }
    
}, [userLat, userLong]);
 
 
    
   return (
   <>   
   <div className="z-12 relative h-2/5 w-2/5">
   <h2>Round 1</h2>
   <p>You earned {points} points!</p>
   <button className="bg-[#FBBC05]">Next</button>
   </div>
  
   </>
   )
}
export default ScoreCard;