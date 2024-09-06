import React, { useContext, useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DropdownField } from "components/form/DropdownField";
import axiosInstance from "utils/axios";

export const EditCategory = () => {
  const location = useLocation();
  const { data } = location.state || {};

  let navigate = useNavigate();

  const [categoryName, setCategoryName] = useState(data.name);
  const [categorySequence, setCategorySequence] = useState(data.sequence);

  const [categoryStatus, setCategoryStatus] = useState(data.status);

  console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = {
        name: categoryName,
        sequence: categorySequence,
        status: categoryStatus,
        //  image: categoryImage
      };

      console.log(formData);
      const response = await axiosInstance.put(
        "/category/" + data.id,
        formData
      );

      if (!response) {
        throw new Error("Failed to add category");
      }
      navigate("/category");
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

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
        <form className="form" onSubmit={handleSubmit}>
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
              <DropdownField
                label="Status"
                id="edit_subcategory_Status"
                value={categoryStatus}
                onChange={(e) => setCategoryStatus(e.target.value)}
              />
              {/* <ImageField label="Upload Image" id="edit_category_image" /> */}
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
