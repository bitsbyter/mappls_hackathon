import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
// import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Components/Login-Register/Login.jsx';
import Register from './Components/Login-Register/Register.jsx';
import App from './Components/App.jsx'
import Options from './Components/Options/Options.jsx'

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
     
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
</React.StrictMode>
);
