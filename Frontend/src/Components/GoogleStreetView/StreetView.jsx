import React from "react";
import Streetview from "react-google-streetview";
import { useSelector } from "react-redux";


function StreetViewMap() {
  const googleMapsKey = "AIzaSyASqzcdHWxbrOVChwFv3aYjOqjdjXV7OO0";
  const questionObject=useSelector((store)=>store.askedPlace)
  const StreetMapOptions = {
    position: { lat:28.579799484690042, lng:77.24733543672261 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };
  console.log("street View")
  return (
    <div>
      <div
        style={{
          width: "850px",
          height: "550px",
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