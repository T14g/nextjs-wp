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

    .left-button {
      position: absolute;
      left: 10px;
    }

    .right-button {
      position: absolute;
      right: 10px;
    }
  }
`;

export const SlidesBox = styled.div`
  position: relative;
  left: calc(${(props) => (props.current ? -props.current : 0)} * 100vw);
  width: calc(100vw * 3);
  display: flex;
  transition: 0.3s;
`;

export default BannerSliderStyles;
