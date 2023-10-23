import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";
import Ten from "../../images/support-gallery/1.jpg"
import Eleven from "../../images/support-gallery/2.jpg"

const SupportGallery = () => {
//   const pStyle = TestimonyStyle.pStyle;
//   const btn = TestimonyStyle.btn;
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      animationHandler="fade"
      transitionTime="500"
      interval={2000}
    >
          
      <div>
        <Image src={Ten} />
      </div>
      <div>
        <Image src={Eleven} />
      </div>
    </Carousel>
  );
};
export default SupportGallery;
