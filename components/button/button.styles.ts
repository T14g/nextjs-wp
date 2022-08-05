import styled from "styled-components";
import Link from 'next/link'

const ButtonStyles = styled.button`
    display: block;
    max-width: 363px;
    width: 100%;
    padding: 18px 13px;
    background-color: #FFD900 !important;
    border: none !important;
    color: #000 !important;
    font-size: 23px !important;
    font-family: "Barlow Condensed", sans-serif;
    border-radius: 55px !important;
    font-weight: 900 !important;
    margin-top: 20px;

    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

export default ButtonStyles;