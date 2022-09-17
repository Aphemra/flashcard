import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import AddCard from "../components/AddCard";

function Cards() {
  const [cards, setCards] = useOutletContext();
  const [modalVisibility, setModalVisibility] = useState(false);

  function handleModalVisibility(isVisible) {
    setModalVisibility(isVisible);
  }

  document.body.style.overflowY = modalVisibility ? "hidden" : "unset";

  const addCardModal = (
    <Modal
      modalComponent={
        <AddCard
          allCards={cards}
          addCard={setCards}
          setVisibility={handleModalVisibility}
        />
      }
    />
  );

  return (
    <>
      <div className={modalVisibility ? "modal slide-right" : "modal"}>
        {addCardModal}
      </div>
      <div className="card-controls">
        <ul>
          <li
            className="card-control-button"
            onClick={() => handleModalVisibility(true)}
          >
            Add Card
          </li>
        </ul>
      </div>
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

export default Cards;
