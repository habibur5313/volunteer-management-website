import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

const useAxios = () => {
  const { handleSignOut } = useContext(AuthContext);
const navigate = useNavigate()
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        handleSignOut().then((res) => console.log("logout"));
        navigate('/login')
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
