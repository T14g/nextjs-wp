import styled from "styled-components";

const MenuDesktopStyles = styled.ul`
    padding: 0;
    list-style: none;
`;

export const MenuItem = styled.li`
    display: inline;
    font-size: 18px;
    font-weight: 500;
    padding: 5px;

    &:not(:last-child){
        margin-right: 15px;
    }

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &.active {
        color: #000;
        background: #ECD900;
    }
`;

export default MenuDesktopStyles;