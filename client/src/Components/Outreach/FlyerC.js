import React from "react";
import { Card, Button } from "react-bootstrap";
import pastorC from "../../images/mobile-events/mock-flyer.png";
import OutreachStyle from "./OutreachStyle.module.css";

const FlyerC = () => {const cardWrapper = OutreachStyle.cardWrapper;
  const innerCardWrapper = OutreachStyle.innerCardWrapper;
  const cardBody = OutreachStyle.cardBody;
  const pastorAImg = OutreachStyle.pastorAImg;
  const subTextAA = OutreachStyle.subTextAA;
  const glass = OutreachStyle.glass;
  const btn = OutreachStyle.btn;
  const divider = OutreachStyle.divider;
  const divider2 = OutreachStyle.divider2;
  const blurEffect = OutreachStyle.blurEffect;

  const flyerCardSection1 = (
    <>
      <div className={subTextAA} style={{ padding: 0 }}>
        <div className={divider}></div>
        <div className={glass}>
          <div className={blurEffect}>
            <div style={{ padding: ".5rem" }}>
              Ut enimveniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
      <div className={divider2}></div>
    </>
  );

  const flyerSection1ButtonAndImg = (
    <>
      <Card.Img src={pastorC} className={pastorAImg}></Card.Img>
      <Button href="/3" className={btn}>
        REGISTER
      </Button>
    </>
  );

  return (
    <>
      <Card className={cardWrapper}>
        <Card className={innerCardWrapper}>
          <Card.Body className={cardBody}>
            {/* section one */}
            {flyerCardSection1}
            {flyerSection1ButtonAndImg}
          </Card.Body>
        </Card>
      </Card>
    </>
  );
};
export default FlyerC;
