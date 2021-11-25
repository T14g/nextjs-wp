import React from "react";
import ButtonStyles from "./button.styles";

interface ButtonProps {
    text: String
};

const Button = ({ text }: ButtonProps) => {
    return (
        <ButtonStyles>{text}</ButtonStyles>
    )
}

export default Button;