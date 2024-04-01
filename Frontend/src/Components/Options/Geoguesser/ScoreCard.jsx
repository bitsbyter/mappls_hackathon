import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import Taj from "../../../assets/Images/QutubMinar1.jpg"
import axios from "axios";
import Locations from "../../../Locations";
import { QuestionAction } from "../../../Store/AskedPlaceSlice";
const ScoreCard=()=>{
    const dispatch=useDispatch();
    const userAnswer=useSelector((store)=>store.userAnswerCoords);
    console.log(userAnswer)
    const userLat=userAnswer.answerCoords.lat;
    const userLong=userAnswer.answerCoords.lng;
   const [totalDistance,setDistance]=useState("");
  const [points,setPoints]=useState(0);
   useEffect(() => {
    const fetchData = async () => {
        const size = Locations.length;
        const number = Math.floor(Math.random() * size + 1);
        const questionObject = Locations[number];
        dispatch(QuestionAction.setQuestionedPlace(questionObject));
        const lat = questionObject.latitude;
        const long = questionObject.longitude;
        const baseUrl = "http://apis.mappls.com/advancedmaps/v1";
        const MapplsApiKEy = "b977a114567d823ff35753212dec68cb";

        try {
            const response = await axios.get(`${baseUrl}/${MapplsApiKEy}/distance_matrix/walking/${long},${lat};${userLong},${userLat}`);
            const distance = response.data.results.distances[0][1] / 1000;
            setDistance(distance);
            console.log(questionObject)
        } catch (err) {
            console.log(err);
        }
    };

    // Call fetchData only when userLat or userLong changes
    if (userLat !== "" && userLong !== "") {
        fetchData();
    }
    if(totalDistance<11){
      setPoints(1000);
    }else if(points>=11 && points<100){
        setPoints(500);
    }else if(points>=100 && points<400){
        setPoints(250)
    }else{
        setPoints(100);
    }
}, [userLat, userLong]);
 
 
    
   return <>
   <div className="flex justify-center">
   <div className="border-4 p-5 rounded-lg my-40 w-4/5 flex flex-row">
     <img src={Taj} ></img>
     <div className="flex flex-col ">
        
     <h3>The Distance U guessed was {totalDistance}km away from the Location</h3>
     <h3>The Guessed Location according to you was: {userAnswer.address}</h3>
     </div>
     </div>

   </div>
   
   </>

}
export default ScoreCard;