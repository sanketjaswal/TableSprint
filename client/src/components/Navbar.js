import React, { useState, useEffect } from "react";

import "./css/dashboard.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="sidebar">
        {/* Home */}
        <Link to="/">
          <div class="box">
            <div class="box_head">
              <img width="25" height="25" src="/assets/Home.png" alt="Home" />
              <p>DashBoard</p>
              <h6>►</h6>
            </div>
          </div>
        </Link>

        {/* category */}
        <Link to="/category">
          <div class="box">
            <div class="box_head" id="events">
              <img
                width="25"
                height="25"
                src="/assets/Category.png"
                alt="category"
              />
              <p>Category</p>
              <h6>►</h6>
            </div>
          </div>
        </Link>
        {/* Sub category */}
        <Link to="/subcategory">
          <div class="box">
            <div class="box_head" id="events">
              <img
                width="25"
                height="25"
                src="/assets/SubCategory.png"
                alt="Sub category"
              />
              <p>Sub Category</p>
              <h6>►</h6>
            </div>
          </div>
        </Link>
        {/* Products */}
        <div class="box">
          <div class="box_head" id="events">
            <img
              width="25"
              height="25"
              src="/assets/Products.png"
              alt="Products"
            />
            <p>Products</p>
            <h6>►</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
