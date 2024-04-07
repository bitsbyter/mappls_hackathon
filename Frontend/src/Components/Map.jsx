import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnswerActions } from "../Store/userAnswerSlice";
import { useDispatch } from "react-redux";
import axios from "axios"

const Map=()=>{
  const [answerCoords,setAnswerCoords]=useState({lat:"",lng:""});
  const dispatch=useDispatch();
  const baseUrlReverseGeo="https://apis.mappls.com/advancedmaps/v1"
  const ApiKey='03b8c5a2d87f2e38e4622cab60cfb7aa'
  useEffect(() => {
    function renderMap() {
      const map = new mappls.Map('map', {zoom:3});
      map.addListener("click", function(e) {   
        var marker = new mappls.Marker({
          map: map,
          position: {"lat":e.lngLat.lat,"lng":e.lngLat.lng}
          });
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
        var address;
        axios.get(`${baseUrlReverseGeo}/${ApiKey}/rev_geocode`,{
          params:{
            lat:answerCoords.lat,
            lng:answerCoords.lng
          }
        })
        .then((response)=>{
         address=response.data.results[0].formatted_address;
         dispatch(AnswerActions.setUserAnswers({answerCoords,address}));
        })
        .catch((error)=>{
          console.log(error)
        })
      } catch(err) {
        console.log(err);
      }
    }
  }, [answerCoords, dispatch]);
  
  return <>

  {/* <div style={{alignItems:"center",display:"flex",justifyContent:"center",padding:'2px',width:"30%"}}>
    <div id="map" style={{height:"500px",width:"100%",alignItems:"center",border:"2px solid white",borderRadius:"20px"}}></div>
  </div> */}


    <div className="flex w-full h-full">
      <div id="map" className="items-center w-full h-full rounded-lg"></div>
    </div>  
  </>

}

export default Map;