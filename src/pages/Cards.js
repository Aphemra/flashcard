import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import AddCard from "../components/AddCard";
import EditCard from "../components/EditCard";

function Cards() {
  const [cards, setCards] = useOutletContext();
  const [modalAddCardVisibility, setAddCardModalVisibility] = useState(false);
  const [modalEditCardVisibility, setEditCardModalVisibility] = useState(false);
  const [editModalInputs, setEditModalInputs] = useState({});
  const [cardToEditID, setCardToEditID] = useState();

  function handleAddCardModalVisibility(isVisible) {
    setAddCardModalVisibility(isVisible);
  }

  function handleEditCardModalVisibility(isVisible) {
    setEditCardModalVisibility(isVisible);
  }

  document.body.style.overflowY =
    modalAddCardVisibility || modalEditCardVisibility ? "hidden" : "unset";

  const addCardModal = (
    <Modal
      modalComponent={
        <AddCard
          allCards={cards}
          addCard={setCards}
          setVisibility={handleAddCardModalVisibility}
        />
      }
    />
  );

  const editCardModal = (
    <Modal
      modalComponent={
        <EditCard
          allCards={cards}
          setCards={setCards}
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
      <div className={modalAddCardVisibility ? "modal slide-right" : "modal"}>
        {addCardModal}
      </div>
      <div className={modalEditCardVisibility ? "modal slide-right" : "modal"}>
        {editCardModal}
      </div>
      <div className="card-controls">
        <ul>
          <li
            className="card-control-button"
            onClick={() => handleAddCardModalVisibility(true)}
          >
            Add Card
          </li>
        </ul>
      </div>
      <div className={cards.length ? "hide" : "card-drawer-notification"}>
        <h1>You've got no cards here! Why not add some?</h1>
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
              setCards={setCards}
              showEditModal={handleEditCardModalVisibility}
              editModal={editCardModal}
              inputs={editModalInputs}
              setInputs={setEditModalInputs}
              setCardToEditID={setCardToEditID}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cards;
