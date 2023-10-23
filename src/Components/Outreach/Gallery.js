import React from "react";
import FlyerA from "./FlyerA";
import FlyerB from "./FlyerB";
// import FlyerC from "./FlyerC";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 769, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      showDots={false}
      arrows={true}
      responsive={responsive}
      infinite={true}
      autoPlay="true"
      autoPlaySpeed={2500}
    >
      <div><FlyerA/></div>
      <div><FlyerB/></div>
      {/* <div><FlyerC/></div> */}
    </Carousel>
  );
};
export default Gallery;
