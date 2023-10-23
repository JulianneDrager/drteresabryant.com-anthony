import React from "react";
import { Card, Button } from "react-bootstrap";
import flyerA from "../../images/mobile-events/B.A.D.portrait.jpg";
import flyerALandscape from "../../images/mobile-events/B.A.D.landscape.jpg";
import OutreachStyle from "./OutreachStyle.module.css";
import { useMediaQuery } from "@mui/material";

const FlyerA = () => {
  const cardWrapper = OutreachStyle.cardWrapper;
  const innerCardWrapper = OutreachStyle.innerCardWrapper;
  const cardBody = OutreachStyle.cardBody;
  const pastorAImg = OutreachStyle.pastorAImg;
  const subTextAA = OutreachStyle.subTextAA;
  const glass = OutreachStyle.glass;
  const btn = OutreachStyle.btn;
  const divider = OutreachStyle.divider;
  const divider2 = OutreachStyle.divider2;
  const blurEffect = OutreachStyle.blurEffect;
  const matchesMin765 = useMediaQuery("(min-width:765px)")
  // const matchesMin1200 = useMediaQuery("(min-width:1200px)")

  const flyerSectionImg = (
    <>
     { !matchesMin765 && <Card.Img src={flyerA} className={pastorAImg}></Card.Img>}
     { matchesMin765 && <Card.Img src={flyerALandscape} className={pastorAImg}></Card.Img>}
    </>
  );

  const flyerCardSection = (
    <>
      <div className={subTextAA} style={{ padding: 0 }}>
        <div className={divider}></div>
        <div className={glass}>
          <div className={blurEffect}>
            <div style={{ padding: ".5rem" }}>
              <Button href="#bad-girls" className={btn}>
                REGISTER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Card className={cardWrapper}>
        <Card className={innerCardWrapper}>
          <Card.Body className={cardBody}>
            {/* section one */}

            {flyerSectionImg}
            {flyerCardSection}
          </Card.Body>
        </Card>
      </Card>
    </>
  );
};
export default FlyerA;
