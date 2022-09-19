import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function EditButton(props) {
	return (
		<div onClick={props.onClick}>
			<FontAwesomeIcon className="icon" icon={faWrench} inverse />
		</div>
	);
}

export default EditButton;
