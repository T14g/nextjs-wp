import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FullRow = styled.div`
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const Column = styled.div`
  padding: 0 15px;

  &.col-6{
    width: 50%;
  }
`;


export const TitleH1 = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export const TitleH2 = styled.h2`
  font-size: 40px;

  &.centered{
    text-align: center;
  }
`;

export const TextBlock = styled.p`
  font-size: 20px;

  &.centered{
    text-align: center;
  }

  @media(max-width: 1230px) {
    font-size: 18px;
  }
`;