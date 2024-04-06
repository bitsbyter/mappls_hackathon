import { useEffect } from "react";
import { useState } from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const ScoreCard=()=>{
    const questionObject=useSelector((store)=>store.askedPlace)
    const userAnswer=useSelector((store)=>store.userAnswerCoords);
     const activeUser=useSelector((store)=>store.activeUser);
    const userLat=userAnswer.answerCoords.lat;
    const userLong=userAnswer.answerCoords.lng;
    
    const [points,setPoints]=useState(null);
   useEffect(() => {
    const fetchData = async () => {
        const long=questionObject.longitude;
        const lat=questionObject.latitude;        
        const baseUrl = "https://apis.mappls.com/advancedmaps/v1";
        const MapplsApiKEy = "b977a114567d823ff35753212dec68cb";

        try {
            const response = await axios.get(`${baseUrl}/${MapplsApiKEy}/distance_matrix/walking/${long},${lat};${userLong},${userLat}`);
            const distance = response.data.results.distances[0][1]/1000;
            console.log(questionObject)
            console.log(distance)
             if(distance<11){
                setPoints(1000);
              }else if(distance>=11 && distance<100){
                  setPoints(500);
              }else if(distance>=100 && distance<400){
                  setPoints(250)
              }else{
                  setPoints(100);
              }
              console.log(points)
              const result=await axios.post("http://localhost:3000/ScoreCard",{
                points:points,
                user:activeUser.email,
              })
              console.log(result.data)
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
    <div className="z-20 absolute top-1/3 h-44 w-96 flex flex-col justify-between items-center border bg-black rounded-xl">
        <p className="text-[#FBBC05] monseratt text-2xl">Round 1</p>
        <p className="text-xl monseratt">You earned {points} points!</p>

        <div className="w-60 h-3 bg-gray-200 rounded-2xl overflow-hidden">
          <div className="h-full bg-[#FBBC05]" style={{ width: `${points/10}%` , borderRadius: '100' }} />
        </div>

        <Link to={'/options'} className="bg-[#FBBC05] w-24 h-8 flex rounded-xl m-2 justify-center items-center monseratt">Next</Link>
    </div>
   </>
   )
}
export default ScoreCard;