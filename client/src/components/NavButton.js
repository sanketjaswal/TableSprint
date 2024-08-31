import React from "react";
import { Link } from "react-router-dom";

export const NavButton = ({ link, name, icon, alt }) => {
  return (
    <Link to={`${link}`}>
      <div className="box">
        <div className="box_head">
          <img width="25" height="25" src={icon} alt={alt} />
          <p>{name}</p>
          <h6>►</h6>
        </div>
      </div>
    </Link>
  );
};
