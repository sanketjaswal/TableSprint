import React from "react";
import { Link } from "react-router-dom";

export const CancelButton = ({ link }) => {
  return (
    <Link to={link}>
      <button className="cancel-button" type="button">
        Cancel
      </button>
    </Link>
  );
};
