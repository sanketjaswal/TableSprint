import React from "react";

export const NumberField = ({ label, id, value, onChange }) => {
  const changeValue = (amount) => {
    let newValue = parseInt(value, 10) || 1;
    newValue = Math.max(1, Math.min(100, newValue + amount));
    onChange({ target: { value: newValue } });
  };

  const decreaseValue = () => {
    changeValue(-1);
  };

  const increaseValue = () => {
    changeValue(1);
  };

  return (
    <div className="number-field">
      <div className="number-field-holder">
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
        <input
          type="number"
          className="number-input"
          id={id}
          value={value}
          onChange={onChange}
          min="0"
          max="100"
        />
      </div>
      <div className="number-btns-holder">
        <button className="decrease-btn" type="button" onClick={increaseValue}>
          ˄
        </button>
        <button className="increase-btn" type="button" onClick={decreaseValue}>
          ˅
        </button>
      </div>
    </div>
  );
};
