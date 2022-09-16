import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function TrashButton(props) {
  return (
    <div onClick={props.onClick}>
      <FontAwesomeIcon className="icon" icon={faTrashCan} inverse />
    </div>
  );
}

export default TrashButton;
