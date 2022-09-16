import Card from "../components/Card";
import NavBar from "../components/NavBar";
// import uuid from "react-uuid";
// import { useState } from "react";
import useLocalState from "../hooks/useLocalState";

function App() {
  // const [cards, setCards] = useState([
  //   {
  //     id: uuid(),
  //     question: "What is 1+1?",
  //     answer: "2",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 2+2?",
  //     answer: "4",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 3+3?",
  //     answer: "6",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 4+4?",
  //     answer: "8",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 5+5?",
  //     answer: "10",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 6+6?",
  //     answer: "12",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 7+7?",
  //     answer: "14",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 8+8?",
  //     answer: "16",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 9+9?",
  //     answer: "18",
  //   },
  //   {
  //     id: uuid(),
  //     question: "What is 10+10?",
  //     answer: "20",
  //   },
  // ]);

  const [cards, setCards] = useLocalState("cards", []);

  return (
    <>
      <NavBar allCards={cards} addCard={setCards} />
      <div className="card-drawer">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              answer={card.answer}
              question={card.question}
              allCards={cards}
              removeCard={setCards}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
