import React from "react";
import Gallery from "./Gallery";
import ContactStyle from "../Contact/Contact.module.css";


const PasterSection = () => {
  const contactTitle = ContactStyle.contactTitle;
  const divider2 = ContactStyle.divider2;

  return (
    <>
      <div id="store">
        <h1 style={{color:"white"}} className={contactTitle}>Up Coming Events</h1>
        <div className={divider2}></div>
          <Gallery/>
      </div>
    </>
  );
};
export default PasterSection;
