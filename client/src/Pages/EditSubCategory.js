import React, { useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { DropdownField } from "components/form/DropdownField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "utils/axios";

export const EditSubCategory = () => {
  const location = useLocation();
  const { data } = location.state || {};

  let navigate = useNavigate();

  const [subCategoryName, setSubCategoryName] = useState(data.name);
  const [subCategorySequence, setSubCategorySequence] = useState(data.sequence);
  const [categoryId, setCategoryId] = useState("");

  const [subCategoryStatus, setSubCategoryStatus] = useState(data.status);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = {
        name: subCategoryName,
        category_id: categoryId,
        sequence: subCategorySequence,
        status: subCategoryStatus,
      };

      // console.log(formData);
      const response = await axiosInstance.put(
        "/subcategory/" + data.id,
        formData
      );

      if (!response) {
        throw new Error("Failed to add sub category");
      }
      navigate("/subcategory");
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
          <p>Edit Sub Category</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-seperater">
            <div className="form-container">
              <DropdownField
                label="Category"
                id="editSubcat_Category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
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
                value={subCategoryStatus}
                onChange={(e) => setSubCategoryStatus(Number(e.target.value))}
              />
            </div>
            {/* <div className="form-container">
              <ImageField label="Upload Image" id="editSubcat_image" />
            </div> */}
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
