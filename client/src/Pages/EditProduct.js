import React from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link } from "react-router-dom";

export const AddProduct = () => {
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
        <form className="form">
          <div className="form-container">
            <DropdownField label="Category" id="editProductCategory" />
            <DropdownField label="SubCategory" id="editProductSubCategory" />
            <TextField label="Product Name" id="editProduct" />
          </div>

          {/* image field */}
          <div className="form-container">
            <DropdownField />
            <ImageField label="Upload Image" id="editProductImage" />
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
