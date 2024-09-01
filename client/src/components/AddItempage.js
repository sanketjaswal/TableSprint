import React from "react";
import "css/AddItemPage.css";
import { TextField } from "./form/TextField";
import { NumberField } from "./form/NumberField";
import { ImageField } from "./form/ImageField";
import { SaveButton } from "./form/SaveButton";
import { CancelButton } from "./form/CancelButton";

export const AddItemPage = ({ name, icon }) => {
  return (
    <div className="add-item-page">
      <div className="add-page-name">
        <img width="28" height="28" src={icon} alt={name} />
        <p>Add {name}</p>
      </div>

      <div className="form-holder">
        <form className="form">
          <div className="form-container">
            {/* Text field */}
            <TextField label="Category Name" id="category" />

            {/* number field */}
            <NumberField label="Category Sequence" id="Sequence" />
          </div>

          {/* image field */}
          <div className="form-container">
            <ImageField label="Upload Image" id="image" />
          </div>

          {/* buttons */}
          <div className="form-button-container">
            <CancelButton />
            <SaveButton />
          </div>
        </form>
      </div>
    </div>
  );
};
