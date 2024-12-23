import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Context/AuthProvider";
import MainLayout from "./Layout/MainLayout";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Home from "./Pages/Home/Home";
import AddVolunteerNeedPost from "./Pages/AddPost/AddVolunteerNeedPost";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllVolunteerNeedPost from "./Pages/AllVolunteerNeedPost/AllVolunteerNeedPost";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVolunteer",
        element: <AllVolunteerNeedPost></AllVolunteerNeedPost>,
        loader: () => axios.get(`${import.meta.env.VITE_server}/addVolunteerNeedPost`)
      },

      {
        path: "/addVolunteer",
        element: <PrivateRoute><AddVolunteerNeedPost></AddVolunteerNeedPost></PrivateRoute>,
      },
      {
        path: "/myPosts",
        element: "myPosts",
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
