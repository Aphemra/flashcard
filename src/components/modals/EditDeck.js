import React from "react";

function EditDeck({ allDecks, setDecks, setVisibility, inputs, setInputs, deckToEditID }) {
	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		const editedDecks = allDecks.map((deck) => {
			if (deck.id !== deckToEditID) return deck;
			deck.title = inputs.title;
			deck.description = inputs.description;
			return deck;
		});
		setDecks(editedDecks);
		setVisibility(false);
	}

	const titleLength = () => {
		return inputs.title ? inputs.title.length : 0;
	};

	const descriptionLength = () => {
		return inputs.description ? inputs.description.length : 0;
	};

	return (
		<>
			<h1 className="edit-card-title">Edit Deck</h1>
			<form className="edit-card-form" onSubmit={handleSubmit}>
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
				<input className="form-button" type="submit" value="Confirm Changes" />
				<button className="form-button" type="button" onClick={() => setVisibility(false)}>
					Cancel
				</button>
			</form>
		</>
	);
}

export default EditDeck;
