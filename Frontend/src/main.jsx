import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
// import store from './Store/store.js'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import App from './Components/App.jsx'

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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
</React.StrictMode>
);
