import React, { useEffect } from "react";


const RoutingMap = () => {
  useEffect(() => {
    function renderMap() {
      const map = new mappls.Map("map", { center: [28.545, 77.545], zoom: 12 });
      MapmyIndia.direction({ map: map, start: "28.545,77.545", end: { label: 'India Gate, Delhi', geoposition: "1T182A" } });
    }
    renderMap();
  }, []);

  return (
    <div className="flex w-full h-full">
      <div id="map" className="items-center w-full h-full rounded-lg"></div>
    </div>
  );
}

export default RoutingMap;
