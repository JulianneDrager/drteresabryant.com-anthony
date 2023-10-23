import React from "react";
import { Card } from "react-bootstrap";
import ContactStyle from "../Community of Love/Contact/Contact.module.css";

const FooterScreen = () => {
  const footerScreen = ContactStyle.footerScreen;
  return (
    <>
        <Card.Text className={footerScreen}>
          © 2023 All Rights Reserved
          <a
            style={{ color: "#d8cccc", marginLeft: ".2rem" }}
            href="https://designinglory.com"
            target="_blank"
            rel="noreferrer"
          >
            DesigninGlory.com
          </a>
        </Card.Text>
    </>
  );
};
export default FooterScreen;
