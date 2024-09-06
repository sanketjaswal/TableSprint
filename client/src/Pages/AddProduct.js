import React, { useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "utils/axios";

export const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [subCategoryId, setsubCategoryId] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = {
        name: productName,
        category_id: categoryId,
        subcategory_id: subCategoryId,
        // sequence: categorySequence,
      };

      console.log(formData);
      const response = await axiosInstance.post("/product", formData);

      if (!response) {
        throw new Error("Failed to add product");
      }
      navigate("/category");
    } catch (error) {
      console.error("Error adding product:", error);
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
          <p>Add Product</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-seperater">
            <div className="form-container">
              <DropdownField
                label="Category"
                id="addProductCategory"
                value={categoryId}
                onChange={(e) => setCategoryId(Number(e.target.value))}
              />
              <DropdownField
                label="Sub Category"
                id="addProductSubCategory"
                value={subCategoryId}
                // onchange={(e) => showchange(e)}
                onChange={(e) => setsubCategoryId(Number(e.target.value))}
              />
            </div>

            {/* image field */}
            <div className="form-container">
              <TextField
                label="Product Name"
                id="addProduct"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              {/* <ImageField label="Upload Image" id="addProductImage" /> */}
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
