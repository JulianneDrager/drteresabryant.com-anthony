import React from "react";
import AboutStyle from "./AboutStyle.module.css";
import LearnMoreButton from "./LearnMoreButton";
import GalleryAbout from "./GalleryAbout";
import NewsDayLogo from "../../images/mobile-about/newday-logo.png";
import { useMediaQuery } from "@mui/material";
import { Card, Image } from "react-bootstrap";

const About = () => {
  const cardWrapper = AboutStyle.cardWrapper;

  const innerCardWrapper = AboutStyle.innerCardWrapper;
  const cardBody = AboutStyle.cardBody;
  const quoteText = AboutStyle.quoteText;
  const aboutParagraph = AboutStyle.aboutParagraph;
  const title = AboutStyle.title;
  const subTitle = AboutStyle.subTitle;
  const mainWrapper = AboutStyle.mainWrapper;
  const titleImgWrapper = AboutStyle.titleImgWrapper;
  const textAndBtnWrapper = AboutStyle.textAndBtnWrapper;
  const hrStyle = AboutStyle.hrStyle;
  const spanStyle = AboutStyle.spanStyle;
  const divider = AboutStyle.divider;
  const backgroundImageAbout = AboutStyle.backgroundImageAbout;
  const matchSm = useMediaQuery("(max-width: 765px)");

  const aboutContent = (
    <>
      <div className={aboutParagraph}>
        <p className={subTitle}>Introducing</p>
        <p className={title}>Dr Teresa J. Bryant</p>
        <span>
          A woman of business, integrity, honor, honesty, and compassion and an
          exemplary Renaissance woman who possesses the heart and mind of God.
        </span>
        <hr className={hrStyle} />
        Dr Teresa Bryant is a woman that wears many hats, she is a business
        owner, counselor, author, paster, nurse, professional caregiver, career
        coach, public speaker, radio show host, conference organizer. community
        advocate, a wife, mother, and a grandmother.
        <p className={quoteText}>
          " I have always been a go-getter. If there is a problem, I want to fix
          it. If there is a need, I want to fill it, If there is a goal I want
          to reach it "
          <span
            style={{
              color:"#02315b",
            }}
          >
            - "Women in Business",{" "}
            <Image
              src={NewsDayLogo}
              alt="news day logo"
              style={{ width: "94px" }}
            />
            {" "}Special Feature
          </span>
        </p>
        Serving the under-served Teresa Bryant has touched thousands of lives
      </div>
    </>
  );

  const imageContent = (
    <div className={titleImgWrapper}>{<GalleryAbout />}</div>
  );

  const comingSoonContent = (
    <>
      <span className={spanStyle}>Coming Soon</span>
      <p className={title}>TeresaBryant.com</p>
      <Card.Text className={aboutParagraph}>
        <hr className={hrStyle} />
      </Card.Text>
    </>
  );

  return (
    <>
      <div id="about">
        <div className={divider}></div>
        <Card className={cardWrapper}>
          <Card className={innerCardWrapper}>
            <Card.Body className={cardBody}>
              {/* for mobile view port -----------*/}
              {matchSm && (
                <div>
                  <div className={mainWrapper}>
                    {/* {comingSoonContent} */}
                    {imageContent}
                    <br />
                    {aboutContent}

                    <div className={textAndBtnWrapper}>
                      {/* <LearnMoreButton /> */}
                    </div>
                  </div>
                </div>
              )}

              {/* for desktop view port ---------*/}
              {!matchSm && (
                <div>
                  <div className={backgroundImageAbout}>
                    <div className={mainWrapper}>
                      {imageContent}
                      <div className={textAndBtnWrapper}>
                        {aboutContent}
                        {/* {comingSoonContent} */}
                        {/* <LearnMoreButton /> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Card>
      </div>
    </>
  );
};
export default About;
