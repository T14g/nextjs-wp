import React from "react";

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button onClick={onClick}>
      {direction === "left" && "<"}
      {direction === "right" && ">"}
    </button>
  );
};

export default ArrowButton;
