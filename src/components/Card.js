import React, { useState } from "react";
import TrashButton from "./TrashButton";
import EditButton from "./EditButton";

function Card({ id, answer, question, allCards, removeCard }) {
  const [flip, setFlip] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function flipCard() {
    setFlip(!flip);
  }

  function revealAnswer() {
    setRevealed(!revealed);
  }

  const handleRemove = () => {
    const filteredCards = allCards.filter((card) => card.id !== id);
    removeCard(filteredCards);
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
        <TrashButton onClick={handleRemove} />
        <EditButton />
      </div>
    </div>
  );
}

export default Card;
