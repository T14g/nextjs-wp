import React, { useState, useEffect } from "react";
import TypeWritterStyles, { TypingText, StaticText, ContentBlock } from "./typewritter.styles";

const TypeWritter = () => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        
    })

    return (
        <TypeWritterStyles className="typeWritterStyles">
            <ContentBlock className="contentBlock">
                <StaticText>Hello I'm T14g</StaticText>
                <TypingText>The Web Developer</TypingText>
                <TypingText>
                    {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
                </TypingText>
            </ContentBlock>
        </TypeWritterStyles>
    )
}

export default TypeWritter;