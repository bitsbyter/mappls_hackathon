import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
// import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Components/Login-Register/Login.jsx';
import Register from './Components/Login-Register/Register.jsx';
import App from './Components/App.jsx'
import Options from './Components/Options/Options.jsx'
import Geoguesser from './Components/Options/Geoguesser.jsx'
import Nearme from './Components/Options/Nearme.jsx'
import Contribute from './Components/Options/Contribute.jsx'

import './index.css'
import store from './Store/store.js';

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
    path:"/register",
    element:<Register/>
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
    path:"/contribute",
    element:<Contribute/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
</React.StrictMode>
);
