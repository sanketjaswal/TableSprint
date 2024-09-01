import React from "react";

import "css/dashboard.css";
import "css/Navbar.css";
import { NavButton } from "./NavButton";
export const Navbar = () => {
  return (
    <div className="navbar">
      <NavButton
        link="/"
        name="Dashboard"
        icon="/assets/Home.png"
        alt="Home"
        arrow="►"
      />
      <NavButton
        link="/category"
        name="Category"
        icon="/assets/Category.png"
        alt="Category"
        arrow="►"
      />
      <NavButton
        link="/subcategory"
        name="Subcategory"
        icon="/assets/SubCategory.png"
        alt="SubCategory"
        arrow="►"
      />
      <NavButton
        link="/products"
        name="Products"
        icon="/assets/Products.png"
        alt="Products"
        arrow="►"
      />
    </div>
  );
};
