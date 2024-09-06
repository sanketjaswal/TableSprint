import React, { useEffect, useState } from "react";
import "css/Form.css";
import { TextField } from "../components/form/TextField";
import { NumberField } from "../components/form/NumberField";
import { ImageField } from "../components/form/ImageField";
import { SaveButton } from "../components/form/SaveButton";
import { CancelButton } from "../components/form/CancelButton";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "utils/axios";

export const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categorySequence, setCategorySequence] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = {
        name: categoryName,
        sequence: categorySequence,
      };

      console.log(formData);
      const response = await axiosInstance.post("/category", formData);

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
          <p>Add Category</p>
        </div>
      </Link>

      <div className="form-holder">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-separator">
            <div className="form-container">
              {/* Text field */}
              <TextField
                label="Category Name"
                id="add_category"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              {/* Number field */}
              <NumberField
                label="Category Sequence"
                id="add_Sequence"
                value={categorySequence}
                onChange={(e) => setCategorySequence(e.target.value)}
              />
            </div>

            {/* Image field */}
            {/* <div className="form-container">
              <ImageField
                label="Upload Image"
                id="add_cat_image"
                value={categoryImage}
                onChange={(e) => setCategoryImage(e.target.value)}
              />
            </div> */}
          </div>

          {/* Buttons */}
          <div className="form-button-container">
            <CancelButton link="/category" />
            <SaveButton />
          </div>
        </form>
      </div>
    </div>
  );
};
