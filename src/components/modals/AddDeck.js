import React, { useState } from "react";
import uuid from "react-uuid";

function AddDeck({ allDecks, addDeck, setVisibility }) {
	const [inputs, setInputs] = useState({});

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!inputs.title || !inputs.description) return;
		const newDeck = getNewDeck(inputs.title, inputs.description);
		const newDeckList = [...allDecks, newDeck];
		addDeck(newDeckList);
		setInputs({});
	}

	function getNewDeck(title, description) {
		return {
			id: uuid(),
			cards: [],
			title,
			description,
		};
	}

	const titleLength = () => {
		return inputs.title ? inputs.title.length : 0;
	};

	const descriptionLength = () => {
		return inputs.description ? inputs.description.length : 0;
	};

	return (
		<>
			<h1 className="add-card-title">New Deck</h1>
			<form className="add-card-form" onSubmit={handleSubmit}>
				<label className="input-label">
					<textarea
						className="input"
						rows="2"
						maxLength="30"
						name="title"
						placeholder="Title"
						value={inputs.title || ""}
						onChange={handleChange}
					/>
					<div className="characters-remaining">{titleLength() + "/30"}</div>
				</label>
				<label className="input-label">
					<textarea
						className="input"
						rows="5"
						maxLength="125"
						name="description"
						placeholder="Description"
						value={inputs.description || ""}
						onChange={handleChange}
					/>
					<div className="characters-remaining">{descriptionLength() + "/125"}</div>
				</label>
				<input className="form-button" type="submit" value="Add" />
				<button className="form-button" onClick={() => setVisibility(false)}>
					Exit
				</button>
			</form>
		</>
	);
}

export default AddDeck;
