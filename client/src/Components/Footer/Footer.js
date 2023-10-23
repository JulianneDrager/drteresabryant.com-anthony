import React from "react";
import { Card } from "react-bootstrap";
import ContactStyle from "../Contact/Contact.module.css";

const Footer = () => {
  const footer = ContactStyle.footer;
  return (
    <>
        <Card.Text className={footer}>
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
export default Footer;
