import React, { useState } from "react";
import TrashButton from "./TrashButton";

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
      <div className="exit-button" onClick={handleRemove}>
        <TrashButton height={20} width={20} />
      </div>
      <div className="text">{revealed ? answer : question}</div>
    </div>
  );
}

export default Card;
