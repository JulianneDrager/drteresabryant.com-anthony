import React from "react";
// import Logo from "../images/logo-large.jpg";
import LearnMoreStyle from "./LearnMoreStyle.module.css";
import { Card, Button } from "react-bootstrap";

const RegisterButton = () => {
  const learnMoreCard = LearnMoreStyle.learnMoreCard;
  const subText = LearnMoreStyle.subText;
  const btn = LearnMoreStyle.btn;

  return (
    <>
      <div id="about">
        <Card.Body className={learnMoreCard}>
          <hr style={{ margin: "0", opacity: "0" }}></hr>
          <Button href="/" className={btn}>
            Read More
          </Button>
        </Card.Body>
      </div>
    </>
  );
};
export default RegisterButton;
