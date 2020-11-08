import React from "react";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/"> Google Books </Link> 
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">
              Search <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Saved <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;