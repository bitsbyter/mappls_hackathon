import React, { useEffect } from "react";
import BackgroundImage from '../assets/Images/background.png'
import home from '../assets/Images/home.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RoutingMap = () => {
  const nearByPlace=useSelector((store)=>store.nearByPlace)
  const userCoords=useSelector((store)=>store.userCoords)
  useEffect(() => {
    function initializeMap() {
      const map = new mappls.Map("map", { center: [userCoords.lat,userCoords.long], zoom: 12 });
      return map;
    }

    function initializeDirectionPlugin(map) {
      map.addListener('load', function () {
        const direction_option = {
          map: map,
          divWidth: '350px',  
          divHeight:'400px',
          isDraggable: false,
          end: { label: 'India Gate', geoposition: `${nearByPlace.eloc}` },
          Profile: ['driving', 'biking', 'walking']
        }
        mappls.direction(direction_option, function (data) {
          console.log(data);
        });
      });
    }

    try {
      const map = initializeMap();
      initializeDirectionPlugin(map);
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  }, []);

  return (
    <>
      <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
        <img className='w-full h-full' src={BackgroundImage} alt="" />
      </div>   

      <Link to={'../options'} className='absolute top-0 left-0 w-8 h-8 m-4'><img src={home} alt="" /></Link>  

      <div className="flex w-screen h-screen justify-center items-center">
        <div className="w-3/4 lg:w-3/5 h-5/6 flex flex-col bg-black justify-center items-center rounded-3xl">
          <div className="w-11/12 h-1/12 flex justify-center items-center">
            <p className="monseratt text-[#FBBC05]">Click on the map to explore the locations</p>
          </div>
          <div id="map" className="items-center w-11/12 h-5/6 lg:w-5/6 rounded-lg p-2"></div>
        </div>
      </div>
    </>
  );
}

export default RoutingMap;
