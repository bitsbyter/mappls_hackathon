import React from 'react';

const MapWidget = () => {
  return (
    <div>
      <iframe
        src="https://realview.mappls.com/realview_widget/28.553302,77.258677?access_token=bdf8b2f1-5810-4bc6-8670-54fd77535888&minDistance=1&maxDistance=500&arrow=true&map=true&zoomControls=true&controls=true&mapWidth=200&mapHeight=200"
        style={{ width: '100%', height: '80vh' }}
        title="embed Example"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapWidget;
