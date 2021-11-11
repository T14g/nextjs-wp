import React from "react";
import BigTitleStyles from "./big-title.styles";

const BigTitle = ({ children, className }) => {
    return (
        <BigTitleStyles className={className}>{children}</BigTitleStyles>
    )
}

export default BigTitle;