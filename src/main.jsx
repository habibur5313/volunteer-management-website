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
import VolunteerCardDetails from "./Pages/AllVolunteerNeedPost/VolunteerCardDetails";
import MyPost from "./Pages/MyPost/MyPost";
import MyVolunteerNeedPosts from "./Pages/MyVolunteerNeedPosts/MyVolunteerNeedPosts";
import MyPostUpdate from "./Pages/MyVolunteerNeedPosts/MyPostUpdate";

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
        path: "/allVolunteer/:id",
        element: <PrivateRoute><VolunteerCardDetails></VolunteerCardDetails></PrivateRoute>,
        loader: ({params}) => axios.get(`${import.meta.env.VITE_server}/addVolunteerNeedPost/${params.id}`)
      },

      {
        path: "/addVolunteer",
        element: <PrivateRoute><AddVolunteerNeedPost></AddVolunteerNeedPost></PrivateRoute>,
      },
      {
        path: "/myVolunteerNeedPosts",
        element: <PrivateRoute><MyVolunteerNeedPosts></MyVolunteerNeedPosts></PrivateRoute>,
      },
      {
        path: "/posts/update/:id",
        element: <PrivateRoute><MyPostUpdate></MyPostUpdate></PrivateRoute>,
        loader: ({params}) => axios.get(`${import.meta.env.VITE_server}/addVolunteerNeedPost/${params.id}`) 
      },
      {
        path: "/myPosts",
        element: <MyPost></MyPost>,
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