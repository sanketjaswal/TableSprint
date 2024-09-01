import React from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { Link } from "react-router-dom";

export const AddCategory = () => {
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
          <p>Add Category</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form">
          <div className="form-seperater">
            <div className="form-container">
              {/* Text field */}
              <TextField label="Category Name" id="add_category" />

              {/* number field */}
              <NumberField label="Category Sequence" id="add_Sequence" />
            </div>

            {/* image field */}
            <div className="form-container">
              <ImageField label="Upload Image" id="add_cat_image" />
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
