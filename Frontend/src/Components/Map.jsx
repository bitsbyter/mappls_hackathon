import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnswerActions } from "../Store/userAnswerSlice";
import { useDispatch } from "react-redux";
import { CoordActions } from "../Store/userCoordsSlice";

const Map=()=>{
  const [answerCoords,setAnswerCoords]=useState({lat:"",lng:""});
  const dispatch=useDispatch();
  const userCoords=useSelector((store)=>store.userCoords);
  const answer=useSelector((store)=>store.userAnswer);  
  useEffect(() => {
    function renderMap() {
      const map = new mappls.Map('map', {});
      map.addListener("click", function(e) {   
        const answerLat = e.lngLat.lat;
        const answerLng = e.lngLat.lng;
        setAnswerCoords({ lat: answerLat, lng: answerLng });
      });
    }
    
    renderMap();
  }, []);

  useEffect(() => {
    if (answerCoords.lat !== "" && answerCoords.lng !== "") {
      try {
        dispatch(CoordActions.setUserCoords(answerCoords));
        dispatch(AnswerActions.setUserAnswers(answerCoords));
        // console.log(answerCoords)
      } catch(err) {
        console.log(err);
      }
    }
  }, [answerCoords, dispatch]);
  
  return <>
  <div style={{alignItems:"center",display:"flex",justifyContent:"center",padding:'2px'}}>
    <div id="map" style={{height:"500px",width:"60%",alignItems:"center",border:"2px solid white",borderRadius:"20px"}}></div>
  </div>
      
  </>

}

export default Map;