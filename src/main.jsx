import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import Home from "./Pages/Home/Home";
import Root from "./MainLayout/Root/Root";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import AuthProvider from "./AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import PrivateRoute from "./Route/PrivateRoute/PrivateRoute";
import EventDetails from "./Route/PrivateRoute/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/event/:id',
        loader:()=>fetch('/events.json'),
        element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
