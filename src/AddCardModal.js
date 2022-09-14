import React, { useState } from "react";
import uuid from "react-uuid";

function AddCardModal({ allCards, addCard, setVisibility }) {
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

  return (
    <>
      <h1 className="add-card-title">Add New Card!</h1>
      <form className="add-card-form" onSubmit={handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            name="question"
            value={inputs.question || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer:
          <input
            type="text"
            name="answer"
            value={inputs.answer || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add" />
        <button onClick={() => setVisibility(false)}>Exit</button>
      </form>
    </>
  );
}

export default AddCardModal;
