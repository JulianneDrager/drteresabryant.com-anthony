import React from "react";
import HeaderStyle from "./Header.module.css";
import { Col, Row, Image } from "react-bootstrap";
import HeaderPic from "../../images/mobile-header/mobile-header-image-rev.jpg";
import HeaderDesktopPic from "../../images/desktop-header/desktop-header-image-rev.jpg"
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const HeaderImage = HeaderStyle.HeaderImage;
  const matchSm = useMediaQuery("(max-width: 765px)");

  return (
    <>
      { matchSm && (
        <Row id="header">
          <Col>
            <Image src={HeaderPic} className={HeaderImage} />
          </Col>
        </Row>
      )}

      {!matchSm && (
        <Row id="header">
          <Col>
            <Image src={HeaderDesktopPic} className={HeaderImage} />
          </Col>
        </Row>
      )}
    </>
  );
};
export default Header;
