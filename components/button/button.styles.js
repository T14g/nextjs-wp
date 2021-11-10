import styled from "styled-components";
import Link from 'next/link'

const ButtonStyles = styled.button`
    background: none;
    border: 2px #000 solid;
    padding: 7px 12px;
    font-weight: 600;

    &:hover{
        cursor: pointer;
        background: #000;
        color: #fff;
        transition: 0.8s;
    }
`;

export default ButtonStyles;