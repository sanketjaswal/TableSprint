import React, { useState, useEffect } from "react";
import "./css/header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img width="40" height="30" src="/assets/Logo.png" alt="logo"></img>
        <h1>TableSprint</h1>
      </div>
      <img src="/assets/Profile.png" alt="Img NA"></img>
    </div>
  );
};
