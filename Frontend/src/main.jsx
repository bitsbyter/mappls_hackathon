import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
// import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Components/Login-Register/Login.jsx';
import App from './Components/App.jsx'
import Options from './Components/Options/Options.jsx'
import Geoguesser from './Components/Options/Geoguesser/Geoguesser.jsx'
import Nearme from './Components/Options/Nearme.jsx'
import ScoreCard from './Components/Options/Geoguesser/ScoreCard.jsx';
import StreetViewMap from './Components/GoogleStreetView/StreetView.jsx';
import './index.css'
import store from './Store/store.js';
import Carousel from './Components/Carousel/Carousel.jsx';
import RoutingMap from './Components/RoutingMap.jsx';
import MapWidget from './Components/GoogleStreetView/MapplsLiveWidget.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/options",
    element:<Options/>
  },
  {
    path:"/geoguesser",
    element:<Geoguesser/>
  },
  {
    path:"/nearme",
    element:<Nearme/>
  },
  {
    path:"/ScoreCard",
    element:<ScoreCard/>
  },
  {
    path:"/streetView",
    element:<StreetViewMap/>
  },
  {
    path:"/carousel",
    element : <Carousel/>
  },
  {
   path:"/routingMap",
   element:<RoutingMap/>
  },
  {
    path:"/mapWidget",
    element:<MapWidget/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
