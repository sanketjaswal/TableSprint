import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "utils/axios";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="header">
      <div className="logo">
        <img width="" height="35" src="/assets/Logo.png" alt="logo"></img>
        <h1>TableSprint</h1>
      </div>
      <img src="/assets/Profile.png" onClick={handleToggle} alt="Img NA"></img>
      <div className={`logout-holder ${isToggled ? "active" : ""}`}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
