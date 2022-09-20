import React, { useState, useEffect } from "react";

function QuizCard({ answer, question, currentIndex, totalCards, questionTextClass, answerTextClass }) {
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
		if (question.length > 50) return setQuestionTextSize("text-small");
		if (question.length > 25) return setQuestionTextSize("text-medium");
		return setQuestionTextSize("text-large");
	}, [question]);

	useEffect(() => {
		if (answer.length > 50) return setAnswerTextSize("text-small");
		if (answer.length > 25) return setAnswerTextSize("text-medium");
		return setAnswerTextSize("text-large");
	}, [answer]);

	return (
		<div
			onClick={() => flipCard()}
			className={flip ? "flashcard flip" : "flashcard"}
			onAnimationEnd={() => flipCard()}
			onAnimationIteration={() => revealAnswer()}
		>
			<div className="side-title">{revealed ? "Answer" : "Question"}</div>
			<div className={revealed ? answerTextSize : questionTextSize}>{revealed ? answer : question}</div>
			<div className="quiz-card-remaining-cards">{`${currentIndex + 1} / ${totalCards}`}</div>
		</div>
	);
}

export default QuizCard;
