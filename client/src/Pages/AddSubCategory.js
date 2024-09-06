import React, { useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link } from "react-router-dom";

export const AddSubCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  return (
    <div className="add-item-page">
      <Link to="/subcategory">
        <div className="add-page-name">
          <img
            width="28"
            height="28"
            src="/assets/backArrow.png"
            alt="Category"
          />
          <p>Add Sub Category</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form">
          <div className="form-seperater">
            <div className="form-container">
              <DropdownField
                label="Category Name"
                id="add_subcat_category"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <TextField label="Sub Category Name" id="subcategory" />
            </div>

            {/* image field */}
            <div className="form-container">
              <NumberField label="Sub Category Sequence" id="subSequence" />
              <ImageField label="Upload Image" id="image" />
            </div>
          </div>
          {/* buttons */}
          <div className="form-button-container">
            <CancelButton link="/subcategory" />
            <SaveButton />
          </div>
        </form>
      </div>
    </div>
  );
};
