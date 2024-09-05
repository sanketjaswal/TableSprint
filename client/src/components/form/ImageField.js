import React, { useEffect } from "react";

export const ImageField = ({ label, id, value, onChange }) => {
  return (
    <div className="form-field image-holder">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        value={value}
        onChange={onChange}
        id={id}
        type="file"
      />
      <img
        className="form-image"
        src={value}
        width="30"
        height="30"
        alt="selected-img"
      />
    </div>
  );
};
