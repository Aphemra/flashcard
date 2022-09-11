import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-title">FLASHCARD</div>
      <ul className="links">
        <li className="nav-button primary">Add Deck</li>
        <li className="nav-button danger">Delete Decks</li>
      </ul>
    </div>
  );
}

export default NavBar;
