import styled from "styled-components";

const BannerSliderStyles = styled.div`
  overflow: hidden;

  .slide {
    width: 100%;
    height: 800px;
  }
`;

export const SlidesBox = styled.div`
  position: relative;
  left: calc(${(props) => (props.current ? - props.current : 0)} * 100vw);
  width: calc(100vw * 3);
  display: flex;
`;

export default BannerSliderStyles;
