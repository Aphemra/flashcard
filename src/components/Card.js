import React, { useState, useEffect } from "react";
import TrashButton from "./TrashButton";
import EditButton from "./EditButton";

function Card({
	id,
	answer,
	question,
	allCards,
	setCards,
	showEditModal,
	setInputs,
	setCardToEditID,
	questionTextClass,
	answerTextClass,
}) {
	const [flip, setFlip] = useState(false);
	const [revealed, setRevealed] = useState(false);
	const [questionTextSize, setQuestionTextSize] = useState(questionTextClass);
	const [answerTextSize, setAnswerTextSize] = useState(answerTextClass);

	function flipCard() {
		setFlip(!flip);
	}

	function revealAnswer() {
		setRevealed(!revealed);
	}

	useEffect(() => {
		if (question.length >= 50) return setQuestionTextSize("text-small");
		if (question.length >= 25) return setQuestionTextSize("text-medium");
		return setQuestionTextSize("text-large");
	}, [question]);

	useEffect(() => {
		if (answer.length > 50) return setAnswerTextSize("text-small");
		if (answer.length > 25) return setAnswerTextSize("text-medium");
		return setAnswerTextSize("text-large");
	}, [answer]);

	const handleRemove = (event) => {
		event.stopPropagation();
		const filteredCards = allCards.filter((card) => card.id !== id);
		setCards(filteredCards);
	};

	const handleEdit = (event) => {
		event.stopPropagation();
		const card = allCards.filter((card) => card.id === id)[0];

		setInputs({
			question: card.question,
			answer: card.answer,
		});

		setCardToEditID(card.id);
		showEditModal(true);
	};

	return (
		<div
			onClick={() => flipCard()}
			className={flip ? "flashcard flip" : "flashcard"}
			onAnimationEnd={() => flipCard()}
			onAnimationIteration={() => revealAnswer()}
		>
			<div className="side-title">{revealed ? "Answer" : "Question"}</div>
			<div className={revealed ? answerTextSize : questionTextSize}>{revealed ? answer : question}</div>
			<div className="card-buttons">
				<TrashButton onClick={(event) => handleRemove(event)} />
				<EditButton onClick={(event) => handleEdit(event)} />
			</div>
		</div>
	);
}

export default Card;
