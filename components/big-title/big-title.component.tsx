import React from "react";
import BigTitleStyles from "./big-title.styles";

interface BigTitleProps {
    children: any,
    className: string
};

const BigTitle = ({ children, className }: BigTitleProps) => {
    return (
        <BigTitleStyles className={className}>{children}</BigTitleStyles>
    )
}

export default BigTitle;