import React, { useEffect, useState } from "react";
import BannerSliderStyles, { SlidesBox } from "./banner-slider.styles";

const slidesMock = [
  { id: 1, background: "green" },
  {
    id: 2,
    background: "red",
  },
  {
    id: 3,
    background: "blue",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(current < slidesMock.length -1) {
        setCurrent(current + 1);
      }else{
        setCurrent(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <BannerSliderStyles>
        <SlidesBox current={current}>
          {slidesMock.map((slide) => (
            <div
              className="slide"
              style={{ background: slide.background }}
            ></div>
          ))}
        </SlidesBox>
      </BannerSliderStyles>
      <div>
        {current > 0 && (
          <button onClick={() => setCurrent(current - 1)}>Previous</button>
        )}

        {current < slidesMock.length - 1 && (
          <button onClick={() => setCurrent(current + 1)}>Next</button>
        )}
      </div>
    </>
  );
};

export default BannerSlider;
