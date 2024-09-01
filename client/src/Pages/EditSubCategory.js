import React from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link } from "react-router-dom";

export const EditSubCategory = () => {
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
          <p>Edit Sub Category</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form">
          <div className="form-seperater">
            <div className="form-container">
              <DropdownField label="Category" id="editSubcat_Category" />{" "}
              <TextField label="Sub Category Name" id="editSubcat_Name" />
            </div>

            {/* image field */}
            <div className="form-container">
              <NumberField
                label="Sub Category Sequence"
                id="editSubcat_Sequence"
              />
              <DropdownField label="Status" id="edit_category_Status" />
            </div>
            <div className="form-container">
              <ImageField label="Upload Image" id="editSubcat_image" />
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
