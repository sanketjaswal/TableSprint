import React from "react";

export const TextField = ({ label, id }) => {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input className="form-input" id={id} type="text" />
    </div>
  );
};
