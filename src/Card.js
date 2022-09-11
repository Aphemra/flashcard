import React, { useState } from "react";

function Card(props) {
  const [flip, setFlip] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function flipCard() {
    setFlip(!flip);
  }

  function revealAnswer() {
    setRevealed(!revealed);
  }

  return (
    <div
      onClick={() => flipCard()}
      className={flip ? "flashcard flip" : "flashcard"}
      onAnimationEnd={() => flipCard()}
      onAnimationIteration={() => revealAnswer()}
    >
      <div className="text">{revealed ? props.answer : props.question}</div>
    </div>
  );
}

export default Card;
