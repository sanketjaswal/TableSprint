import DataContext from "context/context";
import React, { useContext } from "react";

export const DropdownField = ({ label, id, value, onchange }) => {
  const { categoryg, subCategory } = useContext(DataContext);

  let dropArr = [];

  if (label === "Status" || label === "status") {
    dropArr = [
      { id: 1, name: "Active" },
      { id: 0, name: "Inactive" },
    ];
  } else if (label === "Category" || label === "Category Name") {
    // dropArr.push(categoryg[item].name);
    dropArr = categoryg.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  } else if (label === "SubCategory" || label === "Sub Category") {
    dropArr = subCategory.map((item) => ({
      id: item.id,
      name: item.name,
    }));
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
        {dropArr.map((dropOption) => {
          return (
            <option key={dropOption.id} value={dropOption.id}>
              {dropOption.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
