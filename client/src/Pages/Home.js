import React from "react";
import "css/Home.css";
import { AddCategory } from "./AddCategory";
import { AddSubCategory } from "./AddSubCategory";

export const Home = () => {
  return (
    <div className="home">
      <img src="/assets/Home_img.png" alt="Home-img"></img>
      <h1>Welcome to TableSprint admin</h1>
      {/* <AddCategory /> */}
      {/* <AddSubCategory /> */}
    </div>
  );
};
