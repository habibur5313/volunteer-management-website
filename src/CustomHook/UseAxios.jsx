import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_server}/`,
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
        handleSignOut()
        navigate('/login')
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;
