import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";
import Zero from "../../images/mobile-about/groups/1-rev.jpg";
import ZeroAA from "../../images/mobile-about/groups/1aa.jpg";
import ZeroA from "../../images/mobile-about/groups/1a-rev.jpg";
import ZeroB from "../../images/mobile-about/groups/1b.jpg";
import ZeroC from "../../images/mobile-about/groups/1c.jpg";
import ZeroD from "../../images/mobile-about/groups/1d.jpg";
import One from "../../images/mobile-about/groups/2.jpg";
import Two from "../../images/mobile-about/groups/3.jpg";
import Three from "../../images/mobile-about/groups/4.jpg";
import ThreeA from "../../images/mobile-about/groups/4a.jpg";
import ThreeB from "../../images/mobile-about/groups/4b.jpg";
import Four from "../../images/mobile-about/groups/5.jpg";
import FourA from "../../images/mobile-about/groups/5a.jpg";
import Five from "../../images/mobile-about/groups/6.jpg";
import Six from "../../images/mobile-about/groups/7.jpg";
import Seven from "../../images/mobile-about/groups/8.jpg";
import Eight from "../../images/mobile-about/groups/9.jpg";
import Nine from "../../images/mobile-about/groups/10.jpg";
// import Ten from "../../images/mobile-about/groups/10.jpg";

const PoliticalGallery = () => {
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
        <Image src={Zero} />
      </div>
      <div>
        <Image src={ZeroAA} />
      </div>
      <div>
        <Image src={ZeroA} />
      </div>
      <div>
        <Image src={ZeroB} />
      </div>
      <div>
        <Image src={ZeroC} />
      </div>
      <div>
        <Image src={ZeroD} />
      </div>
      <div>
        <Image src={One} />
      </div>
      <div>
        <Image src={Two} />
      </div>
      <div>
        <Image src={Three} />
      </div>
      <div>
        <Image src={ThreeA} />
      </div>
      <div>
        <Image src={ThreeB} />
      </div>
      <div>
        <Image src={Four} />
      </div>
      <div>
        <Image src={FourA} />
      </div>
      <div>
        <Image src={Five} />
      </div>
      <div>
        <Image src={Six} />
      </div>
      <div>
        <Image src={Seven} />
      </div>
      <div>
        <Image src={Eight} />
      </div>
      <div>
        <Image src={Nine} />
      </div>
    </Carousel>
  );
};
export default PoliticalGallery;
