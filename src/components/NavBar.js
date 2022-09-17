import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-title">FLASHCARD</div>
        <ul className="links">
          <li className="nav-button primary">
            <Link className="page-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-button primary">
            <Link className="page-link" to="/cards">
              Cards
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
