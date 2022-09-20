import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import Deck from "../components/Deck";
import Modal from "../components/Modal";
import AddDeck from "../components/modals/AddDeck";
import EditDeck from "../components/modals/EditDeck";

// TODO: Alter this (mostly copy of Cards) to fit the Decks page's needs
function Decks() {
	const { cards, setCards, decks, setDecks, currentDeckID, setCurrentDeckID } = useOutletContext();
	const [modalAddDeckVisibility, setAddDeckModalVisibility] = useState(false);
	const [modalEditDeckVisibility, setEditDeckModalVisibility] = useState(false);
	const [editModalInputs, setEditModalInputs] = useState({});
	const [deckToEditID, setDeckToEditID] = useState();

	useEffect(() => {
		setCurrentDeckID("");
		setCards([]);
	}, []);

	function handleAddDeckModalVisibility(isVisible) {
		setAddDeckModalVisibility(isVisible);
	}

	function handleEditDeckModalVisibility(isVisible) {
		setEditDeckModalVisibility(isVisible);
	}

	document.body.style.overflowY = modalAddDeckVisibility || modalEditDeckVisibility ? "hidden" : "unset";
	document.body.style.height = modalAddDeckVisibility || modalEditDeckVisibility ? "100vh" : "";

	const addDeckModal = (
		<Modal modalComponent={<AddDeck allDecks={decks} addDeck={setDecks} setVisibility={handleAddDeckModalVisibility} />} />
	);

	const editDeckModal = (
		<Modal
			modalComponent={
				<EditDeck
					allDecks={decks}
					setDecks={setDecks}
					setVisibility={handleEditDeckModalVisibility}
					inputs={editModalInputs}
					setInputs={setEditModalInputs}
					deckToEditID={deckToEditID}
				/>
			}
		/>
	);

	return (
		<>
			<div id="add-deck" className={modalAddDeckVisibility ? "modal slide-right" : "modal"}>
				{addDeckModal}
			</div>
			<div id="edit-deck" className={modalEditDeckVisibility ? "modal slide-right" : "modal"}>
				{editDeckModal}
			</div>
			<div
				onClick={() => {
					handleEditDeckModalVisibility(false);
					handleAddDeckModalVisibility(false);
				}}
				className={modalAddDeckVisibility || modalEditDeckVisibility ? "modal-lock" : "hide"}
			></div>
			<div className="deck-controls">
				<ul>
					<li className="card-control-button" onClick={() => handleAddDeckModalVisibility(true)}>
						Add Deck
					</li>
				</ul>
			</div>
			<div className={decks.length ? "hide" : "card-drawer-notification"}>
				<h1>You've got no decks here! Why not create one?</h1>
			</div>
			<div className="card-drawer">
				{decks.map((deck) => {
					return (
						<Deck
							key={deck.id}
							id={deck.id}
							title={deck.title}
							description={deck.description}
							cards={deck.cards}
							allDecks={decks}
							setDecks={setDecks}
							showEditModal={handleEditDeckModalVisibility}
							setInputs={setEditModalInputs}
							setDeckToEditID={setDeckToEditID}
							currentDeckID={currentDeckID}
							setCurrentDeckID={setCurrentDeckID}
							cardsState={cards}
							setCardsState={setCards}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Decks;
