import React, { useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link, useLocation } from "react-router-dom";

export const EditSubCategory = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const [subCategoryName, setSubCategoryName] = useState(data.name);
  const [subCategorySequence, setSubCategorySequence] = useState(data.sequence);
  const [categoryName, setCategoryName] = useState("");

  const [categoryStatus, setCategoryStatus] = useState(data.status);

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
              <DropdownField
                label="Category"
                id="editSubcat_Category"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />{" "}
              <TextField
                label="Sub Category Name"
                id="editSubcat_Name"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
              />
            </div>

            {/* image field */}
            <div className="form-container">
              <NumberField
                label="Sub Category Sequence"
                id="editSubcat_Sequence"
                value={subCategorySequence}
                onChange={(e) => setSubCategorySequence(e.target.value)}
              />
              <DropdownField
                label="Status"
                id="edit_category_Status"
                value={categoryStatus}
                onChange={(e) => setCategoryStatus(e.target.value)}
              />
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
