import DataContext from "context/context";
import React, { useContext } from "react";

export const DropdownField = ({ label, id, value, onchange }) => {
  const { categoryg, subCategory } = useContext(DataContext);

  let dropArr = [];

  if (label === "Status" || label === "status") {
    dropArr = ["Active", "Inactive"];
  } else if (label === "Category" || label === "Category Name") {
    for (let item in categoryg) {
      dropArr.push(categoryg[item].name);
    }
  } else if (label === "SubCategory" || label === "Sub Category") {
    for (let item in categoryg) {
      dropArr.push(subCategory[item].name);
    }
  }
  return (
    <div className="dropdown-container">
      <label htmlFor={id} className="dropdown-label">
        {label}
      </label>
      <select
        id={id}
        className="dropdown-select"
        value={value}
        onChange={onchange}
      >
        {dropArr.map((dropOption, index) => {
          return (
            <option key={index} value={dropOption}>
              {dropOption}
            </option>
          );
        })}
      </select>
    </div>
  );
};
