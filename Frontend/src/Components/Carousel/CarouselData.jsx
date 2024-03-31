import axios from "axios";
import { useSelector } from "react-redux";

const getData= async ()=>{
    const userCoords=useSelector((store)=>store.userCoords);
    const bearerToken="0e989555-2211-4d0a-98d8-bce369d7286f";
    const lat=userCoords.lat;
    const lng=userCoords.long
   const baseUrl="https://atlas.mappls.com/api/places/nearby/json"
   try{
    const response=await axios.get(`${baseUrl}`,{
        params:{
            keywords:"cafe",
            refLocation:`${lat},${lng}`,
            radius:5000
        },
        headers:{
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    console.log(response.data);
    return response.data;
   }catch(error){
    console.log(error)
   }
       return <>
       <div>
        <h1>Hello</h1>
       </div>
       </> 
}

export default getData;