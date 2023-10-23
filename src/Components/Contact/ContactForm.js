import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
// import { useRef } from "react";
import ContactStyle from "./Contact.module.css";

const ContactForm = () => {
  const contact = ContactStyle.contact;
  const optionsWrapper = ContactStyle.optionsWrapper;

  const [Choice1, setChoice1] = useState(false); //B>A.D conference
  console.log("choice 1", Choice1);
  const [Choice2, setChoice2] = useState(false); //Breast cancer survivor
  console.log("choice 2", Choice2);
  const [Choice3, setChoice3] = useState(false); //both
  console.log("choice 3", Choice3);
  const [Choice4, setChoice4] = useState(false); //none
  console.log("choice 4", Choice4);

  const [choice1Show, setChoice1Show] = useState(true);
  const [choice2Show, setChoice2Show] = useState(true);
  const [choice3Show, setChoice3Show] = useState(true);
  const [choice4Show, setChoice4Show] = useState(true);

  // functions to hide dropdown and show when only selected
  const [choiceSelection, setChoiceSelection] = useState(false);
  const onChangeChoice1 = (e) => {
    if (e.target.name === "bad-girls" && e.target.checked === true) {
      setChoiceSelection(true);
      setChoice2Show(false);
      setChoice3Show(false);
      setChoice4Show(false);
    } else setChoiceSelection(false);

    if (e.target.checked === false) {
      setChoice2Show(true);
      setChoice3Show(true);
      setChoice4Show(true);
    }
  };

  const onChangeChoice2 = (e) => {
    if (e.target.name === "cancer-survivor" && e.target.checked === true) {
      setChoiceSelection(true);
      setChoice1Show(false);
      setChoice3Show(false);
      setChoice4Show(false);
    } else setChoiceSelection(false);

    if (e.target.checked === false) {
      setChoice1Show(true);
      setChoice3Show(true);
      setChoice4Show(true);
    }
  };

  const onChangeChoice3 = (e) => {
    if (e.target.name === "both" && e.target.checked === true) {
      setChoiceSelection(true);
      setChoice1Show(false);
      setChoice2Show(false);
      setChoice4Show(false);
    } else setChoiceSelection(false);

    if (e.target.checked === false) {
      setChoice1Show(true);
      setChoice2Show(true);
      setChoice4Show(true);
    }
  };

  const onChangeChoice4 = (e) => {
    if (e.target.name === "none" && e.target.checked === true) {
      setChoiceSelection(true);
      setChoice1Show(false);
      setChoice2Show(false);
      setChoice3Show(false);
    } else setChoiceSelection(false);

    if (e.target.checked === false) {
      setChoice1Show(true);
      setChoice2Show(true);
      setChoice3Show(true);
    }
  };

  return (
    <>
      <div className={optionsWrapper}>
        {/* Selection Question ------------------------------------ */}
        <Card.Title className={contact}>
          Please select which event you want to be contacted about
        </Card.Title>

        {/* B.a.d Girls Conference ----------------------------------- */}
        {choice1Show && (
          <Form.Check
            style={{ color: "black", paddingLeft: "3rem" }}
            id="bad-girls"
            name="bad-girls"
            label="B.A.D Girls Conference"
            value={Choice1}
            required
            onChange={onChangeChoice1}
            onClick={() =>
              setChoice1(
                "I am interested in the B.A.D Girls conference, and I would like to know more."
              )
            }
          />
        )}

        {/* Breast Cancer Event ----------------------------------- */}
        {choice2Show && (
          <Form.Check
            style={{ color: "black", paddingLeft: "3rem" }}
            id="cancer-survivor"
            name="cancer-survivor"
            label="Breast Cancer Survivor Event"
            value={Choice2}
            required
            onChange={onChangeChoice2}
            onClick={() =>
              setChoice2(
                "I am interested in the Breast Cancer Survivor event, and I would like to know more."
              )
            }
          />
        )}

        {/* Both ----------------------------------- */}
        {choice3Show && (
          <Form.Check
            style={{ color: "black", paddingLeft: "3rem" }}
            id="both"
            name="both"
            label="Both events"
            value={Choice3}
            required
            onChange={onChangeChoice3}
            onClick={() =>
              setChoice3(
                "I have an interest in the both the Breast Cancer Survivor event and the B.A.D Girls conference"
              )
            }
          />
        )}

        {/* None ----------------------------------- */}
        {choice4Show && (
          <Form.Check
            style={{ color: "black", paddingLeft: "3rem" }}
            id="none"
            name="none"
            label="I am not interested in any events"
            value={Choice4}
            required
            onChange={onChangeChoice4}
            onClick={() =>
              setChoice4(
                "I am not interested in any events, I have a general inquire, please see my message below"
              )
            }
          />
        )}
      </div>
    </>
  );
};
export default ContactForm;
