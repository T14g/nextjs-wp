import React from "react";
import ShowcaseStyles from './showcase.styles';

interface ShowcaseProps {
    list: any
};

const Showcase = ({ list }: ShowcaseProps) => {
    return (
        <ShowcaseStyles>Showcase componet</ShowcaseStyles>
    )
};

export default Showcase;