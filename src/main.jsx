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
import PrivateRoute from "./Route/PrivateRoute/PrivateRoute";
import EventDetails from "./Route/PrivateRoute/EventDetails";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/gallery";

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
        path:'/gallery',
        element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
      },
      {
        path:'/event/:id',
        loader:()=>fetch('/events.json'),
        element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>
        
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
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
