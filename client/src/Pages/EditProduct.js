import React, { useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link, useLocation } from "react-router-dom";

export const EditProduct = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const [productName, setProductName] = useState(data.name);
  const [productSequence, setProductSequence] = useState(data.sequence);
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
          <div className="form-seperater">
            <div className="form-container">
              <DropdownField label="Category" id="editProductCategory" />
              <DropdownField label="SubCategory" id="editProductSubCategory" />
            </div>

            {/* image field */}
            <div className="form-container">
              <TextField
                label="Product Name"
                id="editProduct"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <DropdownField label="Status" id="editProductStatus" />
            </div>
            <div className="form-container">
              <ImageField label="Upload Image" id="editProductImage" />
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
