import { useSelector } from "react-redux";
import Locations from "../../../Locations";
import axios from "axios";
import taj from '../../../assets/Images/RedFort1.jpg'

const QuestionImage=()=>{
    const userAnswer=useSelector((store)=>store.userAnswerCoords);
     const userLat=userAnswer.lat;
     const userLong=userAnswer.lng;
  var totalDistance;
    console.log(userAnswer)
    const size=(Locations.length)
    // const number=Math.floor(Math.random()*size+1);
    const number=4;
    const questionObject=Locations[number];
    const lat=questionObject.latitude;
    const long=questionObject.longitude;
    const baseUrl="http://apis.mappls.com/advancedmaps/v1";
    const MapplsApiKEy="03b8c5a2d87f2e38e4622cab60cfb7aa"
    axios.get(`${baseUrl}/${MapplsApiKEy}/distance_matrix/walking/${long},${lat};${userLong},${userLat}`)
    .then((response)=>{
        totalDistance=(response.data.results.distances[0][1])/1000;
    })
    .catch((err)=>{
        console.log(err);
    })

    return <>
      <img src={taj} style={{height:"300px",width:"300px"}}></img>
    </>

}

export default QuestionImage;