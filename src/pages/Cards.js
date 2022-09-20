import { useOutletContext, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import AddCard from "../components/modals/AddCard";
import EditCard from "../components/modals/EditCard";

function Cards() {
	const { cards, setCards, decks, setDecks, currentDeckID, setCurrentDeckID } = useOutletContext();
	const [modalAddCardVisibility, setAddCardModalVisibility] = useState(false);
	const [modalEditCardVisibility, setEditCardModalVisibility] = useState(false);
	const [editModalInputs, setEditModalInputs] = useState({});
	const [cardToEditID, setCardToEditID] = useState();

	const currentDeck = currentDeckID ? decks.filter((deck) => deck.id === currentDeckID)[0] : { cards: [] };

	function setCardsToCurrentDeck(newCardList) {
		currentDeck.cards = newCardList;
		setCards(currentDeck.cards);
		setDecks([...decks]);
	}

	function handleAddCardModalVisibility(isVisible) {
		setAddCardModalVisibility(isVisible);
	}

	function handleEditCardModalVisibility(isVisible) {
		setEditCardModalVisibility(isVisible);
	}

	function getTextSizeClass(size) {
		if (size > 50) return "text-small";
		if (size > 25) return "text-medium";
		return "text-large";
	}

	document.body.style.overflowY = modalAddCardVisibility || modalEditCardVisibility ? "hidden" : "unset";
	document.body.style.height = modalAddCardVisibility || modalEditCardVisibility ? "100vh" : "";

	const addCardModal = (
		<Modal
			modalComponent={
				<AddCard
					allCards={currentDeck.cards}
					addCard={setCardsToCurrentDeck}
					setVisibility={handleAddCardModalVisibility}
				/>
			}
		/>
	);

	const editCardModal = (
		<Modal
			modalComponent={
				<EditCard
					allCards={currentDeck.cards}
					setCards={setCardsToCurrentDeck}
					setVisibility={handleEditCardModalVisibility}
					inputs={editModalInputs}
					setInputs={setEditModalInputs}
					cardToEditID={cardToEditID}
				/>
			}
		/>
	);

	return (
		<>
			<div className={modalAddCardVisibility ? "modal slide-right" : "modal"}>{addCardModal}</div>
			<div className={modalEditCardVisibility ? "modal slide-right" : "modal"}>{editCardModal}</div>
			<div
				onClick={() => {
					handleEditCardModalVisibility(false);
					handleAddCardModalVisibility(false);
				}}
				className={modalAddCardVisibility || modalEditCardVisibility ? "modal-lock" : "hide"}
			></div>
			<div className="card-controls">
				<div className="main-deck-title">{currentDeck.title}</div>
				<ul>
					<li
						className={currentDeckID ? "card-control-button" : "card-control-button-disabled page-link-disabled"}
						onClick={() => (currentDeckID ? handleAddCardModalVisibility(true) : "")}
					>
						Add Card
					</li>
					<li className={cards.length ? "card-control-button" : "card-control-button-disabled"}>
						<Link className={cards.length ? "page-link" : "page-link-disabled"} to={cards.length ? "/quiz" : "#"}>
							Quiz Me!
						</Link>
					</li>
				</ul>
			</div>
			<div className={cards.length ? "hide" : "card-drawer-notification"}>
				<h1>
					{currentDeckID
						? "You've got no cards here! Why not add some?"
						: "You shouldn't be here until you've created a deck! :("}
				</h1>
			</div>
			<div className="card-drawer">
				{cards.map((card) => {
					return (
						<Card
							key={card.id}
							id={card.id}
							answer={card.answer}
							question={card.question}
							allCards={currentDeck.cards}
							setCards={setCardsToCurrentDeck}
							showEditModal={handleEditCardModalVisibility}
							setInputs={setEditModalInputs}
							setCardToEditID={setCardToEditID}
							questionTextClass={getTextSizeClass(card.question.length)}
							answerTextClass={getTextSizeClass(card.answer.length)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Cards;
