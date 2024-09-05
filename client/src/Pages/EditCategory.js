import React, { useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { Link, useLocation } from "react-router-dom";
import { DropdownField } from "components/form/DropdownField";

export const EditCategory = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const [categoryName, setCategoryName] = useState(data.name);
  const [categorySequence, setCategorySequence] = useState(data.sequence);

  // console.log(data);

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
              <TextField
                label="Category Name"
                id="edit_category_name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              {/* number field */}
              <NumberField
                label="Category Sequence"
                id="edit_category_Sequence"
                value={categorySequence}
                onChange={(e) => setCategorySequence(e.target.value)}
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
