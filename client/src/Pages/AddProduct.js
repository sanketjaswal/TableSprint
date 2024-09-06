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
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setsubCategoryName] = useState("");

  let navigate = useNavigate();

  // const showchange = (e) => {
  //   console.log("drop data set : ", e.target.value);
  //   setsubCategoryName(e.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = {
        name: categoryName,
        // category_id:,
        // sequence: categorySequence,
      };

      console.log(formData);
      const response = await axiosInstance.post("/category", formData);

      if (!response.ok) {
        throw new Error("Failed to add category");
      }
      navigate("/category");
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
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <DropdownField
                label="Sub Category"
                id="addProductSubCategory"
                value={subCategoryName}
                // onchange={(e) => showchange(e)}
                onChange={(e) => setsubCategoryName(e.target.value)}
              />
            </div>

            {/* image field */}
            <div className="form-container">
              <TextField label="Product Name" id="addProduct" />
              <ImageField label="Upload Image" id="addProductImage" />
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
