import React from "react";
import axios from "axios";

const GeoGuesserIndia=()=>{
    const apiKeyGeoLocationPlaces="4c485b950af04824bc65e1072070d8fe";

    const handleApiCall=()=>{
        axios.get(`https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=place:515e8b7159604d534059332aba3f289d3c40f00101f901152b2a0000000000c00208&limit=20&apiKey=${apiKeyGeoLocationPlaces}`)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <>
        <button onClick={handleApiCall}> Call the Api </button>
        </>
    )
}

export default GeoGuesserIndia;
