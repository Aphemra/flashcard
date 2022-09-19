import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Deck from "../components/Deck";
import Modal from "../components/Modal";
import AddDeck from "../components/modals/AddDeck";
import EditDeck from "../components/modals/EditDeck";

// TODO: Alter this (mostly copy of Cards) to fit the Decks page's needs
function Decks() {
	const { decks, setDecks } = useOutletContext();
	const [modalAddDeckVisibility, setAddDeckModalVisibility] = useState(false);
	const [modalEditDeckVisibility, setEditDeckModalVisibility] = useState(false);
	const [editModalInputs, setEditModalInputs] = useState({});
	const [deckToEditID, setDeckToEditID] = useState();

	function handleAddDeckModalVisibility(isVisible) {
		setAddDeckModalVisibility(isVisible);
	}

	function handleEditDeckModalVisibility(isVisible) {
		setEditDeckModalVisibility(isVisible);
	}

	document.body.style.overflowY = modalAddDeckVisibility || modalEditDeckVisibility ? "hidden" : "unset";

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
			<div className={modalAddDeckVisibility ? "modal slide-right" : "modal"}>{addDeckModal}</div>
			<div className={modalEditDeckVisibility ? "modal slide-right" : "modal"}>{editDeckModal}</div>
			<div
				onClick={() => {
					handleEditDeckModalVisibility(false);
					handleAddDeckModalVisibility(false);
				}}
				className={modalAddDeckVisibility || modalEditDeckVisibility ? "modal-lock" : "hide"}
			></div>
			<div className="card-controls">
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
							title={deck.answer}
							description={deck.question}
							allDecks={decks}
							setDecks={setDecks}
							showEditModal={handleEditDeckModalVisibility}
							setInputs={setEditModalInputs}
							setDeckToEditID={setDeckToEditID}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Decks;
