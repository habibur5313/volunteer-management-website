import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Context/AuthProvider";
import MainLayout from "./Layout/MainLayout";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{
      path: '/',
      element: 'home'
    },
{
      path: '/allVolunteer',
      element: 'allVolunteer'
    },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
  ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
