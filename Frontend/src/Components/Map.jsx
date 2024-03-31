import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnswerActions } from "../Store/userAnswerSlice";
import { useDispatch } from "react-redux";


const Map=()=>{
  const [answerCoords,setAnswerCoords]=useState({lat:"",lng:""});
  const dispatch=useDispatch();
 
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
        dispatch(AnswerActions.setUserAnswers(answerCoords));
      } catch(err) {
        console.log(err);
      }
    }
  }, [answerCoords, dispatch]);
  
  return <>
  {/* <div style={{alignItems:"center",display:"flex",justifyContent:"center",padding:'2px'}}>
    <div id="map" style={{height:"500px",width:"60%",alignItems:"center",border:"2px solid white",borderRadius:"20px"}}></div>
  </div> */}

    <div className="flex items-center justify-center h-full w-full">
      <div id="map" className="items-center w-full h-full rounded-lg"></div>
    </div>
      
  </>

}

export default Map;