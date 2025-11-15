import React from "react";
import { Link } from "react-router-dom";

const Links = ({ parentClassName, childeClassname = "text-white" }) => {
  return (
    <div className={parentClassName}>
      <Link className={childeClassname} to="/">
        Home
      </Link>
      <Link className={childeClassname} to="/favorites">
        Favorites
      </Link>
      <Link className={childeClassname} to="/cart">
        cart
      </Link>
    </div>
  );
};

export default Links;
