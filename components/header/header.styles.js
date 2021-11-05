import styled from "styled-components";

const HeaderStyles = styled.div`
    background: ${props => props.theme.header.background};
    color: ${props => props.theme.header.color};
    padding: 10px 15px;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    font-size: 25px;
    font-weight: 900;
    line-height: 54px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`;

export default HeaderStyles;