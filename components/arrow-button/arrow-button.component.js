import React from "react";
import ArrowButtonStyles from "./arrow-button.styles";

const ArrowButton = ({ direction, onClick }) => {
  return (
    <ArrowButtonStyles
      onClick={onClick}
      className={direction === "left" ? "left-button" : "right-button"}
    >
      {direction === "left" && "<"}
      {direction === "right" && ">"}
    </ArrowButtonStyles>
  );
};

export default ArrowButton;
