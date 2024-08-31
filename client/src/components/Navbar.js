import React from "react";

import "./css/dashboard.css";
import { NavButton } from "./NavButton";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="sidebar">
        <NavButton
          link="/"
          name="Dashboard"
          icon="/assets/Home.png"
          alt="Home"
        />
        <NavButton
          link="/category"
          name="Category"
          icon="/assets/Category.png"
          alt="Category"
        />
        <NavButton
          link="/subcategory"
          name="Subcategory"
          icon="/assets/SubCategory.png"
          alt="SubCategory"
        />
        <NavButton
          link="/products"
          name="Products"
          icon="/assets/Products.png"
          alt="Products"
        />
      </div>
    </div>
  );
};
