import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ShareButton() {
  return <FontAwesomeIcon className="icon" icon={faShareFromSquare} inverse />;
}

export default ShareButton;
