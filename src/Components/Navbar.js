import { NavLink} from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <NavLink to="/">
          <h1>WORKOUT BUDDY</h1>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
