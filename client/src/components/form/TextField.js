import React from "react";

export const TextField = ({ label, id, value, onChange }) => {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        value={value}
        id={id}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};
