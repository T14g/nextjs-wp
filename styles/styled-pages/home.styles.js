import styled from "styled-components";

const HomeStyles = styled.div`
  .col-card-bg {
    background-image: url("/images/playing-cards.jpg");
    background-repeat: no-repeat;
    background-position: center;
    height: 700px;
    width: 50%;
  }

  .youtube-player {
    margin-top : 16px;
  }
`;

export const Section = styled.div`
  padding: 100px 15px;

  &.section-with-bg1 {
    background-color: #F9F9F9;
    background-image: url(./images/bg-section-1.jpg);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div``;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MediumTitle = styled.h2`
  margin: 0;
  font-family: "Yellowtail", cursive;
  font-size: 68px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 140px;
    height: 10px;
    background: #fed604;
    bottom: -2px;
    left: 0px;
    border-radius: 4px;
  }
`;

export const BigTitle = styled.h1`
  margin: 0;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 900;
  line-height: 1;
  font-size: 100px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-size: 24px;
  line-height: 1.2;
  max-width: 469px;
  font-weight: 500;
  color: #000;
  font-family: "Barlow Condensed", sans-serif;
`;

export const SectionHero = styled.div`
  min-height: 400px;

  @media (max-width: 400px) {
    min-height: 250px;
  }

  .typeWritterStyles {
    margin-top: 200px;
    width: 50%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 767px) {
      width: 400px;
    }

    @media (max-width: 400px) {
      display: block;
      width: 100%;
    }
  }
`;

export const SectionMessage = styled.div`
  padding: 15px;
  background: ${(props) => (props.bg ? props.bg : "none")};
`;

export const Message = styled.div`
  text-align: center;
  font-size: 45px;
  color: ${(props) => (props.color ? props.color : "#000")};
  text-transform: uppercase;
  font-weight: 600;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

export const BigText = styled.p`
  margin: 0;
  color: #000;
  font-weight: 900;
  line-height: 1.2;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 40px;
  margin-top: 20px;
  text-transform: capitalize;
  text-align: center;
`;

export const SpecialText = styled.span`
  color : #E90C1E;
`;

export default HomeStyles;
