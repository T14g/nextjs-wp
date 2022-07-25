import styled from "styled-components";

const BannerSliderStyles = styled.div`
  overflow: hidden;
  position: relative;

  .slide {
    width: 100%;
    height: 800px;
  }

  .nav-buttons {
    position: absolute;
    display: flex;
    top: 50%;
    width: 100%;
    justify-content: space-between;
  }
`;

export const SlidesBox = styled.div`
  position: relative;
  left: calc(${(props) => (props.current ? - props.current : 0)} * 100vw);
  width: calc(100vw * 3);
  display: flex;
`;

export default BannerSliderStyles;
