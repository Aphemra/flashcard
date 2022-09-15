import React from "react";

function ExitButton(props) {
  return (
    <svg
      viewBox="0 0 640 1280"
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M640 320L512 192 320 384 128 192 0 320l192 192L0 704l128 128 192-192 192 192 128-128L448 512 640 320z" />
    </svg>
  );
}

export default ExitButton;