import React from "react";
import "css/PageHeader.css";

export const PageHeader = ({ name, icon }) => {
  return (
    <div className="page-header">
      {/* icon */}
      <div className="page-name">
        <img width="28" height="28" src={icon} alt={name} />
        <p>{name}</p>
      </div>
      {/* search bar */}
      <form>
        <input className="search_bar" type="text"></input>
      </form>
      <button className="add-btn">Add {name}</button>
    </div>
  );
};
