import Card from "../components/Card";
import NavBar from "../components/NavBar";
import useLocalState from "../hooks/useLocalState";

function App() {
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
