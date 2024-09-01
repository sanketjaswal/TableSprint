import React from "react";

export const ImageField = ({ label, id }) => {
  return (
    <div className="form-field image-holder">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input className="form-input" id={id} type="file" />
      <img
        className="form-image"
        src=""
        width="30"
        height="30"
        alt="selected-img"
      />
    </div>
  );
};
