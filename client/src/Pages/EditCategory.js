import React from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { Link } from "react-router-dom";
import { DropdownField } from "components/form/DropdownField";

export const EditCategory = () => {
  return (
    <div className="add-item-page">
      <Link to="/category">
        <div className="add-page-name">
          <img
            width="28"
            height="28"
            src="/assets/backArrow.png"
            alt="Category"
          />
          <p>Edit Category</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form">
          <div className="form-seperater">
            <div className="form-container">
              {/* Text field */}
              <TextField label="Category Name" id="edit_category_name" />

              {/* number field */}
              <NumberField
                label="Category Sequence"
                id="edit_category_Sequence"
              />
            </div>

            {/* image field */}
            <div className="form-container">
              <DropdownField label="Status" id="edit_subcategory_Status" />
              <ImageField label="Upload Image" id="edit_category_image" />
            </div>
          </div>

          {/* buttons */}
          <div className="form-button-container">
            <CancelButton link="/category" />
            <SaveButton />
          </div>
        </form>
      </div>
    </div>
  );
};
