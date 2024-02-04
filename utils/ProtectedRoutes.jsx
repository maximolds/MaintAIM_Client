import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoutes = () => {
 const [auth, setAuth] = useState({ token: localStorage.getItem("accessToken") });

 useEffect(() => {
    const validateAccessToken = async () => {
      try {
        const response = await axios.get("https://maintaimdb-044f7fcd2d92.herokuapp.com/login", {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        });
        setAuth({ token: response.data.token });
      } catch (err) {
        console.error(err);
      }
    };

    validateAccessToken();
 }, []);

 return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;