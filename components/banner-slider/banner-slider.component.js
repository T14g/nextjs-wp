import React, { useEffect, useState } from "react";
import BannerSliderStyles, { SlidesBox } from "./banner-slider.styles";
import ArrowButton from "../arrow-button/arrow-button.component";

const slidesMock = [
  { id: 1, background: "banner1" },
  {
    id: 2,
    background: "banner2",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current < slidesMock.length - 1) {
        setCurrent(current + 1);
      } else {
        setCurrent(current - 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <BannerSliderStyles>
        <SlidesBox current={current}>
          {slidesMock.map((slide) => (
            <img src={`./images/${slide.background}.jpg`} />
          ))}
        </SlidesBox>
        <div className="nav-buttons">
          {current > 0 && (
            <ArrowButton
              onClick={() => setCurrent(current - 1)}
              direction="left"
            />
          )}

          {current < slidesMock.length - 1 && (
            <ArrowButton
              onClick={() => setCurrent(current + 1)}
              direction="right"
            />
          )}
        </div>
      </BannerSliderStyles>
    </>
  );
};

export default BannerSlider;
