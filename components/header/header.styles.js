import styled from "styled-components";

const HeaderStyles = styled.div`
    background: ${props => props.theme.header.background};
    color: ${props => props.theme.header.color};
    padding: 10px 15px;
    width: 100%;

    &.scrolled{
        position: fixed;
        top: 0;
        background: #000;
        color: #fff;
        transition: 0.3s;

        a{
            color: #fff;
        }
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.a`
    font-size: 25px;
    font-weight: 900;
    line-height: 54px;
    text-decoration: none;
    color: #000;
    
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`;

export default HeaderStyles;