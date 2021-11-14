import React, { useState, useEffect } from "react";
import TypeWritterStyles, { TypingText, StaticText, ContentBlock } from "./typewritter.styles";
const words = ['Developer', 'Magician'];

const TypeWritter = () => {


    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setblink] = useState(true);
    const [reverse, setReverse] = useState(false);

    // Blinker
    useEffect(() => {
        const timeoutBlinker = setTimeout(() => {
            // !previous value of blink
            setblink((prev) => !prev);
        }, 500);

        //After that clearout this blinking timeout
        return () => clearTimeout(timeoutBlinker);
    }, [blink]);

    // typeWriter
    useEffect(() => {
        if (index === words.length) return;

        if (subIndex === words[index].length + 1 &&
            index !== words.length - 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
            150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);

    }, [subIndex, index, reverse]);

    return (
        <TypeWritterStyles className="typeWritterStyles">
            <ContentBlock className="contentBlock">
                <StaticText>Hello I'm T14g</StaticText>
                <TypingText>
                The {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
                </TypingText>
            </ContentBlock>
        </TypeWritterStyles>
    )
}

export default TypeWritter;