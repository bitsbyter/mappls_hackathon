import React, { useEffect, useState } from "react";
import Streetview from "react-google-streetview";
import { useSelector } from "react-redux";

function StreetViewMap() {
  const googleMapsKey = "AIzaSyASqzcdHWxbrOVChwFv3aYjOqjdjXV7OO0";
   const questionObject=useSelector((store)=>store.askedPlace);
  const lat=questionObject.latitude;
  const lng=questionObject.longitude;
  console.log(lat,lng)
  const StreetMapOptions = {
    position: { lat:parseFloat(lat), lng:parseFloat(lng) },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };
  console.log("street View")
  return (
    <div>
      <div
        style={{
          width: "1200px",
          height: "750px",
          backgroundColor: "#cccccc",
        }}
      >
        <Streetview
          apiKey={googleMapsKey}
          streetViewPanoramaOptions={StreetMapOptions}
        />
      </div>
    </div>
  );
}
export default StreetViewMap;