import styled from "styled-components";

const HeaderStyles = styled.div`
    background: ${props => props.theme.header.background};
    color: ${props => props.theme.header.color};
`;

export default HeaderStyles;