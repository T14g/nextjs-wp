import styled from "styled-components";

const HomeStyles = styled.div`
    .col-card-bg{
        background-image: url('/images/playing-cards.jpg');
        background-repeat: no-repeat;
        background-position: center;
        height: 700px;
        width: 50%;
    }
`;

export const SectionHero = styled.div`
    min-height: 400px;

    @media(max-width: 400px){
        min-height: 250px;
    }

    .typeWritterStyles {
        margin-top: 200px;
        width: 50%;
        display: flex;
        justify-content: flex-end;

        @media(max-width: 767px){
            width: 400px;
        }

        @media(max-width: 400px){
            display: block;
            width: 100%;
        }
        
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

    @media(max-width: 767px){
        font-size: 25px;
    }
`;

export default HomeStyles;