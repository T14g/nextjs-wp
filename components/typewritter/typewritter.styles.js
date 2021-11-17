import styled from "styled-components";

const TypeWritterStyles = styled.div`
    border-bottom: 3px #000 solid;

    @media(max-width: 400px){
        border: none;
    }
`;

export const ContentBlock = styled.div`
    
`;

export const StaticText = styled.div`
    font-size: 50px;
    font-weight: 700;

    @media(max-width: 767px){
        font-size:32px;
    }

    @media(max-width: 400px){
        border: none;
        text-align: center;
    }
`;

export const TypingText = styled.div`
    font-size: 38px;

    @media(max-width: 767px){
        font-size:32px;
    }

    @media(max-width: 400px){
        text-align: center;
    }
`;

export default TypeWritterStyles;