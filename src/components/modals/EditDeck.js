import React from "react";

// TODO: Copy EditCard for the most part
function EditDeck({ allCards, setCards, setVisibility, inputs, setInputs, cardToEditID }) {
	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		const editedCards = allCards.map((card) => {
			if (card.id !== cardToEditID) return card;
			card.question = inputs.question;
			card.answer = inputs.answer;
			return card;
		});
		setCards(editedCards);
		setVisibility(false);
	}

	const questionLength = () => {
		return inputs.question ? inputs.question.length : 0;
	};

	const answerLength = () => {
		return inputs.answer ? inputs.answer.length : 0;
	};

	return (
		<>
			<h1 className="edit-card-title">Edit Card</h1>
			<form className="edit-card-form" onSubmit={handleSubmit}>
				<label className="input-label">
					<textarea
						className="input"
						rows="5"
						maxLength="75"
						name="question"
						placeholder="Question"
						value={inputs.question || ""}
						onChange={handleChange}
					/>
					<div className="characters-remaining">{questionLength() + "/75"}</div>
				</label>
				<label className="input-label">
					<textarea
						className="input"
						rows="5"
						maxLength="75"
						name="answer"
						placeholder="Answer"
						value={inputs.answer || ""}
						onChange={handleChange}
					/>
					<div className="characters-remaining">{answerLength() + "/75"}</div>
				</label>
				<input className="form-button" type="submit" value="Confirm Changes" />
				<button className="form-button" type="button" onClick={() => setVisibility(false)}>
					Cancel
				</button>
			</form>
		</>
	);
}

export default EditDeck;
