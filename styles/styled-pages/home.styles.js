import styled from "styled-components";

const HomeStyles = styled.div`

`;

export const SectionHero = styled.div`
    min-height: 400px;

    .typeWritterStyles {
        margin-top: 200px;
        width: 50%;
        display: flex;
        justify-content: flex-end;
        
    }
`;

export const SectionMessage = styled.div`
    padding: 15px;
    background: ${props => props.bg ? props.bg : 'none'};
`;

export const Message = styled.div`
    text-align: center;
    font-size: 45px;
    color: ${props => props.color ? props.color : '#000'};
    text-transform: uppercase;
    font-weight: 600;
    max-width: 700px;
    margin: 0 auto;
`;

export default HomeStyles;