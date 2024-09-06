import React, { useContext } from "react";
import DataContext from "context/context";

export const DropdownField = ({ label, id, value, onChange }) => {
  const { categoryg, subCategory } = useContext(DataContext);

  let dropArr = [];

  if (label === "Status" || label === "status") {
    dropArr = [
      { id: 1, name: "Active" },
      { id: 0, name: "Inactive" },
    ];
  } else if (label === "Category" || label === "Category Name") {
    dropArr = categoryg.map((item) => ({
      id: item.id,
      name: item.name,
    }));
    console.log("dropArr: ", dropArr);
  } else if (label === "SubCategory" || label === "Sub Category") {
    dropArr = subCategory.map((item) => ({
      id: item.id,
      name: item.name,
    }));
    console.log("dropArr: ", dropArr);
  }

  return (
    <div className="dropdown-container">
      <label htmlFor={id} className="dropdown-label">
        {label}
      </label>
      <select
        id={id}
        className="dropdown-select"
        value={value ?? ""}
        onChange={onChange}
      >
        <option style={{ display: "none" }}></option>
        {dropArr.map((dropOption) => (
          <option key={dropOption.id} value={dropOption.id}>
            {dropOption.name}
          </option>
        ))}
      </select>
    </div>
  );
};
