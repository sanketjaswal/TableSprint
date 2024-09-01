import React from "react";

export const ImageField = ({ label, id }) => {
  return (
    <>
      <div className="form-field">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <input className="form-input" id={id} type="file" />
      </div>
      <div className="form-field">
        <img src="" width="30" height="30" alt="selected-img" />
      </div>
    </>
  );
};
