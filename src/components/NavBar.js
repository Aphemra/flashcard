import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCardModal from "./AddCardModal";

function NavBar({ allCards, addCard }) {
  const [modalVisibility, setModalVisibility] = useState(false);

  function handleModalVisibility(isVisible) {
    setModalVisibility(isVisible);
  }

  document.body.style.overflowY = modalVisibility ? "hidden" : "unset";

  return (
    <>
      <div
        className={
          modalVisibility ? "add-card-modal slide-right" : "add-card-modal"
        }
      >
        <AddCardModal
          allCards={allCards}
          addCard={addCard}
          setVisibility={handleModalVisibility}
        />
      </div>
      <div className="navbar">
        <div className="nav-title">FLASHCARD</div>
        <ul className="links">
          <li
            onClick={() => handleModalVisibility(true)}
            className="nav-button primary"
          >
            Add Card
          </li>
          <li className="nav-button danger">Delete Decks</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
