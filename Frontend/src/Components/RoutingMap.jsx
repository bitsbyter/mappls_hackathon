import React, { useEffect } from "react";

const RoutingMap = () => {
  useEffect(() => {
    function initializeMap() {
      const map = new mappls.Map("map", { center: [28.545, 77.545], zoom: 12 });
      return map;
    }

    function initializeDirectionPlugin(map) {
      map.addListener('load', function () {
        const direction_option = {
          map: map,
          divWidth: '350px',
          divHeight:'400px',
          isDraggable: false,
          end: { label: 'India Gate', geoposition: "28.612964,77.229463" },
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
    <div className="flex w-full h-full p-20">
      <div id="map" className="items-center w-full h-full rounded-lg"></div>
    </div>
  );
}

export default RoutingMap;
