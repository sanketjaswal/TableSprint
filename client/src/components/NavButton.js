import React from "react";
import { Link } from "react-router-dom";

export const NavButton = ({ link, name, icon, alt }) => {
  return (
    <Link to={`${link}`}>
      <div className="box">
        <div className="box_head">
          <div className="box-name-icon">
            <img width="28" height="28" src={icon} alt={alt} />
            <p>{name}</p>
          </div>
          <h6>►</h6>
        </div>
      </div>
    </Link>
  );
};
