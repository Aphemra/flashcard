import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import QuizCard from "../components/QuizCard";

function Quiz() {
	const [cards] = useOutletContext();
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [shuffledDeck] = useState(shuffleDeck());

	function shuffleDeck() {
		return cards
			.map((card) => ({ card, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ card }) => card);
	}

	function getTextSizeClass(size) {
		if (size > 50) return "text-small";
		if (size > 25) return "text-medium";
		return "text-large";
	}

	function handleNextCard() {
		setCurrentCardIndex((currentCardIndex + 1) % cards.length);
	}

	function handlePreviousCard() {
		setCurrentCardIndex((currentCardIndex - 1 + cards.length) % cards.length);
	}

	return (
		<div className="quiz-drawer">
			<QuizCard
				key={shuffledDeck[currentCardIndex].id}
				id={shuffledDeck[currentCardIndex].id}
				answer={shuffledDeck[currentCardIndex].answer}
				question={shuffledDeck[currentCardIndex].question}
				currentIndex={currentCardIndex}
				totalCards={cards.length}
				questionTextClass={getTextSizeClass(shuffledDeck[currentCardIndex].question.length)}
				answerTextClass={getTextSizeClass(shuffledDeck[currentCardIndex].answer.length)}
			/>
			<div className="quiz-card-buttons">
				<div onClick={handlePreviousCard} className="quiz-card-button">
					&lt;
				</div>
				<div onClick={handleNextCard} className="quiz-card-button">
					&gt;
				</div>
			</div>

			<div className="quiz-card-buttons">
				<Link className="quiz-card-button-large" to="/cards">
					Return to Deck
				</Link>
			</div>
		</div>
	);
}

export default Quiz;
