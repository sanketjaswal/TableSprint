import React, { useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link, useLocation } from "react-router-dom";
import axiosInstance from "utils/axios";

export const EditProduct = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const [productName, setProductName] = useState(data.name);
  const [categoryId, setCategoryId] = useState(data.category_id);

  const [subCategoryId, setsubCategoryId] = useState(data.subcategory_id);

  const [productStatus, setProductStatus] = useState(data.status);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = {
        name: productName,
        category_id: categoryId,
        subCategory_id: subCategoryId,
        status: productStatus,
      };

      console.log(formData);
      const response = await axiosInstance.put("/product/" + data.id, formData);

      if (!response) {
        throw new Error("Failed to add sub category");
      }
      // navigate("/category");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  return (
    <div className="add-item-page">
      <Link to="/products">
        <div className="add-page-name">
          <img
            width="28"
            height="28"
            src="/assets/backArrow.png"
            alt="Category"
          />
          <p>Edit Product</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-seperater">
            <div className="form-container">
              <DropdownField
                label="Category"
                id="editProductCategory"
                value={categoryId}
                onChange={(e) => setCategoryId(Number(e.target.value))}
              />
              <DropdownField
                label="SubCategory"
                id="editProductSubCategory"
                value={subCategoryId}
                onChange={(e) => setsubCategoryId(Number(e.target.value))}
              />
            </div>

            {/* image field */}
            <div className="form-container">
              <TextField
                label="Product Name"
                id="editProduct"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <DropdownField
                label="Status"
                id="editProductStatus"
                value={productStatus}
                onChange={(e) => setProductStatus(e.target.value)}
              />
            </div>
            <div className="form-container">
              {/* <ImageField label="Upload Image" id="editProductImage" /> */}
            </div>
          </div>
          {/* buttons */}
          <div className="form-button-container">
            <CancelButton link="/products" />
            <SaveButton />
          </div>
        </form>
      </div>
    </div>
  );
};
