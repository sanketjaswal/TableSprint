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

export const AddSubCategory = () => {
  let navigate = useNavigate();

  const [subCategoryName, setSubCategoryName] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [subCategorySequence, setsubCategorySequence] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = {
        name: subCategoryName,
        category_id: categoryId,
        sequence: subCategorySequence,
      };

      console.log(formData);
      const response = await axiosInstance.post("/subcategory", formData);

      if (!response) {
        throw new Error("Failed to add sub category");
      }
      // navigate("/category");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

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
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-seperater">
            <div className="form-container">
              <DropdownField
                label="Category Name"
                id="add_subcat_category"
                value={categoryId}
                onChange={(e) => setcategoryId(Number(e.target.value))}
              />
              <TextField
                label="Sub Category Name"
                id="subcategory"
                value={subCategoryName}
                onChange={(e) => setSubCategoryName(e.target.value)}
              />
            </div>

            {/* image field */}
            <div className="form-container">
              <NumberField
                label="Sub Category Sequence"
                id="subSequence"
                value={subCategorySequence}
                onChange={(e) => setsubCategorySequence(e.target.value)}
              />
              {/* <ImageField label="Upload Image" id="image" /> */}
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
