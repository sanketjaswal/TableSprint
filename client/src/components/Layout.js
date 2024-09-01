import React from "react";
import { Header } from "./header";
import { Navbar } from "./Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Category } from "../Pages/Category";
import { SubCategory } from "../Pages/SubCategory";
import { Products } from "../Pages/Products";
import "css/Layout.css";
import { AddCategory } from "Pages/AddCategory";
import { AddSubCategory } from "Pages/AddSubCategory";
import { AddProduct } from "Pages/AddProduct";
import { EditCategory } from "Pages/EditCategory";
import { EditSubCategory } from "Pages/EditSubCategory";
import { EditProduct } from "Pages/EditProduct";

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
            <Route path="/addCategory" element={<AddCategory />} />
            <Route path="/addSubCategory" element={<AddSubCategory />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/editCategory" element={<EditCategory />} />
            <Route path="/editSubCategory" element={<EditSubCategory />} />
            <Route path="/editProduct" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
