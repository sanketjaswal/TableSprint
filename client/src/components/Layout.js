import React from "react";
import { Header } from "./header";
import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Category } from "../Pages/Category";
import { SubCategory } from "../Pages/SubCategory";
import { Products } from "../Pages/Products";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="below-header">
        <Navbar />
        <div className="work-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory" element={<SubCategory />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
