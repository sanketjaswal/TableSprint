import React from "react";
import { Link } from "react-router-dom";

export const NavButton = ({ link, name, icon, alt, arrow }) => {
  return (
    <Link to={`${link}`}>
      <div className="box">
        <div className="box_head">
          <div className="box-name-icon">
            <img width="28" height="28" src={icon} alt={alt} />
            <p>{name}</p>
          </div>
          <h6>{arrow}</h6>
        </div>
      </div>
    </Link>
  );
};
