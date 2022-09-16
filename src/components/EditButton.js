import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function EditButton() {
  return <FontAwesomeIcon className="icon" icon={faWrench} inverse />;
}

export default EditButton;
