import React from "react";
import { useNavigate } from "react-router-dom";
import TrashButton from "./TrashButton";
import EditButton from "./EditButton";

function Deck({
	id,
	title,
	description,
	cards,
	allDecks,
	setDecks,
	showEditModal,
	setInputs,
	setDeckToEditID,
	setCurrentDeckID,
	setCardsState,
}) {
	const navigate = useNavigate();

	const handleRemove = (event) => {
		event.stopPropagation();
		const filteredDecks = allDecks.filter((deck) => deck.id !== id);
		if (window.confirm(`Deleting a deck is permanent.\n\nAre you sure you want to delete "${title}"?`)) {
			setDecks(filteredDecks);
		}
	};

	const handleEdit = (event) => {
		event.stopPropagation();
		const deck = allDecks.filter((deck) => deck.id === id)[0];

		setInputs({
			title: deck.title,
			description: deck.description,
		});

		setDeckToEditID(deck.id);
		showEditModal(true);
	};

	const handleOpenDeck = () => {
		setCardsState(cards);
		setCurrentDeckID(id);
		navigate("/cards");
	};

	return (
		<div onClick={handleOpenDeck} className={"deck"}>
			<div className="deck-title">{title}</div>
			<div className="deck-description">{description}</div>
			<div className="deck-card-total">{cards.length} Cards</div>
			<div className="deck-buttons">
				<TrashButton onClick={(event) => handleRemove(event)} />
				<EditButton onClick={(event) => handleEdit(event)} />
			</div>
		</div>
	);
}

export default Deck;
