import React, { useState } from "react";
import uuid from "react-uuid";

function AddCard({ allCards, addCard, setVisibility }) {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!inputs.question || !inputs.answer) return;
    const newCard = getNewCard(inputs.question, inputs.answer);
    const newCardList = [...allCards, newCard];
    addCard(newCardList);
    setInputs({});

    console.log(inputs);
  }

  function getNewCard(question, answer) {
    return {
      id: uuid(),
      question,
      answer,
    };
  }

  const questionLength = () => {
    return inputs.question ? inputs.question.length : 0;
  };

  const answerLength = () => {
    return inputs.answer ? inputs.answer.length : 0;
  };

  return (
    <>
      <h1 className="add-card-title">New Card</h1>
      <form className="add-card-form" onSubmit={handleSubmit}>
        <label className="input-label">
          <textarea
            className="input"
            rows="7"
            maxLength="150"
            name="question"
            placeholder="Question"
            value={inputs.question || ""}
            onChange={handleChange}
          />
          <div className="characters-remaining">
            {questionLength() + "/150"}
          </div>
        </label>
        <label className="input-label">
          <textarea
            className="input"
            rows="7"
            maxLength="150"
            name="answer"
            placeholder="Answer"
            value={inputs.answer || ""}
            onChange={handleChange}
          />
          <div className="characters-remaining">{answerLength() + "/150"}</div>
        </label>
        <input className="form-button" type="submit" value="Add" />
        <button className="form-button" onClick={() => setVisibility(false)}>
          Exit
        </button>
      </form>
    </>
  );
}

export default AddCard;
