import React, { useState } from "react";
import TrashButton from "./TrashButton";
import EditButton from "./EditButton";

function Card({
  id,
  answer,
  question,
  allCards,
  setCards,
  showEditModal,
  setInputs,
  setCardToEditID,
}) {
  const [flip, setFlip] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function flipCard() {
    setFlip(!flip);
  }

  function revealAnswer() {
    setRevealed(!revealed);
  }

  const handleRemove = (event) => {
    event.stopPropagation();
    const filteredCards = allCards.filter((card) => card.id !== id);
    setCards(filteredCards);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    const card = allCards.filter((card) => card.id === id)[0];

    setInputs({
      question: card.question,
      answer: card.answer,
    });

    setCardToEditID(card.id);
    showEditModal(true);
  };

  return (
    <div
      onClick={() => flipCard()}
      className={flip ? "flashcard flip" : "flashcard"}
      onAnimationEnd={() => flipCard()}
      onAnimationIteration={() => revealAnswer()}
    >
      <div className="side-title">{revealed ? "Answer" : "Question"}</div>
      <div className="text">{revealed ? answer : question}</div>
      <div className="card-buttons">
        <TrashButton onClick={(event) => handleRemove(event)} />
        <EditButton onClick={(event) => handleEdit(event)} />
      </div>
    </div>
  );
}

export default Card;
